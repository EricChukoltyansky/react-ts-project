interface RepoState {
  loading: boolean;
  error: string | null;
  data: string[];
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
