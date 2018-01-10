<template>
  <div class="w-mask" v-show="isShow">
    <div class="cover" @click="$emit('click-mask')"></div>  
    <div class="container">
      <slot></slot>
    </div>
  </div>
  
</template>

<script>
  export default {
    props: ['isShow'],
    data () {
      return {

      }
    },
    methods: {
      closeCover(){

      }
    }
  }

</script>

<stylus>
  .w-mask
    width 100%
    height 100%
    text-align center
    position fixed
    top 0
    left 0
    &:after
      content ""
      display inline-block
      height  100%
      width  0
      vertical-align  middle
    .cover
      width 100%
      height 100%
      position fixed
      top 0 
      left 0
      background rgba(53,53,53,.6)
      z-index  101
    .container
      position relative
      display inline-block
      vertical-align middle
      background-color #fff
      z-index 102

  
</stylus>
