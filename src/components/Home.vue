<template>
  <div id="home">
    <div class="container recipe">
      <div class="row">
        <!-- TODO: Figure out how to display just one random recipe-->

        <div v-for="recipe in recipes" :key="recipe.name">
          <div class="card-body">
            <h1>If you wish to make
              <span style="color: red">{{ recipe.name }} </span>from scratch, you must first create the universe.</h1>
            <button @click="showRandom()">- Karl Sayagain</button>
              <p>For a lesser challenge, you could start from here:
                <span style="color: red">
                  <a target="_blank" v-bind:href="recipe.link">{{ recipe.link }}.</a>
                </span>
              </p>
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
import firebase from '@/components/firebase-init';

export default {
  name: 'Home',
  firebase: {
    recipes: firebase.recipesRef
  },
  data () {
  return {
    selected: null
  }
  },
  methods: {
    shuffle() {
      // this.recipes = _.shuffle(this.recipes)
    }
  }
}
</script>

<style scoped>


</style>
