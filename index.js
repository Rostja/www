
/*
    * addEventListener('event', function)
    * handle = zprávce nějaké funkce/event/controlleru a nebo services
 */

/**
 *
 * @param e {Event}
 */
function onLoad(e) {

  const taskPool = document.querySelector("#myTask");
  const taskTitle = document.querySelector("#add-task");
  const taskDescription = document.querySelector("#add-task-description");
  const taskForm = document.querySelector("#task-form");

  if (!(taskPool && taskTitle && taskForm && taskDescription)) {
      throw new Error("ElementException: taskPool(#myTask) or taskTitle(#add-task) or taskForm(#task-form) doesn't exists")
  }

  taskForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const task = {
          title: taskTitle.value,
          description: taskDescription.value,
      }
      handleAddTask(event, task, taskPool);
  });

  taskPool.addEventListener('click', (e) => {
      if (e.target.classList.contains("done-button")) {
          handleFinalizeTask(e);
      } else if (e.target.classList.contains("delete-button")) {
          handleRemoveTask(e);
      } else {
          //console.warn("Incorrect task event: " + e)
      }
  })


}

/**
*
* @param e {Event}
* @param task {{title: string, description: string}}
* @param pool {Element}
*/
function handleAddTask(e, task, pool) {
  const li = document.createElement("LI");

  if (task.title.length < 4) {
      alert("Title need to have more than 4 characters");
      return;
  }

  if (task.title.length < 2) {
      alert("Description need to have more than 2 characters");
      return;
  }

  /**
   * @type {Element[]}
   */
  const items = [...pool.querySelectorAll("li")];

  const same = items.find((element) => {
      let title = element.querySelector('.info h3').innerText;
      return title === task.title
  })

  if (same) {
      alert("Title need to be unique!");
      return;
  }


  li.innerHTML = `
      <div class="info">
          <h3>${task.title}</h3>
          <p>${task.description}</p>
      </div>
      <span>
          <button class="done-button">Done</button>
          <button class="delete-button">Delete</button>
      </span>
  `;

  pool.append(li);
  e.preventDefault()
}

/**
*
* @param e {Event}
*/
function handleRemoveTask(e) {

  const closestLI = e.target.closest('LI');

  if (!closestLI) {
      throw new Error("ElementException: Query result of closest LI doesn't find anything");
  }

  closestLI.remove();
}

/**
*
* @param e {Event}
*/
function handleFinalizeTask(e) {

  const closestLI = e.target.closest('LI')?.querySelector('div.info');

  if (!closestLI) {
      throw new Error("ElementException: Query result of closest LI doesn't find anything");
  }

  if (!closestLI.classList.contains('done-task')) {
      closestLI.classList.add('done-task');
      console.log(closestLI);
  }
}

document.addEventListener("DOMContentLoaded", onLoad);