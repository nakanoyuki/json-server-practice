import React, { useState } from "react";
import axios, { AxiosResponse } from "axios";

const postsUrl = "http://localhost:3100/posts";

type Post = {
  id: number;
  title: string;
  author: string;
};

const HttpSample: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const onFetchClick = async () => {
    const response: AxiosResponse<Post[]> = await axios.get(postsUrl);
    setPosts(response.data);
  };
  return (
    <>
      <button onClick={onFetchClick}>
        APIモックサーバーより、postsデータ取得
      </button>
      {postsUrl.length != 0 && (
        <>
          <ul>
            {posts.map((post) => (
              <li
                key={post.id}
              >{`[id]:${post.id} [title]:${post.title} [author]:${post.author}`}</li>
            ))}
          </ul>
          <p> {posts.length}人</p>
        </>
      )}
    </>
  );
};

export default HttpSample;
