<template>
  <div id="aa">
    <h2>app.vue</h2>
    <h5>{{$route.params}}</h5>
    <h5>{{$route.query}}</h5>
  </div>
</template>

<script>
  export default{
    mounted:function () {
      var vm = this
      console.log(vm.$route)
    }
  }
</script>