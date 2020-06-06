export const CHECK_USER_BEGIN   = 'CHECK_USER_BEGIN';
export const CHECK_USER_SUCCESS = 'CHECK_USER_SUCCESS';
export const CHECK_USER_FAILURE = 'CHECK_USER_FAILURE';

export function checkUser(text) {
    return dispatch => {
      dispatch(checkUserBegin());
      return fetch('https://api.github.com/users/' +text)
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
          dispatch(checkUserSuccess(json));
          return json;
        })
        .catch(error => dispatch(checkUserFailure(error)));
    };
  }

  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }

  export const checkUserBegin = () => ({
    type: CHECK_USER_BEGIN
  });
  
  export const checkUserSuccess = products => ({
    type: CHECK_USER_SUCCESS,
    payload: { products }
  });
  
  export const checkUserFailure = error => ({
    type: CHECK_USER_FAILURE,
    payload: { error }
  });