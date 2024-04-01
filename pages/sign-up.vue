<script setup lang="ts">
import PasswordField from '~/components/common/PasswordField.vue';
import EmailField from '~/components/common/EmailField.vue';

import { useAuthStore } from '~/store/auth-store';
import { useFormRules } from '~/composables/useFormRules';

const { requiredRule } = useFormRules();
const authStore = useAuthStore();

const signUpForm = ref();
const name = ref('');
const email = ref('');
const password = ref('');
const repeatedPassword = ref('');

async function submit() {
  const { valid } = await signUpForm.value?.validate() ?? { valid: false };

  if ( valid ) {
    await authStore.signUp({
      name: name.value,
      email: email.value,
      password: password.value,
      repeatedPassword: repeatedPassword.value
    });
  }
}
</script>

<template>
  <VContainer fluid class="fill-height sign-up-page">
    <VRow align="center" justify="center">
      <VCol cols="8">
        <h1>Sign Up</h1>

        <VForm ref="signUpForm" class="mt-6" @submit.prevent="submit">
          <div class="mt-1">
            <label class="label" for="email">Your name</label>
            <VTextField
              v-model="name"
              prepend-inner-icon="mdi-account"
              placeholder="Alex"
              :rules="[requiredRule]"
            />
          </div>
          <div class="mt-1">
            <label class="label" for="email">Email</label>
            <EmailField v-model="email" />
          </div>
          <div class="mt-1">
            <label class="label" for="password">Password</label>
            <PasswordField v-model="password" />
          </div>
          <div class="mt-1">
            <label class="label" for="password">Password again</label>
            <PasswordField
              v-model="repeatedPassword"
              :compare-password="password"
              name="repeated-password"
              placeholder="Repeat your password"
            />
          </div>
          <div class="mt-5">
            <VBtn
              type="submit"
              block
              min-height="44"
            >
              Sign Up
            </VBtn>
          </div>
        </VForm>
      </VCol>
    </VRow>
  </VContainer>
</template>

<style scoped lang="scss">

</style>