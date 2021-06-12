<template>
  <form @submit.prevent="handleSubmit">
    <input type="email" placeholder="Email" required v-model="email">
    <input type="password" placeholder="Password" required v-model="password">
    <div class="error">{{ error }}</div>
    <button type="submit">Login in</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity';
import useLogin from '../composables/useLogin.js';

export default {
  setup() {
    const email = ref('');
    const password = ref('');

    const { error, login } = useLogin();

    const handleSubmit = async function() {
      await login(email.value, password.value);

      if (!error.value) {

      }
    }

    return { email, password, handleSubmit, error }
  }
}
</script>

<style>

</style>