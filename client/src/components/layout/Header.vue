<template>
  <header class="header">
    <h1>Run Logging</h1>
    <div>
      <router-link class="link-item" to="/">Home</router-link>
      <span class="bar-char">|</span>&nbsp;
      <router-link class="link-item" to="/about">About</router-link>
      <span class="bar-char">|</span>
      <router-link class="link-item" to="/sign-up">Sign Up</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="scss" scoped>
.header {
  background: #333;
  color: #fff;
  text-align: center;
  padding: 10px;

  h1 {
    margin-bottom: 5px;
    margin-top: 0px;
    font-size: 3rem;
  }

  a {
    color: white;
    padding-right: 5px;
    text-decoration: none;

    &:hover {
      color: #ccc;
      cursor: pointer;
    }
  }

  .link-item {
    font-size: 1.5rem;
  }

  .bar-char {
    font-size: 1.5rem;
  }
}
</style>
