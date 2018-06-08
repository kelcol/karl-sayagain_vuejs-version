<template>
  <div id="home">

    <!--TODO: Move nav elements to own component-->
    <div class="u-full-width">


      <div class="u-pull-left nav">
      <router-link v-bind:to="{name: 'Home'}">
        <li class="button">Home</li>
      </router-link>
      <router-link v-bind:to="{name: 'About'}" >
        <li class="button button-primary">About</li>
      </router-link>
    </div>

    <div class="u-pull-right contribute">
       <router-link class="button button-contribute" v-bind:to="{name: 'Contribute'}" @click="goToContributeNav">Contribute!</router-link>
    </div>

    </div>


    
    <div class="container recipe">

      <div class="row">
        <!--TODO: Add loading spinner-->

        <div v-for="(recipe, index) in recipes" :key="index" v-if="index == randomRecipe">

          <div class="card-body">
            <h1>If you wish to make
              <span class="featured">{{ recipe.name }} </span>from scratch, you must first create the universe.</h1>

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
      <button class="button-primary" @click="goToContribute()">Contribute a Recipe</button>
    </router-link>
  </div>

  <!--TODO: Add spinning loader -->

</template>


<script>
import firebase from '@/components/firebase-init';
import contribute from '@/components/Contribute'
import about from '@/components/About'

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
    },
    goToContributeNav() {
      this.$ga.event('Contribute Form', 'Button Click','Used Nav Contribute Button');
      console.log('going to form from nav...')
    },
    goToContribute() {
      this.$ga.event('Contribute Form', 'Button Click','Used Main Contribute Button');
      console.log('going to form...')
    },
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
