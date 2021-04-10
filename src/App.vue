<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">home</router-link> |
      <router-link :to="{ name: 'Idea', params: { id: '123' } }"
        >idea</router-link
      >
    </div> -->

    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>
