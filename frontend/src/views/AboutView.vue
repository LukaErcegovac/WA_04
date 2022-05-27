<template>
  <div class="about container px-5">
    <div class="card-body">
      <h3 class="card-title"><b>Details</b></h3>
      <p class="card-text">
        <b>Id:</b> {{ Book.id }}<br />
        <b>Naziv:</b> {{ Book.naziv }}<br />
        <b>Isbn:</b>{{ Book.isbn }}<br />
        <b>Autori:</b> {{ Book.autori }}
      </p>
      <router-link to="/" class="d-grid gap-2 col-6 mx-auto px-5 w-10">
        <h4>
          <button
            type="button"
            class="btn-close mx-auto"
            aria-label="Close"
          ></button>
        </h4>
      </router-link>
    </div>
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
