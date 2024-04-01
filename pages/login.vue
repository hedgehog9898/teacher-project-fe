<template>
  <VContainer fluid class="fill-height pa-0 login-page">
    <VRow no-gutters align="center" justify="center" class="fill-height">
      <VCol cols="12" md="6" lg="5" sm="6">
        <VRow no-gutters align="center" justify="center">
          <VCol cols="12" md="8">
            <h1>Sign In</h1>

            <VForm ref="loginForm" class="mt-6" @submit.prevent="submit">
              <div class="mt-1">
                <label class="label" for="email">Email</label>
                <EmailField v-model="email" />
              </div>
              <div class="mt-1">
                <label class="label" for="password">Password</label>
                <PasswordField v-model="password" />
              </div>
              <div class="mt-5">
                <VBtn
                  type="submit"
                  block
                  min-height="44"
                >
                  Sign In
                </VBtn>
              </div>
            </VForm>
            <p class="text-body-2 mt-10">
              <NuxtLink to="/reset-password" class="font-weight-bold text-primary">
                Forgot password?
              </NuxtLink>
            </p>
            <p class="text-body-2 mt-4">
              <span>Don't have an account?<NuxtLink to="/signup" class="font-weight-bold text-primary">Sign Up</NuxtLink></span>
            </p>
          </VCol>
        </VRow>
      </VCol>
      <VCol class="hidden-md-and-down fill-height login-page__right-column" md="6" lg="7">
        <div class="h-100 rounded-xl d-flex align-center justify-center">
          <div class="text-white text-center w-50 mx-auto">
            <h2 class="mb-4">
              Start your journey today
            </h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, inventore quia. Dolorum dolores ad ipsum voluptatum
              rem, hic placeat, odio, odit numquam quod veritatis accusantium
              assumenda! Sequi, provident in! Iure!
            </p>
          </div>
        </div>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script setup lang="ts">
import PasswordField from '~/components/common/PasswordField.vue';
import EmailField from '~/components/common/EmailField.vue';
import { useAuthStore } from '~/store/auth-store';

const authStore = useAuthStore();

const loginForm = ref();
const email = ref('');
const password = ref('');

async function submit() {
  const { valid } = await loginForm.value?.validate() ?? { valid: false };

  if ( valid ) {
    await authStore.login({ emailOrUsername: email.value, password: password.value });
  }
}
</script>

<style lang="scss">
.login-page {
  &__right-column {
    background:  linear-gradient(
        rgba(0, 0, 0, 0.3),
        rgba(0, 0, 0, 0.3)
    ), url('~/assets/images/login-background.jpg') no-repeat center center fixed !important;
    background-size: cover !important;
  }
}
</style>
