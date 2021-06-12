<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" placeholder="Display name" required v-model="displayName">
    <input type="email" placeholder="Email" required v-model="email">
    <input type="password" placeholder="Password" required v-model="password">
    <button type="submit">Sign up</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity';
export default {
  setup() {
    const displayName = ref('');
    const email = ref('');
    const password = ref('');

    const handleSubmit = function () {
      
    }

    return { displayName, email, password, handleSubmit }
  }
}
</script>

<style>

</style>