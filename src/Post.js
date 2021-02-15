import React, { useState } from 'react';
import './Post.css'
import PostCard from './PostCard';
function Post(props) {
    const [post, getpost] = useState([{ name: 'Dipto', desc: 'lodsfjnsafsjdgnkdsng' }, { name: 'Shanto', desc: 'dfnasgfcdjfkgrn' }]);
    return (<div>
        {
            post.map((post) => (
                <PostCard title={post.name} desc={post.desc} />
            ))
        }
    </div>);
}
export default Post;