import { ref } from "vue"
import { projectAuth } from '../firebase/config.js';

const error = ref(null);

const logout = async function() {
  error.value = null;

  try {
    await projectAuth.signOut();
  } catch (err) {
    error.value = err.message;
  }
}

const useLogout = function() {
  return { error, logout }
}

export default useLogout;