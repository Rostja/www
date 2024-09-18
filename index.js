document.addEventListener("DOMContentLoaded", function () {
  const tasks = document.querySelector("#myTask");

  const text = document.querySelector("#add-task");

  const button = document.querySelector(".add-button");
  if (button && text && tasks) {
    console.log(button, text, tasks);
    button.addEventListener("click", (e) => {
        e.preventDefault()
      const li = document.createElement("LI");

      li.innerHTML = `<h3>${text.value}</h3>
            <p><strong>Hello</strong> everyone !</p>
            <span>
                <button class="done-button">Done</button>
                <button class="delete-button">Delete</button>
            </span>`;

            tasks.append(li)
    });
  }
});

