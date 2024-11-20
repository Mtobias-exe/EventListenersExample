// Caching DOM Elements
const cList = document.getElementById("commentList");
const cInput = document.getElementById("commentInput");
const cBtn = document.getElementById("addCommentBtn");

// The function to handle adding new comments.
function addComment() {
  const newcomment = cInput.value;

  // This wasn't in the instructions, but
  // we added a guard against empty comments:
  if (newcomment === "") return;

  const li = document.createElement("li"); //creates a list item
  li.textContent = newcomment; //setting the text to the input value

  //add the value to the comment list Element
  // console.log(li);
  cList.appendChild(li);

  //clear the input Element
  cInput.value = "";
  cInput.focus();
}

// Register the event listener.
cBtn.addEventListener("click", addComment);
