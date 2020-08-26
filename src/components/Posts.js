import React, { useContext, Fragment } from 'react';
import postContext from '../context/posts/postContext';
import Post from './Post';

const Posts = () => {

    // EXTRAER POSTS DEL INITIAL STATE
    const postsContext = useContext(postContext);
    const { posts,  getPosts, } = postsContext;

    getPosts();


    return (
        <div className="posts">
            {posts.map(post => (
                <Fragment>
                 <Post
                    key={post.id}
                    post={post}
                    firstName={post.owner.firstName}
                    lastName={post.owner.lastName}
                    img={post.image}
                    tags={post.tags}
                    text={post.text}
                    date={post.publishDate}
                    link={post.link}
                    likes={post.likes}
                    title={post.owner.title}
                    email={post.owner.email}
                    picture={post.owner.picture}
                 />       
                </Fragment>
            ))}


        </div>
    );
}

export default Posts;
