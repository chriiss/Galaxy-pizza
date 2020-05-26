import { firebaseAuth } from "../Firebase";

const state = {
  currentUser: null,
};

// getters just Admin.vue use mapGetters
const getters = {
  currentUser: (state) => state.currentUser,
};

//ternaire mutation with Login.vue
const mutations = {
  userStatus: (state, user) => {
    user === null
      ? (state.currentUser = null)
      : (state.currentUser = user.email);
  },
};

const actions = {
  /* Sign in actions account Login.vue */
  signIn: async ({ commit }, user) => {
    try {
      const userData = await firebaseAuth.signInWithEmailAndPassword(
        user.email,
        user.password
      );
      commit("userStatus", userData.user);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode === "auth/wrong-password") {
        alert("wrong password");
      } else {
        alert(errorMessage);
      }
    }
  },
  /* Sign Out actions account Admin.vue */
  signOut: async ({ commit }) => {
    try {
      await firebaseAuth.signOut();
    } catch (error) {
      alert(`error signing out, ${error}`);
    }
    commit("userStatus", null);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
