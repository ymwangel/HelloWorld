<template>
  <div id="aa">
    <h2>APP.vue</h2>
    <h2>{{$route.params}}</h2>
    
  </div>
</template>

<script>
  export default{
    mounted:function () {
      var vm = this
      console.log(vm.$route.params)
      console.log(vm.$route.query)
    }
  }
</script>