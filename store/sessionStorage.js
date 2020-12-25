export const state = () => ({
  minifiedSidebar: false,
})

export const mutations = {
  toggleSidebar(state) {
    state.minifiedSidebar = !state.minifiedSidebar
  },
}
