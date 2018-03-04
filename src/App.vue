<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  * html .clearfix {
    zoom: 1;
  }

  /* IE6 */
  *:first-child + html .clearfix {
    zoom: 1;
  }

  /* IE7 */
  .clearfix:before,
  .clearfix:after {
    content: "";
    display: table;
  }

  .clearfix:after {
    clear: both;
  }

  .clearfix {
    zoom: 1;
    /* For IE 6/7 (trigger hasLayout) */
  }

  * {
    margin: 0;
    padding: 0;
    border: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  a, a:hover, a:focus, a:active {
    text-decoration: none !important;
    outline: none;
  }

  .npd {
    padding: 0;
  }

  ul, li {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  a:hover {
    opacity: 0.7;
    color: white;
  }

  body {
    font-size: 14px;
    color: black;
  }

  .clear {
    clear: both;
  }

  img {
    max-width: 100%;
  }

  h1, h2, h3, h4 {
    padding: 0;
    margin: 0;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
