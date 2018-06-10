<template>

  <div id="about">

    <!--TODO: Move nav elements to own component-->
    <div class="u-pull-left nav">
      <router-link v-bind:to="{name: 'Home'}">
        <li class="button button-primary">Home</li>
      </router-link>
      <router-link v-bind:to="{name: 'About'}">
        <li class="button">About</li>
      </router-link>
    </div>

    <div class="container">
      <h1>About This Project</h1>
      <p>This site is a work in progress created using <a target="_blank" href="http://vuejs.org/">Vue.js</a>, <a target="_blank" href="https://firebase.google.com/">Firebase</a>, and <a target="_blank" href="http://getskeleton.com/">Skeleton</a>. It riffs on one of my <a target="_blank" href="https://www.youtube.com/watch?v=7s664NsLeFM"> favorite quotes</a> by Carl
        Sagan and also serves as crowdsourced recipe repository. I hope you'll contribute a recipe while you're here!</p>

      <p>"Karl Sayagain" is a series of "Hello World" type projects completed using different languages, all with a similar
        theme of paying tribute to Carl Sagan. Here's a list of other Karl Sayagains put into the world:</p>

      <ul>
        <li>This Project (Vue.js) -
          <a target="_blank" href="https://github.com/kelcol/karl-sayagain_vuejs-version" class="source-link">
            Source Code</a>
        </li>

        <li>Random Recipe Displayer (PHP & XML) -
          <a target="_blank" href="http://kellycolht.com/recipes/" class="demo-link">
            Demo</a>
          <a target="_blank" href="https://github.com/audiblediner/karl-sayagain_php-version" class="source-link">
            Source Code</a>
        </li>
        <li>Twitter Bot (JavaScript) -
          <a target="_blank" href="https://twitter.com/KarlSayagain" class="demo-link">
            Demo</a>
          <a target="_blank" href="https://github.com/audiblediner/karl-sayagain" class="source-link">
            Source Code</a>
        </li>
      </ul>

    </div>
  </div>
</template>


<script>


export default {
  data() {
    return {
    }
  }
}

  
</script>

<style>
h1 {
  padding: 10% 10% 3% 10%;
}

.nav {
  position:absolute;
  top:2%;
  left: 2%}

a:link {
  color: coral,
}

</style>

