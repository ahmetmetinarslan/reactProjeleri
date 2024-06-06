import React from 'react';
import { Link } from 'react-router-dom';
import "./post.css";

export default function Post() {
  const currentUser = false;
  return (
    <div className='post'>
        <img className='postImg' src="https://images.pexels.com/photos/2668314/pexels-photo-2668314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <Link to="/post/:postId" className='link'>
              <span className="postTitle">
                  Lorem ipsum dolor sit amet
              </span>
            </Link>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam hic voluptatum debitis nobis. Id cupiditate, deleniti debitis ullam odit modi, sint soluta adipisci possimus velit aut voluptatem dicta sit nostrum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam hic voluptatum debitis nobis. Id cupiditate, deleniti debitis ullam odit modi, sint soluta adipisci possimus velit aut voluptatem dicta sit nostrum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam hic voluptatum debitis nobis. Id cupiditate, deleniti debitis ullam odit modi, sint soluta adipisci possimus velit aut voluptatem dicta sit nostrum.
        </p>
    </div>
  )
}
