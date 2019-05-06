<template>
  <div class="container">
    <h1>Create New User</h1>
    <div class="create-user">
      <div>
        <label for="create-user">First Name: </label>
        <input type="text" id="create-user" v-model="firstName" placeholder="First Name">
      </div>
      <div>
        <label for="create-user">Last Name: </label>
        <input type="text" id="create-user" v-model="lastName" placeholder="Last Name">
      </div>
      <div>
        <label for="create-user">Age: </label>
        <input type="text" id="create-user" v-model="age" placeholder="Age">
      </div>
      <div>
        <label for="create-user">Gender: </label>
        <input type="text" id="create-user" v-model="gender" placeholder="Gender">
      </div>
      <div>
        <label for="create-user">Weight: </label>
        <input type="text" id="create-user" v-model="weight" placeholder="Weight">
      </div>
      <div>
        <label for="create-user">Height: </label>
        <input type="text" id="create-user" v-model="height" placeholder="Height">
      </div>
      <button v-on:click="addUser" class="submit">Create New User</button>
    </div>
  </div>
</template>

<script>
import UserService from '../UserService';

export default {
  name: "MainPage",
  data() {
    return {
      firstName: '',
      lastName: '',
      age: null,
      gender: '',
      weight: null,
      height: '',
      users: [],
      error: ''
    }
  },
  async created() {
    try {
      this.users = await UserService.GetUsers();
    } catch(err) {
      this.error = err.message;
    }
  },
  methods: {
    async addUser() {
      const user = {
        firstName: this.firstName,
        lastName: this.lastName,
        age: this.age,
        gender: this.gender,
        weight: this.weight,
        height: this.height
      }
      await UserService.CreateUser(user);
      this.users = await UserService.GetUsers();
    }
  }
}
</script>

<style scoped>
  .submit {
    background-color: #303133;
    color: #fff;
    padding: 5px 10px 5px 10px;
    margin-top: 10px;
  }

  .submit:hover {
    background-color: #ccc;
    cursor: pointer;
  }
</style>
