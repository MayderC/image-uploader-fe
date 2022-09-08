<template>
  <div class="container">
    <div class="image">
      <img :src="img" alt="">
    </div>
  </div>
</template>


<script lang="ts">
import { getImage } from '@/services/image.services';
import  { defineComponent } from 'vue';
  export default defineComponent({
    name: "ImageView",
    data(){
      return{
        img: ""
      }
    },
    
    mounted() {
      const id  = this.$route.params['id'] as string
      getImage(id).then(res => {
        this.img = res.img
      })
    },

  })

</script>

<style scoped>

  .container{
    width: 100%;
    height: 100vh;
    display: grid;
    place-items: center;
  }

  .image{
    width: 80%;
  }


  .image img {
    object-fit: cover;
    display: block;
    max-width: 100%;
    margin: auto;
  }

</style>
