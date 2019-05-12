<template>
  <div class="container">
    <h1>Sign Up</h1>
    <div class="create-user">
      <small>
        <span class="red">*</span> Indicates Required Field
      </small>
      <div class="input-box">
        <label for="create-user">
          <span class="red">*</span>Email:
        </label>
        <input type="text" id="create-user" v-model="email" placeholder="Email">
      </div>
      <div class="input-box">
        <label for="create-user">
          <span class="red">*</span>First Name:
        </label>
        <input type="text" id="create-user" v-model="firstName" placeholder="First Name">
      </div>
      <div class="input-box">
        <label for="create-user">Middle Initial:</label>
        <input type="text" id="create-user" v-model="middleInitial" placeholder="Middle Initial">
      </div>
      <div class="input-box">
        <label for="create-user">
          <span class="red">*</span>Last Name:
        </label>
        <input type="text" id="create-user" v-model="lastName" placeholder="Last Name">
      </div>
      <div class="input-box">
        <label for="create-user">
          <span class="red">*</span>Age:
        </label>
        <input type="text" id="create-user" v-model="age" placeholder="Age">
      </div>
      <div class="input-box">
        <label for="create-user">
          <span class="red">*</span>Gender:
        </label>
        <input type="text" id="create-user" v-model="gender" placeholder="Gender">
      </div>
      <div class="input-box">
        <label for="create-user">Weight:</label>
        <input type="text" id="create-user" v-model="weight" placeholder="Weight">
      </div>
      <div class="input-box">
        <label for="create-user">Height:</label>
        <input type="text" id="create-user" v-model="height" placeholder="Height">
      </div>
      <button v-on:click="addUser" class="submit">Create New User</button>
    </div>
  </div>
</template>

<script>
import UserService from "../UserService";

export default {
  name: "MainPage",
  data() {
    return {
      firstName: "",
      middleInitial: "",
      lastName: "",
      email: "",
      age: null,
      gender: "",
      weight: null,
      height: "",
      error: ""
    };
  },
  methods: {
    async addUser() {
      const user = {
        firstName: this.firstName,
        middleInitial: this.middleInitial,
        lastName: this.lastName,
        email: this.email,
        age: this.age,
        gender: this.gender,
        weight: this.weight,
        height: this.height
      };
      await UserService.CreateUser(user);
    }
  }
};
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

.create-user {
  margin: auto;
  width: 25%;
  background-color: lightgray;
  border-radius: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
}

.input-box {
  display: grid;
  grid-template-columns: 2fr 4fr;
  margin: 10px;
}

.input-box input {
  padding: 5px 10px;
  margin-left: 10px;
}

.red {
  color: red;
}
</style>
