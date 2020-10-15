import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "../../store/actions/postActions";
import PostCard from "../../components/PostCard/PostCard";

const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.posts);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    return(
        <>
            <div>
                {posts.map(post => {
                    return <PostCard
                        key={post.id}
                        name={post.name}
                        message={post.message}
                        image={post.image}
                        data={post.data}
                    />
                })}
            </div>
            </>
    );
};

export default Posts;