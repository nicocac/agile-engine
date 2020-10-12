<template>
  <div class="container-401 container-fluid">
    <div class="cover"><h1>500 - General Error <small>Error calling service</small></h1><p class="lead">{{message}}</p></div>
 </div>
</template>

<script>
export default {
  name: 'Error',
  methods: {
  },
  props: {
    message: String,
    code: String
  }
}
</script>
<style scoped>
  .container-fluid{
      display: flex;
      justify-content: center;
      align-items: center;
  }
  .container-401 {
    height:100vh;
    color: #fff;
    background-color: #21232a;
    text-shadow: 0 2px 4px rgba(0,0,0,.5);
    box-shadow: inset 0 0 100px rgba(0,0,0,.8);
  }
  .cover {
    display: table-cell;
    vertical-align: middle;
    padding: 0 20px;
  }
  h1 {
    font-family: inherit;
    font-weight: 500;
    line-height: 1.1;
    color: inherit;
    font-size: 36px;
  }
  h1 small {
    font-size: 68%;
    font-weight: 400;
    line-height: 1;
    color: #777;
  }
  .lead {
    color: silver;
    font-size: 21px;
    line-height: 1.4;
  }
  p {
      display: block;
      -webkit-margin-before: 1em;
      -webkit-margin-after: 1em;
      -webkit-margin-start: 0px;
      -webkit-margin-end: 0px;
  }
</style>
