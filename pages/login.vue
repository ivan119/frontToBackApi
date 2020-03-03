<template>
  <div>
      <section class="intro">
          <h1>Login</h1>
      </section>
      <div class="container">
         <form class="form" id="myForm" @submit.prevent="login">
            <div class="row" >
              <div class="">
                 <input type="email" @blur="$v.form.email.$touch()" v-model="form.email" class="form-control" id="email" placeholder="Email">
                 <p v-if="!$v.form.email.email" class="err">Please provide a valid email!</p>  
                 <input type="password" @blur="$v.form.password.$touch()" v-model="form.password" class="form-control" id="subject" placeholder="Password">
                 <p v-if="!$v.form.password.minLength" class="err">Password is to short! 4 characters min!</p>
                 <p v-if="!$v.form.password.maxLength" class="err">Password is to Long! 20 characters max!</p> 
                 <button type="submit" :disabled="$v.$invalid" class="button--green">Login</button>
              </div>
            </div>
        </form>
      </div>
  </div>
</template>

<script>
import { required, email, minLength, maxLength } from 'vuelidate/lib/validators';
import Swal from "sweetalert2";

export default {
  middleware: 'authenticated',
    data(){
        return{
          form:{
              email:"",
              password:""
          } 
        }
    },
    validations:{
        form:{
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
         async login(){
          try {
            await this.$auth.loginWith('local',{
              data:this.form
          })
           Swal.fire('success',`Welcome Back ${this.$auth.user.username}`,'success')
           this.$router.push({name:'index'})
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