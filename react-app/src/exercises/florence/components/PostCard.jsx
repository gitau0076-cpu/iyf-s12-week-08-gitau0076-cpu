function PostCard({ title, excerpt, author, date, featured = false }) {
  return (
    <article className="post-card">
      <h3>{title}</h3>
      {featured && <span className="featured">⭐ Featured</span>}
      <p>{excerpt}</p>
      <div className="post-meta">
        <span>By {author}</span>
        <span>{date}</span>
      </div>
    </article>
  );
}

export default PostCard;
