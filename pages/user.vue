<template>
  <div>
      <section class="intro">
          <h1>{{$auth.user.username}}</h1>
      </section>
      <section class="user-preview">
          <div class="user-profile"></div>
          <div class="movie-content">
            <h1>Username: {{$auth.user.username}}</h1>
            <br>
            <h3>Email: {{$auth.user.email}}</h3>
            <br>
            <h3>Joined at : {{$auth.user.created_at | date }}</h3>
          </div>    
      </section>
  </div>
</template>

<script>

export default {
middleware: 'notAuthenticated',
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

</style>