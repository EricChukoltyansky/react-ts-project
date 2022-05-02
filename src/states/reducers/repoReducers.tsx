interface RepoState {
  loading: boolean;
  error: string | null;
  data: string[];
}

interface SearchRepoActions {
  type: 'search_repos' 
}

interface SearchRepoSuccessActions {
  type: 'search_repos_success';
  payload: string[];
}
interface SearchRepoSuccessActions {
  type: 'search_repos_success';
  payload: string[];
}

interface SearchRepoErrorActions {
  type: 'search_repos_error';
  payload: string;
}

const reducer = (state: RepoState, action: any): RepoState => {
  switch (action.type) {
    case "search_repos":
      return {
        ...state,
        loading: true,
        error: null,
        data: [],
      };
    case "search_repos_success":
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload,
      };
    case "search_repos_failure":
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
