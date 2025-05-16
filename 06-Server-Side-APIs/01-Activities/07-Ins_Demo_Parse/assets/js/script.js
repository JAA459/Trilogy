fetch("https://api.github.com/orgs/twitter/public_members")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log("Twitter Public Members: Raw data \n----------");
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      const member = data[i];
      console.log(member.login);
      const p = document.createElement("p");
      p.textContent = member.login;
      document.body.append(p);
    }
  });

fetch(
  "http://api.openweathermap.org/data/2.5/weather?q=Phoenix&appid=2083ba99e548234fc6955819000762a8"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data.main.feels_like);
    console.log(data.weather[0].description);
  });
