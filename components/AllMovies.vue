<template>
  <div class="home-page">
    <section class="intro">
      <h1>Movies Review</h1>
    </section>
   <div class="filterBox">
      <button class="button--green" @click="sortBy('title','asc')">Sort By Title (A-Z)</button>            
      <button class="button--green" @click="sortBy('title','desc')">Sort By Title (Z-A)</button>
      <button class="button--green" @click="sortBy('vote_average','desc')">Sort By Highest Votes</button>
      <button class="button--green" @click="sortBy('vote_average','asc')">Sort By Lowest Votes</button>
      <button class="button--green" @click="sortBy('release_date','desc')">Sort By Latest Release Date</button>
      <button class="button--green" @click="sortBy('release_date','asc')">Sort By Oldest Realese Date</button>
      <input class="input" @input="searching" type="text" v-model="search" placeholder="Search...">
  </div>
    <MoviesList :movies="loadedMovies" />
     <div class="noresults" v-if="loadedMovies == 0">
        <article>
        <div class="noresults-thumbnail"></div>
        <div class="noresults-content">
          <h1></h1>
          <h1></h1>
          <h1>There are no such movies here!</h1>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import MoviesList from '@/components/MoviesList'
import _ from 'lodash'
import axios from 'axios'
export default {
  components:{
    name:'AllMovies',
    MoviesList 
  },
  data(){
    return{
      search:'',
      loadedMovies:{}
    }
  },
  methods:{
    async sortBy(prop,prop2){
      const res = await axios.get('http://127.0.0.1:3333/movies?search=' + this.search + '&orderBy=' + prop + '&order=' + prop2)
      this.loadedMovies = res.data.data
    },
    searching: _.debounce(function(){
      this.sortBy('title','asc')
    },1500)
  },
  created(){
    this.sortBy('title','asc')
  }
}
</script>

<style scoped>
.intro h1 {
    background-color:red;
}
.filterBox {
  margin-left: 6.4%;
  margin-right: 6.4%;
  margin-top: 0.5%;
  display: flex;
  box-sizing: border-box;
  flex-wrap: wrap;
  justify-content: space-between;
}
.input {
  width: 100%;
  border-radius: 3px;
  margin: 3px;
  margin-top: 2px;
  height: 35px;
  }
.noresults-thumbnail {
  background-image: url('https://media.giphy.com/media/vupbanYe5f1Xq/giphy.gif');
}
  @media (max-width: 768px) {
  .filterBox {
    flex-direction: column;
    margin-top: 4%;
  }
  .input {
    height: 39px;
    width: 100%; 
  }
}
</style>
