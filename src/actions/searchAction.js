export const FETCH_REPO_BEGIN   = 'FETCH_REPO_BEGIN';
export const FETCH_REPO_SUCCESS = 'FETCH_REPO_SUCCESS';
export const FETCH_REPO_FAILURE = 'FETCH_REPO_FAILURE';
export const FETCH_ORG_BEGIN   = 'FETCH_ORG_BEGIN';
export const FETCH_ORG_SUCCESS = 'FETCH_ORG_SUCCESS';
export const FETCH_ORG_FAILURE = 'FETCH_ORG_FAILURE';
export const TO_SEARCH = 'TO_SEARCH';

export const searchUsername = text => {
    return  {
        type: 'TO_SEARCH',
        payload: text
    }
}

export function fetchUserRepo(text) {
    return dispatch => {
      dispatch(fetchRepoBegin());
      return fetch('https://api.github.com/users/' +text + '/repos')
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
          dispatch(fetchRepoSuccess(json));
          console.log(json)
          return json;
        })
        .catch(error => dispatch(fetchRepoFailure(error)));
    };
  }

export function fetchUserOrg(text) {
  return dispatch => {
    dispatch(fetchOrgBegin());
    return fetch('https://api.github.com/users/' +text + '/orgs')
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchOrgSuccess(json));
        return json.products;
      })
      .catch(error => dispatch(fetchOrgFailure(error)));
  };
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const fetchRepoBegin = () => ({
  type: FETCH_REPO_BEGIN
});

export const fetchRepoSuccess = products => ({
  type: FETCH_REPO_SUCCESS,
  payload: { products }
});

export const fetchRepoFailure = error => ({
  type: FETCH_REPO_FAILURE,
  payload: { error }
});


export const fetchOrgBegin = () => ({
  type: FETCH_ORG_BEGIN
});

export const fetchOrgSuccess = products => ({
  type: FETCH_ORG_SUCCESS,
  payload: { products }
});

export const fetchOrgFailure = error => ({
  type: FETCH_ORG_FAILURE,
  payload: { error }
});