import { ref } from "vue"
import { projectAuth } from '../firebase/config.js';

const error = ref(null);

const signup = async function(email, password, displayName) {
  error.value = null;

  try {
    const res = await projectAuth.createUserWithEmailAndPassword(email, password);
    if(!res) {
      throw new Error('Could not complete the signup')
    }

    await res.user.updateProfile({ displayName });
    error.value = null;

    return res;
  } catch(err) {
    error.value = err.message;
  }
}

const useSignup = function() {
  return { error, signup }
}

export default useSignup;