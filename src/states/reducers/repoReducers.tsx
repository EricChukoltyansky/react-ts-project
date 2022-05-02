interface RepoState {
  loading: boolean;
  error: string | null;
  data: string[];
}

interface SearchRepoActions {
  type: ActionType.SEARCH_REPOS;
}

interface SearchRepoSuccessActions {
  type: ActionType.SEARCH_REPOS_SUCCESS;
  payload: string[];
}

interface SearchRepoErrorActions {
  type: ActionType.SEARCH_REPOS_ERROR;
  payload: string;
}

type Action =
  | SearchRepoActions
  | SearchRepoErrorActions
  | SearchRepoSuccessActions;

enum ActionType {
  SEARCH_REPOS = "search_repos",
  SEARCH_REPOS_SUCCESS = "search_repos_success",
  SEARCH_REPOS_ERROR = "search_repos_error",
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
