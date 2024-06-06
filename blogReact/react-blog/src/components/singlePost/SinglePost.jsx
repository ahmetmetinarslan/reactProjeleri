import "./singlePost.css";

export default function Singlepost() {
  return (
    <div className="singlePost">
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="singlePostImg" />
            </div>
            <h1 className="singlePostTitle">
                Lorem ipsum dolor
                <div className="singlePostEdit">
                    <i className="singlePostIcon far fa-edit"></i>
                    <i className="singlePostIcon far fa-trash-alt"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: <b>Metin</b></span>
                <span className="singlePostDate">1 hour ago</span>
            </div>
            <p className="singlePostDesc">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum enim asperiores, error hic porro laboriosam, quisquam inventore repudiandae repellat quia dignissimos vero quasi omnis quod explicabo natus. Temporibus, repellat cum. 
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum enim asperiores, error hic porro laboriosam, quisquam inventore repudiandae repellat quia dignissimos vero quasi omnis quod explicabo natus. Temporibus, repellat cum.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum enim asperiores, error hic porro laboriosam, quisquam inventore repudiandae repellat quia dignissimos vero quasi omnis quod explicabo natus. Temporibus, repellat cum.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum enim asperiores, error hic porro laboriosam, quisquam inventore repudiandae repellat quia dignissimos vero quasi omnis quod explicabo natus. Temporibus, repellat cum.

            </p>
        </div>
    </div>
  )
}
