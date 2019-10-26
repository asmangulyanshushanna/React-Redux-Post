import React from 'react';
import {connect} from 'react-redux';
import {addPost} from '../actions/postAction'

export function PostForm(props) {
 
 
  const onSubmit = (e) => {
      console.log('in submit')
      e.preventDefault();
      const title = e.target.elements.title.value
      const body = e.target.elements.body.value
      const postItem = {
          title,
          body
      }
      props.addPost(postItem);
      document.getElementById('form').reset();
  }
    return(
        <div>
            <h1>Add Post</h1>
            <form id='form' onSubmit={onSubmit}>
                <input type="text" name="title" /><br/>
                <textarea type="text" name="body" /><br/>
                <button>Submit</button>
            </form>
        </div>
        
    )
  }

//   const mapStateToProps = (state) => ({
//     posts: state.posts.items
//   })
  
  export default connect(null, {addPost})(PostForm);