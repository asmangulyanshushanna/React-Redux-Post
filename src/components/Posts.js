import React from 'react';
import {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchPost} from '../actions/postAction'


export function Posts(props) {
  useEffect(() => {
    props.fetchPost()
  }, [])
    return props.posts.map(post => (
      <div key={post.id}>
        <h3>
          {post.title}
        </h3>
        <p>
          {post.body}
        </p>
      </div>
    ))
  }


  const mapStateToProps = (state) => console.log(state, 'STATE')||({
    posts: state.posts.items
  })
  
  
  export default connect(mapStateToProps, {fetchPost})(Posts);
  