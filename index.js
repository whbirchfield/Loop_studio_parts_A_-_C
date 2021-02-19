//Part A #1: Initialize variables to store the following arrays. Remember to use descriptive names.

let proteinOptions = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
let grainOptions = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
let vegetableOptions = ['peas', 'green beans', 'kale','edamame', 'broccoli', 'asparagus'];
let beverageOptions = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
let dessertOptions = ['apple', 'banana', 'more kale','ice cream', 'chocolate', 'kiwi'];

//Part A #2: Construct a for loop that assembles a meal for each of 6 astronauts.

for (i = 0; i < 6; i++){
  let pantry = "";
  pantry = proteinOptions[i] + ", " + grainOptions[i] + ", " + vegetableOptions[i]  + ", " + beverageOptions[i] + ", " + dessertOptions[i];
  console.log(pantry);
}
 

//Part C #5: Using a while loop, ask the user to select the number of meals to assemble.  Validate the input to make sure it is an integer from 1 - 6.


//Skill boosts: 
// a. Use string formatting to print something more interesting than “[‘chicken’, ‘rice’, ‘peas’, ‘juice’, ‘apple’]” for the meal outputs.
// b. Use an “array of arrays” to store the food options in a ‘pantry’.
// c. Modify your code to check each meal for kale.  If present, after the meal output add, “Don’t worry, you can have double chocolate tomorrow.”