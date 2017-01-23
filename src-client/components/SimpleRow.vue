<template>
  <tr>
    <td>{{this.indice}}</td>
    <td>{{this.elemento.nome}}</td>
    <td>{{this.elemento.cognome}}</td>
    <td>{{this.elemento.random}}</td>
    <td>{{this.elemento.ruolo}}</td>
    <td>
    <a v-bind:href="'mailto:'+elemento.mail" target="_top">
        {{this.elemento.email}}
      </a>
    </td>
     <td>
       
      <a v-for="item in elemento.social" v-bind:href="item.link" target="_blank">{{item.nome}}</a>
    </td>
  <td>{{this.elemento.note}}</td>
  <td><button v-on:click="clickElimina(this.indice)">-</button></td>
</tr>  
</template>

<script>
  export default {
    props: {
      indice: 0,
      elemento: {}
    },
    data: function() {
      return {
      }
    },
    methods: {
      clickElimina: function(index){
        this.$emit('eliminaFromList', this.indice);
      }
    }
  }
</script>

<style lang="scss">
  body {
    font-family: Open Sans, sans-serif;
  }
  tr {

    td {
      border-left: 1px solid gray;      
      border-bottom: 1px solid gray;      
    }

    a {
      float: left;
      display: block;
    }
  }
</style>
