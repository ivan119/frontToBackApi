<template>
  <div>
      <section class="intro">
          <h1>Register</h1>
      </section>
      <div class="container">
         <form class="form" id="myForm" @submit.prevent="register">
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
                 <button type="submit" :disabled="$v.$invalid" class="button--green">Register</button>
              </div>
            </div>
        </form>
      </div>
  </div>
</template>

<script>
import { required, email, minLength, maxLength } from 'vuelidate/lib/validators'
import Swal from "sweetalert2";
import axios from 'axios'
export default {
  middleware: 'authenticated',
    data(){
        return{
            form:{
                username:"",
                email:"",
                password:""
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
        async register(){
          try {
            await this.$axios.post('http://127.0.0.1:3333/users/register',this.form);
            await this.$auth.loginWith('local',{
                 data:this.form
             })
            Swal.fire({title:`Welcome to Movies Review ${this.form.username}`,timer:1500})
            this.$router.push('/')
          } catch (error) {
            
          }
        }
    }
}
</script>

<style scoped>

.err {
  margin-top: -27px;
}

.button--green {
    width: 100%;
    height: 50px;
}

</style>