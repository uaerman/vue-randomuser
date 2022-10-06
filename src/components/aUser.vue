<template>
  <div class="card-wrapper">
    <div class="card">
      <!-- card left -->
      <div class="user-imgs">
        <div class="img-display">
          <div class="img-showcase">
            <img :src="image" alt="Profile Image" />
          </div>
        </div>
      </div>
      <!-- card right -->
      <div class="user-content">
        <h2 class="user-title" id="nameSurname"></h2>
        <div class="user-detail">
          <h2>user Info:</h2>
          <p id="userid">{{ $route.params.id }}</p>
          <p id="dob"></p>
          <p>Email: {{ user.email }}</p>
          <p>Phone: {{ user.phone }}</p>
          <p id="address"></p>
          <p id="timezone"></p>
          
        </div>
        <div class="user-info">
          <router-link to="/">
            <button class="btn btn-primary" type="button">
              <font-awesome-icon
                :icon="['fa', 'arrow-turn-up']"
                class="icon alt"
              />Return Homepage
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <router-view />
</template>

<script>
import { onMounted, ref } from "vue";
import moment from "moment";
const localUsers = localStorage.getItem("users");
const jsonParse = JSON.parse(localUsers);
const user = ref([]);
const image = ref("");
export default {
  methods: {
    moment: function () {
      return moment();
    },
  },
  setup() {
    onMounted(async () => {
      const uId = document.getElementById("userid").textContent;
      user.value = jsonParse.find((user) => user.login.username === uId);
      image.value = user.value.picture.large;
      document.getElementById(
        "nameSurname"
      ).textContent = `${user.value.name.title}. ${user.value.name.first} ${user.value.name.last}`;
      document.getElementById(
        "userid"
      ).textContent = `Username: ${user.value.login.username} Password: ${user.value.login.password}`;
      document.getElementById(
        "address"
      ).textContent = `Address: ${user.value.location.street.name}, ${user.value.location.city}, ${user.value.location.state}/${user.value.location.country}, ${user.value.location.postcode}`;
      document.getElementById(
        "timezone"
      ).textContent = `Timezone: ${user.value.location.timezone.description} ${user.value.location.timezone.offset}`;
      document.getElementById(
        "dob"
      ).textContent = `Date of birth: ${moment(user.value.dob.date).format("MMMM Do YYYY, h:mm:ss a")}`;
    });
    return {
      user,
      image,
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap");

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: "Open Sans", sans-serif;
}

body {
  line-height: 1.5;
}

.card-wrapper {
  max-width: 1100px;
  margin: 0 auto;
}

.img {
  width: 100%;
  display: block;
}

.img-display {
  overflow: hidden;
}

.img-showcase {
  display: flex;
  width: 100%;
  transition: all 0.5s ease;
}

.img-showcase img {
  min-width: 100%;
}

.img-select {
  display: flex;
}

.img-item {
  height: 130px;
  width: 130px;
  margin: 0.3rem;
}

.img-item:nth-child(1),
.img-item:nth-child(2),
.img-item:nth-child(3) {
  margin-right: 0;
}

.img-item:hover {
  opacity: 0.8;
}

.user-content {
  padding: 2rem 1rem;
}

.user-title {
  font-size: 3rem;
  text-transform: capitalize;
  font-weight: 700;
  position: relative;
  color: #12263a;
  margin: 1rem 0;
}

.user-title::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  height: 4px;
  width: 80px;
  background: #12263a;
}

.user-link {
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 0.9rem;
  display: inline-block;
  margin-bottom: 0.5rem;
  background: #256eff;
  color: #fff;
  padding: 0 0.3rem;
  transition: all 0.5s ease;
}

.user-link:hover {
  opacity: 0.9;
}

.user-rating {
  color: #ffc107;
}

.user-rating span {
  font-weight: 600;
  color: #252525;
}

.user-price {
  margin: 1rem 0;
  font-size: 1rem;
  font-weight: 700;
}

.final-price {
  margin: 1rem 0;
  font-size: 5rem;
  font-weight: 700;
}

.final-price p {
  opacity: 1;
}

.user-price span {
  font-weight: 500;
}

.last-price span {
  color: #f64749;
  text-decoration: line-through;
}

.new-price span {
  color: #256eff;
}

.user-detail h2 {
  text-transform: capitalize;
  color: #12263a;
  padding-bottom: 0.6rem;
}

.user-detail p {
  font-size: 1rem;
  opacity: 1;
}

.user-detail label {
  font-size: 1rem;
  opacity: 1;
}

.user-detail ul {
  margin: 1rem 0;
  font-size: 1rem;
}

.user-detail ul li span {
  font-weight: 400;
}

.user-info {
  margin: 1.5rem 0;
}

.user-info input,
.user-info input {
  width: 60px;
}

.user-info .btn {
  cursor: pointer;
  color: #fff;
}

.user-info .btn:hover {
  opacity: 0.9;
}

.social-links {
  display: flex;
  align-items: center;
}

.social-links a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  color: #000;
  border: 1px solid #000;
  margin: 0 0.2rem;
  border-radius: 50%;
  text-decoration: none;
  font-size: 0.8rem;
  transition: all 0.5s ease;
}

.social-links a:hover {
  background: #000;
  border-color: transparent;
  color: #fff;
}

.scrollable {
  width: 300px;
  background: rgba(12, 226, 58, 0);
  height: 200px;
  margin: 0 auto;
}

/* relevant code starts here */
.scrollable {
  overflow-y: auto;
}

.scrollable::-webkit-scrollbar {
  opacity: 0;
  width: 8px;
  height: 16px;
}

.scrollable::-webkit-scrollbar-thumb {
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.2);
  -box-shadow: inset 1px 1px 0 rgba(0, 0, 0, 0.1),
    inset 0 -1px 0 rgba(0, 0, 0, 0.07);
}

.scrollable::-webkit-scrollbar-button {
  width: 0;
  height: 0;
  display: none;
}

.scrollable::-webkit-scrollbar-corner {
  opacity: 0;
  background-color: transparent;
}

@media screen and (min-width: 992px) {
  .card {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.5rem;
  }

  .card-wrapper {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .user-imgs {
    display: inline-block;
    flex-direction: column;
    justify-content: center;
  }

  .user-content {
    padding-top: 0;
  }
}

.container {
  width: 80vw;
  margin: 0 auto;
}
</style>
