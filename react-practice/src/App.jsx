import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function Avatar(props) {
  return (
    <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />  
    );
}

function UserInfo(props) {
  return (
    <div className="UserInfo"> <Avatar user={props.user} /> <div className="UserInfo-name"> {props.user.name} </div></div>  
    );
}

function formatDate(date) {
  return date.toLocaleDateString();
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0)
  const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'http://placekitten.com/g/64/64'
    }
  };
 
  return (
    <>
    <div>Hello word
    </div>
    <Welcome name="sakib"/>
    <Comment
    date={comment.date}
    text={comment.text}
    author={comment.author} />
    </>
  )
}

export default App
