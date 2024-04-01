<script setup lang="ts">
import { useAuthStore } from '~/store/auth-store';

const route = useRoute();
const { confirmEmail } = useAuthStore();
const { user, confirmEmailError } = storeToRefs(useAuthStore());

onMounted( async () => {
  console.log('route.query', route.query.token);
  if ( route.query.token ) {
    await confirmEmail({ confirmationToken: String(route.query.token) });
  }
});

</script>

<template>
  <div>
    <p v-if="user">
      Hi {{ user.name }}
    </p>
    <p v-if="confirmEmailError">
      {{ confirmEmailError }}
    </p>
  </div>
</template>

<style scoped lang="scss">

</style>