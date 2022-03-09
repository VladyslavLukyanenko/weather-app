<template>
  <div class="flex items-center justify-center ">

    <a class="rounded-lg shadow-lg bg-white p-8 w-72 group hover:shadow-2xl">

      <p class="text-lg text-gray-800 font-semibold"> {{ this.name }} </p>
      <p class="text-gray-600 font-light mt-5"> Temperature {{ this.temperature }} </p>
      <p class="text-gray-600 font-light mt-5"> Wind {{ this.wind }} </p>
      <p class="text-gray-600 font-light mt-5"> Maximum Temperature {{ this.temp_max }} </p>
      <p class="text-gray-600 font-light mt-5"> Minimum Temperature {{ this.temp_min }} </p>
      <p class="text-gray-600 font-light mt-5"> Feels Like Temperature {{ this.temp_feels_like }} </p>
      <p class="text-gray-600 font-light mt-5"> Pressure {{ this.pressure }} </p>
      <p class="text-gray-600 font-light mt-5"> Visibility {{ this.visibility }} </p>
      <p class="text-gray-600 font-light mt-5"> Clouds {{ this.clouds }} </p>
    </a>
  </div>
</template>

<script>


export default {
  name: "WeatherCard",
  props: {
    name: {
      type: String,
      default: "",
      required: true
    },
    temperature: {
      type: Number,
      default: 0,
      required: true
    },
    wind: {
      type: Number,
      default: 0,
      required: true
    },
    temp_min: {
      type: Number,
      default: 0,
      required: true
    },
    temp_max: {
      type: Number,
      default: 0,
      required: true
    },
    temp_feels_like: {
      type: Number,
      default: 0,
      required: true
    },
    pressure: {
      type: Number,
      default: 0,
      required: true
    },
    visibility: {
      type: Number,
      default: 0,
      required: true
    },
    clouds: {
      type: Number,
      default: 0,
      required: true
    },
    weather: {
      type: String,
      default: "",
      required: true
    },
    weather_description: {
      type: String,
      default: "",
      required: true
    },
  }
}
</script>

<style scoped>

</style>