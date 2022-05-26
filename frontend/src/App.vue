<template>
  <div id="app"></div>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      Books: [],
    };
  },
  mounted: {
    async getData() {
      let data = await fetch("http://localhost:3000/knjige");
      let response = await data.json();
    },
  },
  components: {},
};
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
</style>
