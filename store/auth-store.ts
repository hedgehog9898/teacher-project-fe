import type { components } from "~/types/api-schema-types";
import { defineStore } from 'pinia';
import { useIFetch } from '~/composables/useIFetch';
import { useCookie } from '#imports';
import { FetchError } from 'ofetch';

// Open API Schemas
type UserInfo = components['schemas']['AuthResponseUserMapper'];
type AuthUserResponse = components['schemas']['AuthResponseMapper'];
type SighUpResponse = components['schemas']['MessageMapper'];
type SignInSchema = components['schemas']['SignInDto'];
type SignUpSchema = components['schemas']['SignUpDto'];


export const useAuthStore = defineStore('auth', () => {
  const user = ref<UserInfo|undefined>();
  const authError = ref<FetchError|null>();

  async function login ({ emailOrUsername, password }: SignInSchema) {
    const accessTokenCookie = useCookie('accessToken');
    const { data, error } = await useIFetch<AuthUserResponse>('/auth/sign-in',
      {
        method: 'POST',
        body: { emailOrUsername, password }
      });

    accessTokenCookie.value = data.value?.accessToken ?? null;
    user.value = data.value?.user;
    authError.value = error.value;
  }

  const signUpError = ref<string>();
  async function signUp ({ name, email, password, repeatedPassword }: SignUpSchema) {
    const { data, error } = await useIFetch<SighUpResponse>('/auth/sign-up',
      {
        method: 'POST',
        body: { name, email, password, repeatedPassword }
      });

    if ( error ) {
      signUpError.value = error.value?.data?.message ?? 'Something went wrong';
    }
  }

  return { user, authError, signUpError, login, signUp };
});