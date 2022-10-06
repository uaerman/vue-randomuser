<template>
  <div class="container" style="margin-top: 25px">
    <div class="row">
      <div
        v-for="user of users"
        :key="user.login.md5"
        class="card col-md-8"
        style="width: 20rem; margin-top: 15px; margin-left: 15px"
      >
        <img
          class="card-img-top"
          style="margin-top: 10px;"
          :src="user.picture.large"
        />
        <div class="card-body">
          <h5 class="card-title">{{ user.name.first }} {{ user.name.last }}</h5>
          <p class="card-text">
            {{ user.email }}
            <br />
            {{ user.phone }}
          </p>
          <router-link :to="'/user/' + user.login.username" class="btn btn-primary"
            ><a>User Details</a></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
const users = ref([]);
export async function getUsers() {
  const response = await fetch("https://randomuser.me/api/?results=8");
  const json = await response.json();
  users.value = json.results;
  localStorage.setItem("users", JSON.stringify(json.results));
}
export default {
  setup() {
    onMounted(async () => {
      if (localStorage.getItem('reloaded')) {
        localStorage.removeItem('reloaded');
    } else {
        localStorage.setItem('reloaded', '1');
        location.reload();
    }
      if (!localStorage.getItem("users")) getUsers();
      const localUsers = localStorage.getItem("users");
      users.value = JSON.parse(localUsers);
    });
    return {
      users,
      getUsers,
    };
  },
};
</script>
