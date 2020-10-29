<template>
  <div id="header">
    <button @click="showAddress" type="submit">住所自動入力</button>
    <p>Address:{{show}}</p>
  </div>
</template>
<script>
import axios from "axios";
export default{

  data(){
    return{
      show:""
  };
},
props:["parentText"],
methods:{
  showAddress(){
    this.show = this.parentText;
  }
},
async created(){
  let item =await axios.get(
  `https://apis.postcode-jp.com/api/v4/postcodes/${this.parentText}?apikey=Nz1PrzkqP5lyOdPF2kbhSIuNgjdZXCgAoXBPmqf`
  );
this.data = item;
}
};
</script>