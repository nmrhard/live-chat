<template>
  <nav>
    <div>
      <p>Hey there ... display name</p>
      <p class="email">Currently logged in as ... email</p>
    </div>
    <button type="button" @click="handleClick">Logout</button>
  </nav>
</template>

<script>
import useLogout from '../composables/useLogout.js';

export default {
  setup() {
    const { error, logout } = useLogout();

    const handleClick = async function() {
      await logout();
      if(!error.value) {
        console.log('user logout');
      }
    }

    return { handleClick }
  }
}
</script>

<style>

</style>