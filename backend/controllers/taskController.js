const getTasks = (req, res) => {
  const tasks = [
    {
      id: 1,
      title: "Learn Express",
      completed: false,
    },
    {
      id: 2,
      title: "Build TaskNest",
      completed: false,
    },
  ];

  res.json(tasks);
};

module.exports = {
  getTasks,
};