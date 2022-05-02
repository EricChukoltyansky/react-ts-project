 import {ActionType} from './action-type';
  
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
  
  export type Action =
    | SearchRepoActions
    | SearchRepoErrorActions
    | SearchRepoSuccessActions;