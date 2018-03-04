<template>
  <div class="wrapper">
    <v-head></v-head>
    <router-view></router-view>
  </div>
</template>

<script>
  import vHead from './Header.vue';

  export default {
    components: {
      vHead
    },
    data(){
      return {
      }
    },
    created(){
    },
    methods: {
    }
  }
</script>
