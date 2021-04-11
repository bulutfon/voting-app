<template>
  <div class="mx-auto py-6 sm:px-6 lg:px-8">
    <placeholder-logo />
    <div class="flex justify-center flex-col ">
      <idea-card class="mx-auto w-1/2" v-bind:idea="clickedIdea"></idea-card>
      <home-btn class="py-2"></home-btn>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import PlaceholderLogo from "../components/PlaceholderLogo.vue";
import IdeaCard from "../components/IdeaCard.vue";
import HomeBtn from "../components/HomeBtn.vue";
export default {
  components: { PlaceholderLogo, IdeaCard, HomeBtn },
  name: "Idea",
  computed: {
    ...mapState("ideas", ["clickedIdea"]),
  },
};
</script>
