import { FETCH_POST, NEW_POST } from '../actions/constants';

export const fetchPost = () => dispatch =>  {
    return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(request => request.json())
    .then(post => 
        dispatch ({
        type: FETCH_POST,
        payload: post
    }));
}


export const addPost = (newPost) => dispatch => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(newPost)
      })
      .then(request => request.json())
      .then(response => 
        dispatch({
            type: NEW_POST,
            payload: response
        }))
}