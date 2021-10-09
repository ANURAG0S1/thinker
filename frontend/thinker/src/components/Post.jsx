import React from 'react';
import './../css/post.css';

function Post({ data }) {
  const { username, message, date } = data;
  const like = () => {
    console.log('logging this via click');
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
        <div
          className='post-action-bar'
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: '12px',
          }}
        >
          <div className='like'>like</div>
          <div className='unlike' onClick={() => like()}>
            unlike
          </div>
          <div className='comments'>comments</div>
        </div>
      </div>
    </>
  );
}

export default Post;
