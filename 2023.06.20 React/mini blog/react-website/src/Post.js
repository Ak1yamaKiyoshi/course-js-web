import React from 'react';
import './Post.css';


function Post(props) {
  const [title, setTitle] = React.useState('Some title');
  const [text, setText] = React.useState(props.post.text);
  const [author, setAuthor] = React.useState(props.post.author);
  const [date, setDate] = React.useState(new Date().toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));
  const [editNow, setEditNow] = React.useState(false);
  const [canEdit, setCanEdit] = React.useState(true);
  const [imageSrc, setImageSrc] = React.useState(require('./images/example.jpg'))

  function handleEditButtonPress() {
    setEditNow(false)
  }

  function handleInput({ target }) {
    if (target.id === 'title')
      setTitle(target.value)
    else if (target.id === 'text')
      setText(target.value)
    else if (target.id === 'author')
      setAuthor(target.value)
    setDate(new Date().toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
  }

  function view() {
    return (
      <div className='container_bg'>
      <div className='container'>
          <div className='heading'> 
  
          <h1> {title} </h1>
          <p>  {date}   </p>
          </div>
          <div className='image-container'>
          <img src={imageSrc}/>  
          </div>
            
          <div className='article'> 
          <p>  {text}   </p>
          <p id="author">  {author} </p>
          </div>
        {(canEdit) 
          ? (<button onClick={() => { setEditNow(true) }}> Edit </button>)
          : (<div></div> )
        }
      </div>
        </div>
    )
  }

  function edit() {
    return (
      <div className='container_bg'> 
      <div className='container'>
          <div className='heading'> 
          <input id="title" type="text" value={title} onChange={handleInput} />
          <p> {date} </p>
          </div>
          <div className='image-container'>
          <img src={imageSrc}/>  
          </div>
          <div className='article'> 
          <p id="note"> You can edit heading, text and author </p>
          <textarea id="text" type="text" value={text} onChange={handleInput} />
          <input id="author"  type="text" value={author} onChange={handleInput} />
          </div>
          <button onClick={handleEditButtonPress}> View </button>
      </div>
      </div>
    )
  }

  return (
    <div>
      {(editNow) ? edit() : view()}
    </div>
  );
}

export default Post;
