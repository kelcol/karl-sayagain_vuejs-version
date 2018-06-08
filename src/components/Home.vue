<template>
  <div id="home">
    <div class="container recipe">
      <div class="row">

        <div v-for="(recipe, index) in recipes" :key="index" v-if="index == randomRecipe" >
          
          <div class="card-body">
            <!-- <h3>{{index}}</h3> -->
            <h1>If you wish to make
              <span style="color: red">{{ recipe.name }} </span>from scratch, you must first create the universe.</h1>

            <button @click="refreshPage()">- Karl Sayagain</button>
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
  
  <!--TODO: Add spinning loader -->

</template>

<script>
import firebase from '@/components/firebase-init';
import contribute from '@/components/Contribute'

export default {
  name: 'Home',
  firebase: {
    recipes: firebase.recipesRef
  },
  data () {
  return {
    selected: null,
  }
  },
  computed: {
    randomRecipe: function() {
      // TODO: Figure out less hacky and more accurate way to show random
      return Math.floor(Math.random() * 30)
    }
  },
  methods: {
    refreshPage() {
      // TODO: Figure out less hacky way to re-render the index number
      this.$router.go(0);
      this.$ga.event('Refresh Page', 'Button Click','Get New Recipe')
    }
  }
}
</script>

<style scoped>
h1 {
  padding: 10% 10% 3% 10%;
}
</style>
