<template>
<div class="header-container">
  <header class="the-header">
    <TheSideNavToggle @toggle="$emit('sidenavToggle')" />
    <div class="logo">
      <nuxt-link to="/">HOME</nuxt-link>
    </div>
    <div class="spacer"></div>
    <div class="navigation-items">
       <ul v-if="$auth.loggedIn && $auth.user.username != 'admin'"
            class="nav-list">
        <li class="nav-item"><nuxt-link to="/user">{{$auth.user.username}}</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/favourites">Favourites</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/about">About</nuxt-link></li>
        <li class="nav-item"><a @click="$auth.logout()">Logout</a></li>
      </ul>
       <ul v-if="$auth.loggedIn && $auth.user.username === 'admin'"
            class="nav-list">
        <li class="nav-item"><nuxt-link to="/user">{{$auth.user.username}}</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/dashboard">Dashboard</nuxt-link></li>
        <li class="nav-item"><a @click="$auth.logout()">Logout</a></li>
      </ul>
      <ul v-if="!$auth.loggedIn"
            class="nav-list">
        <li class="nav-item"><nuxt-link to="/login">Login</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/register">Register</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/about">About</nuxt-link></li>
      </ul>
    </div>
  </header>
</div>
</template>

<script>
import TheSideNavToggle from "@/components/Navigation/TheSideNavToggle";

export default {
  name: "TheHeader",
  components: {
    TheSideNavToggle
  }
};
</script>


<style scoped>
.header-container {
  height: 60px;
}

.the-header {
  width: 100%;
  position: fixed;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #292c2f;
  z-index: 100;
  box-sizing: border-box;
  padding: 0 20px;
}

.logo {
  margin: 0 10px;
  font-size: 1.3rem;
}

.logo a {
  text-decoration: none;
  color: white;
}

.spacer {
  flex: 1;
}

.navigation-items {
  display: none;
}

@media (min-width: 768px) {
  .navigation-items {
    display: block;
  }
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.nav-item {
  margin: 0 10px;
}

.nav-item a {
  text-decoration: none;
  color: white;
}

.nav-item a:hover{
  cursor: pointer;
  color: #3b8070;
}
.nav-item a:active,
.nav-item a.nuxt-link-active {
  color: #3b8070;
  cursor: pointer;
  border: 1px solid #3b8070;
  border-radius: 3px;
  padding: 9px;
}
</style>
