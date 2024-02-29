
//  1.Return the Sum of Two Numbers

// Create a function that takes two numbers as arguments and returns their sum.
// ```````````````````````````````````````````````````````````````````````````````````````````````````````````````````````
// addition(3, 2) ➞ 5

// addition(-3, -6) ➞ -9

// addition(7, 3) ➞ 10

// function addition(a, b) {
// 	return a + b
// }

// 2.Convert Minutes into Seconds

// Write a function that takes an integer minutes and converts it to seconds.
// ```````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````
// convert(5) ➞ 300

// convert(3) ➞ 180

// convert(2) ➞ 120

// function convert(minutes) {
// 	return minutes*60
// }

// 3.Return the Next Number from the Integer Passed

// Create a function that takes a number as an argument, increments the number by +1 and returns the result.
// ``````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````
// addition(0) ➞ 1

// addition(9) ➞ 10

// addition(-3) ➞ -2

// function addition(num) {
// 	return num +1
// }

// 4.Area of a Triangle

// Write a function that takes the base and height of a triangle and return its area.
// ``````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````
// triArea(3, 2) ➞ 3

// triArea(7, 4) ➞ 14

// triArea(10, 10) ➞ 50

// function triArea(base, height) {
// 	return base * height/2
// }

// 5.Convert Age to Days

// Create a function that takes the age in years and returns the age in days.
// `````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````
// calcAge(65) ➞ 23725

// calcAge(0) ➞ 0

// calcAge(20) ➞ 7300

// function calcAge(age) {
// 	return age*365
// }

// 6.Power Calculator

// Create a function that takes voltage and current and returns the calculated power.
// ````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````
// circuitPower(230, 10) ➞ 2300

// circuitPower(110, 3) ➞ 330

// circuitPower(480, 20) ➞ 9600

// function circuitPower(voltage, current) {
// 	return voltage * current 
// }

// 7.Convert Hours into Seconds

// Write a function that converts hours into seconds.
// ``````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````
// howManySeconds(2) ➞ 7200

// howManySeconds(10) ➞ 36000

// howManySeconds(24) ➞ 86400

// function howManySeconds(hours) {
// 	return hours*3600
	
	
// }

// 8.Maximum Edge of a Triangle

// Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.
// ``````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````
// nextEdge(8, 10) ➞ 17

// nextEdge(5, 7) ➞ 11

// nextEdge(9, 2) ➞ 10

// function nextEdge(side1, side2) {
// return	side1 + side2 - 1
	
// }

// 9.Return the Remainder from Two Numbers

// There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.
// ``````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````
// remainder(1, 3) ➞ 1

// remainder(3, 4) ➞ 3

// remainder(-9, 45) ➞ -9

// remainder(5, 5) ➞ 0

// function remainder(x, y) {
// 	return x % y
// }

// 10.Find the Perimeter of a Rectangle

// Create a function that takes length and width and finds the perimeter of a rectangle.
// ````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````
// findPerimeter(6, 7) ➞ 26

// findPerimeter(20, 10) ➞ 60

// findPerimeter(2, 9) ➞ 22

// function findPerimeter(length, width) {
// 	return (length + width) *2
// }

// 11.Sum of Polygon Angles

// Given an n-sided regular polygon n, return the total sum of internal angles (in degrees)
// `````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````
// sumPolygon(3) ➞ 180

// sumPolygon(4) ➞ 360

// sumPolygon(6) ➞ 720

// function sumPolygon(n) {
// 	return (n - 2) * 180 
// }

// 12.Basketball Points

// You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.
// ``````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````
// points(1, 1) ➞ 5

// points(7, 5) ➞ 29

// points(38, 8) ➞ 100

// function points(twoPointers, threePointers) {
// 	return twoPointers*2 + threePointers*3
// }	

// 13.Less Than 100?

// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
// `````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````
// lessThan100(22, 15) ➞ true
// // 22 + 15 = 37

// lessThan100(83, 34) ➞ false
// // 83 + 34 = 117

// lessThan100(3, 77) ➞ true

// ?????????



// 14.Return the First Element in an Array

// Create a function that takes an array containing only numbers and return the first element.
// `````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````
// getFirstValue([1, 2, 3]) ➞ 1

// getFirstValue([80, 5, 100]) ➞ 80

// getFirstValue([-500, 0, 50]) ➞ -500

// function getFirstValue(arr) {
// 	 return arr [0]
// }

// 15.Return Something to Me!

// Write a function that returns the string "something" joined with a space " " and the given argument a.
// ````````````````````````````````````````````````````````````````````````````````````````````````````````````````
// giveMeSomething("is better than nothing") ➞ "something is better than nothing"

// giveMeSomething("Bob Jane") ➞ "something Bob Jane"

// giveMeSomething("something") ➞ "something something"

// ???????????????