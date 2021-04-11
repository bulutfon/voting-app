<template>
  <div class="bg-white flex">
    <div
      class="bg-white flex justify-center flex-col items-center justify-center m-3 border"
    >
      <div class="text-5xl p-5">{{ idea.votes }}</div>
      <div
        v-bind:style="{ backgroundColor: idea.voted ? `#3B82F6` : `gray` }"
        @click="
          voteHandler(idea);
          clickedIdea &&
            Object.keys(clickedIdea).length !== 0 &&
            ideaPageVoteHandler(idea);
        "
        class="bg-blue-500 text-white text-center py-3 px-5 cursor-pointer"
      >
        {{ idea.voted ? "VOTED" : "VOTE" }}
      </div>
    </div>
    <div class="flex flex-col p-3 justify-between items-between">
      <div class="py-2">
        <router-link
          v-if="idea.id"
          :to="{ name: 'Idea', params: { clickedIdea: idea, id: idea.id } }"
          @click.native="setClickedItem(idea)"
          class="uppercase text-3xl text-blue-500 hover:text-blue-800"
          >{{ idea.title }}</router-link
        >
        <p class="normal-case text-gray-500 text-sm">
          {{ idea.description }}
        </p>
      </div>
      <div class="text-gray-600 flex text-sm">
        <div>
          <span class="normal-case"> {{ timeago }} </span>
          <span class="font-bold">{{ idea.category }}</span> category.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as dayjs from "dayjs";
import { mapActions, mapState } from "vuex";
const relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);
export default {
  name: "IdeaCard",
  props: {
    idea: Object,
  },
  data() {
    return { timeago: "", timer: null };
  },
  mounted() {
    this.createTimer();
  },
  beforeDestroy() {
    this.clearTimer();
  },
  methods: {
    ...mapActions("ideas", [
      "voteHandler",
      "setClickedItem",
      "ideaPageVoteHandler",
    ]),
    updateTimeAgo() {
      this.timeago = this.from(this.idea.created_at);
    },
    createTimer() {
      this.$nextTick(() => {
        this.updateTimeAgo();
        this.timer = setInterval(this.updateTimeAgo, 60 * 1000);
      });
    },
    clearTimer() {
      if (this.timer) {
        clearInterval(this.timer);
      }
    },
    now() {
      return dayjs();
    },
    from(date) {
      return dayjs(date).from(this.now());
    },
  },
  watch: {
    idea: function() {
      this.updateTimeAgo();
    },
  },
  computed: {
    ...mapState("ideas", ["clickedIdea"]),
  },
};
</script>
