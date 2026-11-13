import { useState } from 'react';

function LikeButton() {
  const [likes, setLikes] = useState(0);

  return (
    <section className="lesson16-demo" aria-label="Counter exercise">
      <div>
        <h2>Counter practice</h2>
        <p>Try the state setter and reset it when you’re done.</p>
      </div>
      <div className="lesson16-actions">
        <button className="lesson16-button" type="button" onClick={() => setLikes((prev) => prev + 1)}>❤️ {likes}</button>
        <button className="lesson16-button lesson16-button-quiet" type="button" onClick={() => setLikes(0)}>Reset</button>
      </div>
    </section>
  );
}

export default LikeButton;
