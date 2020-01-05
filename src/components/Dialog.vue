<template lang="pug">
  #Dialog
    .bgCover()
      font-awesome-icon.closebtn(icon="times" color="black" @click="closeDialog")
      .dialogWrapper
        img(:src="imageData")
        .uploadOptions
          .timeOptions 
            .timeOptionTitle 分享
            .inputForm
              input(type="text" :value="webUrl" readonly) 
          .timeOptions 
            .timeOptionTitle 密碼
            .inputForm
              input(type="text" :value="password" readonly) 
</template>

<script>
export default {
  props: {
    message: String,
    webUrl: String,
    imageData: String,
    password: String
  },
  methods: {
    closeDialog(e) {
      console.log(e);
      e.stopPropagation();
      console.log('cloese');
      this.$emit('closeDialog');
    }
  }
};
</script>

<style lang="scss" scoped>
#Dialog {
  z-index: 999;
  position: absolute;
  width: 100%;
  height: 100%;
  .bgCover {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(26, 26, 37, 0.918);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .dialogWrapper {
    padding: 20px;
    box-sizing: border-box;
    width: 90%;
    min-height: 80%;
    max-width: 350px;
    border-radius: 10px;
    background-color: white;
    color: black;
    img {
      object-fit: contain;
      width: 100%;
    }
  }
}

.closebtn {
  position: absolute;
  font-size: 2rem;
  color: rgb(249, 247, 255);
  top: 15px;
  right: 20px;
  z-index: 1000;
}
</style>
