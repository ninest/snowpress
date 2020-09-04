export const state = () => ({
  open: false
})

export const mutations = {
  toggle (state) {
    state.open = !state.open
  }
}

export const getters = {
  open: state => state.open
}