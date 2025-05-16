var userContainer = document.getElementById("users");
var fetchButton = document.getElementById("fetch-button");

function getApi() {
  var requestUrl = "https://api.github.com/users?per_page=5";

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      // Use the console to examine the response

      // for (let i = 0; i < data.length; i++) {
      //   const user = data[i];
      //   console.log(user.html_url)
      //   console.log(user.login)
      // }
      
      // Loop through the data and generate your HTML
      data.forEach(function (user) {
        // Create variables to store user data
        const img = user.avatar_url;
        const url = user.html_url;
        const login = user.login;

        // Create variables to store HTML elements
        const $img = document.createElement("img");
        const $url = document.createElement("a");

        // Set HTML elements properties
        $img.setAttribute("src", img);
        $url.setAttribute("href", url);
        // Set a tags text content
        $url.textContent = login;

        userContainer.append($img, $url);
      });
    });
}
fetchButton.addEventListener("click", getApi);
