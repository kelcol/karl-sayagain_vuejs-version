<!--TODO: Send form data to email (or database?) -->
<!-- TODO: Adjust button alignment-->
<template>
  <div id="contribute" class="container">
    <section>
      <h1>Contributing is easy. Just fill out the form below :)</h1>
      <!-- The above form looks like this -->
      <form>
        <div class="row">
          <div class="six columns">
            <label for="exampleEmailInput">Recipe Name</label>
            <input class="u-full-width" placeholder="Pineapple Upside-down Cake" id="exampleTextInput" type="text">
          </div>
          <div class="six columns">
            <label for="exampleRecipientInput">Recipe URL</label>
            <input class="u-full-width" placeholder="https://www.marthastewart.com/343591/pineapple-upside-down-cake" id="exampleUrlInput"
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
export default {
  name: 'Contribute'
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