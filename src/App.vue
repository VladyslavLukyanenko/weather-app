<template>
  <WeatherComponent/>
</template>

<script>
import WeatherComponent from "@/components/WeatherComponent";

export default {
  name: 'App',
  components: {
    WeatherComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  background-color: #0D192C;
  font-family: 'Outfit', sans-serif;
}
</style>
