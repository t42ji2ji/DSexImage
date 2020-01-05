<template lang="pug">
  #Home
    .Wrapper
      Dialog(:message="dialogMessage",:password="password", :webUrl="webUrl",:imageData="$refs.myCanvas.returnCanvas()",v-if="isDialogOpen" @closeDialog="openDialog")
      .coverImage
        //- img(:src="thumbnail")
        Blur(:thumbnail="thumbnail", ref="myCanvas")
      //- .title 美好 從分享開始

      .uploadOptions
        .timeOptions
          .timeOptionTitle 圖片時效
          .inputForm
            input(type="number", placeholder="分鐘 空白表示一天",v-model="duration")
        .timeOptions
          .timeOptionTitle 
            span 密碼
          .inputForm
            input(placeholder="空白表示不設置密碼", v-model="password")
      .btngroup
        file-upload.btn(@input-filter="inputFilter",
            @input-file="inputFile", v-model="file",accept="image/png,image/gif,image/jpeg,image/webp", ref="upload",  multiple=false, :data="{duration: 'access_token'}",) 選擇檔案
        .btn(@click="upload", :class="{ unUploadIcon: !canUpload }" ) 上傳 
          font-awesome-icon(icon="arrow-up" :class="{ unUploadIcon: !canUpload }")
</template>

<script>
import FileUpload from 'vue-upload-component';
import axios from 'axios';
import Blur from '../components/Blur';
import Dialog from '../components/Dialog';

export default {
  name: 'app',
  components: {
    FileUpload,
    Blur,
    Dialog
  },
  data() {
    return {
      file: [],
      canUpload: false,
      thumbnail: '',
      password: '',
      duration: Number,
      dialogMessage: '',
      isDialogOpen: false,
      webUrl: ''
    };
  },
  mounted() {},
  computed: {},
  methods: {
    openDialog() {
      this.isDialogOpen = !this.isDialogOpen;
    },
    validateForm() {
      if (this.duration < 0) {
        return '時間不可以 < 0 啦';
      }
    },
    upload() {
      if (!this.canUpload) {
        return;
      }
      // if (this.validateForm) {
      //   return;
      // }
      this.canUpload = false;
      var vm = this;
      var baseUrl = 'https://imagewall.ahkui.com/api/v1/photo';
      axios
        .post(baseUrl, {
          duration: this.duration,
          password: this.password,
          photo: vm.$refs.myCanvas.returnCanvas()
        })
        .then(function(response) {
          console.log(response);
          vm.canUpload = true;
          vm.isDialogOpen = true;
          vm.webUrl = baseUrl + '/' + response.data.photo._id;
        })
        .catch(function(error) {
          vm.canUpload = true;
          console.log(error);
        });
    },
    inputFilter(newFile, oldFile, prevent) {
      if (newFile && !oldFile) {
        // Before adding a file
        // 添加文件前
        // Filter system files or hide files
        // 过滤系统文件 和隐藏文件
        if (/(\/|^)(Thumbs\.db|desktop\.ini|\..+)$/.test(newFile.name)) {
          return prevent();
        }
        // Filter php html js file
        // 过滤 php html js 文件
        if (/\.(php5?|html?|jsx?)$/i.test(newFile.name)) {
          return prevent();
        }
      }
    },
    inputFile(newFile, oldFile) {
      if (newFile && !oldFile) {
        this.drawThumbNail(newFile);
        this.canUpload = true;
      }
      if (newFile && oldFile) {
        // update
        this.canUpload = true;
      }
      if (!newFile && oldFile) {
        // remove
        this.canUpload = false;
      }
    },
    drawCanvas(strDataURI) {
      var myCanvas = this.$refs.myCanvas;
      var ctx = myCanvas.getContext('2d');
      var img = new Image();
      img.onload = function() {
        var hRatio = myCanvas.width / img.width;
        var vRatio = myCanvas.height / img.height;
        var ratio = Math.min(hRatio, vRatio);

        var centerShift_x = (myCanvas.width - img.width * ratio) / 2;
        var centerShift_y = (myCanvas.height - img.height * ratio) / 2;
        ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
        ctx.drawImage(
          img,
          0,
          0,
          img.width,
          img.height,
          centerShift_x,
          centerShift_y,
          img.width * ratio,
          img.height * ratio
        ); // Or at whatever offset you like
      };
      img.src = strDataURI;
    },
    drawThumbNail(file) {
      var vm = this;
      var reader = new FileReader();
      reader.onload = function(e) {
        // vm.drawCanvas(e.target.result);
        vm.thumbnail = e.target.result;
      };
      reader.readAsDataURL(file.file);
    }
  }
};
</script>

<style lang="scss">
#Home {
  width: 100%;
  height: 100%;
  padding: 40px 10px;
  box-sizing: border-box;
  background-color: #302e3f;
}
.Wrapper {
  display: flex;
  padding: 20px 10px;
  box-sizing: border-box;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;

  .btngroup {
    display: flex;
    margin-bottom: 40px;
    .btn {
      box-shadow: 1px 8px 0px rgb(76, 42, 187);
      margin-right: 10px;
      color: white;
      font-size: 1.3rem;
      padding: 4px 25px;
      border-radius: 2px;
      background-color: rgb(107, 62, 255);
      cursor: pointer;
    }
  }
}

.uploadIcon {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  border: solid white 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  background-color: rgb(107, 62, 255);
  cursor: pointer;
  transition: 0.3s;
}

.unUploadIcon {
  color: rgb(58, 58, 58) !important;
  filter: grayscale(1);
  cursor: abs;
}

.coverImage {
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-bottom: 20px;
  img {
    height: 100%;
  }
  #ctxDraw {
    width: 100%;
    height: 100%;
  }
}

.uploadOptions {
  display: flex;
  color: rgb(154, 123, 255);
  flex-direction: column;
  margin-bottom: 20px;
  max-width: 500px;

  .timeOptions {
    display: flex;
    margin-bottom: 12px;
    width: 100%;
    .timeOptionTitle {
      font-weight: bold;
      flex: 1;
      color: white;
      height: 40px;
      line-height: 40px;
      padding: 2px 4px;
      border-radius: 10px 0px 0px 10px;
      box-shadow: 0px 3px 0px rgb(199, 59, 152);
      background-color: rgb(251, 73, 192);
    }
    .inputForm {
      flex: 3;
      padding-left: 12px;
      background: rgb(35, 35, 44);
      box-shadow: 0px 3px 0px rgb(29, 29, 41);

      input {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        color: white;
        font-weight: bold;
        font-size: 1.2rem;
        outline: none;
        border: none;
        background: rgb(35, 35, 44);
      }
    }
  }
}
</style>
