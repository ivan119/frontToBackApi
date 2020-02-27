<template>
<div>
 <!--Single movie details by ID -->
  <div class="intro" :style="{ backgroundImage:'url(' + singleMovie.background_image + ')' }">
  <h1>
    {{singleMovie.title}}
  </h1>
  </div> 
    <div>
     <article class="movie-preview">
       <div   class="movie-thumbnail" 
              :style="{ backgroundImage:'url(' + singleMovie.cover_image + ')' }"></div>
        <div class="movie-content">
          <h1>{{ singleMovie.title }}</h1>
          <hr>
          <h3>Average Vote: {{ singleMovie.vote_average }}/10</h3>
          <hr>
          <h3>Date Of Release: {{ singleMovie.release_date }}</h3>
          <hr>
          <h3>Overview:</h3>
          <h4>{{ singleMovie.overview }}</h4>
          <hr>
          <br>
          <div v-if="$auth.loggedIn">
          <button @click="postFavourite()">Add to favourites</button>
          </div>
           <div v-else>
          <button @click="notLoggedIn()">Add to favourites</button>
          </div>
        </div>
      </article>
    </div>
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
  props:{
    title:'',
    overview:'',
  },

  async asyncData({params}){
    const res = await axios.get('http://127.0.0.1:3333/movies/'+ params.id)
      return{
        singleMovie: res.data.data
      }
  },
  methods:{
    async postFavourite(){
        await this.$axios.post('http://127.0.0.1:3333/movies/' + this.singleMovie.id)
        alert('Movie added to favourites!')
    },
    notLoggedIn(){
      alert('Please Register or Login so you can add movie to favourites!')
    }
  }

}
</script>

<style scoped>
.intro h1 {
    background-color:#3792cb;
}
.movie-preview {
  margin-top: 2.5%;
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
  background-color: whitesmoke;
  cursor: pointer;
  display: flex;
  width: 80%;
  margin-left: 10%;
}
.movie-thumbnail {
  min-width: 40%;
  height: 500px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}
.movie-content {
  padding: 10px;
  text-align: center;
  margin-top: 8%;
  margin-right: 8%;
  width: 60%;
}
@media (max-width: 1300px){
  .movie-content{
    margin-right: 3%;
  }
}
@media (max-width: 768px) {

  .movie-preview {
    flex-direction: column;
  }
  .movie-details {
    flex-direction: row;
  }
  .movie-thumbnail {
  width: 100%;
  height: 355px;
  }
  .movie-content {
    margin-top: 0%;
    margin-right: 0%;
    width: 100%;
  }
}
</style>
