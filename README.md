### Measurabl Programming Task

##### Goal
The main goal of this task is to have some code for us to talk about during your next interview. We would like to see how you solve technical problems and your approach to the solution. If you're not able to set aside enough time to complete this, please provide a relevant example of some recent code you have written that we can review instead.

##### Task
1. Write a code snippet that will call both end points and generate a table that lists all of the fields (i.e. id, first name, last name, and age).

Example endpoints:
* http://5c37c33f7820ff0014d927c5.mockapi.io/msr/ages returns an array of objects containing a user’s id and age. e.g.

	```[{"id":"1","age":79},{"id":"2","age":12},{"id":"4","age":71},{"id":"5","age":51},{"id":"8","age":14},{"id":"9","age":71},{"id":"10","age":83}]```

* http://5c37c33f7820ff0014d927c5.mockapi.io/msr/names returns an array of objects containing a user’s "id", first 
names: 

	```[{"id":"1","firstName":"Karen","lastName":"Page"},{"id":"2","firstName":"Jessica","lastName":"Jones"},{"id":"3","firstName":"Frank","lastName":"Castle"},{"id":"4","firstName":"Matt","lastName":"Murdock"},{"id":"5","firstName":"Luke","lastName":"Cage"},{"id":"6","firstName":"Danny","lastName":"Rand"},{"id":"7","firstName":"Trish","lastName":"Walker"},{"id":"8","firstName":"Foggy","lastName":"Nelson"},{"id":"9","firstName":"Jeri","lastName":"Hogarth"}]```


2. Create a web application that will call both end points and generate a table that lists all of the fields (i.e. id, first name, last name, and age).
```
| ID | First Name | Last Name | Age |
|----|------------|-----------|-----|
|    |            |           |     |
|    |            |           |     |
```

_All fields should be displayed regardless if the row is complete_. List out any assumptions that you may have. Please feel free to ask any questions. If you have _extra_ time, please unit test your code. If not, please list out the test cases you would test for. Angular is preferred, but you are welcome to use any libraries or frameworks that you're comfortable with.

##### Assumptions
- You can assume that the id columns have a foreign key relationship.
- You cannot assume each id exists in both tables.
- If you have other assumptions, please write them out and send them with your code.

Please respond with an email with a link to both applications, on GitHub, Stack Blitz, CodePen, or any other online code snippet service. Please let us know if this will take you longer than 48 hours to complete.
