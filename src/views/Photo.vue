<template lang="pug">
  #Photo
    LittleAlert(ref="LittleAlert")
    .photoWrapper()
      .photo(:style="{backgroundImage: `url('${baseUrl}${$route.params.id}')`}" @="postImage")
      .pasword
        .uploadOptions
          .timeOptions
            .timeOptionTitle 密碼
            .inputForm
              input(type="text" v-model="password") 
            .btn(@click="postImage") 確定 
</template>

<script>
import LittleAlert from "../components/LittleAlert";
import axios from "axios";

export default {
  components: {
    LittleAlert
  },
  data() {
    return {
      baseUrl: "https://imagewall.ahkui.com/api/v1/photo/",
      password: ""
    };
  },
  methods: {
    test() {
      console.log("hi");
    },
    postImage() {
      console.log("object");
      var baseUrl = this.baseUrl + this.$route.params.id;
      var vm = this;
      axios
        .post(baseUrl, {
          password: vm.password
        })
        .then(function(response) {
          if (response.data.data) {
            console.log("object");
            vm.$refs.LittleAlert.showLittleAlert("密碼錯誤");
          }
        })
        .catch(function(error) {
          vm.$refs.LittleAlert.showLittleAlert("密碼錯誤");

          console.log(error);
        });
    }
  },
  mounted() {
    window.document.removeEventListener("mouseup", function(e) {
      console.log(e);
    });
  }
};
</script>

<style lang="scss" scoped>
#Photo {
  width: 100%;
  padding: 20px 5px;
  box-sizing: border-box;
}

.photoWrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex-direction: column;

  .photo {
    width: 100%;
    height: 600px;
    max-height: 50vh;
    background-image: url("https://imagewall.ahkui.com/api/v1/photo/5e1385af7fe7e308146f14a1");
    background-position: center center;
    background-size: contain;
    background-repeat: no-repeat;
  }

  .pasword {
    width: 85%;
    display: flex;
    justify-content: center;
    .timeOptionTitle {
      flex: 1;
    }
    .btn {
      line-height: 40px;
      padding: 0px 10px;
      color: #e0e0ff;
    }
  }
}
</style>