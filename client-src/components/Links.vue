<template>
  <div>
    <router-link to="/search-quotes">Search</router-link>
    <router-link to="/">Random</router-link>
    <router-link to="/api-doc">API Info</router-link>
  </div>
</template>

<script>
import "./Links.css";
export default {
  name: "Links",
};
</script>