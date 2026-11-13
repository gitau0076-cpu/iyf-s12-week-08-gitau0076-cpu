function Stats({ postCount, totalLikes }) {
  return <p className="lesson16-stats" aria-live="polite">{postCount} {postCount === 1 ? 'post' : 'posts'} · {totalLikes} total likes</p>;
}

export default Stats;
