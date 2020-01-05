<template lang="pug">
  #Home
    .Wrapper
      .coverImage
        //- img(:src="thumbnail")
        Blur(:thumbnail="thumbnail", ref="myCanvas")
      //- .title 美好 從分享開始
      .btngroup
        file-upload.btn(@input-filter="inputFilter",
            @input-file="inputFile", v-model="file",accept="image/png,image/gif,image/jpeg,image/webp", ref="upload",  multiple=false, :data="{duration: 'access_token'}",) 選擇檔案
        .btn(@click="upload", :class="{ unUploadIcon: !canUpload }" ) 上傳 
          font-awesome-icon(icon="arrow-up" color="white") 
</template>

<script>
import FileUpload from 'vue-upload-component';
import axios from 'axios';
import Blur from '../components/Blur';

export default {
  name: 'app',
  components: {
    FileUpload,
    Blur
  },
  data() {
    return {
      file: [],
      canUpload: false,
      thumbnail: ''
    };
  },
  mounted() {},
  computed: {},
  methods: {
    upload() {
      if (!this.canUpload) {
        console.log('cant upload');
        return;
      }
      this.canUpload = false;
      var vm = this;
      axios
        .post('https://imagewall.ahkui.com/api/v1/photo', {
          duration: 2,
          photo: vm.$refs.myCanvas.returnCanvas()
        })
        .then(function(response) {
          vm.canUpload = true;

          console.log(response);
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
        console.log('add', newFile);
      }
      if (newFile && oldFile) {
        // update
        this.canUpload = true;

        console.log('update', newFile);
      }
      if (!newFile && oldFile) {
        // remove
        this.canUpload = false;

        console.log('remove', oldFile);
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
}
.Wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #302e3f;
  width: 100%;
  height: 100%;

  .btngroup {
    display: flex;
    .btn {
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
</style>
