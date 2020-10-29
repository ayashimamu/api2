<template>
  <div id="app">
  <input type="numbers" v-model="getText"/>
    <Header :parentText="getText"></Header>
    </div>
    </template>
    <script>
      import Header from "./views/Header";
      export default{
        data(){
          return{
          getText:""
        };
      },
        components: {
          Header
        }
      };
      </script>