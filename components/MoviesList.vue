<template>
  <div>
      <section class="movies-list">
          <MoviePreview
            v-for="movie in movies"
            :key="movie.id"
            :id="movie.id"
            :title="movie.title"
            :vote_average="movie.vote_average"
            :overview="movie.overview"
            :release_date="movie.release_date"
            :cover_image="movie.cover_image"
            :background_image="movie.background_image"/>
      </section>
  </div>
</template>

<script>
import axios from 'axios'
import MoviePreview from '@/components/MoviePreview'
export default {
name:'MoviesList',
  components:{
    MoviePreview
  },
  props:{
    movies:{}
  }
}

</script>

<style>

</style>