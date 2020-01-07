<template lang="pug">
#LandingPage
  .Logo
  .title DSEXIG
  .subTitle 更快開始分享
  
  router-link(to="/edit").btn 開始使用
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#LandingPage {
  background: #302e3f url("../assets/bg.png") repeat 0 0;
  animation: slide 20s linear infinite;

  width: 100%;
  height: calc(100vh - 80px);
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
}

@keyframes slide {
  from {
    background-position: 0 0;
  }
  to {
    background-position: -400px 400px;
  }
}

.Logo {
  width: 100%;
  height: 200px;
  background-image: url("../assets/sexlogo.png");
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
  margin-bottom: 20px;
}
.title {
  font-weight: bold;
  font-size: 2rem;
}

.subTitle {
  font-weight: bold;
  color: rgb(81, 91, 167);
  font-size: 1rem;
}

.btn {
  margin-top: 60px;
  text-decoration: none;
}
</style>