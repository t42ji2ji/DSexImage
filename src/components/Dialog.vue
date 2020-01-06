<template lang="pug">
  #Dialog
    transition(name="fade")
      .littleAlert(v-if="showTips") 
        font-awesome-icon(icon="grin-hearts" color="white") 
        span {{tipMessage}}
    .dialogWrapper
      .fun 
        .img
          img(:src="imageData")
        .uploadOptions
          .timeOptions
            .timeOptionTitle 分享
            .inputForm
              input(type="text" :value="webUrl" @click="select" readonly) 
          .timeOptions
            .timeOptionTitle 密碼
            .inputForm
              input(type="text" :value="password" @click="select"  readonly) 
      .close(@click="closeDialog")
        hr
        span   關閉
        font-awesome-icon.closebtn(icon="times" color="black" ) 

</template>

<script>
export default {
  props: {
    message: String,
    webUrl: String,
    imageData: String,
    password: String
  },
  data() {
    return {
      showTips: false,
      tipMessage: "網址已複製"
    };
  },
  mounted() {},
  methods: {
    closeDialog(e) {
      console.log(e);
      e.stopPropagation();
      console.log("cloese");
      this.$emit("closeDialog");
    },
    select(e) {
      e.target.select();
      /* Select the text field */
      e.target.select();
      e.target.setSelectionRange(0, 99999); /*For mobile devices*/

      /* Copy the text inside the text field */
      document.execCommand("copy");

      /* Alert the copied text */
      if (e.target.value != "") {
        var vm = this;
        window.setTimeout(() => (vm.showTips = false), 2000);
        this.showTips = true;
        this.tipMessage = "已複製";
      }
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
  display: flex;
  justify-content: center;
  align-items: flex-end;

  .dialogWrapper {
    position: relative;
    padding: 10px;
    box-sizing: border-box;
    width: 95%;
    max-width: 400px;
    border-radius: 10px;
    background-color: white;
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 50px;
    .fun {
      display: flex;
      flex-direction: column;
    }
    .img {
      width: 100%;
      height: 100%;
      margin-bottom: 20px;
      img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
      }
    }
    .timeOptionTitle {
      background: rgb(107, 62, 255);
    }
    .inputForm {
      background: rgb(218, 218, 218);
      input {
        color: black;
        background: rgb(218, 218, 218);
      }
    }
  }
}

hr {
  width: 100%;
  background-color: rgb(133, 133, 133);
}
.close {
  flex: 1;
  width: 100%;
  bottom: 20px;
  cursor: pointer;
}
.closebtn {
  color: black;
  top: 15px;
  right: 20px;
  z-index: 1000;
}
.littleAlert {
  color: white;
  position: absolute;
  top: 12px;
  background-color: rgb(107, 62, 255);
  padding: 2px 12px;
  border-radius: 16px;
}

.fade-enter-active,
.fade-leave-active {
  transition: 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateY(-50px);
  opacity: 0;
}
</style>
