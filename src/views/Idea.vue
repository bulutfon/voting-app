<template>
  <div class="mx-auto py-6 sm:px-6 lg:px-8">
    <placeholder-logo />
    <div class="flex justify-center flex-col ">
      <router-link class="mx-auto" :to="{ name: 'Home' }"
        ><button
          class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Back to Home
        </button></router-link
      >
      <div class="bg-white flex my-4 mx-auto w-1/2	">
        <div
          class="bg-white flex justify-center flex-col items-center justify-center m-3 border"
        >
          <div class="text-5xl p-5">{{ clickedIdea.votes }}</div>
          <div
            v-bind:style="{
              backgroundColor: clickedIdea.voted ? `#3B82F6` : `gray`,
            }"
            @click="
              ideaPageVoteHandler();
              voteHandler(clickedIdea);
            "
            class="bg-blue-500 text-white text-center py-3 px-5 cursor-pointer"
          >
            {{ clickedIdea.voted ? "VOTED" : "VOTE" }}
          </div>
        </div>
        <div class="flex flex-col p-3 justify-between items-between">
          <div class="py-2">
            <h5 class="capitalize">{{ clickedIdea.title }}</h5>
            <p class="capitalize text-gray-500 text-sm">
              {{ clickedIdea.description }}
            </p>
          </div>
          <div class="text-gray-600 flex text-sm">
            <div>
              {{ from(clickedIdea.created_at) }}
              <span class="font-bold">{{ clickedIdea.category }}</span>
              category.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import * as dayjs from "dayjs";
import PlaceholderLogo from "../components/PlaceholderLogo.vue";
const relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);
export default {
  components: { PlaceholderLogo },
  name: "Idea",
  data() {
    return {
      clickedIdea: this.$route.params.clickedIdea,
      now() {
        return dayjs();
      },
      from(date) {
        return dayjs(date).from(this.now());
      },
    };
  },
  methods: {
    ...mapActions("ideas", ["voteHandler"]),
    ideaPageVoteHandler() {
      this.clickedIdea =
        this.clickedIdea.voted === true
          ? {
              ...this.clickedIdea,
              voted: false,
              votes: 0,
            }
          : { ...this.clickedIdea, voted: true, votes: 1 };
    },
    testing(item) {
      console.log(item.title);
    },
  },
};
</script>
