<template lang="">
  <div class="card-contaier"> 
    <header class="card-header">
      <img class="check-icon" src="../assets/img/check.png" alt="">
      <h1>Uploaded Successfully!</h1>
    </header>
    <div class="card-body--drag">
      <img :src="img" class="dragzone"  unselectable="on">
    </div>
    <footer>
      <div class="card-input">
        <p>{{url}}</p>
        <div :class="['btn-copy', copied ? 'green' : '']"  @click="clipboard" ><p>{{textCopy}}</p></div>
      </div>
    </footer>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "DoneUpload",
  props : {
    img: {
      type: String
    },
    id: {
      type: String
    }
  },
  data(){
    return {
      url: window.location.href   ,
      textCopy : "copy link",
      copied: false
    }
  },

  created(){
    this.url = this.url + this.id
  },

  methods: {

    clipboard(){
      navigator.clipboard.writeText(this.url);
      this.copied = true
      this.textCopy = "copied"

      setTimeout(() => {
        this.copied = false
        this.textCopy = "copy link"
      }, 2000)

    }

  },
})
</script>
<style scoped>


  .check-icon{
    width: 40px;
    display: block;
    margin: auto;
  }

  .btn-copy{
    background-color: #2F80ED;
    color: #fff;
    border-radius: 8px;
    padding: 0 10px;
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 14px;
  }
  .green {
    background-color: #00df76;
  }

  .card-header{
    text-align: center;
    color:#4F4F4F;

  }
  .card-header h1{
    font-weight: 500;
    margin-top: 20px;
    font-size: 1.5rem;
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
    display: flex;
    justify-content: center;
    align-items: center;
  }


  .card-body--drag img {
    display: block;
    max-height: 100%;
    max-width: 338px;
    object-fit: cover;
    pointer-events: none
  }




  .card-input {

    width: 100%;
    height: 31.98px;
    color: rgb(75, 75, 75);
    margin: auto;
    /* Blue 1 */
    margin-top: 25px;
    border: 0.5px solid rgb(217, 217, 217);
    background: #f6f8fb;
    border-radius: 8px;
    padding: 0 0 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;

  }

  .card-input p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .blur{
    background: #d2dbfcac;
  }

</style>