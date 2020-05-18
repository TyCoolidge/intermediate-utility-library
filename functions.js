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
