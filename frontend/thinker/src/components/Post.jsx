import React from 'react';
import './../css/post.css';

function Post({ data }) {
  const { username, message, date, _id } = data;
  const like = (e) => {
    console.log(e.target.id);
    console.log(localStorage.getItem("username"))

  };
  return (
    <>
      <div className='postbox'>
        <div
          style={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <h3 style={{ textTransform: 'capitalize' }}>{username}</h3>
          <p style={{ fontSize: '12px' }}>{date.slice(11, 16) + " " + date.slice(0, 10)}</p>
        </div>
        <p>{message}</p>

        <p>
          this is the id : {_id}
        </p>
        <div
          className='post-action-bar'
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: '12px',
          }}
        >
          <div className='like' onClick={like} id={_id}>like</div>

          <div className='comments'>comments</div> <div className='share'>share</div>
        </div>
      </div>
    </>
  );
}

export default Post;
