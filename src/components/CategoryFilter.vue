<template>
  <div class="relative mr-5">
    <select
      v-model="selectedCategory.title"
      class="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-2 px-4 pr-8 rounded"
    >
      <option>All</option>
      <option v-for="category in categories" :key="category.id">{{
        category.title
      }}</option>
    </select>
    <div
      class="pointer-events-none absolute top-4 right-3 flex items-center px-2 text-grey-darker"
    >
      <svg
        class="h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
        />
      </svg>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "CategorySelect",
  computed: {
    ...mapState("categories", ["categories", "selectedCategory"]),
  },
  methods: {
    ...mapActions("categories", ["select"]),
  },
};
</script>
