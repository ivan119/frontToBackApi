<template>
  <nuxt-link :to="'/' + id" class="movie-preview">
      <article>
          <div 
              class="movie-thumbnail"
              :style="{ backgroundImage: 'url(' + cover_image + ')' }"></div>
          <div class="movie-content">
              <h1>{{ title }}</h1>
              <h1>Vote average: {{ vote_average }}\10</h1>
              <h1>Release date: {{ release_date | date }}</h1>
          </div>
      </article>
  </nuxt-link>
</template>

<script>
export default {
 name:'MoviePreview',
    props: {
       id: Number,
       title: {},
       overview: {},
       cover_image: {},
       vote_average:{},
       release_date:{}
   },
}
</script>

<style>

</style>