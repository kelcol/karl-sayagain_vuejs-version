<template>
  <div id="contribute2">

    <!--TODO: Move nav elements to own component-->
    <ul class="u-pull-left nav">
      <router-link v-bind:to="{name: 'Home'}">
        <li class="button button-primary">Home</li>
      </router-link>
      <router-link v-bind:to="{name: 'About'}">
        <li class="button button-primary">About</li>
      </router-link>
    </ul>    
    
    <div class="container" v-if="!postStatus">
      <h1>Contributing is easy. Just fill out the form below :)</h1>
      <form id="form" method="post" v-on:submit.prevent="validateForm">

        <div class="six columns form-group" v-bind:class="{ 'has-warning': attemptSubmit && missingName }">
          <label class="label" for="name">Recipe Name</label>
          <input class="u-full-width" v-model="newRecipe.name" placeholder="Pineapple Upside-down Cake" id="name" type="text">
          <span id="helpBlock" class="error" v-if="attemptSubmit && missingName">This field is required.</span>
        </div>

        <div class="six columns form-group" v-bind:class="{ 'has-warning': attemptSubmit && missingLink }">
          <label class="control-label" for="link">Recipe URL</label>
          <input id="link" name="link" class="u-full-width" v-model="newRecipe.link" placeholder="https://www.marthastewart.com/343591/pineapple-upside-down-cake"
            type="text">

          <span id="helpBlock" class="error" v-if="attemptSubmit && missingLink">URL is invalid.</span>
        </div>

        <button class="btn btn-primary">Submit</button>
      </form>
    </div>
    <!-- /col -->

    <div class="col-md-8" v-if="postStatus">

      <div class="container success">
        <h2>Thank you for submitting!</h2>
      </div>

    </div>
  </div>
  <!-- /row -->


</template>

<script>
import firebase from '@/components/firebase-init';

  
  export default {   
    data () {
      return {
        newRecipe: {
          name: '',
          link: ''
        },
        attemptSubmit: false,
        postStatus: false
      }
    },
    computed: {
        missingName: function () { return this.newRecipe.name === '' },
        missingLink: function () {
          return (
            this.isLink(this.newRecipe.link) === null)
        },
  },
  methods: {
    isLink: (str) => {
      let regexp = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/
      return str.match(regexp);
    },
    validateForm: function (event) {
      this.attemptSubmit = true;
      if (this.missingName || this.missingLink) {
          event.preventDefault();
      } else {
         this.onSubmit();
      }       
    },
    onSubmit () {      
      firebase.recipesRef.push(this.newRecipe);
      this.newRecipe.name = '';
      this.newRecipe.link = '';
      this.attemptSubmit = false;
      this.postStatus = true
      console.log("recipe added");
      this.$ga.event('Contributed Recipe', 'Submit')
      }
  }   
}

</script>

<style scoped>
.container {
  padding: 10% 10% 3% 10%;
}

h2 {
  padding: 0px;
  margin: 5%;
}

.nav {
  position:absolute;
  top:2%;
  left: 2%
  }

.error {
  position: relative;
  top: 5%;
  color: coral;
}

.success {
  color: rgb(48, 173, 90);
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
