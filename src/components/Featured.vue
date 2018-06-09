<template>
  <div id="featured" class="container">
          <div class="row">
        <!--TODO: Add loading spinner-->

        <div v-for="(recipe, index) in recipes" :key="index" v-if="index == randomRecipe">

          <div class="card-body">
            <h1>If you wish to make
              <span class="featured">{{ recipe.name }} </span>from scratch, you must first create the universe.</h1>

            <button @click="refreshPage">- Karl Sayagain</button>
            <p>For a lesser challenge, you could start from here:
              <span style="color: red">
                <a target="_blank" v-bind:href="recipe.link">{{ recipe.link }}.</a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import firebase from '@/components/firebase-init';

export default {
  name: 'Featured',
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
      return Math.floor(Math.random() * 30);
      console.log('computing random...')
    }
  },
  methods: {
    refreshPage() {
      // TODO: Figure out less hacky way to re-render
      this.$router.go(0);
      this.$ga.event('Refresh Page', 'Button Click','Get New Recipe')
      console.log('refreshing page...')
    }
  }
}
  
</script>

<style scoped>
h1 {
  padding: 10% 10% 3% 10%;
}
.nav {
  position:absolute;
  top:2%;
  left: 2%
  }

.featured {
  color: coral;
}
.contribute {
  position:absolute;
  top:2%;
  right: 2%
}

.button-contribute {
  background-color: coral;
  color: white;
  border: coral;
}

.button-contribute:hover {
  background-color: rgb(253, 167, 136);
  background-color: rgb(253, 167, 136);
  border: coral,
}
</style>