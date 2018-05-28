<!--TODO: Send form data to email (or database?) -->
<!-- TODO: Adjust button alignment-->
<template>
  <div id="contribute" class="container">
    <section>
      <h1>Contributing is easy. Just fill out the form below :)</h1>
      <!-- The above form looks like this -->
       <form id="form" method="post" v-on:submit.prevent="handleSubmit">
        <div class="row">
          <div class="six columns">
            <label class="label" for="name">Recipe Name</label>
            <input class="u-full-width" v-model="recipe.name" placeholder="Pineapple Upside-down Cake" id="exampleTextInput" type="text">
          </div>
          <div class="six columns">
            <label class="label" for="link">Recipe URL</label>
            <input class="u-full-width" v-model="recipe.link" placeholder="https://www.marthastewart.com/343591/pineapple-upside-down-cake" id="exampleUrlInput"
              type="url">
          </div>
        </div>
        <input class="button-primary" value="Submit" type="submit">
      </form>
      <router-link class="nav-link" v-bind:to="{name: 'Home'}">
        <button class="button">Back to Home</button>
      </router-link>
    </section>
  </div>
</template>


<script>
import axios from 'axios';

export default {
  data() {
    return {
      recipe: {
        name: '',
        link: ''
      }
    }
  },
  methods: {
    handleSubmit() {    

}
},
}

</script>

<style scoped>
h1 {
  padding: 10%;
}

h2 {
  padding: 0px;
  margin: 0;
}



</style>