<template>
    <div>
    <section class="intro">
      <h1 v-if="$auth.user">{{$auth.user.username}} Favourite Movies</h1>
      <h1 v-else>Favourite Movies</h1>
    </section>

      <div v-if="favouriteMovies.length > 0 ">
     <section class="movies-list">
      <!--Loop for all movies from store  -->    
        <nuxt-link v-for="movie in favouriteMovies " :key="movie.id" :to="'/' + movie.id"  class="post-preview">
        <article class="movie-preview" >
          <div
                class="movie-thumbnail" 
                :style="{ backgroundImage:'url('+ movie.cover_image + ')'}"></div>
          <div class="movie-content">
            <h1>{{ movie.title }}</h1>
            <h1>Average Vote: {{ movie.vote_average }}/10</h1>
            <h1>Release Date: {{ movie.release_date | date }}</h1>
          </div>
        </article>
      </nuxt-link>

      </section>
      </div>

        <div v-else 
             class="noresults">
            <article>
                <div class="noresults-thumbnail"></div>
                <div v-if="$auth.user"
                      class="noresults-content">
                  <h1>You don't have any favourite movies yet!</h1>
                  <h3>Be sure to chose some and then come back :) </h3>
                </div>
                 <div v-else
                      class="noresults-content">
                  <h1>Please register or login to chose favourite movies!</h1>
                </div>
           </article>
        </div>

    </div>
</template>

<script>
import axios from 'axios';
import Swal from "sweetalert2";
export default { 
  middleware: 'notAuthenticated',
  data(){
    return{
      favouriteMovies:[]
    }
  },
  created(){
    if(this.$auth.user){ /* <-- Method is implemented this way cuz we need to get this.$auth.user.id */
      const res = this.$axios.get('http://127.0.0.1:3333/users/getFavourite/' + this.$auth.user.id)
        .then((res)=>{
           this.favouriteMovies = res.data.data
           this.favouriteMovies.reverse()  /* <-- Reverse so it can looks like it is unshifted to Array */
        })
    }
  }
}
</script>


<style scoped>

.noresults{
  margin-top: 2.5%;
  margin-bottom: 5%;
  width: 60%;
  margin-left: 20%;
  height: auto;
}

.noresults-thumbnail {
  background-image: url('http://getwallpapers.com/wallpaper/full/3/4/2/834923-super-heroes-wallpaper-1920x1080-photos.jpg');
  height: 310px;
  background-position: top;
}

</style>