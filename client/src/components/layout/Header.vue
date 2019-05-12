<template>
  <header class="header">
    <h1>Run Logging</h1>
    <div>
      <router-link to="/">Home</router-link>|&nbsp;
      <router-link to="/about">About</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
.header {
  background: #333;
  color: #fff;
  text-align: center;
  padding: 10px;
}

.header h1 {
  margin-bottom: 10px;
}

.header a {
  color: white;
  padding-right: 5px;
  text-decoration: none;
}

.header a:hover {
  color: #ccc;
  cursor: pointer;
}
</style>
