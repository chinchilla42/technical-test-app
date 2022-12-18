import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default () => new Vuex.Store({
    state: () => ({
        numberOfPages: 0,
        
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
  getters: () => ({
        getList(state){
            return `${state.numberOfPages}`
        }
  }),
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {
//   }
})

export const strict = false