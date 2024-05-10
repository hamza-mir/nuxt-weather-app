import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		count: 0, // Our initial state with a count property
	},
	mutations: {
		increment(state) {
			state.count++;
		},
	},
	actions: {
		incrementAsync({ commit }) {
			// Simulate an asynchronous operation
			setTimeout(() => {
				commit("increment");
			}, 1000);
		},
	},
	getters: {
		getCount(state) {
			return state.count;
		},
	},
});

export default store;
