<template lang="pug">
  #blur
    .tips
      .tip() 
        font-awesome-icon(icon="hand-point-up" color="white")
        span(style="margin-left: 10px") 觸碰可以模糊圖片
      .tip.clean(@click="cleanCtx")
        font-awesome-icon(icon="times" color="white")
        span(style="margin-left: 10px") 清除模糊
    canvas#mycanvas(ref="myCanvas",:width="canvasWidth" :height="canvasHeight", @mousedown="handleMouseDown", @mousemove="handleMouseMove(false, $event)", @mouseup="handleMouseUp", @mouseout="handleMouseOut", @touchstart="handleMouseDown", @touchend="handleMouseUp", @touchmove="handleMouseMove(true, $event)")
    canvas#tempCanvas(ref="tempCanvas",:width="canvasWidth" :height="canvasHeight")
    canvas#tempCanvas2(ref="tempCanvasOrign",:width="canvasWidth" :height="canvasHeight")

</template>

<script>
import FastBlur from '../assetsJs/Superfast';
export default {
  name: 'Blur',
  props: {
    thumbnail: String
  },
  mounted() {
    this.init();
    console.log(document.getElementById('blur').offsetWidth);
    this.canvasWidth = document.getElementById('blur').offsetWidth;
    var vm = this;
    window.document.addEventListener('mouseup', function(e) {
      vm.handleMouseUp(e);
    });
  },
  data() {
    return {
      canvasWidth: 320,
      canvasHeight: 450,
      isDown: false,
      tempCtx: null,
      ctx: null,
      tempCanvas: null,
      tempCanvasOrign: null,
      tempCanvasOrignCtx: null,
      canvas: null,
      PI2: Math.PI * 2,
      img: null,
      adjust: []
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
    returnCanvas() {
      var canvas = document.getElementById('mycanvas');
      return canvas.toDataURL();
    },
    init() {
      this.tempCanvas = this.$refs.tempCanvas;
      this.tempCtx = this.tempCanvas.getContext('2d');
      this.tempCanvasOrign = this.$refs.tempCanvasOrign;
      this.tempCanvasOrignCtx = this.tempCanvasOrign.getContext('2d');
      this.canvas = this.$refs.myCanvas;
      this.ctx = this.canvas.getContext('2d');
      this.img = new Image();
      this.img.crossOrigin = 'anonymous';
      this.img.onload = this.start;
      this.img.src = this.thumbnail;
    },
    start() {
      console.log(this.canvas.width);
      console.log(this.img.width);

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
    drawAdjustImage(drawTarget, drawnTarget, mode = true) {
      if (mode) {
        drawTarget.drawImage(
          drawnTarget,
          this.adjust[0],
          this.adjust[1],
          this.img.width * this.adjust[2],
          this.img.height * this.adjust[2]
        );
      } else {
        drawTarget.drawImage(
          drawnTarget,
          0,
          0,
          this.img.width * this.adjust[2],
          this.img.height * this.adjust[2]
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
      e.preventDefault();
      e.stopPropagation();
      this.isDown = false;
      this._clearTempCtx();
      this.tempCtx.drawImage(
        this.tempCanvasOrign,
        0,
        0,
        this.canvas.width,
        this.canvas.height
      );
      this.tempCtx.save();
      // eslint-disable-next-line no-unused-vars
      this.tempCtx.globalCompositeOperation = 'source-in';
      this.drawAdjustImage(this.tempCtx, this.img);
      this.tempCtx.restore();
      var vm = this;
      FastBlur.boxBlurCanvasRGBA(
        'tempCanvas',
        0,
        0,
        vm.tempCanvas.width,
        vm.tempCanvas.height,
        4,
        0
      );
      this.ctx.save();
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.drawImage(
        this.tempCanvas,
        0,
        0,
        this.canvas.width,
        this.canvas.height
      );
      this.ctx.globalCompositeOperation = 'destination-over';
      // this.ctx.drawImage(this.img, 0, 0);
      this.drawAdjustImage(this.ctx, this.img);
      this.ctx.restore();
    },
    handleMouseOut(e) {
      e.preventDefault();
      e.stopPropagation();
      this.isDown = false;
    },
    handleMouseMove(isTouch, e) {
      if (!this.isDown || this.thumbnail == '') {
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
  max-width: 800px;
}
canvas {
  border: 2px dashed rgb(139, 119, 187);
  box-sizing: border-box;
}
#tempCanvas {
  border: 10px solid blue;
  position: absolute;
  top: -1000px;
}

#tempCanvas2 {
  position: absolute;
  top: -1000px;
}

.tips {
  display: flex;
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
    background-color: rgb(235, 57, 57);
  }
}
</style>
