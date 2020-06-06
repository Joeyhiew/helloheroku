import {
    FETCH_ORG_BEGIN,
    FETCH_ORG_SUCCESS,
    FETCH_ORG_FAILURE,
    FETCH_REPO_BEGIN,
    FETCH_REPO_SUCCESS,
    FETCH_REPO_FAILURE,
    TO_SEARCH
  } from '../actions/searchAction';
import {
    CHECK_USER_BEGIN,
    CHECK_USER_SUCCESS,
    CHECK_USER_FAILURE,
} from '../actions/searchUser'

const initialState = {
    text: '',
    repo: [],
    org: [],
    profile: [],
    loading: false,
    error: null,
    userFound: null,
    repoError: null,
    orgError: null
};

const searchUser = (state = initialState, action) => {
    switch (action.type) {
        case TO_SEARCH :
            return {
                ...state,
                text: action.payload
            };
        case FETCH_REPO_BEGIN:
            // Mark the state as "loading" so we can show a spinner or something
            // Also, reset any errors. We're starting fresh.
            return {
                ...state,
                loading: true,
                repoError: null
            };

        case FETCH_REPO_SUCCESS:
            // All done: set loading "false".
            // Also, replace the items with the ones from the server
            return {
                ...state,
                loading: false,
                repo: action.payload.products
            };

        case FETCH_REPO_FAILURE:
            // The request failed. It's done. So set loading to "false".
            // Save the error, so we can display it somewhere.
            // Since it failed, we don't have items to display anymore, so set `items` empty.
            //
            // This is all up to you and your app though:
            // maybe you want to keep the items around!
            // Do whatever seems right for your use case.
            return {
                ...state,
                loading: false,
                repoError: action.payload.error,
                repo: []
            };
            case FETCH_ORG_BEGIN:
                return {
                    ...state,
                    loading: true,
                    orgError: null
                };
    
            case FETCH_ORG_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    org: action.payload.products
                };
    
            case FETCH_ORG_FAILURE:
                return {
                    ...state,
                    loading: false,
                    orgError: action.payload.error,
                    org: []
                };
            case CHECK_USER_BEGIN:
                return {
                    ...state,
                    loading: true,
                    error: null,
                    userFound: null,
                    profile: [],
                };
    
            case CHECK_USER_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    profile: action.payload.products,
                    userFound: true
                };
    
            case CHECK_USER_FAILURE:
                return {
                    ...state,
                    loading: false,
                    error: action.payload.error,
                    profile: [],
                    userFound: false
                };
            
        default:
            return state;
    }
}
export default searchUser;