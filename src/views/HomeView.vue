<script setup lang="ts">
import UploadImage from "../components/UploadImage.vue";

</script>

<template>
  <div class="main">
    <UploadImage class="uploader"></UploadImage>
  </div>
</template>

<style scoped>

  .main{
    height: 100vh;
    position: relative;
    display: grid;
    place-items: center;;
  }



</style>