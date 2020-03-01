<template>
<div>
  <section class="intro"> 
      <h1>  
          An Error has Occured
      </h1>
  </section>
  <div class="error">
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <nuxt-link to="/">Home page</nuxt-link>
  </div>
</div>

  
</template>

<script>
export default {
   props: ['error']
}
</script>

<style scoped>
.error{
    margin-left: 25%;
}
</style>