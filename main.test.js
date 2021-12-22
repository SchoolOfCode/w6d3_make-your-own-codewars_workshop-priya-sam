//👉 Write your tests below here:
import elfReindeerCouples from "./main.js";

test(`check whether the function returns an array of arrays with the reindeers and elves coupled up correctly and alphabetically`, function () {
  // Arrange
  const reindeers = [
    "Dasher",
    "Dancer",
    "Prancer",
    "Vixen",
    "Comet",
    "Cupid",
    "Donner",
    "Blitzen",
    "Rudolph",
  ];
  const elves = [
    "Dobby",
    "Daenys",
    "Plum",
    "Vaegon",
    "Candycane",
    "Chestnut",
    "Doodles",
    "Buddy",
    "Ralphy",
  ];
  const expected = [
    ["Rudolph", "Ralphy"],
    ["Blitzen", "Buddy"],
    ["Comet", "Candycane"],
    ["Cupid", "Chestnut"],
    ["Dancer", "Daenys"],
    ["Dasher", "Dobby"],
    ["Donner", "Doodles"],
    ["Prancer", "Plum"],
    ["Vixen", "Vaegon"],
  ];
  // Act
  const actual = elfReindeerCouples(reindeers, elves);
  // Assert
  expect(actual).toStrictEqual(expected);
});
