<template>
  <form @submit.prevent="handleSubmit">
    <input type="email" placeholder="Email" required v-model="email">
    <input type="password" placeholder="Password" required v-model="password">
    <button type="submit">Login in</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity';
export default {
  setup() {
    const email = ref('');
    const password = ref('');

    const handleSubmit = function () {
      
    }

    return { email, password, handleSubmit }
  }
}
</script>

<style>

</style>