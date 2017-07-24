<template>
  <div id="app">
  <!--    <img src="./img/1.png" alt=""> -->
    
   
   <!--  <router-link to="One1">22</router-link> -->

     <router-view></router-view> 
  </div>
</template>

<script>
export default {
  name: 'app',
    data () {
    return {
      msg: 'Welcome to Your Vue.js App...............'
    }
  }
}

</script>

<style lang="scss">
/**/
#app {
 /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;*/
 
}
*{
  text-decoration: none;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}



/*a {
  color: #42b983;
}*/
html,body{
  width: 100%;
  height: 100%;

}
#app{
  width: 100%;
  height: 100%;
  overflow-y:hidden; 
 
  .p{
    position:absolute;
    left:50%;
    top:50%;
    transform: translate3d(-50%,-50%,0);
     color:#000;
     font-size: 20px;
  }
  .h{
    position: absolute;
    left: 0;
    top: 0;
    color:red;
  }
}
</style>
