/* 

You will be given an array of events, which are represented by strings. The strings are dates in HH:MM:SS format.

It is known that all events are recorded in chronological order and two events could not occur in the same second. Define the minimum number of days during which the log is written.

Example:
Input -> ["00:00:00", "00:01:11", "02:15:59", "23:59:58", "23:59:59"]
Output -> 1

Input -> ["12:12:12"]
Output -> 1

Input -> ["12:00:00", "23:59:59", "00:00:00"]
Output -> 2

*/

function checkLogs(log) {

  // We start the counter from one as if we have input it means we have at least one day. 
  let daysCount = 1; 

  // Brute force through all possible scenarios for hours, minutes and seconds. 
  for (let i = 0; i < log.length - 1; i++) {
    
    let currentDayHours = Number(log[i].split(":")[0]);
    let nextDayHours = Number(log[i + 1].split(":")[0]);

    let currentDayMinutes = Number(log[i].split(":")[1]);
    let nextDayMinutess = Number(log[i + 1].split(":")[1]);

    let currentDaySeconds = Number(log[i].split(":")[2]);
    let nextDaySeconds = Number(log[i + 1].split(":")[2]);

    // Check the hour of next event for early exit 
    if (nextDayHours < currentDayHours) {
      daysCount++;
    }

    // If hour is the same, check the minutes
    if (nextDayHours === currentDayHours) {
      if (nextDayMinutess < currentDayMinutes) {
        daysCount++;
      }
    }

    // if both hour and minutes are the same, check seconds
    if (nextDayHours === currentDayHours && nextDayMinutess === currentDayMinutes) {
      if (nextDaySeconds < currentDaySeconds) {
        daysCount++;
      }
    }

    // Catch edge case where we have to exact same timestamps 
    if (nextDayHours === currentDayHours && nextDayMinutess === currentDayMinutes && nextDaySeconds === currentDaySeconds) {
      daysCount++;
    }
  }

  return daysCount;
}
checkLogs(["12:00:00", "23:59:59", "00:00:00"]);