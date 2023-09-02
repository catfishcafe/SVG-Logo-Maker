function createDocument(logo) {
  // const taskListItems = tasks.map(
  //   (t) => new TaskListItem([t.text], t.priority)
  // );
  // const taskList = new TaskList(taskListItems).render();

  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>My Logo</title>
      <link rel="stylesheet" href="../dist/style.css" />
    </head>
    <body>
      <div>
        ${logo}
      </div>
    </body>
  </html>
  `;
}

module.exports = createDocument;
