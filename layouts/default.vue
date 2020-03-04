<template>
  <div>
    <TheHeader @sidenavToggle="displaySidenav = !displaySidenav" />
    <TheSidenav
      :show="displaySidenav"
      @close="displaySidenav = false"
     />
    <nuxt />
     <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/Navigation/TheHeader";
import TheSidenav from "@/components/Navigation/TheSidenav";
import TheFooter from '@/components/TheFooter'
export default {
  components:{
    TheHeader,
    TheSidenav,
    TheFooter
  },
  data(){
    return{
      displaySidenav:false
    }
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
body{
  background-image: url('https://wallpaperaccess.com/full/1159285.jpg'); 
  background-repeat: cover;
}


.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
  margin: 2px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
  cursor: pointer;

}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
  cursor: pointer;
}
.intro {
  height: 380px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url('https://cdn.mos.cms.futurecdn.net/LSnvRUxYe64Lg7qrMzCGQd.jpg');
  background-position: center;
  background-size: cover;
}
.intro h1 {
  position: absolute;
  top: 15%;
  left: 5%;
  right: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: #3b8070;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
  text-align: center;
}

/* Movies List */
.movies-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.text{
  text-align: center;
}
.movie-preview {
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
  background-color: whitesmoke;
  width: 100%;
}
a {
  text-decoration: none;
  color: black;
}
.movie-thumbnail {
  width: 100%;
  height: 350px;
  background-position: center;
  background-size: cover;
}
.movie-content {
  padding: 10px;
  text-align: center;
}
a:hover .movie-content,
a:active .movie-content {
  background-color: #ccc;
}

/*  No result for search or no favourite movies */
 .noresults{
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
  background-color: #ccc;
  width: 50%;
  margin-left: 25%;
  text-align: center;
  cursor: pointer;
}
.noresults-content{
  margin-top: 2%;
  margin-bottom: 2%;
}
.noresults-thumbnail {
  width: 100%;
  height: 250px;
  background-position: center;
  background-size: cover;
}

/* Css for login,register, about etc */

.form{
    margin-top: 5%;
    border: 1px solid #aeaeae;
    padding: 50px 25px;
    padding-bottom: 33px;
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
    margin-bottom: 32px;
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

@media (max-width: 850px) {
  .form{
      margin-left: 2%;
      margin-right: 2%;
  }
}
/*All media queries */
@media (min-width: 760px) {
  .movie-preview {
    width: 100%;
    margin: 10px;
    margin-left: 4%;
    margin-right: 4%;
  }
}
@media (min-width: 850px) {
  .movie-preview {
    width: 333px;
    margin: 10px;
  }
}
@media (min-width: 1280px) {
  .movie-preview {
    width: 355px;
    margin: 10px;
  }
}
@media (min-width: 1600px) {
  .movie-preview {
    width: 330px;
    margin: 10px;
  }
}
@media (min-width: 1620px) {
  .movie-preview {
    width: 400px;
    margin: 10px;
  }
}

</style>
