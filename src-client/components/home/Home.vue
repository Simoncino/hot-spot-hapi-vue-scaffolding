<template>
  <div class="containerHome">
    <h2>Home</h2>
    <hr>
    <p>
      <img src="../../assets/logo.png">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo accusamus commodi quasi obcaecati impedit et reiciendis fugiat, sunt officiis voluptatibus molestias natus quo tempora, rerum magnam neque dolore voluptas illum.
    </p>
  </div>
</template>

<script>
  export default {
    created: function(){
    },
    components: {
    },
    data: function() {
      return {
        logUser: {}
      }
    },
    methods: {
      setUtente: function(user){
      }
    }
  }
</script>

<style lang="scss">
  .containerHome{
    p{
      img{
        float:left;
      }
    }
  }
</style>
