<template>
  <div class="search-box">
    <input
        v-model="query"
        @keypress="fetchWeather"
        type="text"
        class="search-bar border-2 rounded-full p-1 text-center"
        placeholder="Search location.."/>
  </div>
  <div v-if="info != null">
    <WeatherCard
        :name="this.info.name"
        :temperature="this.info.main.temp"
        :temp_min="this.info.main.temp_min"
        :temp_max="this.info.main.temp_max"
        :temp_feels_like="this.info.main.feels_like"
        :pressure="this.info.main.pressure"
        :wind="this.info.wind.speed"
        :visibility="this.info.visibility"
        :clouds="this.info.clouds.all"
        :weather="this.info.weather[0].main"
        :weather_description="this.info.weather[0].description"
    >
    </WeatherCard>
  </div>
  <div v-if="getQueries.length > 0">
    <div class="flex flex-col">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 pt-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Query
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Data
                </th>
              </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
              <!--  eslint-disable-next-line-->
              <tr v-for="query in getQueries">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900">
                        {{ query.query }}
                      </div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{{ query.info }}</div>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "/src/assets/index.css"
import axios from "axios";
import {ADD_QUERIES_MUTATION} from "@/mutation-types";
import WeatherCard from "@/components/WeatherCard";

const apiKey = "f8d926023266235b991f22f0fd51f7b8";

export default {
  name: "WeatherComponent",
  components: {WeatherCard},
  data() {
    return {
      info: null,
      query: ""
    }
  },
  computed: {
    getQueries() {
      return this.$store.state.queries
    }
  },
  methods: {
    fetchWeather(e) {
      if (e.key === "Enter") {
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?q=${this.query}&appid=${apiKey}&units=metric`)
            .then(response => (this.info = response.data))
            .then(this.addQuery)
      }
    },
    addQuery() {
      this.$store.commit(ADD_QUERIES_MUTATION, {query: this.query, info: this.info})
    }
  }
}
</script>

<style scoped>

</style>