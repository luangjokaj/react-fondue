module.exports = {
  v1: (req, res) => {
    res.send({
      Posts: [
        { id: "1", title: "Title 1", body: "abc" },
        { id: "2", title: "Title 2", body: "xyz" },
      ]
    });
  },
};