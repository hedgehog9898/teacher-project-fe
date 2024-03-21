import type { components } from "~/types/api-schema-types";
import { defineStore } from 'pinia';
import { useIFetch } from '~/composables/useIFetch';
import { useCookie } from '#imports';

// Open API Schemas
type UserInfo = components['schemas']['AuthResponseUserMapper'];
type AuthUserResponse = components['schemas']['AuthResponseMapper'];


export const useAuthStore = defineStore('auth', () => {
  const user = ref<UserInfo|undefined>();

  async function login (username: string, password: string) {
    const accessTokenCookie = useCookie('accessToken');
    const { data, error } = await useIFetch<AuthUserResponse>('/auth/sign-in',
      {
        method: 'POST',
        body: { emailOrUsername: username, password }
      });

    if ( error ) {
      return error;
    }

    accessTokenCookie.value = data.value?.accessToken ?? null;
    user.value = data.value?.user;

    console.log('here1', accessTokenCookie.value, 'user', user.value);
  }

  return { user, login };
});