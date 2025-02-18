import React, { useState } from 'react';
import Post from '../Post';
import Header from '../Header';
import { ThemeProvider } from '../../context/ThemeContext';

import { Title } from './styles';

function App() {
    const [posts, setPosts] = useState([
        { id: Math.random(), title: "Título#01", subtitle: "Subtítulo#01", likes: 10, read: false, removed: true },
        { id: Math.random(), title: "Título#02", subtitle: "Subtítulo#02", likes: 20, read: true, removed: false},
        { id: Math.random(), title: "Título#03", subtitle: "Subtítulo#03", likes: 30, read: false, removed: false },
        { id: Math.random(), title: "Título#04", subtitle: "Subtítulo#04", likes: 40, read: false, removed: false },
    ]);

    function handleRefresh() {
        setPosts((prevState) => [
            ...prevState,
            {
                id: Math.random(),
                title: `Título#0${prevState.length + 1}`,
                subtitle: `Subtítulo#0${prevState.length + 1}`
            }
        ]);
    }

    function handleRemovePost(postId) {
        setPosts((prevState) => prevState.map(
            post => (
                post.id == postId 
                ? { ...post, removed: true }
                : post
            )
        ));
    }

    return (
        <ThemeProvider>
            <Header title = "Blog">
                <Title as="h2">Posts da Semana</Title>
                <button onClick={handleRefresh}>Atualizar</button>
            </Header>

            {posts.map(post => (
                <Post
                    key={post.id}
                    onRemove = {handleRemovePost}
                    post = {post}
                />
            ))}
        </ThemeProvider>
    );
}

export default App;