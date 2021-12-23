//👉 Write your tests below here:
import elfReindeerCouples from "./main.js";


// TEST 1

test(`check whether the function returns an array of arrays with the reindeers and elves all coupled up correctly, alphabetically ordered with Rudolph as index 0`, function () {
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
  const elves = [ {Elf: "Dobby", Reindeer: "Dasher"},
      {Elf: "Daenys", Reindeer: "Dancer"},
      {Elf: "Plum", Reindeer: "Prancer"},
      {Elf: "Vaegon", Reindeer: "Vixen"},
      {Elf: "Candycane", Reindeer: "Comet"},
      {Elf: "Chestnut", Reindeer: "Cupid"},
      {Elf: "Doodles", Reindeer: "Donner"},
      {Elf: "Buddy", Reindeer: "Blitzen"},
      {Elf: "Ralphy", Reindeer: "Rudolph"}]
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

// TEST 2

test(`check whether the function returns an array of arrays with the reindeers coupled up with all substitue elves as the elf array is empty, alphabetically ordered with Rudolph as index 0`, function () {
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
  const elves = []
  const expected = [
    ["Rudolph", "Substitute Elf"],
    ["Blitzen", "Substitute Elf"],
    ["Comet", "Substitute Elf"],
    ["Cupid", "Substitute Elf"],
    ["Dancer", "Substitute Elf"],
    ["Dasher", "Substitute Elf"],
    ["Donner", "Substitute Elf"],
    ["Prancer", "Substitute Elf"],
    ["Vixen", "Substitute Elf"],
  ];
  // Act
  const actual = elfReindeerCouples(reindeers, elves);
  // Assert
  expect(actual).toStrictEqual(expected);
});

// TEST 3

test(`check whether the function returns an array of arrays with the reindeers and elves all coupled up correctly, with substitue elves in place of the missing elves, alphabetically ordered with Rudolph as index 0`, function () {
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
  const elves = [ {Elf: "Substitute Elf", Reindeer: "Dasher"},
      {Elf: "Substitute Elf", Reindeer: "Dancer"},
      {Elf: "Plum", Reindeer: "Prancer"},
      {Elf: "Substitute Elf", Reindeer: "Vixen"},
      {Elf: "Candycane", Reindeer: "Comet"},
      {Elf: "Chestnut", Reindeer: "Cupid"},
      {Elf: "Substitute Elf", Reindeer: "Donner"},
      {Elf: "Buddy", Reindeer: "Blitzen"},
      {Elf: "Ralphy", Reindeer: "Rudolph"}]
  const expected = [
    ["Rudolph", "Ralphy"],
    ["Blitzen", "Buddy"],
    ["Comet", "Candycane"],
    ["Cupid", "Chestnut"],
    ["Dancer", "Substitute Elf"],
    ["Dasher", "Substitute Elf"],
    ["Donner", "Substitute Elf"],
    ["Prancer", "Plum"],
    ["Vixen", "Substitute Elf"],
  ];
  // Act
  const actual = elfReindeerCouples(reindeers, elves);
  // Assert
  expect(actual).toStrictEqual(expected);
});

