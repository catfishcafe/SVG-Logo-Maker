function createDocument(logo) {
  //this was from the mini project, probably don't need it...

  // const taskListItems = tasks.map(
  //   (t) => new TaskListItem([t.text], t.priority)
  // );
  // const taskList = new TaskList(taskListItems).render();

  //testing that the logo object is passing...
  console.log(logo);
  return`
    <svg width="100" height="100" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
    </svg>
  `
}

module.exports = createDocument;
