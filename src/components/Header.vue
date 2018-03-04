<template>
  <div class="header">
    <div class="wrap">
      <div class="comp">
        <div class="monitor">
          <div class="mid">
            <div class="site">
              <div class="topbar">
                <div class="cerrar">
                  <div class="circl"></div>
                  <div class="circl"></div>
                  <div class="circl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="base">

        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {

  }
</script>
<style scoped>
  .header{
  }
  .wrap {
    padding-top: 40px;
    width: 100%;
    height: 100vh;
    position: relative;
    background-color: #22262b;
  }

  .comp {
    width: 100%;
    height: 480px;
    text-align: center;
  }
  .comp .monitor {
    width: 76%;
    height: 480px;
    display: block;
    margin: 0 auto;
    border-radius: 10px 10px 0px 0px;
    padding: 9px;
    border: solid 1px #e0e2e2;
    background-color: black;
  }
  .comp .mid {
    position: relative;
    padding: 1%;
    padding-bottom: 0;
    display: block;
    width: 100%;
    height: 100%;
    background-color: #abadc6;
  }
  .comp .site {
    overflow: hidden;
    width: 100%;
    height: 100%;
    background-color: #efebe2;
  }
  .comp .site .topbar {
    width: 100%;
  }
  .comp .site .cerrar {
    width: 100%;
    padding: 10px;
    line-height: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    border-radius: 4px 4px 0px 0px;
    background-color: #d4d4d4;
  }
  .comp .site .cerrar > div {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #dddddd;
    margin: 0px 4px;
  }
  .comp .site .cerrar > div:first-of-type{
    background-color: red;
  }
  .comp .site .cerrar > div:nth-of-type(3){
    background-color: #56de14;
  }
  .comp .incont .wid .itwid > div {
    width: 100%;
    height: 100%;
    background-color: #f5f1e6;
    position: relative;
  }
  @-webkit-keyframes code {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.6;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes code {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.6;
    }
    100% {
      opacity: 1;
    }
  }
  .base {
    width: 90%;
    height: 12px;
    background: #e0e2e2;
    display: block;
    margin: 0 auto;
    border-radius: 0px 0px 6px 6px;
  }

</style>
