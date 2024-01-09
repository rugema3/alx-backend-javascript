<h1>0x03-ES6_data_manipulation</h1>

<h1>Resources</h1>

<li><a href="https://intranet.alxswe.com/rltoken/bcXqK1IaIHtrZ45sv0RxsQ">Array</a></li>
<li><a href="https://intranet.alxswe.com/rltoken/YZ5RtzAPTaWtF00MYbXuVw">Typed Array</a></li>
<li><a href="https://intranet.alxswe.com/rltoken/Ch8vq39y9QnlTMr8CymgEg">Set Data Structure</a></li>
<li><a href="https://intranet.alxswe.com/rltoken/W29MV3f8Ii4HmeJSALNIpw">Map Data Structure</a></li>
<li><a href="https://intranet.alxswe.com/rltoken/pSetFVFeIR660GPE0flPdg">WeakMap</a></li>


<h2>Tasks</h2>
<h3>0. Basic list of objects</h3>
<p>
Create a function named getListStudents that returns an array of objects.
</p>
<p>
Each object should have three attributes: id (Number), firstName (String), and location (String).</p>
<p>

The array contains the following students in order:
</p>
<li>Guillaume, id: 1, in San Francisco</li>
<li>James, id: 2, in Columbia</li>
<li>Serena, id: 5, in San Francisco</li>
<br>
<pre>
bob@dylan:~$ cat 0-main.js
import getListStudents from "./0-get_list_students.js";

console.log(getListStudents());

bob@dylan:~$ 
bob@dylan:~$ npm run dev 0-main.js 
[
  { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
  { id: 2, firstName: 'James', location: 'Columbia' },
  { id: 5, firstName: 'Serena', location: 'San Francisco' }
]
bob@dylan:~$ 
</pre><br>
<b>Repo:</b>

<li>GitHub repository: alx-backend-javascript</li>
<li>Directory: 0x03-ES6_data_manipulation</li>
<li>File: 0-get_list_students.js</li><br><br>
   
<h3>1. More mapping</h3>
<p>
Create a function getListStudentIds that returns an array of ids from a list of object.
</p>
<p>
This function is taking one argument which is an array of objects - and this array is the same format as getListStudents from the previous task.</p>
<p>
If the argument is not an array, the function is returning an empty array.
</p>
<p>
You must use the map function on the array.
</p><br><br>
<pre>
bob@dylan:~$ cat 1-main.js
import getListStudentIds from "./1-get_list_student_ids.js";
import getListStudents from "./0-get_list_students.js";

console.log(getListStudentIds("hello"));
console.log(getListStudentIds(getListStudents()));

bob@dylan:~$ 
bob@dylan:~$ npm run dev 1-main.js 
[]
[ 1, 2, 5 ]
bob@dylan:~$ 
</pre>
<br><br>
<b>Repo:</b>

<li>GitHub repository: alx-backend-javascript</li>
<li>Directory: 0x03-ES6_data_manipulation</li>
<li>File: 1-get_list_student_ids.js</li><br><br>
   <h3>
2. Filter</h3>
<p>
Create a function getStudentsByLocation that returns an array of objects who are located in a specific city.</p>
<p>
It should accept a list of students (from getListStudents) and a city (string) as parameters.
</p>
<p>
You must use the filter function on the array.</p>
<br><br>
<pre>
bob@dylan:~$ cat 2-main.js
import getListStudents from "./0-get_list_students.js";
import getStudentsByLocation from "./2-get_students_by_loc.js";

const students = getListStudents();

console.log(getStudentsByLocation(students, 'San Francisco'));

bob@dylan:~$ 
bob@dylan:~$ npm run dev 2-main.js 
[
  { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
  { id: 5, firstName: 'Serena', location: 'San Francisco' }
]
bob@dylan:~$
</pre> <br><br>
<b>Repo:<b>

<li>GitHub repository: alx-backend-javascript</li>
<li>Directory: 0x03-ES6_data_manipulation</li>
<li>File: 2-get_students_by_loc.js</li><br><br>
   
<h3>3. Reduce</h3>
<p>
Create a function getStudentIdsSum that returns the sum of all the student ids.
</p>
<p>
It should accept a list of students (from getListStudents) as a parameter.
</p>
<p>
You must use the reduce function on the array.
</p><br>
<pre>
bob@dylan:~$ cat 3-main.js
import getListStudents from "./0-get_list_students.js";
import getStudentIdsSum from "./3-get_ids_sum.js";

const students = getListStudents();
const value = getStudentIdsSum(students);

console.log(value);

bob@dylan:~$ 
bob@dylan:~$ npm run dev 3-main.js 
8
bob@dylan:~$
</pre><br><br> 
<b>Repo:</b>

<li>GitHub repository: alx-backend-javascript</li>
<li>Directory: 0x03-ES6_data_manipulation</li>
<li>File: 3-get_ids_sum.js</li><br><br>
   
<h3>4. Combine</h3>
<p>
Create a function updateStudentGradeByCity that returns an array of students for a specific city with their new grade
</p>
<p>
It should accept a list of students (from getListStudents), a city (String), and newGrades (Array of “grade” objects) as parameters.</p>

<p>newGrades is an array of objects with this format:</p>
<pre>

  {
    studentId: 31,
    grade: 78,
  }
  </pre>
  <p>
If a student doesn’t have grade in newGrades, the final grade should be N/A.</p>

<p>You must use filter and map combined.</p>
<pre>

bob@dylan:~$ cat 4-main.js
import getListStudents from "./0-get_list_students.js";
import updateStudentGradeByCity from "./4-update_grade_by_city.js";

console.log(updateStudentGradeByCity(getListStudents(), "San Francisco", [{ studentId: 5, grade: 97 }, { studentId: 1, grade: 86 }]));

console.log(updateStudentGradeByCity(getListStudents(), "San Francisco", [{ studentId: 5, grade: 97 }]));

bob@dylan:~$ 
bob@dylan:~$ npm run dev 4-main.js 
[
  {
    id: 1,
    firstName: 'Guillaume',
    location: 'San Francisco',
    grade: 86
  },
  { id: 5, firstName: 'Serena', location: 'San Francisco', grade: 97 }
]
[
  {
    id: 1,
    firstName: 'Guillaume',
    location: 'San Francisco',
    grade: 'N/A'
  },
  { id: 5, firstName: 'Serena', location: 'San Francisco', grade: 97 }
]
bob@dylan:~$ 
</pre><br><br>
<b>Repo:</b>

<li>GitHub repository: alx-backend-javascript</li>
<li>Directory: 0x03-ES6_data_manipulation</li>
<li>File: 4-update_grade_by_city.js</li><br>
   
<h3>5. Typed Arrays</h3>
<p>
Create a function named createInt8TypedArray that returns a new ArrayBuffer with an Int8 value at a specific position.</p>
<p>
It should accept three arguments: length (Number), position (Number), and value (Number).
</p>
<p>
If adding the value is not possible the error Position outside range should be thrown.
</p>
<pre>
bob@dylan:~$ cat 5-main.js
import createInt8TypedArray from "./5-typed_arrays.js";

console.log(createInt8TypedArray(10, 2, 89));

bob@dylan:~$ 
bob@dylan:~$ npm run dev 5-main.js 
DataView {
  byteLength: 10,
  byteOffset: 0,
  buffer: ArrayBuffer {
    [Uint8Contents]: <00 00 59 00 00 00 00 00 00 00>,
    byteLength: 10
  }
}
bob@dylan:~$ 
</pre><br><br>
<b>Repo:<b>

<li>GitHub repository: alx-backend-javascript</li>
<li>Directory: 0x03-ES6_data_manipulation</li>
<li>File: 5-typed_arrays.js</li><br><br>
   
<h3>6. Set data structure</h3>
<p>
Create a function named setFromArray that returns a Set from an array.
</p>
<p>
It accepts an argument (Array, of any kind of element).</p>
<pre>

bob@dylan:~$ cat 6-main.js
import setFromArray from "./6-set.js";

console.log(setFromArray([12, 32, 15, 78, 98, 15]));

bob@dylan:~$ 
bob@dylan:~$ npm run dev 6-main.js 
Set { 12, 32, 15, 78, 98 }
bob@dylan:~$
</pre> <br><br>
<b>Repo:</b>

<li>GitHub repository: alx-backend-javascript</li>
<li>Directory: 0x03-ES6_data_manipulation</li>
<li>File: 6-set.js</li><br><br>
   
<h3>7. More set data structure</h3>
<p>
Create a function named hasValuesFromArray that returns a boolean if all the elements in the array exist within the set.</p>
<p>
It accepts two arguments: a set (Set) and an array (Array).
</p>
<pre>
bob@dylan:~$ cat 7-main.js
import hasValuesFromArray from "./7-has_array_values.js";

console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1]));
console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [10]));
console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1, 10]));

bob@dylan:~$ 
bob@dylan:~$ npm run dev 7-main.js 
true
false
false
bob@dylan:~$
</pre> 
<b>Repo:</b>

<li>GitHub repository: alx-backend-javascript</li>
<li>Directory: 0x03-ES6_data_manipulation</li>
<li>File: 7-has_array_values.js</li><br><br>
   
<h3>8. Clean set</h3>
<p>
Create a function named cleanSet that returns a string of all the set values that start with a specific string (startString).</p>
<p>
It accepts two arguments: a set (Set) and a startString (String).
</p>
<p>
When a value starts with startString you only append the rest of the string. The string contains all the values of the set separated by -.
</p>
<pre>
bob@dylan:~$ cat 8-main.js
import cleanSet from "./8-clean_set.js";

console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon'));
console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), ''));

bob@dylan:~$ 
bob@dylan:~$ npm run dev 8-main.js 
jovi-aparte-appetit

bob@dylan:~$ 
</pre>
<b>Repo:</b>

<li>GitHub repository: alx-backend-javascript</li>
<li>Directory: 0x03-ES6_data_manipulation</li>
<li>File: 8-clean_set.js</li><br><br>
   
<h3>9. Map data structure</h3>
<p>
Create a function named groceriesList that returns a map of groceries with the following items (name, quantity):
</p>
<pre>
Apples, 10
Tomatoes, 10
Pasta, 1
Rice, 1
Banana, 5
</pre>
Result:
<pre>
bob@dylan:~$ cat 9-main.js
import groceriesList from "./9-groceries_list.js";

console.log(groceriesList());

bob@dylan:~$ 
bob@dylan:~$ npm run dev 9-main.js 
Map {
  'Apples' => 10,
  'Tomatoes' => 10,
  'Pasta' => 1,
  'Rice' => 1,
  'Banana' => 5
}
bob@dylan:~$ 
</pre>
<b>Repo:</b>

<li>GitHub repository: alx-backend-javascript</li>
<li>Directory: 0x03-ES6_data_manipulation</li>
<li>File: 9-groceries_list.js</li><br><br>
   
<h3>10. More map data structure</h3>
<p>
Create a function named updateUniqueItems that returns an updated map for all items with initial quantity at 1.</p>
<p>
It should accept a map as an argument. The map it accepts for argument is similar to the map you create in the previous task.
</p>
<p>
For each entry of the map where the quantity is 1, update the quantity to 100. If updating the quantity is not possible (argument is not a map) the error Cannot process should be thrown.</p>
<pre>
bob@dylan:~$ cat 10-main.js
import updateUniqueItems from "./10-update_uniq_items.js";
import groceriesList from "./9-groceries_list.js";

const map = groceriesList();
console.log(map);

updateUniqueItems(map)
console.log(map);

bob@dylan:~$ 
bob@dylan:~$ npm run dev 10-main.js 
Map {
  'Apples' => 10,
  'Tomatoes' => 10,
  'Pasta' => 1,
  'Rice' => 1,
  'Banana' => 5
}
Map {
  'Apples' => 10,
  'Tomatoes' => 10,
  'Pasta' => 100,
  'Rice' => 100,
  'Banana' => 5
}
bob@dylan:~$

</pre>
<b>Repo:</b>

<li>GitHub repository: alx-backend-javascript</li>
<li>Directory: 0x03-ES6_data_manipulation</li>
<li>File: 10-update_uniq_items.js</li>
   
<h3>11. Weak link data structure</h3>
<p>
Export a const instance of WeakMap and name it weakMap.
</p>
<p>
Export a new function named queryAPI. It should accept an endpoint argument like so:</p>
<pre>

  {
    protocol: 'http',
    name: 'getUsers',
  }
  </pre>
  <p>
Track within the weakMap the number of times queryAPI is called for each endpoint.
</p>
<p>
When the number of queries is >= 5 throw an error with the message Endpoint load is high.
</p>
<pre>
bob@dylan:~$ cat 100-main.js
import { queryAPI, weakMap } from "./100-weak.js";

const endpoint = { protocol: 'http', name: 'getUsers' };
weakMap.get(endpoint);

queryAPI(endpoint);
console.log(weakMap.get(endpoint));

queryAPI(endpoint);
console.log(weakMap.get(endpoint));

queryAPI(endpoint);
queryAPI(endpoint);
queryAPI(endpoint);
queryAPI(endpoint);

bob@dylan:~$ 
bob@dylan:~$ npm run dev 100-main.js 
1
2
.../100-weak.js:16
    throw new Error('Endpoint load is high');
   ...
bob@dylan:~$ 
</pre>
<b>Repo:</b>
<li>GitHub repository: alx-backend-javascript</li>
<li>Directory: 0x03-ES6_data_manipulation</li>
<li>File: 100-weak.js</li>