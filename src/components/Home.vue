<template>
<div id="home">

<Featured></Featured>

</div>
  
</template>

<script>
import Featured from '@/components/Featured'

export default {
  name: 'Home',
  components: {
    Featured
  },
}
</script>

<style scoped>
h1 {
  padding: 10%;
}

.featured {
  color: red;
}

</style>
