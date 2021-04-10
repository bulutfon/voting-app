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
    category: "",
  },
  filterby: { title: "" },
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
        category: "",
      };
    }
  },
  voteHandler(state, payload) {
    state.ideas = state.ideas.map((item) =>
      item.title === payload.title
        ? { ...item, voted: !item.voted, votes: item.votes === 0 ? 1 : 0 }
        : item
    );
  },
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
  filterByTitle: (state) =>
    state.filterby.title !== ""
      ? state.ideas.filter((idea) => idea.title.includes(state.filterby.title))
      : state.ideas,
};
export default { namespaced: true, state, mutations, actions, getters };
