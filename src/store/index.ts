import { createStore } from "vuex";

interface StoreProps {
  isLogin: boolean;
  token: string;
  userInfo: object;
}
const store = createStore<StoreProps>({
  state: {
    isLogin: false,
    token: "",
    userInfo: {},
  },
  mutations: {
    setLogin(state, value) {
      state.isLogin = value;
    },
    setToken(state, value) {
      state.token = value;
    },
    setUserInfo(state, obj) {
      state.userInfo = obj;
    },
  },
});

export default store;
