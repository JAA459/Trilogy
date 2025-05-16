const moviePatrons = [
  { name: "Tom", age: 16 },
  { name: "Ashley", age: 31 },
  { name: "Sarah", age: 18 },
  { name: "Alvin", age: 22 },
  { name: "Cherie", age: 14 },
  { name: "Malcolm", age: 15 },
];

// Create a new array of id'd patrons
moviePatrons
  .map((patron) => {
    const data = { ...patron };
    data.canWatchRatedR = patron.age > 17;
    return data;
  })
  // filter out everyone who cant see a rated r movie
  .filter((patron) => patron.canWatchRatedR)
  // print out there names with a nice greetingf
  .forEach((patron) => console.log("Enjoy the show " + patron.name + "!"));
