<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" placeholder="Display name" required v-model="displayName">
    <input type="email" placeholder="Email" required v-model="email">
    <input type="password" placeholder="Password" required v-model="password">
    <div class="error">{{ error }}</div>
    <button type="submit">Sign up</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity';
import useSignup from '../composables/useSignup.js';

export default {
  setup(props, context) {
    const { error, signup } = useSignup();

    const displayName = ref('');
    const email = ref('');
    const password = ref('');

    const handleSubmit = async function () {
      await signup(email.value, password.value, displayName.value);

      if (!error.value) {
        context.emit('signup');
      }
    }

    return { displayName, email, password, handleSubmit, error }
  }
}
</script>

<style>

</style>