<template>
  <div>
      <div class="intro">
          <h1>Login</h1>
      </div>
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
import { required, email, minLength, maxLength } from 'vuelidate/lib/validators'

export default {
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
          await this.$auth.loginWith('local',{
            data:this.form
          })
          this.$router.push({name:'index'})
        }
    }
      
}
</script>

<style scoped>

.form{
    margin-top: 5%;
    border: 1px solid #aeaeae;
    padding: 50px 50px;
    margin-left: 25%;
    margin-right: 25%;
    border-radius: 5px;
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
    margin-bottom: 32px;
    opacity: .8;
    transition: all 1s;
}
.err {
  width: 50%;
  position: absolute;
  margin-top: -25px;
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

</style>