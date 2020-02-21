<template>
  <div>
    <section class="intro"
             :style="{backgroundImage:'url(' + singleMovie.background_image + ')'}" >
      <h1>Single Movie</h1>
    </section>
    <article class="movie-preview">
      <div class="movie-thumbnail"
           :style="{backgroundImage:'url('+ singleMovie.cover_image +')'}">

      </div>
          <div class="movie-content">
            <h1>{{singleMovie.title}}</h1>
            <h1>Vote Average: {{singleMovie.vote_average}}\10</h1>
            <h1>Realse Date: {{singleMovie.release_date}}</h1>
            <br>
            <h3>Overview: {{singleMovie.overview}}</h3>
          </div>
    </article>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      singleMovie:{}
    }
  },
  async asyncData({params}){
    const res = await axios.get('http://127.0.0.1:3333/movies/'+ params.id)
      return{
        singleMovie: res.data.data
      }
  }

}
</script>

<style scoped>
.movie-preview{
  margin-top: 5%;
  margin-left: 20%;
  width: 60%;
}
.movie-thumbnail{
  background-size: contain;
  background-repeat: no-repeat;
}
</style>