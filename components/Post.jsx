import React from "react";
import {
  BookmarkOutline,
  ChatOutline,
  DotsHorizontalOutline,
  HeartOutline,
  EmojiHappyOutline,
  PaperAirplaneOutline,
  HeartSolid,
} from "heroicons-react";
const Post = ({ id, username, userImg, img, caption }) => {
  return (
    <div className="bg-white my-7 border rounded-sm">
      {/* header */}
      <div className="flex items-center p-2 ">
        <img
          className="rounded-full h-12 w-12 object-contain border p-1 mr-3"
          src={userImg}
          alt="user image"
        />
        <p className="flex-1 font-semibold">{username}</p>
        <DotsHorizontalOutline />
      </div>
      {/* img */}
      <img src={img} className="object-cover w-full" alt="" />

      {/* buttons */}
      <div className="flex items-center justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <HeartOutline className="btn" />
          <ChatOutline className="btn" />
          <PaperAirplaneOutline className="btn" />
        </div>
        <BookmarkOutline className="btn" />
      </div>
      {/* caption */}
      <p className="p-5 truncate">
        <span className="font-semibold mr-1">{username} </span>
        {caption}
      </p>
      {/* comments */}

      {/* input box */}
      <form className="flex items-center p-2">
        <EmojiHappyOutline className="h-7" />
        <input
          type="text"
          className="border-none flex-1 focus:ring-0 outline-none"
          placeholder="Add a comment..."
        />
        <button className="font-semibold text-blue-400 ">Post</button>
      </form>
    </div>
  );
};

export default Post;
