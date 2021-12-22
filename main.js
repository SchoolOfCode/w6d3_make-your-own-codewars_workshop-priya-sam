/* 
👉 Write your kata here!
*/

/*

Help Save Christmas 

The north pole is in a bit of a mess and Santa needs your help with making sure the elves are matcheed up with their reindeer to gather all your Christmas gifts for Santa sleigh.

Your task:

You will get two array inputs. 
   > First Input: an array of Santa's 9 reindeers 
   reindeers = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen", "Rudolph" ]
   > Second Input: an array containing Santa's elves
   elves = ["Dobby", "Daenys", "Plum", "Vaegon", "Candycane", "Chestnut", "Doodles", "Buddy", "Ralphy" ]

Match up each elf with its reindeer alphabetically (Santa runs a tight sleigh). 

Return the coupled up elves and reindeers in an array of arrays. Remember however that as Santa's main helper, Rudolph must always lead the pack! Make sure he and his Elf pair are at the top of the array. 



> additional step - put rudolph as the pack leader
> sub elf (undefined)

expected = 
[
   ["Blitzen" ,"Buddy"],
   ["Comet","Candycane"],
   ["Cupid","Chestnut"],
   ["Dancer","Daenys"],
   ["Dasher", "Dobby"],
   ["Donner" ,"Doodles"],
   ["Prancer" ,"Plum"],
   ["Rudolph" ,"Ralphy"],
   ["Vixen" ,"Vaegon"],
]

*/

//👉 Write the function your CodeWarriors will start with below here:

export default function elfReindeerCouples(reindeers, elves) {
  // Your code goes here
  const output = [
    ["Blitzen", "Buddy"],
    ["Comet", "Candycane"],
    ["Cupid", "Chestnut"],
    ["Dancer", "Daenys"],
    ["Dasher", "Dobby"],
    ["Donner", "Doodles"],
    ["Prancer", "Plum"],
    ["Rudolph", "Ralphy"],
    ["Vixen", "Vaegon"],
  ];
  return output;
}
