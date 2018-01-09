<template>
  <div id="app">
    <Loader v-if='loading'/>
    <div v-else id="page">   
      <Links id="links"/>
      <router-view id="main"/>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import "./App.css";
import RandomQuote from "./components/RandomQuote";
import SearchQuotes from "./components/SearchQuotes";
import ApiDoc from "./components/ApiDoc";
import Loader from "./components/Loader.vue";
import Links from "./components/Links.vue";
export default {
  name: "app",
  data() {
    return {
      loading: true,
    };
  },  
  components: {
    RandomQuote,
    SearchQuotes,
    ApiDoc,
    Loader,
    Links
  },
  created: function() {
    this.pingApi();
  },
  methods: {  
    pingApi: function() {
      axios
        .get("https://mighty-poet.glitch.me/api.quotes/ping")
        .then(response => {
          this.loading = false;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>
