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

            <div class="buttonsBox">
               <button @click="isIt()" class="button--grey">Edit Profile</button>
               <button @click="deleteProfile()" class="button--green">Delete Profile</button>    
            </div>
        
          </div>
      </section>
    </div>

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
                  <button @click="updateProfile()" :disabled="$v.$invalid" class="button--green">Update Profile</button>
                 </div>
                 <br>
                 <button @click="itsNot()"  class="button--grey">Back to Profile</button>
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
        Swal.fire('success','Profile Successfully Updated','sucess')
        window.location.reload(true) /* <-- This function refreshes page so we can fetch new user data */
     } catch (error) {
        Swal.fire('error',error.response.data.message, 'error') /* <-- If username or email exist in databse popups an error message */
     }
    },
    async deleteProfile(){  /* <-- This method delte user and all his favourite movies from database */
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
.buttonsBox{
  display: flex;
  justify-content: space-evenly;
}
/* Organize this better in default layout/Css is repeating! */

form{
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
    padding: 6px 12px;
    font-size: 14px;
    line-height: 21px;
    color: #555;
    background-color: transparent;
    border: 1px solid #aeaeae;
    border-radius: 3px;
    margin-bottom: 25px;
    opacity: .8;
    transition: all 1s;
}
.err {
  width: 50%;
  position: absolute;
  margin-top: -22px;
  padding-bottom: 19px;
  color: red;
  white-space: nowrap;
}

.button--green {
  display: inline-block;
  width: 100%; /* Only this property is changed here, from 100% to current */
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