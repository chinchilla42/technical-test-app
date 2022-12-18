import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default () => new Vuex.Store({
    state: () => ({
        listOfItems: [
            {
                pageName: "Maliki",
                slug: "maliki"
            },
            {
                pageName: "Thinkerview",
                slug: "thinkerview"
            },
            {
                pageName: "Yatuu",
                slug: "yatuu"
            },
            {
                pageName: "François Theurel",
                slug: "francois-theurel"
            },
        ]

    }),
  getters: {
        getNumberOfItems(state){
            return state.listOfItems.length
        }
  },
  mutations: {
    ADD_ITEM(state, payload){
        state.listOfItems = state.listOfItems.concat(payload.data);
    }
  },
  actions: {
    addNewItem({ commit }, payload){
        commit("ADD_ITEM", payload);
    }
  },
//   modules: {
//   }
})

export const strict = false