import React from 'react';
import './Post.css';


function Post() {
  const [title, setTitle] = React.useState('Some title');
  const [text, setText] = React.useState('Some text');
  const [author, setAuthor] = React.useState('Some author');
  const [date, setDate] = React.useState(new Date().toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));
  const [canEdit, setCanEdit] = React.useState(false);

  function handleEditButtonPress() {
    setCanEdit(false)
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
      <div className='container'>
        <div className="post">
          <div className='title'>
            <h1> {title}  </h1>
          </div>
          <p className='date'> {date} </p>
          <p> {text} </p>
          <p> {author} </p>
        </div>
        <button onClick={() => { setCanEdit(true) }}> Edit </button>
      </div>
    )
  }

  function edit() {
    return (
      <div className='container'>
        <div className="post_edit">
          
          <input className='titleInput' id="title" type="text" value={title} onChange={handleInput} />
          <label htmlFor="text"> text </label>
          <textarea id="text" className='textInput' type="text" value={text} onChange={handleInput} />
          <label htmlFor="author"> author </label>
          <input id="author" className='author_post' type="text" value={author} onChange={handleInput} />
        </div>
          <button className='viewButton' onClick={handleEditButtonPress}> View </button>
      </div>
    )
  }


  return (
    <div>
      {(canEdit) ? edit() : view()}
    </div>
  );
}

export default Post;
