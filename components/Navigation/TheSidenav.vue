<template>
<div class="sidenav-container">
  <div
    v-if="show"
    class="sidenav-backdrop"
    @click="$emit('close')"></div>
  <transition name="slide-side">
    <div
      v-if="show"
      class="sidenav">
      <ul v-if="$auth.loggedIn && $auth.user.username != 'admin'" 
        class="nav-list"
        @click="$emit('close')">
        <li class="nav-item"><nuxt-link to="/user">{{$auth.user.username}}</nuxt-link></li>
        <li class="nav-item"> <nuxt-link to="/favourites">Favourites</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/about">About</nuxt-link></li>
        <li class="nav-item"><a @click="$auth.logout()">Logout</a></li>
      </ul>
       <ul v-if="$auth.loggedIn && $auth.user.username === 'admin'" 
        class="nav-list"
        @click="$emit('close')">
        <li class="nav-item"><nuxt-link to="/user">{{$auth.user.username}}</nuxt-link></li>
        <li class="nav-item"> <nuxt-link to="/dashboard">Dashboard</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/about">About</nuxt-link></li>
        <li class="nav-item"><a @click="$auth.logout()">Logout</a></li>
      </ul>
      <ul v-if="!$auth.loggedIn"
        class="nav-list"
        @click="$emit('close')">
        <li class="nav-item"><nuxt-link to="/login">Login</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/register">Register</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/about">About</nuxt-link></li>
      </ul>
    </div>
  </transition>
</div>
</template>

<script>
export default {
  name: "TheSidenav",
  props: {
    show: {
      type: Boolean,
      default: false
    }
  }
};
</script>


<style scoped>
.sidenav-container {
  height: 100%;
  width: 100%;
}

.sidenav-backdrop {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
}

.sidenav {
  height: 100%;
  width: 100%;
  background-image: url('https://wallpaperaccess.com/full/1159285.jpg');
  background-size: cover;
  z-index: 10000;
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  padding: 30px;
}

.slide-side-enter-active,
.slide-side-leave-active {
  transition: all 0.9s ease-out;
}
.slide-side-enter,
.slide-side-leave-to {
  transform: translateX(-100%);
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-item {
  margin: 20px 0;
  position: center;
  text-align: center;

}

.nav-item a {
  text-decoration: none;
  color: black;
  font-size: 1.5rem;
  cursor: pointer;
}

.nav-item a:hover,
.nav-item a:active {
  color: #3b8070;
}

</style>
