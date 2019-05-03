<template>
  <div>
    <div id="apidoc">
      <h2>Api documentation</h2>
      <h2>Base Url : https://mighty-poet.glitch.me</h2>
      <ul>
        <li
          is="ApiRoute"
          v-for="route in routes"
          :key="route.id"
          :name="route.name"
          :url="route.url"
          :method="route.method"
          :reqparams="route.reqparams"
          :returns="route.returns"
          :format="route.format"
          :example="route.example"
        ></li>
      </ul>   
    </div>
  </div>
</template>

<script>
import axios from "axios";
import "./ApiDoc.css";
import ApiRoute from "./ApiRoute";
import routes from '../json/routedata.json';

export default {
  name: "ApiDoc",
  components: {
    ApiRoute,
  },
  data: function () {
    return {
      routes: routes 
      }
    }
};
</script>