import PostCard from './PostCard.jsx';

function PostList({ posts, onLike, onDelete }) {
  if (posts.length === 0) return <p className="lesson16-empty">No posts yet. Write the first one!</p>;

  return (
    <div>
      {posts.map((post) => <PostCard key={post.id} post={post} onLike={onLike} onDelete={onDelete} />)}
    </div>
  );
}

export default PostList;
