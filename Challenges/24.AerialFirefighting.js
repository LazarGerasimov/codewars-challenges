/*You are an aerial firefighter (someone who drops water on fires from above in order to extinguish them) and your goal is to work out the minimum amount of bombs you need to drop in order to fully extinguish the fire (the fire department has budgeting concerns and you can't just be dropping tons of bombs, they need that money for the annual christmas party).

The given string is a 2D plane of random length consisting of two characters:

x representing fire
Y representing buildings.
Water that you drop cannot go through buildings and therefore individual sections of fire must be addressed separately.

Your water bombs can only extinguish contiguous sections of fire up to a width (parameter w).

You must return the minimum number of waterbombs it would take to extinguish the fire in the string.

Note: all inputs will be valid. 

Examples: 
"xxYxx" and w = 3      -->  2 waterbombs needed
"xxYxx" and w = 1      -->  4
"xxxxYxYx" and w = 5   -->  3
"xxxxxYxYx" and w = 2  -->  5 
*/

function solve(area, width) {

  // initiate a counter
  let waterbombsNeeded = 0;
  // split fire zones by Y (buildings)
  let areas = area.split("Y");
  // catch edge case where the input is just 1 building
  if (area === "Y") return 0;

  // check if all split areas are within the reach of the water bomb
  if (areas.every(x => x.length <= width)) {
    //if true, the bombs needed will be equal to the amount of fire zones (split areas)
    return areas.length; 
  } else {
    for (let fire of areas) {
      // check for fire zones bigger than the water bomb range
      if (fire.length > width) {
        if (fire.length % width == 0) {
          waterbombsNeeded += fire.length / width;
        } else {
          waterbombsNeeded += Math.floor(fire.length / width) + 1;
        }
      } else {
        waterbombsNeeded++;
      }
    }
  }

  return waterbombsNeeded;
}
solve("xxYxx", 3);