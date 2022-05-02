import axios from 'axios'
import { ActionType } from "../action-type"
import { Action } from "../actions"

const searchRepos = (term: string) => {
    return async (dispatch: any) => {
      dispatch({ type: ActionType.SEARCH_REPOS })

      try {
        const response = await axios.get(`https://api.github.com/search/repositories?q=${term}`)
        dispatch({ type: ActionType.SEARCH_REPOS_SUCCESS, payload: response.data.items })
      } catch (err) {
        dispatch({
            type: ActionType.SEARCH_REPOS_ERROR,
            payload: err.message
        })
      } 
    }

}