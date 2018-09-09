module.exports = {
  posts: (req, res) => {
    res.send({
      posts: [
        { id: "1", title: "Title 1", body: "abc" },
        { id: "2", title: "Title 2", body: "xyz" },
      ]
    });
  },
};