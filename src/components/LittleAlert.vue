<template lang="pug">
  transition(name="fade")
    .LittleAlertCover(v-if="showTips", :style="{top: `${this.top + 75}px`}")
      .littleAlert(v-if="showTips")
        font-awesome-icon(icon="grin-hearts" color="white") 
        span   {{tipMessage}}
</template>

<script>
export default {
  data() {
    return {
      showTips: false,
      tipMessage: "",
      top: 0
    };
  },
  methods: {
    showLittleAlert(message, top = 0) {
      this.tipMessage = message;
      this.showTips = !this.showTips;
      this.top = top;
      var vm = this;
      if (vm.showTips == true)
        window.setTimeout(() => (vm.showTips = false), 2000);
      console.log("childMethods");
    }
  }
};
</script>

<style>
.LittleAlertCover {
  position: absolute;
  top: 12px;
  width: 100%;
  z-index: 1000;
}
.littleAlert {
  color: white;
  background-color: #ff516e;
  display: block;
  padding: 2px 20px;
  border-radius: 16px;
  display: inline-block;
}
</style>