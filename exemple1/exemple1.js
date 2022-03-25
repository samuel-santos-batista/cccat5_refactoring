// calculate ride
const OVERNIGHT_FARE = 3.90
const SUNDAY_FARE = 2.90
const NORMAL_FARE = 2.10

const isOvernight = (date) => date.getHours() >= 22
const isSunday = (date) => date.getDay() === 0

exports.calculeRide = function(distance, date) {
  if (isOvernight(date)) return distance * OVERNIGHT_FARE;  
  if(isSunday(date)) return distance * SUNDAY_FARE;
  return distance * NORMAL_FARE;
}