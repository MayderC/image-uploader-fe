<template>
  <div class="main">
    <UploadImage  @base64="save" @load-img="isLoading = true" v-if="!isLoading && !isDone"  class="uploader"></UploadImage>
    <LoadingUpload v-if="isLoading"/>
    <DoneUpload v-if="isDone" :img="imageResponse.img" :id="imageResponse.id"/>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  import UploadImage from '@/components/UploadImage.vue'
  import { saveImage } from '@/services/image.services'
  import LoadingUpload from '../components/LoadingUpload.vue'
  import DoneUpload from '../components/DoneUpload.vue'

  export default defineComponent({
    name: "HomeView",
    data() {
      return {

        imageResponse: {
          img: "",
          id: ""
        },
        isLoading : false,
        isDone: false
      }
    },

    components: {
    UploadImage,
    LoadingUpload,
    DoneUpload
},

    methods: {
      save(img: string){
        saveImage({img}).then((res) => {
          this.isLoading = false
          this.imageResponse = res
          this.isDone = true
        }).catch(() => {
          this.isLoading = false
        })
      }
    }

  })
  </script>
  
<style scoped>

  .main{
    height: 100vh;
    position: relative;
    display: grid;
    place-items: center;;
  }



</style>