<template>
  <div id="home">

    <!--TODO: Move nav elements to own component-->
    <div class="u-full-width">
      <div class="u-pull-left nav">
        <router-link v-bind:to="{name: 'Home'}">
          <li class="button">Home</li>
        </router-link>
        <router-link v-bind:to="{name: 'About'}">
          <li class="button button-primary">About</li>
        </router-link>
      </div>
      <div class="u-pull-right contribute">
        <router-link v-bind:to="{name: 'Contribute1'}">
          <button class="button button-contribute" @click="goToContributeNav">Contribute!</button>
        </router-link>
      </div>
    </div>

    <featured></featured>

    <!--TODO: Make contribute link flashier -->
    <router-link class="nav-link" v-bind:to="{name: 'Contribute2'}">
      <button class="button-primary" @click="goToContribute">Contribute a Recipe</button>
    </router-link>

  </div>
</template>

<script>
import firebase from '@/components/firebase-init'
import contribute1 from '@/components/Contribute1'
import contribute2 from '@/components/Contribute2'
import about from '@/components/About'
import featured from '@/components/Featured'

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
  components: {
    featured,
  },
  methods: {
    refreshPage(e) {
      // TODO: Figure out less hacky way to re-render
      e.preventDefault();
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
  border: rgb(253, 167, 136);
}
</style>
