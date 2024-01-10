<h1>0x04-TypeScript</h1>

<p>Intoduction to Typescript.</p><br><br>
<h1>Resources</h1>
<li><a href="https://intranet.alxswe.com/rltoken/waTSa9Mguj912pel9On57w">TypeScript in 5 minutes</a></li>
<li><a href="https://intranet.alxswe.com/rltoken/iPO8DlHCGzc1jnojLoP9HA">TypeScript documentation</a></li>

<h1>Tasks</h1>
<h3>0. Creating an interface for a student</h3>
<p>
Copy the following configuration files (provided above) into the task_0 directory: package.json, .eslintrc.js, tsconfig.json, webpack.config.js</p>
<p>
Write your code in the main.ts file:</p>

<li>Write an interface named Student that accepts the following elements: firstName(string), lastName(string), age(number), and location(string)</li>
<li>Create two students, and create an array named studentsList containing the two variables</li>
<li>Using Vanilla Javascript, render a table and for each elements in the array, append a new row to the table</li>
<li>Each row should contain the first name of the student and the location</li>
Requirements:

<li>When running, Webpack should return No type errors found.</li>
<li>Every variable should use TypeScript when possible.</li>
<b>Repo:</b>

<li>GitHub repository: alx-backend-javascript</li>
<li>Directory: 0x04-TypeScript</li>
<li>File: task_0/js/main.ts, task_0/package.json, task_0/.eslintrc.js, task_0/tsconfig.json, task_0/webpack.config.js</li>
  
<h3>1. Let's build a Teacher interface</h3>
<p>
Create a directory task_1 and copy these configuration files into this folder: package.json, tsconfig.json, webpack.config.js</p>

<li>firstName(string) and lastName(string). These two attributes should only be modifiable when a Teacher is first initialized</li>
<li>fullTimeEmployee(boolean) this attribute should always be defined</li>
<li>yearsOfExperience(number) this attribute is optional</li>
<li>location(string) this attribute should always be defined</li>
<li>Add the possibility to add any attribute to the Object like contract(boolean) without specifying the name of the attribute</li>
Example:
<pre>
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

// should print
// Object
// contract: false
// firstName: "John"
// fullTimeEmployee: false
// lastName: "Doe"
// location: "London"
</pre>
<b>Repo:</b>

<li>GitHub repository: alx-backend-javascript</li>
<li>Directory: 0x04-TypeScript</li>
<li>File: task_1/js/main.ts, task_1/webpack.config.js, task_1/tsconfig.json, task_1/package.json</li>
 
<h3>2. Extending the Teacher class</h3>
<p>
Write an interface named Directors that extends Teacher. It requires an attribute named numberOfReports(number)</p>

Example:
<pre>
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

// should print
// Object
// firstName: "John"
// fullTimeEmployee: true
// lastName: "Doe"
// location: "London"
// numberOfReports: 17
</pre>
<b>Repo:</b>

<li>GitHub repository: alx-backend-javascript</li>
<li>Directory: 0x04-TypeScript</li>
<li>File: task_1/js/main.ts</li>
 
<h3>3. Printing teachers</h3>
<p>
Write a function printTeacher:</p>

<li>It accepts two arguments firstName and lastName</li>
<li>It returns the first letter of the firstName and the full lastName</li>
<li>Example: printTeacher("John", "Doe") -> J. Doe</li>
Write an interface for the function named printTeacherFunction.

<b>Repo:</b>

<li>GitHub repository: alx-backend-javascript</li>
<li>Directory: 0x04-TypeScript</li>
<li>File: task_1/js/main.ts</li>
 
<h3>4. Writing a class</h3>
<p>
Write a Class named StudentClass:</p>

<li>The constructor accepts firstName(string) and lastName(string) arguments</li>
<li>The class has a method named workOnHomework that return the string Currently working</li>
<li>The class has a method named displayName. It returns the firstName of the student</li>
<li>The constructor of the class should be described through an Interface</li>
<li>The class should be described through an Interface</li>
Requirements:

<li>You can reuse the Webpack configuration from the previous exercise to compile the code.</li>
<li>When running npm run build, no TypeScript error should be displayed.</li>
<li>Every variable should use TypeScript when possible.</li>
<b>Repo:</b>

<li>GitHub repository: alx-backend-javascript</li>
<li>Directory: 0x04-TypeScript</li>
<li>File: task_1/js/main.ts</li>
 
<h3>5. Advanced types Part 1</h3>
<p>
Create the DirectorInterface interface with the 3 expected methods:</p>

<li>workFromHome() returning a string</li>
<li>getCoffeeBreak() returning a string</li>
<li>workDirectorTasks() returning a string</li>
<p>Create the TeacherInterface interface with the 3 expected methods:</p>

<li>workFromHome() returning a string</li>
<li>getCoffeeBreak() returning a string</li>
<li>workTeacherTasks() returning a string</li>
<p>Create a class Director that will implement DirectorInterface</p>

<li>workFromHome should return the string Working from home</li>
<li>getToWork should return the string Getting a coffee break</li>
<li>workDirectorTasks should return the string Getting to director tasks</li>

<p>Create a class Teacher that will implement TeacherInterface</p>

<li>workFromHome should return the string Cannot work from home</li>
<li>getCoffeeBreak should return the string Cannot have a break</li>
<li>workTeacherTasks should return the string Getting to work</li>

<p>Create a function createEmployee with the following requirements:</p>

<li>It can return either a Director or a Teacher instance</li>
<li>It accepts 1 arguments:<li>
salary(either number or string)</li></li>
<li>if salary is a number and less than 500 - It should return a new Teacher. Otherwise it should return a Director</li>
Expected result:
<pre>
console.log(createEmployee(200));
Teacher
console.log(createEmployee(1000));
Director
console.log(createEmployee('$500'));
Director
</pre>
<b>Repo:</b>

<li>GitHub repository: alx-backend-javascript</li>
<li>Directory: 0x04-TypeScript</li>
<li>File: task_2/js/main.ts, task_2/webpack.config.js, task_2/tsconfig.json, task_2/package.json</li>
 
<h3>6. Creating functions specific to employees</h3>
<p>
Write a function isDirector:</p>
<li>
it accepts employee as an argument</li>
<li>it will be used as a type predicate and if the employee is a director</li>

<p>Write a function executeWork:</p>

<li>it accepts employee as an argument</li>
<li>if the employee is a Director, it will call workDirectorTasks</li>
<li>if the employee is a Teacher, it will call workTeacherTasks</li>
Expected result:
<pre>
executeWork(createEmployee(200));
Getting to work
executeWork(createEmployee(1000));
Getting to director tasks
</pre>
<b>Repo:</b>

<li>GitHub repository: alx-backend-javascript</li>
<li>Directory: 0x04-TypeScript</li>
<li>File: task_2/js/main.ts</li>
 
<h3>7. String literal types</h3>
<p>
Write a String literal type named Subjects allowing a variable to have the value Math or History only. Write a function named teachClass:</h3>

<li>it takes todayClass as an argument</li>
<li>it will return the string Teaching Math if todayClass is Math</li>
<li>it will return the string Teaching History if todayClass is History</li>
Expected result:
<pre>
teachClass('Math');
Teaching Math
teachClass('History');
Teaching History</pre>
<b>Repo:</b>

<li>GitHub repository: alx-backend-javascript</li>
<li>Directory: 0x04-TypeScript</li>
<li>File: task_2/js/main.ts</li>
  
<h3>8. Ambient Namespaces</h3>
<p>
Create a directory called task_3 and copy these configuration files into it: package.json, webpack.config.js, tsconfig.json.</p>
<p>
The first part of will require that you build an interface and a type. Inside a file named interface.ts:</p>

<li>Create a type RowID and set it equal to number</li>
<li>Create an interface RowElement that contains these 3 fields:
    <li>firstName: string</li>
    <li>lastName: string</li>
    <li>age?: number</li></li>
<p>You are building the next part of the application architecture. The goal is to save the entities to a database. Because of time constraints, you can’t write a connector to the database, and you decided to download a library called crud.js. Copy this file into the task_3/js directory.</p>

Here it is
<pre>
export function insertRow(row) {
  console.log('Insert row', row);
  return Math.floor(Math.random() * Math.floor(1000));
}

export function deleteRow(rowId) {
  console.log('Delete row id', rowId);
  return;
}

export function updateRow(rowId, row) {
  console.log(`Update row ${rowId}`, row);

  return rowId;
}
</pre>
<p>
Write an ambient file within task_3/js, named crud.d.ts containing the type declarations for each crud function. At the top of the file import RowID and RowElement from interface.ts.</p>

<p>In main.ts</p>

<li>At the top of the file create a triple slash directive that includes all the dependencies from crud.d.ts</li>
<li>Import the rowID type and rowElement from interface.ts</li>
<li>Import everything from crud.js as CRUD</li>

<p>Create an object called row with the type RowElement with the fields set to these values:</p>

<li>firstName: Guillaume</li>
<li>lastName: Salva</li>
<li>Create a const variable named newRowID with the type RowID and assign the value the insertRow command.</li>

<p>Next, create a const variable named updatedRow with the type RowElement and update row with an age field set to 23</p>

<p>Finally, call the updateRow and deleteRow commands.</p>

Expected result:
<pre>
const obj = {firstName: "Guillaume", lastName: "Salva"};
CRUD.insertRow(obj)
// Insert row {firstName: "Guillaume", lastName: "Salva"}

const updatedRow: RowElement = { firstName: "Guillaume", lastName: "Salva", age: 23 };
CRUD.updateRow(newRowID, updatedRow);
// Update row 125 {firstName: "Guillaume", lastName: "Salva", age: 23}

CRUD.deleteRow(125);
// Delete row id 125
</pre>
Requirements:
<li>When running npm run build, no TypeScript error should be displayed.</li>
<li>Every variable should use TypeScript when possible.</li>
<li>The main file and the ambient file should both import the types defined in the interface file.</li>
<li>You can easily test your ambient file by looking at the intellisense of your IDE when using the 3rd party functions.</li>
<b>Repo:</b>

<li>GitHub repository: alx-backend-javascript</li>
<li>Directory: 0x04-TypeScript</li>
<li>File: task_3/js/main.ts, task_3/js/interface.ts, task_3/js/crud.d.ts</li>
 
<h3>9. Namespace & Declaration merging</h3>
<p>
Create a new directory task_4 and copy the above tsconfig.json and put this package.json in there</p>
<pre>

{
  "name": "task_4",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": "webpack",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@typescript-eslint/eslint-plugin": "^2.4.0",
    "@typescript-eslint/parser": "^2.4.0",
    "clean-webpack-plugin": "^3.0.0",
    "fork-ts-checker-webpack-plugin": "^1.5.1",
    "html-webpack-plugin": "^3.2.0",
    "ts-loader": "^6.2.0",
    "typescript": "^3.6.4",
    "webpack": "^4.41.2",
    "webpack-cli": "^3.3.9",
    "webpack-dev-server": "^3.8.2"
  }
}
</pre>
<p>In task_4/js/subjects:</p>

<li>Create a file Teacher.ts and write a Teacher interface in a namespace named Subjects.

    <li>the interface requires firstName and lastName as string</li></li>
<li>Create a file Subject.ts and write a Subject class in the same namespace named Subjects.

    <li>the class has one attribute teacher that implements the Teacher interface</li>
    <li>the class has one setter method setTeacher that accepts a teacher in argument (and as setter, set the instance attribute teacher with it)</li>
    </li>
<li>Create a file Cpp.ts and make the following modifications in the same namespace.
    <li>Using declaration merging, add a new optional attribute experienceTeachingC (number) to the Teacher interface</li>
    <li>Create a class Cpp extending from Subject</li>
    <li>Write a method named getRequirements that will return a string Here is the list of requirements for Cpp</li>
    <li>Write a method named getAvailableTeacher that will return a string Available Teacher: <first name of teacher></li>
    <li>If the teacher doesn’t have any experience in teaching C, then the method should return a string No available teacher</li>
</li>

<li>
Create a file React.ts and write a React Class in the same namespace.
    <li>Add a new attribute experienceTeachingReact? (number) to the Teacher interface</li>
    <li>In the class, write a method named getRequirements that will return a string Here is the list of requirements for React</li>
    <li>Write a method named getAvailableTeacher that will return a string Available Teacher: <first name of teacher></li>
    <li>If the teacher doesn’t have any experience in teaching React, then the method should return a string No available teacher</li>
</li>
<li>
Create a file Java.ts and write a Java Class in the same namespace.
    <li>Add a new attribute experienceTeachingJava? (number) to the Teacher interface</li>
    <li>In the class, write a method named getRequirements that will return a string Here is the list of requirements for Java</li>
    <li>Write a method named getAvailableTeacher that will return a string Available Teacher: <first name of teacher></li>
    <li>If the teacher doesn’t have any experience in teaching Java, then the method should return a string No available teacher</li>
</li>
<b>Repo:</b>

<li>GitHub repository: alx-backend-javascript</li>
<li>Directory: 0x04-TypeScript</li>
<li>File: task_4/package.json, task_4/tsconfig.json, task_4/js/subjects/Cpp.ts, task_4/js/subjects/Java.ts, task_4/js/subjects/React.ts, task_4/js/subjects/Subject.ts, task_4/js/subjects/Teacher.ts</li>
 
<h3>10. Update task_4/js/main.ts</h3>
<li>create and export a constant cpp for Cpp Subjects</li>
<li>create and export a constant java for Java Subjects</li>
<li>create and export a constant react for React Subjects</li>
<li>create and export one Teacher object cTeacher with experienceTeachingC = 10
<li>for Cpp subject, log to the console C++, set cTeacher as the teacher, call the two methods getRequirements and getAvailableTeacher and print the strings they return</li>
<li>for Java subject, log to the console Java, set cTeacher as the teacher, call the two methods getRequirements and getAvailableTeacher, and print the strings they return</li>
<li>for React subject, log to the console React, set cTeacher as the teacher, call the two methods getRequirements and getAvailableTeacher, and print the strings they return</li>
<b>Repo:</b>

<li>GitHub repository: alx-backend-javascript</li>
<li>Directory: 0x04-TypeScript</li>
<li>File: task_4/js/main.ts</li>
 
<h3>11. Brand convention & Nominal typing</h3>
<p>
Create a directory task_5 and copy these configuration files into the root of task_5: package.json, tsconfig.json, webpack.config.js</p>
<p>
Create two interfaces MajorCredits and MinorCredits in task_5/js/main.ts:
</p>
<li>Each interface defines a number named credits</li>
<li>Add a brand property to each interface in order to uniquely identify each of them</li>

<p>Create two functions named sumMajorCredits and sumMinorCredits in task_5/js/main.ts:</p>

<li>Each function takes two arguments subject1 and subject2</li>
<li>sumMajorCredits returns MajorCredits value and sumMinorCredits returns MinorCredits value
Each function sums the credits of the two subjects</li>

<b>Repo:</b>

<li>GitHub repository: alx-backend-javascript</li>
<li>Directory: 0x04-TypeScript</li>
<li>File: task_5/js/main.ts, task_5/package.json, task_5/webpack.config.js, task_5/tsconfig.json</li>