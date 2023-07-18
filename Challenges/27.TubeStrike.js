/* 

Tube strike options calculator

The sweaty bus ride

There is a tube strike today so instead of getting the London Underground home you have decided to take the bus. It's a hot day and you have been sitting on the bus for over an hour, but the bus is hardly moving. Your arm is sticking to the window and sweat drips off your nose as you try to read your neighbour's book when you say to yourself, "This is ridiculous. I could have walked faster than this!" Suddenly you have an idea for an app that helps people decide whether to walk or take the bus home when the London Underground is on strike.
You rush home (relatively speaking) and begin to define the function that will underpin your app.

Function specification:

You must create a function which takes three parameters; walking distance home, distance the bus must travel, and the combined distance of walking from the office to the bus stop and from the bus stop to your house. All distances are in kilometres.
So for example, if your home is 5km away by foot, and the bus that takes you home travels 6km, but you have to walk 500 metres to the bus stop to catch it and 500 metres to your house once the bus arrives (i.e. 1km in total), which is faster, walking or taking the bus?

Example - Which of these is faster?:

Start---Walk 5km--->End
Start---Walk 500m---Bus 6km---Walk 500m--->End
Walking speed and bus driving speed have been given to you as two pre-loaded variables ($global_variables in Ruby).

walk = 5 (km/hr) bus = 8 (km/hr)

The function must return the fastest option, either "Walk" or "Bus". If the walk is going to be over 2 hours, the function should recommend that you take the bus. If the walk is going to be under 10 minutes, the function should recommend that you walk. If both options are going to take the same amount of time, the function should recommend that you walk */

function calculator(distance, busDrive, busWalk)  {

  let busSpeed = 8; // kilometers per hour
  let walkSpeed = 5; // kilometers per hour

  let timeNeededIfWalking = distance / walkSpeed;

  let TenMinutes = 1 / 6; // 10 minutes from 60 = 0.16; 

  // catch early exit if walking time is less than 10 minutes
  if (timeNeededIfWalking < TenMinutes) {
    console.log("Walk","Wow. Seriously? How lazy are you?");
    return "Walk";
  }

  // catch early exit if walking time is more than 2 hours
  if (timeNeededIfWalking > 2) {
    console.log("Bus","Don't be crazy! You'll destroy your lovely shoes!");
    return "Bus";
  }

  let timeNeededToWalkToTheBusStop = busWalk / 5;
  let timeNeededByBus = busDrive / busSpeed;
  let totalTimeByBus = timeNeededToWalkToTheBusStop + timeNeededByBus;

  if (totalTimeByBus > timeNeededIfWalking) {
    console.log("Walk","Come on, you can walk this!");
    return "Walk";
  } else if (totalTimeByBus === timeNeededIfWalking) {
    console.log("Walk","If the time is exactly the time, you should walk!");
    return "Walk";
  } else {
    console.log("Bus","The bus should win this time!");
    return "Bus";
  }
  
  
}
calculator(5, 6, 1);