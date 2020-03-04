<template>
  <div>
      <section class="intro">
          <h1>{{$auth.user.username}}</h1>
      </section>
      <!--User Profile-->
      <div v-if="thatsTrue">
      <section class="user-preview">
          <div class="user-profile"></div>
          <div class="movie-content">
            <h1>Username: {{$auth.user.username}}</h1>
            <br>
            <h3>Email: {{$auth.user.email}}</h3>
            <br>
            <h3>Joined at : {{$auth.user.created_at | date }}</h3>
            <br>
               <button @click="isIt()" class="button--grey1">Edit Profile</button>
               <button @click="deleteProfile()" class="button--green1">Delete Profile</button>    
          </div>
      </section>
    </div>
    <!--User Update Profile-->
    <div v-else>
       <div class="container">
         <form class="form" id="myForm" @submit.prevent="updateProfile()" >
            <div class="row" >
              <div class="">
                 <input type="text" @blur="$v.form.username.$touch()" v-model="form.username" class="form-control" id="name" placeholder="Username">
                 <p v-if="!$v.form.username.minLength" class="err">Username is to short! 4 characters min!</p>
                 <p v-if="!$v.form.username.maxLength" class="err">Username is to Long! 20 characters max!</p> 
                 <input type="email" @blur="$v.form.email.$touch()" v-model="form.email" class="form-control" id="email" placeholder="Email">
                 <p v-if="!$v.form.email.email" class="err">Please provide a valid email!</p>  
                 <input type="password" @blur="$v.form.password.$touch()" v-model="form.password" class="form-control" id="subject" placeholder="Password">
                 <p v-if="!$v.form.password.minLength" class="err">Password is to short! 4 characters min!</p>
                 <p v-if="!$v.form.password.maxLength" class="err">Password is to Long! 20 characters max!</p> 

                 <div class="buttonsBox">
                 <button @click="itsNot()"  class="button--grey">Back to Profile</button>
                  <button @click="updateProfile()" :disabled="$v.$invalid" class="button--green">Update Profile</button>
                 </div>
                 <br>
              </div>
            </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { required, email, minLength, maxLength } from 'vuelidate/lib/validators';
import Swal from "sweetalert2";
import axios from 'axios';
export default {
middleware: 'notAuthenticated',
  data() {
    return {
      thatsTrue: true,
      form:{
        username:'',
        email:'',
        password:''
      }
    }
  },
      validations:{
        form:{
            username:{
            required,
            minLength: minLength(4),
            maxLength: maxLength(14)
            },
            email:{
            required,
            email
          },
          password:{
            required,
            minLength: minLength(4),
            maxLength: maxLength(25)
          }
       }
    },
  methods:{
    isIt(){
      this.thatsTrue = false
    },
    itsNot(){
      this.thatsTrue = true
    },
   async updateProfile(){
     try {
        await this.$axios.patch('http://127.0.0.1:3333/users/update/'+ this.$auth.user.id, this.form)
        Swal.fire('success','Profile Successfully Updated','success')
          setTimeout(() => window.location.reload(true) /* <-- This function refreshes page so we can fetch new user data */
           ,1500)
     } catch (error) {
        Swal.fire('error',error.response.data.message, 'error') /* <-- If username or email exist in databse popups an error message */
     }
    },
    async deleteProfile(){  /* <-- This method delete user and all his favourite movies from database */
      try {
          Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.value) {
              this.$axios.delete('http://127.0.0.1:3333/users/delete/'+ this.$auth.user.id)
              this.$auth.logout()
              Swal.fire(
                'Deleted!',
                'You succesfully deleted your profile.',
                'success'
              )
            }
          })
      } catch (error) {
        Swal.fire('error',error.response.data.message, 'error') 
      }
    }
  }  
}
</script>

<style scoped>
.user-preview{
    margin-left: 25%;
    margin-right: 25%;
    margin-top:3%;
    width: 50%;
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
  padding-bottom: 10px;
}
.buttonsBox{
  display: flex;
  margin-top: 5%;
  }

.err {
  margin-top: -26px;
}

/* Buttons are changed a bit here so they can fit proper */
.button--green {
  width: 66%; 
  height: 50px;
  margin-left: 3%;
  }
.button--grey{
  width: 33%;
  height: 50px;
  margin-top: 2px;
  margin-left: -1px;
}

.button--green1 {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
  margin: 2px;
}

.button--green1:hover {
  color: #fff;
  background-color: #3b8070;
  cursor: pointer;

}

.button--grey1 {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin: 2px;
}

.button--grey1:hover {
  color: #fff;
  background-color: #35495e;
  cursor: pointer;
}

@media (max-width:850px) {
  .user-preview{
    margin-left: 15%;
    margin-right: 15%;
    width: 70%;
  }
  .button--grey{
    padding: 10px 10px;
  }
}
</style>