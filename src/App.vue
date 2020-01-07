<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/photo/asd">About</router-link>
    </div>-->
    <div class="logo" v-on:click="toHome">
      <img src="./assets/icon.png" />
      <h3>DSEX</h3>
    </div>
    <router-view />
    <div class="version">{{ version }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      version: "v. 0.0.4"
    };
  },
  methods: {
    toHome() {
      if (this.$route.name != "land") this.$router.push("/");
    }
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Noto+Sans+TC&display=swap");
@import url("https://fonts.googleapis.com/css?family=Baloo+Bhai&display=swap");

#app {
  font-family: "Baloo Bhai", "Noto Sans TC", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  overflow: hidden;
  position: relative;
  background-color: #302e3f;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.logo {
  width: 100%;
  height: 60px;
  margin: 0 auto;
  top: 0;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #23212e;
  cursor: pointer;
  img {
    height: 60%;
    margin-right: 6px;
  }
  h3 {
    font-family: "Baloo Bhai", cursive;
    margin: 0;
    color: #ffffff;
  }
}
.version {
  position: absolute;
  bottom: 0;
  right: 12px;
  color: rgb(81, 91, 167);
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
