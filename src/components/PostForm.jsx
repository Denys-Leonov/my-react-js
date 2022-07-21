import React, {useState} from "react";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title:'', body:''})
    
    function addNewEvent(e) {
        e.preventDefault()
    

        const newPost = {
            ...post,
            id: Date.now()
        }

        //transmit new_post to the level above
        create(newPost) 
        //after click
        setPost({title:'', body:''})
      }

      
    
    return(
        <form className="myInputFrame">
        <MyInput
          value={post.title}
          onChange={(e) => setPost({...post, title: e.target.value})}
          type="text"
          placeholder="Post title"
        />

        <MyInput
          value={post.body}
          onChange={(e) => setPost({...post, body: e.target.value})}
          type="text"
          placeholder="Post description"
        />
        <MyButton onClick={addNewEvent}>Save</MyButton>
      </form>
        
    )
}

export default PostForm