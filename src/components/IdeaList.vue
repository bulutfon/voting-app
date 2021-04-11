<template>
  <div class="shadow sm:rounded-md sm:overflow-hidden mb-5">
    <div v-for="idea in filteredIdeas" :key="idea.title" class="bg-white flex">
      <div
        class="bg-white flex justify-center flex-col items-center justify-center m-3 border"
      >
        <div class="text-5xl p-5">{{ idea.votes }}</div>
        <div
          v-bind:style="{ backgroundColor: idea.voted ? `#3B82F6` : `gray` }"
          @click="voteHandler(idea)"
          class="bg-blue-500 text-white text-center py-3 px-5 cursor-pointer"
        >
          {{ idea.voted ? "VOTED" : "VOTE" }}
        </div>
      </div>
      <div class="flex flex-col p-3 justify-between items-between">
        <div class="py-2">
          <router-link
            :to="{ name: 'Idea', params: { clickedIdea: idea, id: idea.id } }"
            class="capitalize text-3xl text-blue-500 hover:text-blue-800"
            >{{ idea.title }}</router-link
          >
          <p class="capitalize text-gray-500 text-sm">
            {{ idea.description }}
          </p>
        </div>
        <div class="text-gray-600 flex text-sm">
          <div>
            {{ from(idea.created_at) }}
            <span class="font-bold">{{ idea.category }}</span> category.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import * as dayjs from "dayjs";
const relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);
export default {
  name: "IdeaList",
  data() {
    return {
      now() {
        return dayjs();
      },
      from(date) {
        return dayjs(date).from(this.now());
      },
    };
  },
  computed: {
    ...mapGetters("ideas", ["filteredIdeas"]),
  },
  methods: {
    ...mapActions("ideas", ["voteHandler"]),
  },
};
</script>
