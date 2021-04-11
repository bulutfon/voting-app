<template>
  <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
    <placeholder-logo />
    <div class="md:grid md:grid-cols-3 md:gap-6">
      <idea-form />
      <div class="mt-5 md:mt-0 md:col-span-2">
        <div class="flex mb-3 items-center justify-between">
          <category-filter />
          <search-bar />
        </div>
        <idea-list />
      </div>
    </div>
  </div>
</template>

<script>
import CategoryFilter from "../components/CategoryFilter.vue";
import IdeaForm from "../components/IdeaForm";
import IdeaList from "../components/IdeaList.vue";
import PlaceholderLogo from "../components/PlaceholderLogo.vue";
import SearchBar from "../components/SearchBar.vue";
export default {
  components: {
    IdeaForm,
    SearchBar,
    IdeaList,
    PlaceholderLogo,
    CategoryFilter,
  },
};
</script>
