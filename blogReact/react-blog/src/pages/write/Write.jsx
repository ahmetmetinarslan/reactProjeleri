import React from 'react';
import './write.css';

export default function Write() {
  return (
    <div className='write'>
        <img src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="writeImg" />
        <form className='writeForm'>
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                    <i className="writeIcon fas fa-plus"></i>
                </label>
                <input type="file" id='fileInput' style={{display:'none'}} />
                <input type="text" placeholder='Title' className='writeInput' autoFocus={true} />
            </div>
            <div className="writeFormGroup">
                <textarea placeholder='tell your story...' type="text" className="writeInput writeText"></textarea>
            </div>
        <button className="writeSubmit">Publish</button>
        </form>
    </div>
  )
}
