<template>

  <div class="container">
    <p>Uploading...</p>
    <div class="color-bar">

      <div class="bar"></div>
    </div>
  </div>

</template>
<script lang="ts">
import { defineComponent } from 'vue';


export default  defineComponent({
  name: 'LoadingUpload',
})

</script>


<style scoped>

  .container{
    width: 280px;
    height: 100px;
    background-color: #fff;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 25px;
  }
  p{
    font-weight: bold;
    color: rgb(87, 87, 87);
    text-align: left;
  }

  .bar{
    background: #2F80ED;
    width: 50px;
    height: 8px;
    border-radius: 10px;
    animation-duration: 1.5s;
    animation-name: loading;
    animation-iteration-count: infinite;
    animation-direction: alternate-reverse;
  }

  .color-bar{
    margin-top: 10px;
    background: #d8d8d8;
    width: 100%;
    height: 8px;
    border-radius: 10px;
  }

  @keyframes loading{
    from {
      transform: translateX(0px);
    }

    to {
      transform: translateX(180px);
    }

  }

</style>