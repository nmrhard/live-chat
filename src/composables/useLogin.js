import { ref } from "vue"
import { projectAuth } from '../firebase/config.js';

const error = ref(null);

const login = async function() {
  error.value = null;

  try {
    const res = await projectAuth.signInWithEmailAndPassword(email, password);
    error.value = null;

    return res;
  } catch (err) {
    error.value = 'Incorect login creditials';
  }
}

const useLogin = function() {
  return { error, login}
}

export default useLogin;