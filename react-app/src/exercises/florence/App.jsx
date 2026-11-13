import Button from './components/Button.jsx';
import Layout from './components/Layout.jsx';
import PostCard from './components/PostCard.jsx';
import './communityhub.css';

function App() {
  const posts = [
    {
      id: 1,
      title: 'Getting Started with React',
      excerpt: 'Components are just functions that return markup.',
      author: 'Amina',
      date: 'Jan 15, 2026',
      featured: true,
    },
    {
      id: 2,
      title: 'Why Flexbox Clicked For Me',
      excerpt: 'It stopped being magic once I understood the main axis.',
      author: 'Brian',
      date: 'Jan 14, 2026',
    },
    {
      id: 3,
      title: 'My First Deployment',
      excerpt: 'Three clicks in GitHub Pages and it was live on the internet.',
      author: 'Cynthia',
      date: 'Jan 13, 2026',
    },
  ];

  return (
    <Layout>
      <h2>Latest Posts</h2>
      {posts.length > 0 ? (
        posts.map((post) => <PostCard key={post.id} {...post} />)
      ) : (
        <p>No posts yet.</p>
      )}
      <div className="button-row">
        <Button text="Load more" />
        <Button text="Delete" variant="danger" />
        <Button />
      </div>
    </Layout>
  );
}

export default App;
