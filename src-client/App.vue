<template>
  <div class="containerApp">
    <h2>App.vue</h2>
    <img src="./assets/logo.png">
    <template v-if="showLogin">
      <Login v-on:logged="setUtente"></Login> 
    </template>
    <template v-else>
      <router-view></router-view>
    </template>
  </div>
</template>

<script>
  import Login from './components/Login.vue'
  import Home from './components/home/Home.vue'

  export default {
    created: function(){
      let loggedUser = this.s_info.loggedUser;
      if(loggedUser.username){
        showLogin = false;
      }
    },
    props: {
      s_info: {}
    },
    components: {
      Login
      ,Home
    },
    data: function() {
      return {
        error: ''
        ,success: ''
        ,showLogin: true
        ,logUser: {}
      }
    },
    methods: {
      setUtente: function(user){
        if(user){
         this.showLogin = false;
         this.logUser = user;
         this.s_info.loggedUser = user;
         console.log('-----------------------PUNTO MALEDETTO')
         this.$router.push('home');
         console.log('-----------------------DOPO IL PUNTO MALEDETTO')
         /*this.router.push({ path: 'home', params: { s_info: this.s_info }});*/
       }

     }
   }
 }
</script>

<style lang="scss">
  body {
    font-family: Open Sans, sans-serif;
  }

  .containerApp{
    text-align: center;
  }
</style>
