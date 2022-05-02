import {ActionType} from '../action-type';
import {Action} from '../actions'

interface RepoState {
  loading: boolean;
  error: string | null;
  data: string[];
}



const reducer = (state: RepoState, action: Action): RepoState => {
  switch (action.type) {
    case ActionType.SEARCH_REPOS:
      return {
        ...state,
        loading: true,
        error: null,
        data: [],
      };
    case ActionType.SEARCH_REPOS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload,
      };
    case ActionType.SEARCH_REPOS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        data: [],
      };
    default:
      return state;
  }
};

export default reducer;
