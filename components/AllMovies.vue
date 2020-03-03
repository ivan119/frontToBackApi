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
  <!-- Pagination --->
  <div class="pag-buttons">
    <button @click="decrement()" class="button--grey">Prev</button>
    <button @click="increment()" class="button--grey">Next</button>
    <h3>Page:{{this.page}}  Total Pages: {{this.pagaination.lastPage}}</h3>
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
import debounce from 'lodash/debounce'
import axios from 'axios'
import integer from 'vuelidate/lib/validators/integer'
export default {
  components:{
    name:'AllMovies',
    MoviesList 
  },
  data(){
    return{
      search:'',
      page:1,
      pagaination:{},
      loadedMovies:{}
    }
  },
  methods:{
    async sortBy(prop,prop2){
      const res = await axios.get('http://127.0.0.1:3333/movies?orderBy=' + prop + '&order=' + prop2 + '&page='+ this.page + '&perPage=' + 8 + '&search=' + this.search  )
      this.pagaination = res.data.pagaination
      this.loadedMovies = res.data.pagaination.data
    },
    searching: debounce(function(){
      this.page = 1;
      this.sortBy('title','asc')
    },1500),
    increment(){
      if(this.page < this.pagaination.lastPage ){
          this.page++,
         this.sortBy('title','asc')
      }
    },
    decrement(){
      if(this.page >= 2){
       this.page--,
       this.sortBy('title','asc')
      }
    }
  },
  created(){
    this.sortBy('title','asc')
  },
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
.pag-buttons{
  margin-top: 1%;
  margin-left: 6%;
}
.pag-buttons h3{
  margin-top: 5px;
  margin-left: 1%;
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
  .pag-buttons{
    height: 50px;
    margin-bottom: 2%;
  }
  .pag-buttons h3{
    margin-left: 5%;

  }
}
</style>
