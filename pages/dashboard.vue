<template>
  <div>
      <section class="intro">
          <h1>Welcome to Dashboard {{$auth.user.username}}</h1>
      </section>
       <div class="container">
        <form class="form" @submit.prevent="postMovie">
             <div class="row" >
                 <div class="col-md-4" >
                     <input @blur="$v.form.title.$touch()" type="text" v-model="form.title" class="form-control"  placeholder="Title">
                                <p v-if="!$v.form.title.minLength" class="err">Title is to short! 3 characters min!</p>
                                <p v-if="!$v.form.title.maxLength" class="err">Title is to Long! 20 characters max!</p>    
                      <input type="text" @blur="$v.form.vote_average.$touch()" v-model="form.vote_average" class="form-control"  placeholder="Vote Average 1-10">
                                <p v-if="!$v.form.vote_average.minLength" class="err">Please enter Number here 1-10!</p>  
                                
                 </div> 
                    <div class="col-md-8">
                      <textarea @blur="$v.form.overview.$touch()" type="text" v-model="form.overview" class="form-control" placeholder="Overview Of Movie..."  cols="30" rows="20"></textarea>
                                <p v-if="!$v.form.overview.minLength" class="err">Overview must be at least 20 characters!</p> 
                                <p v-if="!$v.form.overview.maxLength" class="err">Overview to long! Max 200 characters!</p>
                      <input @blur="$v.form.release_date.$touch()" type="text" v-model="form.release_date" class="form-control" placeholder="Date Of Release Like : 2019-07-25">
                                <p v-if="!$v.form.release_date.minLength" class="err">Please Enter valid Date Like 2020-08-21</p>
                      <input type="text" @blur="$v.form.cover_image.$touch()" v-model="form.cover_image" class="form-control"  placeholder="Url For Cover Image like: https://image.tmdb.org/t/p/original/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg ">
                                <p v-if="!$v.form.cover_image.minLength" class="err">Please enter valid Url!</p>  
                      <input type="text" @blur="$v.form.background_image.$touch()" v-model="form.background_image" class="form-control"  placeholder="Url For Background Image like: https://image.tmdb.org/t/p/original/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg ">
                                <p v-if="!$v.form.background_image.minLength" class="err">Please provide a valid Url!</p>      
                      <button type="submit" @click.once="postMovie()" :disabled="$v.$invalid" class="button--green">Submit New Movie</button>
                   </div>
                 </div>
        </form> 
      </div>
  </div>
</template>

<script>
import axios from 'axios';
import Swal from "sweetalert2";
import { required, email, minLength, maxLength } from 'vuelidate/lib/validators';

  export default {
    middleware:'isAdmin',
    data() {
      return {
         form:{
              title: "",
              vote_average:"",
              overview: "",
              release_date:"",
              cover_image: "",
              background_image:""
         }
      }
    },
    validations:{
      form:{
        title:{
        required,
        minLength: minLength(3),
        maxLength: maxLength(50)
      },
      vote_average:{
        required,
         minLength: minLength(1),
      },
      overview:{
        required,
        minLength: minLength(8),
        maxLength: maxLength(420)
      },
      release_date:{
        required,
        minLength:minLength(8)
      },
      cover_image:{
        required,
        minLength: minLength(10),
        maxLength: maxLength(200)
      },
      background_image:{
        required,
        minLength: minLength(10),
        maxLength: maxLength(200)
      }
     } 
    },
    methods: {
       async postMovie() {
        await this.$axios.post('http://127.0.0.1:3333/movies', this.form)
        await Swal.fire('Sucess','Good Job Admin Movie Successfully Added To Your Database!')
      }
    }
  }

</script>

<style scoped>
.intro{
    background-image: url('https://www.pixel4k.com/wp-content/uploads/2019/10/star-wars-the-rise-of-skywalker-new_1572371043.jpg');
    background-size: cover;
}
.intro h1{
    background-color: #531b85;
}

.user-preview{
    margin-left: 20%;
    margin-right: 20%;
    margin-top:3%;
    width: 60%;
    border: 1px solid gray;
    border-radius: 1px;
    background-color: white;
}
.user-profile {
    width: 100%;
    height: 300px;
    background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/PICA.jpg/600px-PICA.jpg');
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
}


.form{
    margin-top: 5%;
    border: 1px solid #aeaeae;
    padding: 50px 25px;
    margin-left: 25%;
    margin-right: 25%;
    border-radius: 5px;
    background-color: white;
    }
.form-control{
    display: block;
    width: 100%;
    height: 50px;
    padding: 12px 12px;
    font-size: 14px;
    line-height: 21px;
    color: #555;
    background-color: transparent;
    border: 1px solid #aeaeae;
    border-radius: 3px;
    margin-bottom: 27px;
    opacity: .8;
    transition: all 1s;
}
.err {
  width: 50%;
  position: absolute;
  margin-top: -27px;
  padding-bottom: 19px;
  color: red;
  white-space: nowrap;
}
.button--green {
  display: inline-block;
  width: 100%;
  border-radius: 4px;
  height: 50px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
  flex: 1 1 12%;
  }

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
  cursor: pointer;
}

@media (max-width: 850px) {
  .form{
    margin-left: 2%;
    margin-right: 2%;
  }
}

</style>