<template>
<div>
 <!--Single movie details by ID -->
  <div class="intro" :style="{ backgroundImage:'url(https://' + singleMovie.background_image + ')' }">
  <h1>
    {{singleMovie.title}}
  </h1>
  </div> 
    <div>
     <article class="post-preview">
       <div   class="post-thumbnail" 
              :style="{ backgroundImage:'url(https://' + singleMovie.cover_image + ')' }"></div>
        <div class="post-content">
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
          <button @click="postFavourite()">Add to favourites</button>
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
    postFavourite(){
        const favourtite = this.singleMovie
        console.log(favourtite)
    }

  }

}
</script>

<style scoped>
.post-preview {
  margin-top: 2.5%;
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
  background-color: whitesmoke;
  cursor: pointer;
  display: flex;
  width: 80%;
  margin-left: 10%;
}
.post-thumbnail {
  min-width: 40%;
  height: 500px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}
.post-content {
  padding: 10px;
  text-align: center;
  margin-top: 8%;
  margin-right: 8%;
  width: 60%;
}
@media (max-width: 1300px){
  .post-content{
    margin-right: 3%;
  }
}
@media (max-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
  .post-preview {
    flex-direction: column;
  }
  .post-details {
    flex-direction: row;
  }
  .post-thumbnail {
  width: 100%;
  height: 355px;
  }
  .post-content {
    margin-top: 0%;
    margin-right: 0%;
    width: 100%;
  }
}
</style>
