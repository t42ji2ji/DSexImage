<template lang="pug">
  #blur
    .mode(v-if="thumbnail")
      .tip(:class="{unUploadIcon:!isblurMode}" @click="changeBlurMode(true)") 模糊背景
      .tip(:class="{unUploadIcon:isblurMode}" @click="changeBlurMode(false)") 刮刮樂
    .tips
      //- .tip() 
      //-   font-awesome-icon(icon="hand-point-up" color="white")
      //-   span(style="margin-left: 10px") 觸碰可以模糊圖片
      .tip.clean(@click="cleanCtx", v-if="thumbnail")
        font-awesome-icon(icon="times" color="white")
        span(style="margin-left: 10px") 清除效果
      .tip.rotate(@click="rotateCtx(90)", v-if="thumbnail")
        font-awesome-icon(icon="undo" color="white")
        span(style="margin-left: 10px") 旋轉
    .canvass()
      canvas#mycanvas(ref="myCanvas",:width="canvasWidth" :height="canvasHeight", @mousedown="handleMouseDown", @mousemove="handleMouseMove(false, $event)", @mouseup="handleMouseUp", @mouseout="handleMouseOut", @touchstart="handleMouseDown", @touchend="handleMouseUp", @touchmove="handleMouseMove(true, $event)",)
      canvas#tempCanvas(ref="tempCanvas",:width="canvasWidth" :height="canvasHeight")
      canvas#tempCanvas2(ref="tempCanvasOrign",:width="canvasWidth" :height="canvasHeight")
      .cover(v-if="!isRotateable", :style="{width: `${canvasWidth}px`,height:`${canvasHeight}px`}") {{message}}


</template>

<script>
import FastBlur from "../assetsJs/Superfast";
export default {
  name: "Blur",
  props: {
    thumbnail: String
  },
  mounted() {
    this.init();
    this.canvasWidth = document.getElementById("blur").offsetWidth;
    this.registListener();
  },
  data() {
    return {
      canvasWidth: 320,
      canvasHeight: 350,
      isDown: false,
      tempCtx: null,
      ctx: null,
      tempCanvas: null,
      tempCanvasOrign: null,
      tempCanvasOrignCtx: null,
      canvas: null,
      PI2: Math.PI * 2,
      img: null,
      adjust: [],
      resizeTime: null,
      isblurMode: true,
      degrees: 0,
      isRotateable: true,
      message: ""
    };
  },
  computed: {
    canvasOffset() {
      return this.canvas.getBoundingClientRect();
    },
    offsetX() {
      return this.canvasOffset.left;
    },
    offsetY() {
      return this.canvasOffset.top;
    },
    scrollX() {
      return this.canvas.scrollLeft();
    },
    scrollY() {
      return this.canvas.scrollTop();
    }
  },
  methods: {
    rotateCtx(degrees) {
      if (!this.isRotateable) {
        return;
      }
      this.tempCanvasOrignCtx.clearRect(
        0,
        0,
        this.tempCanvasOrign.width,
        this.tempCanvasOrign.height
      );
      this.degrees = this.degrees + degrees;
      this.isRotateable = false;
      this.message = "旋轉中";
      // this.degrees = this.degrees + degrees;
      // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      // this.ctx.save();
      // this.ctx.translate(this.canvas.width / 2, this.canvas.height / 2);
      // this.ctx.rotate((this.degrees * Math.PI) / 180);
      // // this.ctx.drawImage(this.img, -this.img.width / 2, -this.img.width / 2);
      // if (
      //   (this.img.width > this.img.height && this.degrees % 360 == 90) ||
      //   (this.img.width > this.img.height && this.degrees % 360 == 270)
      // ) {
      //   var scale = Math.min(
      //     this.canvas.width / this.img.height,
      //     this.canvas.height / this.img.width
      //   );
      // } else {
      //   scale = Math.min(
      //     this.canvas.width / this.img.width,
      //     this.canvas.height / this.img.height
      //   );
      // }

      // this.ctx.drawImage(
      //   this.img,
      //   (-this.img.width * scale) / 2,
      //   (-this.img.height * scale) / 2,
      //   this.img.width * scale,
      //   this.img.height * scale
      // );
      // this.ctx.restore();
      this.message = "";
      this.isRotateable = true;
      this.handleMouseUp();
    },
    changeBlurMode(mode) {
      if (this.isblurMode == mode) {
        console.log("same");
        return;
      } else {
        this.cleanCtx();
        this.isblurMode = !this.isblurMode;
      }
    },
    registListener() {
      var vm = this;
      window.document.addEventListener("mouseup", function(e) {
        vm.handleMouseUp(e);
      });
      // window.addEventListener('resize', function() {
      //   console.log('resize');
      //   vm.canvasWidth = document.getElementById('blur').offsetWidth;
      // });
    },
    returnCanvas() {
      var canvas = document.getElementById("mycanvas");
      return canvas.toDataURL();
    },
    init() {
      this.tempCanvas = this.$refs.tempCanvas;
      this.tempCtx = this.tempCanvas.getContext("2d");
      this.tempCanvasOrign = this.$refs.tempCanvasOrign;
      this.tempCanvasOrignCtx = this.tempCanvasOrign.getContext("2d");
      this.canvas = this.$refs.myCanvas;
      this.ctx = this.canvas.getContext("2d");
      this.img = new Image();
      this.img.crossOrigin = "anonymous";
      this.img.onload = this.start;
      this.img.src = this.thumbnail;
    },
    start() {
      var scale = Math.min(
        this.canvas.width / this.img.width,
        this.canvas.height / this.img.height
      );
      var x = this.canvas.width / 2 - (this.img.width / 2) * scale;
      var y = this.canvas.height / 2 - (this.img.height / 2) * scale;
      this.adjust.push(x, y, scale);

      // this.ctx.drawImage(this.img, 0, 0);
      this.drawAdjustImage(this.ctx, this.img);
    },
    drawAdjustImage(drawTarget, drawnTarget, rotate = false) {
      if (!rotate) {
        drawTarget.drawImage(
          drawnTarget,
          this.adjust[0],
          this.adjust[1],
          this.img.width * this.adjust[2],
          this.img.height * this.adjust[2]
        );
      } else {
        drawTarget.translate(this.canvas.width / 2, this.canvas.height / 2);
        drawTarget.rotate((this.degrees * Math.PI) / 180);
        if (
          (this.img.width > this.img.height && this.degrees % 360 == 90) ||
          (this.img.width > this.img.height && this.degrees % 360 == 270)
        ) {
          var scale = Math.min(
            this.canvas.width / this.img.height,
            this.canvas.height / this.img.width
          );
        } else {
          scale = Math.min(
            this.canvas.width / this.img.width,
            this.canvas.height / this.img.height
          );
        }
        this.adjust[2] = scale;
        drawTarget.drawImage(
          drawnTarget,
          (-this.img.width * scale) / 2,
          (-this.img.height * scale) / 2,
          this.img.width * scale,
          this.img.height * scale
        );
      }
    },
    _clearTempCtx() {
      this.tempCtx.clearRect(
        0,
        0,
        this.tempCanvas.width,
        this.tempCanvas.height
      );
    },
    handleMouseDown(e) {
      e.preventDefault();
      e.stopPropagation();
      this.isDown = true;
    },
    handleMouseUp(e) {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }

      this.isDown = false;
      this._clearTempCtx();
      // this.drawAdjustImage(this.tempCtx, this.tempCanvasOrign, true);
      this.tempCtx.drawImage(
        this.tempCanvasOrign,
        0,
        0,
        this.canvas.width,
        this.canvas.height
      );
      this.tempCtx.save();
      // eslint-disable-next-line no-unused-vars
      this.tempCtx.globalCompositeOperation = "source-in";
      this.drawAdjustImage(this.tempCtx, this.img, true);
      this.tempCtx.restore();
      var vm = this;
      if (this.isblurMode) {
        FastBlur.boxBlurCanvasRGBA(
          "tempCanvas",
          0,
          0,
          vm.tempCanvas.width,
          vm.tempCanvas.height,
          10,
          1
        );
      }

      this.ctx.save();
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.drawImage(
        this.tempCanvas,
        0,
        0,
        this.canvas.width,
        this.canvas.height
      );
      this.ctx.globalCompositeOperation = "destination-over";
      // this.ctx.drawImage(this.img, 0, 0);
      if (this.isblurMode) {
        this.drawAdjustImage(this.ctx, this.img, true);
      }
      this.ctx.restore();
    },
    handleMouseOut(e) {
      e.preventDefault();
      e.stopPropagation();
      this.isDown = false;
    },
    handleMouseMove(isTouch, e) {
      if (!this.isDown || this.thumbnail == "") {
        return;
      }
      if (isTouch) {
        var clientX = e.touches[0].clientX;
        var clientY = e.touches[0].clientY;
      } else {
        clientX = e.clientX;
        clientY = e.clientY;
      }
      e.preventDefault();
      e.stopPropagation();
      var mouseX = parseInt(clientX - this.offsetX);
      var mouseY = parseInt(clientY - this.offsetY);
      this.ctx.fillStyle = "rgba(107, 62, 255, 0.3)"; //red

      this.ctx.beginPath();
      this.ctx.arc(mouseX, mouseY, 20, 0, this.PI2);
      this.ctx.closePath();
      this.ctx.fill();
      this.tempCtx.beginPath();
      this.tempCtx.arc(mouseX, mouseY, 20, 0, this.PI2);
      this.tempCtx.closePath();
      this.tempCtx.fill();
      this.tempCanvasOrignCtx.beginPath();
      this.tempCanvasOrignCtx.arc(mouseX, mouseY, 20, 0, this.PI2);
      this.tempCanvasOrignCtx.closePath();
      this.tempCanvasOrignCtx.fill();
    },
    cleanCtx() {
      this.adjust = [];
      this.degrees = 0;
      this.tempCtx.clearRect(
        0,
        0,
        this.tempCanvas.width,
        this.tempCanvas.height
      );
      this.ctx.clearRect(0, 0, this.tempCanvas.width, this.tempCanvas.height);
      this.tempCanvasOrignCtx.clearRect(
        0,
        0,
        this.tempCanvas.width,
        this.tempCanvas.height
      );
      this.init();
    }
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    thumbnail: function(newVal, oldVal) {
      // watch it
      this.cleanCtx();
    }
  }
};
</script>

<style lang="scss" scoped>
#blur {
  position: relative;
  width: 100%;
  max-width: 500px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
canvas {
  border: 2px dashed rgb(139, 119, 187);
  box-sizing: border-box;
  padding-left: 1px;
}
#tempCanvas {
  border: 10px solid blue;
  position: absolute;
  bottom: -1000px;
}

#tempCanvas2 {
  position: absolute;
  bottom: -1000px;
}

.mode {
  display: flex;
  justify-content: center;
  margin-bottom: 12px;
  border-radius: 15px;
  overflow: hidden;
  .tip {
    color: white;
    font-size: 1rem;
    margin-bottom: 3px;
    text-align: left;
    background-color: rgb(107, 62, 255);
    padding: 2px 10px;
  }
}

.tips {
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  .tip {
    margin-right: 5px;
    border-radius: 5px;
    color: white;
    font-size: 1rem;
    margin-bottom: 3px;
    text-align: left;
    background-color: rgb(107, 62, 255);
    padding: 2px 10px;
  }
  .clean {
    background-color: rgb(251, 72, 72);
  }
  .rotate {
    background-color: rgb(59, 202, 166);
  }
}

.cover {
  background-color: rgba(46, 47, 59, 0.856);
  z-index: 999;
  position: absolute;
  bottom: 0;
  margin-bottom: 6px;
  margin-left: 2.5px;
  color: white;
  font-weight: bold;
  line-height: 250px;
}
</style>
