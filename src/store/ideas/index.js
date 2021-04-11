import * as dayjs from "dayjs";
const state = {
  ideas: [],
  newIdea: {
    id: "",
    title: undefined,
    description: "",
    votes: 1,
    voted: true,
    created_at: "",
    category: "Category 1",
  },
  filterby: { title: "", category: "All" },
};
const mutations = {
  addIdea(state) {
    state.newIdea.id = state.newIdea.title.toLowerCase().replace(" ", "_");
    state.newIdea.created_at = dayjs().format("YYYY-MM-DD HH:mm:ss");
    if (state.ideas.some((idea) => idea.id === state.newIdea.id)) {
      alert("The idea already exists.");
      return;
    } else if (
      state.ideas.some((idea) => idea.title === " " || idea.description == " ")
    ) {
      alert("Please fill all required fields.");
      return;
    } else {
      state.ideas.push(state.newIdea);
      state.newIdea = {
        id: "",
        title: undefined,
        description: "",
        votes: 1,
        voted: true,
        created_at: "",
        category: "Category 1",
      };
    }
  },
  voteHandler(state, payload) {
    state.ideas = state.ideas.map((item) =>
      item.id === payload.id
        ? { ...item, voted: !item.voted, votes: item.votes === 0 ? 1 : 0 }
        : item
    );
  },
  /* ideaPageVoteHandler(state,payload){

  } */
};
const actions = {
  addIdea: ({ commit }) => {
    commit("addIdea");
  },
  voteHandler: ({ commit }, payload) => {
    commit("voteHandler", payload);
  },
};
const getters = {
  filteredIdeas: (state) =>
    state.filterby.title !== "" || state.filterby.category !== ""
      ? state.ideas
          .filter(
            (item) =>
              state.filterby.category === "All" ||
              item.category === state.filterby.category
          )
          .filter((idea) =>
            idea.title
              .toLowerCase()
              .includes(state.filterby.title.toLowerCase())
          )
      : state.ideas,
};
export default { namespaced: true, state, mutations, actions, getters };
