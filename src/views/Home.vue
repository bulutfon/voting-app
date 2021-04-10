<template>
  <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
    <div class="mb-8">
      <img
        class="w-48"
        src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo3.png"
        alt="Placeholder Logo"
      />
    </div>
    <div class="md:grid md:grid-cols-3 md:gap-6">
      <idea-form />
      <div class="mt-5 md:mt-0 md:col-span-2">
        <div class="flex mb-3 items-center justify-between">
          <CategorySelect />
          <search-bar />
        </div>
        <idea-list />
      </div>
    </div>
  </div>
</template>

<script>
import CategorySelect from "../components/CategorySelect";
import IdeaForm from "../components/IdeaForm";
import IdeaList from "../components/IdeaList.vue";
import SearchBar from "../components/SearchBar.vue";
export default {
  components: { IdeaForm, CategorySelect, SearchBar, IdeaList },
};
</script>

<style></style>
