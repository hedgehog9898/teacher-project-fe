import type { UseFetchOptions } from '#app';
import { defu } from 'defu';

export async function useIFetch<T>(
  url: string,
  options: UseFetchOptions<T> = {}
) {
  const accessTokenCookie = useCookie('accessToken');
  const config = useRuntimeConfig();

  const defaults: UseFetchOptions<T> = {
    baseURL: config.public.apiHost,
    key: url,
    headers: accessTokenCookie.value
      ? { Authorization: `Bearer ${accessTokenCookie.value}` }
      : {},
    onResponse: async ({ response, options }) => {
      if (response.status === 401) {
        try {
          const newToken = await refreshToken();
          accessTokenCookie.value = newToken;

          options.headers = { Authorization: `Bearer ${newToken}` };
          useFetch(url, options as UseFetchOptions<T>);
        } catch (error) {
          console.error('Token refresh failed:', error);
        }
      }
    },
  };

  const params = defu(options, defaults);

  return useFetch(url, params);
}

async function refreshToken() {
  const refreshTokenCookie = useCookie('refreshToken');
  const config = useRuntimeConfig();

  const { data, status } = await useFetch<{ access: string }>(
    `${config.public.apiHost}/api/auth/refresh-access/`,
    {
      method: 'POST',
      body: { refresh: refreshTokenCookie.value },
    }
  );

  if (status.value === 'success') {
    return data.value?.access;
  } else {
    throw new Error('Token refresh failed');
  }
}