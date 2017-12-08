[![Build Status](https://travis-ci.org/marigerr/random-quote-api.svg?branch=master)](https://travis-ci.org/marigerr/random-quote-api)

**Quotes API**

<h3>Get random quote</h3>

<p>Api address :  https://mighty-poet.glitch.me/api.quotes/random</p>

Method : GET

Required Params : none

Returns : one random quote

Format : json

<p>Example : <a href="https://mighty-poet.glitch.me/api.quotes/random">https://mighty-poet.glitch.me/api.quotes/random</a></p>  


Example data:
```
{
  "_id": {
    "$oid": "5a1ea59b16db4f1a7da7e053"
  },
  "quote": "Self-complacency is fatal to progress.",
  "author": "Margaret Sangster"
}
```

  <div class="row">
    <div class="desc-and-form">
      <h3>Get list of all authors</h3>   
      <p>Api address :  https://mighty-poet.glitch.me/api.quotes/authors</p>
      <p>Method : Get</p>
      <p>Required params : none</p>
      <p>Returns : list of authors</p>
      <p>Format : json</p>
      <p>Example : <a href="https://mighty-poet.glitch.me/api.quotes/authors">https://mighty-poet.glitch.me/api.quotes/authors</a></p>          
    </div>
  </div>
  <div class="row">
    <div class="desc-and-form">
      <h3>Get List of all authors that start with given parameter</h3>   
      <p>Api address : https://mighty-poet.glitch.me/api.quotes/author-starts-with</p>
      <p>Method : Get</p>
      <p>Required params : startswith - string</p>
      <p>Returns : list of authors that start with parameter</p>
      <p>Format : json</p>
      <p>Example : <a href="https://mighty-poet.glitch.me/api.quotes/author-starts-with?startswith=a">https://mighty-poet.glitch.me/api.quotes/author-starts-with?startswith=a</a></p>          
    </div>
  </div>        
  <div class="row">
    <div class="desc-and-form"> 
      <h3>Get all quotes by given author parameter</h3>
      <p>Api address :  https://mighty-poet.glitch.me/api.quotes/author</p>
      <p>Method : Get</p>
      <p>Required params : author - string</p>
      <p>Returns : list of quotes by given author</p>
      <p>Format : json</p>
      <p>Example : <a href="https://mighty-poet.glitch.me/api.quotes/author?author=Abraham Lincoln">https://mighty-poet.glitch.me/api.quotes/author?author=Abraham Lincoln</a></p>          
    </div>
  </div>  
