import type { components } from "~/types/api-schema-types";
import { defineStore } from 'pinia';
import { useIFetch } from '~/composables/useIFetch';
import { useCookie } from '#imports';
import { FetchError } from 'ofetch';

// Open API Schemas
type UserInfo = components['schemas']['AuthResponseUserMapper'];
type AuthUserResponse = components['schemas']['AuthResponseMapper'];


export const useAuthStore = defineStore('auth', () => {
  const user = ref<UserInfo|undefined>();
  const authError = ref<FetchError|null>();

  async function login (username: string, password: string) {
    const accessTokenCookie = useCookie('accessToken');
    const { data, error } = await useIFetch<AuthUserResponse>('/auth/sign-in',
      {
        method: 'POST',
        body: { emailOrUsername: username, password }
      });

    accessTokenCookie.value = data.value?.accessToken ?? null;
    user.value = data.value?.user;
    authError.value = error.value;
  }

  return { user, authError, login };
});