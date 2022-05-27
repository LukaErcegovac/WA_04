<template>
  <div class="about container px-5">
    <p>Id: {{ Book.id }}</p>
    <p>Naziv: {{ Book.naziv }}</p>
    <p>Isbn: {{ Book.isbn }}</p>
    <p>Autori: {{ Book.autori }}</p>
    <router-link to="/" class="d-grid gap-2 col-6 mx-auto px-5">
      <button
        type="button"
        class="btn-close mx-auto"
        aria-label="Close"
      ></button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "AboutView",
  props: ["Id"],

  data() {
    return {
      Book: {},
    };
  },

  async mounted() {
    const data = await fetch(`http://localhost:3000/knjige/${this.Id}`);
    const response = await data.json();
    this.Book = response;
  },
};
</script>
