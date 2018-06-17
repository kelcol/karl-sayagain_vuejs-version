<template>
  <div id="featured" class="container">
          <div class="row">
        <!--TODO: Add loading spinner-->

        <div v-for="(recipe, index) in recipes" :key="index" v-if="index === randomRecipe">

          <div class="container">
            <h1>If you wish to make
              <span class="featured">{{ recipe.name }} </span>from scratch, you must first invent the universe.</h1>
              <p class="cite">- Karl Sayagain</p>             
            
            <strong>For a lesser challenge, you could start from here:
                <a target="_blank" v-bind:href="recipe.link">{{ recipe.link }}</a>.
            </strong>
          </div>

        </div>
      </div>
    </div>
</template>

<script>
import firebase from '@/common/firebase-init';

export default {
  name: 'Featured',
  firebase: {
    recipes: firebase.recipesRef
  },
  data () {
  return {
  }
  },
  computed: {
    randomRecipe: function() {
      return Math.floor(Math.random() * this.recipes.length);
    }
  },
  methods: {
  }
}
</script>
