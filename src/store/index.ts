import { createStore } from "vuex";

interface StoreProps {
  isLogin: boolean;
  token: string;
  userInfo: object;
  loading: boolean;
}
const store = createStore<StoreProps>({
  state: {
    isLogin: false,
    token: "",
    userInfo: {},
    loading: false,
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
    setLoading(state, value) {
      state.loading = value;
    },
  },
});

export default store;
