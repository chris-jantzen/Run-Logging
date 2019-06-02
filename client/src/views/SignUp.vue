<template>
  <div class="signup">
    <CreateUser/>
  </div>
</template>

<script>
import CreateUser from "@/components/CreateUser.vue";

export default {
  name: "signup",
  components: {
    CreateUser
  }
};
</script>