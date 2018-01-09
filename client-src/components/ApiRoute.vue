<template>
    <div class='row'>
        <h3> {{ name }} </h3>
        <p>Route : {{ url }}</p>
        <p>Method : {{ method }}</p>
        <p>Required params : {{ reqparams }}</p>
        <p>Returns : {{ returns }}</p>
        <p>Format : {{ format }}</p>    
        <p>Example : 
          <a :href="example"> {{ example }}</a>    
        </p>
        <br/>
    </div>
</template>

<script>
  export default {
    name: "ApiRoute",
    props: ['name', 'url', 'method', 'reqparams', 'returns', 'format', 'example'],
  };
</script>