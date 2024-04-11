import React from 'react';

const BlogPage = () => {
  // Dummy blog post data
  const blogPosts = [
    {
      id: 1,
      title: "New Features Added to our 3D Model Gallery!",
      content: "We're excited to announce the addition of several new features to our 3D model gallery. These include improved search functionality, better categorization, and a smoother user experience. Check out our latest models and let us know what you think!",
      date: "February 15, 2024"
    },
    {
      id: 2,
      title: "Tutorial: Creating Realistic Textures for 3D Models",
      content: "In this tutorial, we'll walk you through the process of creating realistic textures for your 3D models. From understanding texture maps to applying advanced techniques, you'll learn everything you need to know to make your models stand out.",
      date: "February 10, 2024"
    },
    // Add more blog posts here
  ];

  return (
    <div className="container mt-4">
      <h1>Blog / News</h1>
      {blogPosts.map(post => (
        <div key={post.id} className="card mb-4">
          <div className="card-body">
            <h2 className="card-title">{post.title}</h2>
            <p className="card-text">{post.content}</p>
            <p className="card-text"><small className="text-muted">Published on {post.date}</small></p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
