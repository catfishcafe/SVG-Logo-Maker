function createDocument(logo) {
  // const taskListItems = tasks.map(
  //   (t) => new TaskListItem([t.text], t.priority)
  // );
  // const taskList = new TaskList(taskListItems).render();

  return JSON.stringify(logo);
}

module.exports = createDocument;
