<template>
  <div>
      <div class="intro">
          <h1>Register</h1>
      </div>
      <div class="container">
         <form class="form" id="myForm" @submit.prevent="register">
            <div class="row" >
              <div class="">
                 <input type="text" v-model="form.username" class="form-control" id="name" placeholder="Username">
                 <input type="email" v-model="form.email" class="form-control" id="email" placeholder="Email">
                 <input type="password" v-model="form.password" class="form-control" id="subject" placeholder="Password">
                 <button type="submit" class="button--green">Register</button>
              </div>
            </div>
        </form>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            form:{
                username:"",
                email:"",
                password:""
            }
        }
    },
    methods:{
        async register(){
            await this.$axios.post('http://127.0.0.1:3333/users/register',this.form);
            await this.$auth.loginWith('local',{
                 data:this.form
             })
            this.$router.push('/')
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