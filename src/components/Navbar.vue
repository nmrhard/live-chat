<template>
  <nav v-if="user">
    <div>
      <p>Hey there {{ user.displayName }}</p>
      <p class="email">Currently logged in as {{ user.email }}</p>
    </div>
    <button type="button" @click="handleClick">Logout</button>
  </nav>
</template>

<script>
import useLogout from '../composables/useLogout.js';
import getUser from '../composables/getUser.js';

export default {
  setup() {
    const { error, logout } = useLogout();
    const { user } = getUser();

    const handleClick = async function() {
      await logout();
      if(!error.value) {
        console.log('user logout');
      }
    }

    return { handleClick, user }
  }
}
</script>

<style>

</style>