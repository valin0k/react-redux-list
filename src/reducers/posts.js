import {posts} from "../../fixtures"

export default (state = posts, action) => {
  const {type, payload} = action

  return state
}
