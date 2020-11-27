import React, {useState, useEffect}  from 'react';
import Nav from '../../assets/components/nav';
import api from '../../services/api';


function PostEdit(){
  const [text, setText] = useState('');
  const [displayText, setDisplayText] = useState('');

  useEffect(()=>{
  },[])


  return(
    <div id="postEdit">
      <Nav/>
      <textarea></textarea>
    </div>
  )
}

export default PostEdit;