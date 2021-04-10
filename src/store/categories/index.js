const state = {
  categories: [
    {
      id: 1,
      title: "Category 1",
    },
    {
      id: 2,
      title: "Category 2",
    },
    {
      id: 3,
      title: "Category 3",
    },
  ],
  selectedCategory: { title: "" },
};
const mutations = {
  select: (category) => {
    this.state.selectedCategory = category;
  },
};
const actions = {
  select: ({ commit }, payload) => {
    commit("select", payload);
  },
};
const getters = {};
export default { namespaced: true, state, mutations, actions, getters };
