<template>
  <div class="home-page">
    <section class="intro">
      <h1>About</h1>
    </section>
  <!--About us -->      
    <div class="contanier">
            <div class="row">
                <div class="col-md-10 col-md-offset-1">
                    <div class="section-title">
                        <h2> About Us</h2>
                        <p>Universal Pictures is an American film studio, owned by Comcast through its wholly owned subsidiary NBCUniversal,
                           and is one of Hollywood's "Big Six" film studios. Its production studios are at 100 Universal City Plaza Drive in Universal City,
                           California. Distribution and other corporate offices are in New York City. Universal Studios is a member of the Motion Picture Association of America (MPAA).
                           Universal was founded in 1912 by the German Carl Laemmle (pronounced "LEM-lee"), Mark Dintenfass, Charles O. Baumann, Adam Kessel, Pat Powers, William Swanson,
                           David Horsley, Robert H. Cochrane, and Jules Brulatour.</p>
                    </div>
                </div>
            </div>
     </div>
  <!--Contact us -->      
    <section class="contact-us">
            <div class="container">
                <div class="row">
                    <div class="col-md-10 col-md-offset-1">
                        <div class="section-title">
                            <h2>Contact Us</h2>
                            <p>Any questions? Feel free to ask us anything by submitting this form</p>
                        </div>
                    </div>
                </div>
            </div>
            <br>
        <!--Contact us form-->      
            <div class="contact-us-form">
                <div class="container">
                    <form class="form" id="myForm" @submit.prevent="submitForm">
                        <div class="row" >
                           <div class="col-md-4" >
                                <input @blur="$v.name.$touch()" type="text" v-model="name" class="form-control" id="name" placeholder="Name">
                                <p v-if="!$v.name.minLength" class="err">Name is to short! 4 characters min!</p>
                                <p v-if="!$v.name.maxLength" class="err">Name is to Long! 20 characters max!</p>    
                                <input type="email" @blur="$v.email.$touch()" v-model="email" class="form-control" id="email" placeholder="Email">
                                <p v-if="!$v.email.email" class="err">Please provide a valid email!</p>  
                                <input @blur="$v.subject.$touch()" type="text" v-model="subject" class="form-control" id="subject" placeholder="Subject">
                                <p v-if="!$v.subject.minLength" class="err">Subject must be at least 8 characters!</p>
                                <p v-if="!$v.subject.maxLength" class="err">Subject to long! 40 characters max!</p>  
                            </div> 
                            <div class="col-md-8">
                                <textarea @blur="$v.text.$touch()" type="text" v-model="text" class="form-control" placeholder="Enter text here..." id="message" cols="30" rows="20"></textarea>
                                <p v-if="!$v.text.minLength" class="err">Text must be at least 20 characters!</p> 
                                <p v-if="!$v.text.maxLength" class="err">Text to long! Max 200 characters!</p>  
                                <button type="submit" :disabled="$v.$invalid" class="button--green">Submit</button>
                            </div>
                        </div>
                    </form>                                 
                </div>
            </div>
        </section>
  </div>
</template>

<script>
import { required, email, minLength, maxLength } from 'vuelidate/lib/validators';
import Swal from "sweetalert2";
  export default {
    data() {
      return {
          name:'',
          email:'',
          subject:'',
          text:''
      }
    },
    validations:{
      name:{
        required,
        minLength: minLength(4),
        maxLength: maxLength(20)
      },
      email:{
        required,
        email
      },
      subject:{
        required,
        minLength: minLength(8),
        maxLength: maxLength(40)
      },
      text:{
        required,
        minLength: minLength(20),
        maxLength: maxLength(200)
      }
    },
    methods: {
       async submitForm() {
        Swal.aler('Success','Thank You! The Form Is Submitted Successfully!','Sucess')
        this.$router.push({name:'index'})
      }
    }
  }

</script>

<style scoped>
.section-title {
    margin-top: 2%;
    margin-left: 15%;
    margin-right: 15%;
}
.section-title h2 {
    position: relative;
    text-align: center;
    color: #333;
    font-size: 30px;
    font-weight: bold;
    text-transform: uppercase;
}
.section-title h2:after {
    content: "";
    position: absolute;
    bottom: -20px;
    left: 50%;
    width: 60px;
    height: 2px;
    background-color: #3b8070;
    margin-left: -30px;
}


.section-title p {
    color: rgb(0, 0, 0);
    font-size: 18px;
    line-height: 28px;  
    font-weight: 300;
    text-align: center;
    margin-top: 45px;
}

.err {
  margin-top: -27px;
}
#message {
    height: 117px;
    resize: none;
}
.button--green {
  width: 100%;
  height: 50px;
  }

</style>