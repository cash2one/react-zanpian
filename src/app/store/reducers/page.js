import merge from 'lodash/merge'

export default function page(state = {}, action = {}) {
  const { data, name } = action
  switch (action.type) {
    case 'GET_TOP_LIST':
      state[name] = data
      return merge({}, state, {})
    default:
      return state
  }
}

export const getTopList = (state, order) => {
  return state.page[order] ? state.page[order] : {}
}
