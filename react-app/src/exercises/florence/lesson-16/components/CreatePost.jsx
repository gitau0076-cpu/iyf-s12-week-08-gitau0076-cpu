import { useState } from 'react';

function CreatePost({ onAddPost }) {
  const [form, setForm] = useState({ title: '', content: '' });

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!form.title.trim()) return;
    onAddPost(form);
    setForm({ title: '', content: '' });
  }

  return (
    <form className="lesson16-form" onSubmit={handleSubmit}>
      <h2>Write a post</h2>
      <label htmlFor="lesson16-title">Title</label>
      <input id="lesson16-title" name="title" value={form.title} onChange={handleChange} placeholder="What did you learn?" />
      <label htmlFor="lesson16-content">Content</label>
      <textarea id="lesson16-content" name="content" rows="3" value={form.content} onChange={handleChange} placeholder="Share a few details…" />
      <button className="lesson16-button" type="submit">Publish post</button>
    </form>
  );
}

export default CreatePost;
