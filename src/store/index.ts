import { createStore } from "vuex";
const store = createStore({
  state: {
    count: 0,
  },
  mutations: {
    addCount(state) {
      state.count++;
    },
  },
});

export default store;
