<template lang="">
  <div class="card-contaier">
    <header class="card-header">
      <h1>Upload your image</h1>
      <p>File should be Jpeg, Png..</p>
    </header>
    <div @drop.prevent="drop" @dragenter="checkDrop"  class="card-body--drag dragzone">
      <img src="../assets/img/image.svg" alt="img_uploader">
      <p>Drad & drop your image here</p>
    </div>
    <footer>
      <p>Or</p>
      <div class="card-input">
        <label for="files" class="btn">Choose a file</label>
        <input id="files" style="visibility:hidden;" type="file">
      </div>
    </footer>
  </div>
</template>
<script lang="ts">
export default {
  name: "UploadImage",
  methods: {
    checkDrop(e){
      e.preventDefault();
      console.log(e)
    },
    drop(e){
      e.preventDefault()
      console.log(e)
    }
  },
}
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

  .card-contaier{
    width: 402px;
    padding: 32px;
    background: #FFFFFF;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
  }

  .card-body--drag{
    position: relative;
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

  }


  .card-body--drag p {
    text-align: center;
    color: #a2a1a1;
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


</style>