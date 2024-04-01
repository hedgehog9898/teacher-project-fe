<script setup lang="ts">
import { useFormRules } from '~/composables/useFormRules';
import { computed, ref } from 'vue';

const { requiredRule, emailRule } = useFormRules();

const email = ref('');
const emailModel = computed({
  get () {
    return email.value;
  },
  set (emailValue: string) {
    email.value = emailValue;
  }
});

defineProps({
  name: {
    type: String,
    default: 'email'
  }
});
</script>

<template>
  <VTextField
    id="email"
    v-model="emailModel"
    :rules="[requiredRule, emailRule]"
    placeholder="test@mail.de"
    prepend-inner-icon="mdi-email"
    :name="name"
    type="email"
  />
</template>

<style scoped lang="scss">

</style>