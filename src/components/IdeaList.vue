<template>
  <div class="shadow sm:rounded-md sm:overflow-hidden mb-5">
    <idea-card
      v-for="idea in filteredIdeas"
      v-bind:idea="idea"
      :key="idea.id"
    ></idea-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import IdeaCard from "./IdeaCard.vue";
export default {
  components: { IdeaCard },
  name: "IdeaList",
  computed: {
    ...mapGetters("ideas", ["filteredIdeas"]),
  },
  methods: {
    ...mapActions("ideas", ["voteHandler"]),
  },
};
</script>
