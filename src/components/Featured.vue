<template>
  <div id="featured">
    <div class="container recipe">
      <div class="row">
        <!-- TODO: Figure out how to display just one random recipe-->
        <div v-for="recipe in recipes" :key="recipe.name">
          <h1>If you wish to create
            <span style="color: red">{{ recipe.name }} </span>from scratch, you must first create the universe.</h1>
          <button>- Karl Sayagain</button>
          <div class="row">
            <p>For a lesser challenge, you could start from here:
              <span style="color: red">{{ recipe.url }}</span>.</p>
          </div>
        </div>
      </div>
    </div>
    <!--TODO: Make contribute link flashier -->
    <router-link class="nav-link" v-bind:to="{name: 'Contribute'}">
      <button class="button-primary">Contribute a Recipe</button>
    </router-link>
  </div>
</template>

<script>
import recipes from '../recipes.js'

  export default {
  name: 'Featured',
  data () {
    return recipes
  },
  components: {
  },  
}  
</script>

