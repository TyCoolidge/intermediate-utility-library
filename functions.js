// Your functions go here!
// Counting cards
//When user types in three numbers, they will produce numbers if they follow certain parameters.
function countingUp(input, input2, input3) {
   var counter = 0;
   if (input > 0 && input < 10) {
      counter++;
   } else {
      counter--;
   }

   if (input2 > 0 && input2 < 10) {
      counter++;
   } else {
      counter--;
   }

   if (input3 > 0 && input3 < 10) {
      counter++;
   } else {
      counter--;
   }

   if (counter > 0) {
      return counter + " Great Score";
   } else {
      return counter + " Low Score, Try Again";
   }
   /// inputs 2, 4 , 10 should equal 1.
}

/// contact lookup for NBA players
var contactInfo = [
   {
      firstName: "Michael",
      lastName: "Jordan",
      jerseyNumber: ["23", " 45"],
      teams: ["Bulls", " Wizards"],
   },
   {
      firstName: "Lebron",
      lastName: "James",
      jerseyNumber: ["23", " 6"],
      teams: ["Lakers", " Cavaliers", " Heat"],
   },
   {
      firstName: "Kevin",
      lastName: "Durant",
      jerseyNumber: ["35", " 7"],
      teams: ["Warriors", " Thunder", " Nets"],
   },
];

function nbaPlayers(name, prop) {
   // for loop will search to see if firstName == user input of name
   //when then search to see if prop fit valid parameters
   for (var i = 0; i < contactInfo.length; i++) {
      if (contactInfo[i].firstName === name) {
         // will return contact prop values, if not, then display this message
         return contactInfo[i][prop] || "No such property";
      }
   }
   return "No such contact";
}

function generateRandom(minimum, maximum) {
   /// user can put in range and random number will generate
   return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}

function removeSplice(index, remove) {
   /// user will be able to splice the arr using their inputs
   const arr = [
      "eggs",
      " milk",
      " bread",
      " meat",
      " cheese",
      " soda",
      " chips",
   ];
   /// index is where to start splice, remove is how many to splice from index start position
   arr.splice(index, remove);
   return arr;
}

function addSplice(index, remove, add1, add2) {
   //user will be able to splice from arr and add own values
   const list = [
      "eggs",
      " milk",
      " bread",
      " meat",
      " cheese",
      " soda",
      " chips",
   ];
   list.splice(index, remove, add1, add2);
   return list;
}
