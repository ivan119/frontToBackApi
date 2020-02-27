<template>
    <div>
    <section class="intro">
      <h1>Your Favourite Movies</h1>
    </section>
      <div v-if="favouriteMovies > 0">
        {{favouriteMovies}}
      </div>
        <div v-else 
             class="noresults">
            <article>
                <div class="noresults-thumbnail"></div>
                <div class="noresults-content">
                <h1>You don't have any favourite movies yet!</h1>
                <h3>Be sure to chose some and then come back :) </h3>
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
      favouriteMovies:{}
    }
  },
  created(){
    const res = this.$axios.get('http://127.0.0.1:3333/users/getFavourite/' + this.$auth.user.id)
      .then((res)=>{
        this.favouriteMovies = res.data.data
      })
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