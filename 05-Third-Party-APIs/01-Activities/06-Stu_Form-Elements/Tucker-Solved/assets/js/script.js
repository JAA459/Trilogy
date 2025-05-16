var shoppingFormEl = $("#shopping-form");
var shoppingListEl = $("#shopping-list");

// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`
function handleSubmit(e) {
  // Prevent the browser from refreshing, this is a default feature
  e.preventDefault();

  // Retrieve value from input element
  var shoppingItem = $("input[name='shopping-input']").val();
  // create li and add text to li
  var li = $("<li>").text(shoppingItem);
  // append li to the ul in our index.html
  shoppingListEl.append(li);
  // clear out input
  $("input[name='shopping-input']").val("");
}

// Event Delegation so that we can delete dynamically created elements
shoppingListEl.on("click", "li", function (e) {
  console.log("Click Click Boom!");
  // Remove the element that was clicked
  $(this).remove();
});

// TODO: Add an event listener to the `shoppingFormEl` to handle submission
shoppingFormEl.on("submit", handleSubmit);
