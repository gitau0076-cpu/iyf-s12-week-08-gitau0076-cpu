function PostCard({ post, onLike, onDelete }) {
  return (
    <article className="lesson16-post">
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <div className="lesson16-meta"><span>By {post.author}</span><span>{post.date}</span></div>
      <div className="lesson16-actions">
        <button className="lesson16-button" type="button" onClick={() => onLike(post.id)}>❤️ {post.likes}</button>
        <button className="lesson16-button lesson16-button-delete" type="button" onClick={() => onDelete(post.id)}>Delete</button>
      </div>
    </article>
  );
}

export default PostCard;
