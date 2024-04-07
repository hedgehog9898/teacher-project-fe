<script setup lang="ts">
import { ref, computed } from 'vue';
import { useFormRules } from '~/composables/useFormRules';

const { passwordLengthRule, passwordRegexRule, passwordTheSameRule } = useFormRules();

const props = defineProps({
  name: {
    type: String,
    default: 'password'
  },
  placeholder: {
    type: String,
    default: 'Enter your password'
  },
  comparePassword: {
    type: String,
    default: ''
  }
});

const password = ref('');
const showPassword = ref(false);
const passwordModel = computed({
  get () {
    return password.value;
  },
  set (passwordValue: string) {
    password.value = passwordValue;
  }
});
const passwordRules = computed(() => {
  const rules = [passwordLengthRule, passwordRegexRule];

  if ( props.comparePassword ) {
    return [...rules, passwordTheSameRule(password.value, props.comparePassword)];
  }

  return rules;
});

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};
</script>

<template>
  <VTextField
    v-model="passwordModel"
    :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
    :type="showPassword ? 'text' : 'password'"
    :name="name"
    :rules="passwordRules"
    :placeholder="placeholder"
    prepend-inner-icon="mdi-lock"
    @click:append-inner="togglePasswordVisibility"
  />
</template>