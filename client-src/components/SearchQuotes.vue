<template>
  <div>
    <div id="search-input-wrapper">
      <!-- <p>Search Quotes</p> -->
      <input autoFocus v-model="startswith" v-on:keyup="search()" placeholder="Search by author" type="text">   
    </div>
    <div id="search-results">
      <div id="search-result-authors">
        <ul id="authors">
          <li v-for="author in authors" v-bind:key="author">
            <button v-on:click="authorQuotes(author)">{{ author }}</button>
          </li>
        </ul>
      </div>
      <div id="search-result-quotes">
          <a id="wikiLink" v-bind:href="wikiLink" target="_blank">{{author}}</a>
          <ul id="quotes">
            <li v-for="quote in quotes" v-bind:key="quote._id">
            "{{ quote.quote }}"</li>
          </ul> 
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import "./SearchQuote.css";

export default {
  name: "app",
  data() {
    return {
      startswith: "",
      authors: [],
      quotes: [],
      author: "",
      wikiLink: "",
      quote: {}
    };
  },
  methods: {
    search: function() {
      this.authors = [];
      this.quotes = [];
      this.wikiLink = "";
      this.author = "";
      this.quote = "";
      if (this.startswith !== "") {
        axios
          .get("https://mighty-poet.glitch.me/api.quotes/author-starts-with", {
            params: {
              startswith: this.startswith
            }
          })
          .then(response => {
            this.authors = response.data;
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    },
    authorQuotes: function(author) {
      axios
        .get("https://mighty-poet.glitch.me/api.quotes/author", {
          params: {
            author: author
          }
        })
        .then(response => {
          this.quotes = response.data;
          this.author = author;
          this.wikiLink = "https://en.wikipedia.org/wiki/" + author;
          document.getElementById('links').scrollIntoView();
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>
