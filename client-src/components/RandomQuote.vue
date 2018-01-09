<template>
  <div>
    <div v-if='quote.quote' id="random-quote-and-button">
      <div id="random-quote-and-author">
        <p>{{quote.quote}}</p>
        <p><a id="wikiLink" v-bind:href="wikiLink" target="_blank">{{quote.author}}</a></p>
      </div>
      <div id="random-quote-btn-wrapper">
        <button v-if='quote.quote' id="random-quote-btn" v-on:click="randomQuote()">New Quote</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import "./RandomQuote.css";

export default {
  name: "randomquote",
  data() {
    return {
      author: "",
      wikiLink: "",
      quote: {}
    };
  },
  created: function() {
    this.randomQuote();
  },
  methods: {
    randomQuote: function() {
      axios
        .get("https://mighty-poet.glitch.me/api.quotes/random")
        .then(response => {
          this.quote = response.data;
          this.quote.quote = `"${this.quote.quote}"`;
          this.wikiLink = "https://en.wikipedia.org/wiki/" + this.quote.author;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>