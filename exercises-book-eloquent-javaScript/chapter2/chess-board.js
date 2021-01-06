// third exercise from eloquent JavaScript - chapter 2

let size = 8;
let pattern = "# # # #\n";

for (let number = 0; number < size; number++)
{
  if (number % 2 != 0)
    console.log(" " + pattern);
  else 
    console.log(pattern);
}
