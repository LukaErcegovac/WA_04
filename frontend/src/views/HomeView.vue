<template>
  <div class="home">
    <li v-for="book in Books" :key="book.id">
      <router-link :to="{ name: 'about', params: { bookId: book.id } }">
        {{ book.id }} {{ book.naziv }}
      </router-link>
    </li>
  </div>
</template>

<script>
export default {
  name: "HomeView",

  components: {},

  data() {
    return {
      Books: [],
    };
  },

  async mounted() {
    let data = await fetch("http://localhost:3000/knjige");
    let response = await data.json();
    console.log(response);

    this.Books = response;
  },
};
</script>
