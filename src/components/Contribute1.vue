<template>
  <div id="contribute1">

    <!--TODO: Move nav elements to own component-->
    <div class="u-pull-left nav">
      <router-link v-bind:to="{name: 'Home'}">
        <li class="button button-primary">Home</li>
      </router-link>
      <router-link v-bind:to="{name: 'About'}">
        <li class="button button-primary">About</li>
      </router-link>
    </div>

    <!--TODO: Add form validation!-->
    <!--TODO: Add error and success messaging!-->
    <section class="container">
      <h1>Contributing is easy. Just fill out the form below :)</h1>
      <!-- The above form looks like this -->

      <div v-show="showForm">
      <form id="form" method="post" v-on:submit.prevent="validateForm">
        <div class="row">
          <div class="six columns">
            <label class="label" label-for="name">Recipe Name</label>
            <input class="u-full-width" v-model="newRecipe.name" placeholder="Pineapple Upside-down Cake" id="exampleTextInput" type="text">
          </div>
          <div class="six columns">
            <label class="label" label-for="link">Recipe URL</label>
            <input class="u-full-width" v-model="newRecipe.link" placeholder="https://www.marthastewart.com/343591/pineapple-upside-down-cake"
              id="exampleUrlInput">
          </div>
        </div>
        <input class="button-primary">
        <!--  value="Submit" type="submit" v-on:submit.prevent="onSubmit" -->
      </form>
      </div>

      <router-link class="nav-link" v-bind:to="{name: 'Home'}">
        <button class="button" value="submit">Back to Home</button>
      </router-link>

    

    <div class="alert alert-dismissible alert-success" v-show="showSuccess">
      <button type="button" class="close" data-dismiss="alert">&times;</button>
      <p>
        <strong>Thank you for signing up!</strong> Please take our new member survey.
        <br>
        <br>
        <router-link to="Survey" class="btn btn-warning" type="button">Click here</router-link>
      </p>
    </div>

    <div v-show="showError">
      <button type="button" class="close" data-dismiss="alert">&times;</button>
      <strong>Dag! You broke it! Try again?</strong>
      <a href="#" class="alert-link">Change a few things up</a> and try submitting again.
    </div>
    </section>


  </div>
</template>


<script>
import firebase from '@/components/firebase-init';

export default {
  data() {
    return {
      showForm: true,
      showError: true,
      showSuccess: true,
      newRecipe: {
        name: '',
        link: ''
      },
    }
  },
  methods: {
    validateForm: function () {
      if ((this.name !== '') &&
        (this.link !== '')) {
        console.log("Form is valid");
        this.showSuccess = true;
        this.showError = false;
      } else {
        this.showForm = true;
        this.showError = true;
        this.showSuccess = false;
        console.log("Form is not valid");
      }
    },
    onSubmit: function () {
      firebase.recipesRef.push(this.newRecipe);
      this.newRecipe.name = '';
      this.newRecipe.link = '';
      console.log("recipe added");
      this.$ga.event('Contributed Recipe', 'Submit')
    },
  }
}



</script>

<style scoped>
h1 {
  padding: 10% 10% 3% 10%;
}

h2 {
  padding: 0px;
  margin: 0;
}

.nav {
  position:absolute;
  top:2%;
  left: 2%
  }



</style>