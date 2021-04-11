<template>
  <router-link
    @click.native="setClickedItem({})"
    class="mx-auto"
    :to="{ name: 'Home' }"
    ><button
      class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      Back to Home
    </button></router-link
  >
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "HomeBtn",
  methods: {
    ...mapActions("ideas", ["setClickedItem"]),
  },
};
</script>

<style></style>
