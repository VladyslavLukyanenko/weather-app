import {createApp} from 'vue'
import App from './App.vue'
import {ADD_QUERIES_MUTATION} from "@/mutation-types";
import {createStore} from "vuex";
import Unicon from 'vue-unicons'
import { uniCelsius, uniClouds, uniCloud, uniThunderstorm, uniCloudShowersHeavy, uniNA, uniWindy, uniCloudSun } from 'vue-unicons/dist/icons'

Unicon.add([uniCelsius, uniClouds, uniCloud, uniThunderstorm, uniCloudShowersHeavy, uniNA, uniWindy, uniCloudSun])


const store = createStore({
    state: {
        queries: []
    },
    getters: {
        getQueries: state => {
            return state.queries
        }
    },
    mutations: {
        [ADD_QUERIES_MUTATION] (state, payload) {
            state.queries.push(payload)
        }
    }
})

createApp(App).use(store).use(Unicon).mount("#app")
