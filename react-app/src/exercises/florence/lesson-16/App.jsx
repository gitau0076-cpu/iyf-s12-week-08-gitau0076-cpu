import { useState } from 'react';
import CreatePost from './components/CreatePost.jsx';
import LikeButton from './components/LikeButton.jsx';
import PostList from './components/PostList.jsx';
import Stats from './components/Stats.jsx';
import './lesson-16.css';

const initialPosts = [
  { id: 1, title: 'Getting Started with React', content: 'Components are just functions that return markup.', author: 'Amina', date: 'Jan 15, 2026', likes: 0 },
  { id: 2, title: 'Why Flexbox Clicked For Me', content: 'It stopped being magic once I understood the main axis.', author: 'Brian', date: 'Jan 14, 2026', likes: 0 },
  { id: 3, title: 'My First Deployment', content: 'Three clicks in GitHub Pages and it was live on the internet.', author: 'Cynthia', date: 'Jan 13, 2026', likes: 0 },
];

function App() {
  const [posts, setPosts] = useState(initialPosts);
  const totalLikes = posts.reduce((sum, post) => sum + post.likes, 0);

  function handleLike(id) {
    setPosts((current) => current.map((post) => post.id === id ? { ...post, likes: post.likes + 1 } : post));
  }

  function handleAddPost(form) {
    const newPost = {
      id: Date.now(),
      title: form.title.trim(),
      content: form.content.trim(),
      author: 'You',
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      likes: 0,
    };
    setPosts((current) => [newPost, ...current]);
  }

  function handleDelete(id) {
    setPosts((current) => current.filter((post) => post.id !== id));
  }

  return (
    <main className="lesson16-app">
      <header className="lesson16-header">
        <p className="lesson16-eyebrow">Week 8 · Lesson 16</p>
        <h1>CommunityHub</h1>
        <p>Share what you’re learning with the community.</p>
      </header>

      <section className="lesson16-content" aria-label="Community posts">
        <LikeButton />
        <CreatePost onAddPost={handleAddPost} />
        <Stats postCount={posts.length} totalLikes={totalLikes} />
        <h2>Latest Posts</h2>
        <PostList posts={posts} onLike={handleLike} onDelete={handleDelete} />
      </section>
    </main>
  );
}

export default App;
