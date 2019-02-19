const express = require('express');

const app = express();

app.use('/api/posts', (req, res, next) => {
  const posts = [{
    id: "zaq12wsx",
    title: "The first server's post",
    content: "This is from the server!"
  },
  {
    id: "cde34rfv",
    title: "The second server's post",
    content: "This is from the server too!"
  }]
  return res.status(200).json({
    message: "Posts fetched successfully",
    posts: posts
  });
});

module.exports = app;
