<template>
  <PrimeCalendar />
</template>

<script setup lang="ts">
import { useAuthStore } from '~/store/auth-store';

const authStore = useAuthStore();

onMounted( async () => {
  await authStore.login('krokodainer9090@gmail.com', 'Zamps123456');
});
</script>
