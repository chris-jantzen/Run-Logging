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
        <input type="text" class="input-box" v-model="email" placeholder="Email">
      </div>
      <div class="input-box">
        <label for="create-user">
          <span class="red">*</span>First Name:
        </label>
        <input type="text" class="input-box" v-model="firstName" placeholder="First Name">
      </div>
      <div class="input-box">
        <label for="create-user">Middle Initial:</label>
        <input type="text" class="input-box" v-model="middleInitial" placeholder="Middle Initial">
      </div>
      <div class="input-box">
        <label for="create-user">
          <span class="red">*</span>Last Name:
        </label>
        <input type="text" class="input-box" v-model="lastName" placeholder="Last Name">
      </div>
      <div class="input-box">
        <label for="create-user">
          <span class="red">*</span>Age:
        </label>
        <input type="text" class="input-box" v-model="age" placeholder="Age">
      </div>
      <div class="input-box">
        <label for="create-user">
          <span class="red">*</span>Gender:
        </label>
        <input type="text" class="input-box" v-model="gender" placeholder="Gender">
      </div>
      <div class="input-box">
        <label for="create-user">Weight:</label>
        <input type="text" class="input-box" v-model="weight" placeholder="Weight">
      </div>
      <div class="input-box">
        <label for="create-user">Height:</label>
        <input type="text" class="input-box" v-model="height" placeholder="Height">
      </div>
      <button v-on:click="addUser" class="submit">Create New User</button>
    </div>
  </div>
</template>

<script>
import UserService from "../UserService";

export default {
  name: "CreateUser",
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

<style lang="scss" scoped>
.create-user {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  width: 25%;
  background-color: lightgray;
  border-radius: 5px;
  padding: 10px;

  .input-box {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;

    input {
      flex: 2;
      justify-content: flex-end;
      padding: 10px 10px;
      margin: 5px 0px 0px 10px;
      border-radius: 1px;
    }

    label {
      flex: 1;
      margin-top: 5px;
    }
  }

  .submit {
    background-color: #303133;
    color: #fff;
    font-weight: bold;
    font-size: 0.85rem;
    font-family: Arial, Helvetica, sans-serif;
    padding: 10px 15px 10px 15px;
    margin-top: 10px;

    &:hover {
      background-color: #ccc;
      color: #000;
      cursor: pointer;
    }
  }
}

.red {
  color: red;
}

h1 {
  margin: 20px 0px;
}
</style>
