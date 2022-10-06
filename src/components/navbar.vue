<template>
  <nav class="navbar is-danger" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img
          src="https://cdn.uaerman.dev/images/vue.png"
          width="50"
          height="50"
        />
      </a>

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <router-link to="/" class="navbar-item"><p>Home</p></router-link>
        <router-link to="/about" class="navbar-item"><p>Documentation</p></router-link>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a @click="getUsers" class="button is-primary">
              <strong>New Users</strong>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  import {getUsers} from '@/components/allusers.vue'
  export default {
  props: ["newUsers"],
  methods:{
    getUsers
  }
};
</script>

<style></style>
