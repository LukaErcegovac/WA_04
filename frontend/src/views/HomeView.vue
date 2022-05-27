<template>
  <div class="home container">
    <router-link
      style="display: inline-block; text-decoration: none"
      class="text-dark"
      :to="{ name: 'about', params: { Id: book.id } }"
      v-for="book in Books"
      :key="book.id"
    >
      <div class="card">
        <div class="card-body">
          <b>Id: </b> {{ book.id }} <br />
          <b>Naziv: </b> {{ book.naziv }} <br />
          <b>Isnb: </b> {{ book.isbn }}
        </div>
      </div>
    </router-link>
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
