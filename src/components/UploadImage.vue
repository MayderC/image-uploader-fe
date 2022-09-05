<template lang="">
  <div class="card-contaier"> 
    <header class="card-header">
      <h1>Upload your image</h1>
      <p>File should be Jpeg, Png..</p>
    </header>
    <div 
      class="card-body--drag dragzone"
      ref="dragzone"
      @dragenter="insideDragZone = true"
      @dragleave="removeOver" 
      @dragover.prevent="over" 
      @drop.prevent="drop">
        <img src="../assets/img/image.svg" class="dragzone" alt="img_uploader" unselectable="on">
        Drad & drop your image here
    </div>
    <footer>
      <p>Or</p>
      <div class="card-input">
        <input id="files" @change="drop" style="visibility:hidden;" type="file">
        <label for="files" class="btn">Choose a file</label>
      </div>
    </footer>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "UploadImage",
  data(){
    return {
      insideDragZone : false
    }
  },
  methods: {
    drop(e: DragEvent ){
      const file : File  = e.dataTransfer!.files[0]
      const dragzone : HTMLElement = this.$refs['dragzone'] as HTMLElement
      dragzone.classList.remove('blur')
      
      if(!file.type.match(/image\/+png|jpeg/))return

      const reader = new FileReader()
      reader.onloadend = () => console.log(reader.result);
      reader.readAsDataURL(file);
    },
    over(e:Event){
      const element = e.target as HTMLElement
      const dragzone =  this.$refs['dragzone'] as HTMLElement
      if(element.classList.contains('dragzone')){
       dragzone.classList.add('blur')
      }
    },
    removeOver(){
      this.insideDragZone = false
      const element =  this.$refs['dragzone'] as HTMLElement
      element.classList.remove('blur')
    }
  },
})
</script>
<style scoped>

  .card-header{
    text-align: center;
    color:#4F4F4F;

  }
  .card-header h1{
    font-weight: 500;
  }

  .card-header p{
    color: #828282;
    margin-top: 16px;
    font-size: 1rem;
  }

  .wrapper-drag{
    height: 100%;
  }

  .card-contaier{
    width: 402px;
    padding: 32px;
    background: #FFFFFF;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    user-select: none; 
  }

  .card-body--drag{
    position: relative;
    text-align: center;
    color: #a2a1a1;
    margin-top: 30px;
    background: #F6F8FB;
    height: 218px;
    border-radius: 12px;
    border: 1px dashed #97BEF4;
  }


  .card-body--drag img {
    display: block;
    max-width: 100%;
    object-fit: cover;
    margin: 36px auto;
    pointer-events: none

  }


  footer p {
    margin-top: 18px;
    text-align: center;
    color: #a2a1a1;
  } 

  .card-input > *{
    cursor: pointer;
  }

  .card-input {

    width: 101px;
    height: 31.98px;
    color: #fff;
    margin: auto;
    /* Blue 1 */
    margin-top: 18px;
    background: #2F80ED;
    border-radius: 8px;
    padding: 8px 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
  }

  .blur{
    background: #d2dbfcac;
  }

</style>