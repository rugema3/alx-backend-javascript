<h1>0x00. ES6 Basics</h1>
<img src="/images/js.png">
<h1>Resources</h1>
<h2>Read or watch:</h2>

<li><a href="https://www.w3schools.com/js/js_es6.asp">ECMAScript 6 - ECMAScript 2015</a></li>
<li><a href="https://intranet.alxswe.com/rltoken/sroRUsUvOZV28V99MHDenw">Statements and declarations</a></li>
<li><a href="https://intranet.alxswe.com/rltoken/N2WLylppCtkkX3YFFtyUHw">Arrow functions</a></li>
<li><a href="https://intranet.alxswe.com/rltoken/kbw9gMO6sdeOKAY23SYVgA">Default parameters</a></li>
<li><a href="https://intranet.alxswe.com/rltoken/erZfCvacuGVk9z1CQlJvYQ">Rest parameter</a></li>
<li><a href="https://intranet.alxswe.com/rltoken/JAB5Y0TOU8d9JvmJEi9tiQ">Javascript ES6 — Iterables and Iterators</a></li>

<h1>Setup</h1>
<h2>Install NodeJS 12.11.x</h2>
<p>(in your home directory):</p>
<br>
<pre>

curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
</pre><br>
<pre>
$ nodejs -v
v12.11.1
$ npm -v
6.11.3
</pre><br>
<h1>Install Jest, Babel, and ESLint</h1>
<p>in your project directory, install Jest, Babel and ESList by using the supplied package.json and run npm install.</p><br>


<h1>Tasks</h1>
<h3>0. Const or let?</h3>
<b>Modify</b><br>

<li>function taskFirst to instantiate variables using const</li>
<li>function taskNext to instantiate variables using let</li><br><br>
<pre>
export function taskFirst() {
  var task = 'I prefer const when I can.';
  return task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  var combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
</pre>
<br><br>
Execution example:<br>
<pre>

bob@dylan:~$ cat 0-main.js
import { taskFirst, taskNext } from './0-constants.js';

console.log(`${taskFirst()} ${taskNext()}`);

bob@dylan:~$ 
bob@dylan:~$ npm run dev 0-main.js 
I prefer const when I can. But sometimes let is okay
bob@dylan:~$ 
</pre>
<b>Repo:</b>

<li>GitHub repository: alx-backend-javascript</li>
<li>Directory: 0x00-ES6_basic</li>
<li>File: 0-constants.js</li><br><br>
  
<h3>1. Block Scope</h3>
<p>Given what you’ve read about var and hoisting, modify the variables inside the function taskBlock so that the variables aren’t overwritten inside the conditional block.</p>
<pre>
export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    var task = true;
    var task2 = false;
  }

  return [task, task2];
}
</pre><br>
Execution:<br>
<pre>
bob@dylan:~$ cat 1-main.js
import taskBlock from './1-block-scoped.js';

console.log(taskBlock(true));
console.log(taskBlock(false));
bob@dylan:~$
bob@dylan:~$ npm run dev 1-main.js 
[ false, true ]
[ false, true ]
bob@dylan:~$
</pre><br>
<b>Repo:</b>

<li>GitHub repository: alx-backend-javascript</li>
<li>Directory: 0x00-ES6_basic</li>
<li>File: 1-block-scoped.js</li><br>
  
<h3>2. Arrow functions</h3>
<p>
Rewrite the following standard function to use ES6’s arrow syntax of the function add (it will be an anonymous function after)</p><br>
<pre>
export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  const self = this;
  this.addNeighborhood = function add(newNeighborhood) {
    self.sanFranciscoNeighborhoods.push(newNeighborhood);
    return self.sanFranciscoNeighborhoods;
  };
}
</pre><br>
Execution:
<pre>
bob@dylan:~$ cat 2-main.js
import getNeighborhoodsList from './2-arrow.js';

const neighborhoodsList = new getNeighborhoodsList();
const res = neighborhoodsList.addNeighborhood('Noe Valley');
console.log(res);
bob@dylan:~$
bob@dylan:~$ npm run dev 2-main.js 
[ 'SOMA', 'Union Square', 'Noe Valley' ]
bob@dylan:~$
</pre><br>
<b>Repo:</b>

<li>GitHub repository: alx-backend-javascript</li>
<li>Directory: 0x00-ES6_basic</li>
<li>File: 2-arrow.js</li><br>
  
<h3>3. Parameter defaults</h3>
<p>
Condense the internals of the following function to 1 line - without changing the name of each function/variable.</p>

<p>Hint: The key here to define default parameter values for the function parameters.</p>
<pre>
xport default function getSumOfHoods(initialNumber, expansion1989, expansion2019) {
  if (expansion1989 === undefined) {
    expansion1989 = 89;
  }

  if (expansion2019 === undefined) {
    expansion2019 = 19;
  }
  return initialNumber + expansion1989 + expansion2019;
}
</pre>
Execution:
<pre>
bob@dylan:~$ cat 3-main.js
import getSumOfHoods from './3-default-parameter.js';

console.log(getSumOfHoods(34));
console.log(getSumOfHoods(34, 3));
console.log(getSumOfHoods(34, 3, 4));
bob@dylan:~$
bob@dylan:~$ npm run dev 3-main.js 
142
56
41
bob@dylan:~$
</pre>
<b>Repo:</b>

<li>GitHub repository: alx-backend-javascript</li>
<li>Directory: 0x00-ES6_basic</li>
<li>File: 3-default-parameter.js</li><br>
  
<h3>4. Rest parameter syntax for functions</h3>
<p>
Modify the following function to return the number of arguments passed to it using the rest parameter syntax</p>
<pre>
export default function returnHowManyArguments() {

}
Example:

> returnHowManyArguments("Hello", "Holberton", 2020);
3
>
</pre>
Execution:
<pre>
bob@dylan:~$ cat 4-main.js
import returnHowManyArguments from './4-rest-parameter.js';

console.log(returnHowManyArguments("one"));
console.log(returnHowManyArguments("one", "two", 3, "4th"));
bob@dylan:~$
bob@dylan:~$ npm run dev 4-main.js 
1
4
bob@dylan:~$
</pre>
<b>Repo:</b>

<li>GitHub repository: alx-backend-javascript</li>
<li>Directory: 0x00-ES6_basic</li>
<li>File: 4-rest-parameter.js</li><br>
  
<h3>5. The wonders of spread syntax</h3>
<p>
Using spread syntax, concatenate 2 arrays and each character of a string by modifying the function below. Your function body should be one line long.</p>
<pre>
export default function concatArrays(array1, array2, string) {
}
</pre>
Execution:
<pre>
bob@dylan:~$ cat 5-main.js
import concatArrays from './5-spread-operator.js';

console.log(concatArrays(['a', 'b'], ['c', 'd'], 'Hello'));

bob@dylan:~$
bob@dylan:~$ npm run dev 5-main.js 
[
  'a', 'b', 'c',
  'd', 'H', 'e',
  'l', 'l', 'o'
]
bob@dylan:~$
</pre>
<b>Repo:</b>

<li>GitHub repository: alx-backend-javascript</li>
<li>Directory: 0x00-ES6_basic</li>
<li>File: 5-spread-operator.js</li><br>
  
<h3>6. Take advantage of template literals</h3>
<p>
Rewrite the return statement to use a template literal so you can the substitute the variables you’ve defined.</p>
<pre>
export default function getSanFranciscoDescription() {
  const year = 2017;
  const budget = {
    income: '$119,868',
    gdp: '$154.2 billion',
    capita: '$178,479',
  };

  return 'As of ' + year + ', it was the seventh-highest income county in the United States'
        / ', with a per capita personal income of ' + budget.income + '. As of 2015, San Francisco'
        / ' proper had a GDP of ' + budget.gdp + ', and a GDP per capita of ' + budget.capita + '.';
}
</pre>
Execution:
<pre>
bob@dylan:~$ cat 6-main.js
import getSanFranciscoDescription from './6-string-interpolation.js';

console.log(getSanFranciscoDescription());

bob@dylan:~$
bob@dylan:~$ npm run dev 6-main.js 
As of 2017, it was the seventh-highest income county in the United States, with a per capita personal income of $119,868. As of 2015, San Francisco proper had a GDP of $154.2 billion, and a GDP per capita of $178,479.
bob@dylan:~$
</pre>
<b>Repo:</b>

<li>GitHub repository: alx-backend-javascript</li>
<li>Directory: 0x00-ES6_basic</li>
<li>File: 6-string-interpolation.js</li><br>
  
<h3>7. Object property value shorthand syntax</h3>
<p>
Notice how the keys and the variable names are the same?</p>

<p>Modify the following function’s budget object to simply use the keyname instead.</p>
<pre>
export default function getBudgetObject(income, gdp, capita) {
  const budget = {
    income: income,
    gdp: gdp,
    capita: capita,
  };

  return budget;
}
</pre>
Execution:
<pre>
bob@dylan:~$ cat 7-main.js
import getBudgetObject from './7-getBudgetObject.js';

console.log(getBudgetObject(400, 700, 900));

bob@dylan:~$
bob@dylan:~$ npm run dev 7-main.js 
{ income: 400, gdp: 700, capita: 900 }
bob@dylan:~$
</pre>
<b>Repo:</b>

<li>GitHub repository: alx-backend-javascript</li>
<li>Directory: 0x00-ES6_basic</li>
<li>File: 7-getBudgetObject.js</li><br>
  
<h3>8. No need to create empty objects before adding in properties</h3>
<p>
Rewrite the getBudgetForCurrentYear function to use ES6 computed property names on the budget object</p>
<pre>
function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {};

  budget[`income-${getCurrentYear()}`] = income;
  budget[`gdp-${getCurrentYear()}`] = gdp;
  budget[`capita-${getCurrentYear()}`] = capita;

  return budget;
}
</pre><br>
Execution:
<pre>
bob@dylan:~$ cat 8-main.js
import getBudgetForCurrentYear from './8-getBudgetCurrentYear.js';

console.log(getBudgetForCurrentYear(2100, 5200, 1090));

bob@dylan:~$
bob@dylan:~$ npm run dev 8-main.js 
{ 'income-2021': 2100, 'gdp-2021': 5200, 'capita-2021': 1090 }
bob@dylan:~$
</pre>
<b>Repo:</b>

<li>GitHub repository: alx-backend-javascript</li>
<li>Directory: 0x00-ES6_basic</li>
<li>File: 8-getBudgetCurrentYear.js</li><br>
  
<h3>9. ES6 method properties</h3>
<p>
Rewrite getFullBudgetObject to use ES6 method properties in the fullBudget object</p>
<pre>
import getBudgetObject from './7-getBudgetObject.js';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    getIncomeInDollars: function (income) {
      return `$${income}`;
    },
    getIncomeInEuros: function (income) {
      return `${income} euros`;
    },
  };

  return fullBudget;
}
</pre><br>
Execution:
<pre>

bob@dylan:~$ cat 9-main.js
import getFullBudgetObject from './9-getFullBudget.js';

const fullBudget = getFullBudgetObject(20, 50, 10);

console.log(fullBudget.getIncomeInDollars(fullBudget.income));
console.log(fullBudget.getIncomeInEuros(fullBudget.income));

bob@dylan:~$
bob@dylan:~$ npm run dev 9-main.js 
$20
20 euros
bob@dylan:~$
</pre>
<b>Repo:</b>

<li>GitHub repository: alx-backend-javascript</li>
<li>Directory: 0x00-ES6_basic</li>
<li>File: 9-getFullBudget.js</li><br>
  
<h3>10. For...of Loops</h3>
<p>
Rewrite the function appendToEachArrayValue to use ES6’s for...of operator. And don’t forget that var is not ES6-friendly.</p>
<pre>
export default function appendToEachArrayValue(array, appendString) {
  for (var idx in array) {
    var value = array[idx];
    array[idx] = appendString + value;
  }

  return array;
}
</pre><br>
Execution:
<pre>
bob@dylan:~$ cat 10-main.js
import appendToEachArrayValue from './10-loops.js';

console.log(appendToEachArrayValue(['appended', 'fixed', 'displayed'], 'correctly-'));

bob@dylan:~$
bob@dylan:~$ npm run dev 10-main.js 
[ 'correctly-appended', 'correctly-fixed', 'correctly-displayed' ]
bob@dylan:~$
</pre>
<b>Repo:</b>

<li>GitHub repository: alx-backend-javascript</li>
<li>Directory: 0x00-ES6_basic</li>
<li>File: 10-loops.js</li><br>
  
<h3>11. Iterator</h3>
<p>
Write a function named createEmployeesObject that will receive two arguments:
</p>
<li>departmentName (String)</li>
<li>employees (Array of Strings)</li>
<pre>
export default function createEmployeesObject(departmentName, employees) {

}
</pre><br>
<p>The function should return an object with the following format:</p>
<pre>
{
     $departmentName: [
          $employees,
     ],
}
</pre><br>
Execution:
<pre>

bob@dylan:~$ cat 11-main.js
import createEmployeesObject from './11-createEmployeesObject.js';

console.log(createEmployeesObject("Software", [ "Bob", "Sylvie" ]));

bob@dylan:~$
bob@dylan:~$ npm run dev 11-main.js 
{ Software: [ 'Bob', 'Sylvie' ] }
bob@dylan:~$
</pre>
<b>Repo:</b>

<li>GitHub repository: alx-backend-javascript</li>
<li>Directory: 0x00-ES6_basic</li>
<li>File: 11-createEmployeesObject.js</li><br>
  
<h3>12. Let's create a report object</h3>
<p>
Write a function named createReportObject whose parameter, employeesList, is the return value of the previous function createEmployeesObject.</p>
<pre>
export default function createReportObject(employeesList) {

}
</pre><br>
<p>createReportObject should return an object containing the key allEmployees and a method property called getNumberOfDepartments.</p>

<p>allEmployees is a key that maps to an object containing the department name and a list of all the employees in that department. If you’re having trouble, use the spread syntax.</p>
<p>
The method property receives employeesList and returns the number of departments. I would suggest suggest thinking back to the ES6 method property syntax.</p>
<pre>
{
  allEmployees: {
     engineering: [
          'John Doe',
          'Guillaume Salva',
     ],
  },
};
</pre><br>
Execution:
<pre>

bob@dylan:~$ cat 12-main.js
import createEmployeesObject from './11-createEmployeesObject.js';
import createReportObject from './12-createReportObject.js';

const employees = {
    ...createEmployeesObject('engineering', ['Bob', 'Jane']),
    ...createEmployeesObject('marketing', ['Sylvie'])
};      

const report = createReportObject(employees);
console.log(report.allEmployees);
console.log(report.getNumberOfDepartments(report.allEmployees));

bob@dylan:~$
bob@dylan:~$ npm run dev 12-main.js 
{ engineering: [ 'Bob', 'Jane' ], marketing: [ 'Sylvie' ] }
2
bob@dylan:~$
</pre>
<b>Repo:</b>

<li>GitHub repository: alx-backend-javascript</li>
<li>Directory: 0x00-ES6_basic</li>
<li>File: 12-createReportObject.js</li>
  
<h3>13. Iterating through report objects</h3>
<p>
Write a function named createIteratorObject, that will take into argument a report Object created with the previous function createReportObject.</p>
<p>
This function will return an iterator to go through every employee in every department.</p>
<pre>
export default function createIteratorObject(report) {

}
</pre><br>
Execution:
<pre>
bob@dylan:~$ cat 100-main.js
import createIteratorObject from "./100-createIteratorObject.js";

import createEmployeesObject from './11-createEmployeesObject.js';
import createReportObject from './12-createReportObject.js';

const employees = {
    ...createEmployeesObject('engineering', ['Bob', 'Jane']),
    ...createEmployeesObject('marketing', ['Sylvie'])
};

const report = createReportObject(employees);

const reportWithIterator = createIteratorObject(report);

for (const item of reportWithIterator) {
    console.log(item);
}

bob@dylan:~$
bob@dylan:~$ npm run dev 100-main.js 
Bob
Jane
Sylvie
bob@dylan:~$
</pre>
<b>Repo:</b>

<li>GitHub repository: alx-backend-javascript</li>
<li>Directory: 0x00-ES6_basic</li>
<li>File: 100-createIteratorObject.js</li>
  
<h3>14. Iterate through object</h3>
<p>
Finally, write a function named iterateThroughObject. The function’s parameter reportWithIterator is the return value from createIteratorObject.</p>
<pre>
 export default function iterateThroughObject(reportWithIterator) {

 }
 </pre>
 <p>
It should return every employee name in a string, separated by | </p>
<pre>
{
  allEmployees: {
     engineering: [
          'John Doe',
          'Guillaume Salva',
     ],
  },
  ...
};
</pre>
<p>
Should return John Doe | Guillaume Salva</p>
<p>
Reminder - the functions will be imported by the test suite.</p>

Full example:
<pre>
> employees = {
      ...createEmployeesObject('engineering', engineering),
      ...createEmployeesObject('design', design),
    };
>
> const report = createReportObject(employees);
> const reportWithIterator = createIteratorObject(report);
> iterateThroughObject(reportWithIterator)
'John Doe | Guillaume Salva | Kanye East | Jay Li'
> </pre>
Execution:
<pre>
bob@dylan:~$ cat 101-main.js
import createEmployeesObject from "./11-createEmployeesObject.js";
import createReportObject from './12-createReportObject.js';
import createIteratorObject from './100-createIteratorObject.js';
import iterateThroughObject from './101-iterateThroughObject.js';


const employees = {
    ...createEmployeesObject('engineering', ['Bob', 'Jane']),
    ...createEmployeesObject('marketing', ['Sylvie'])
};

const report = createReportObject(employees);
const reportWithIterator = createIteratorObject(report);

console.log(iterateThroughObject(reportWithIterator));

bob@dylan:~$
bob@dylan:~$ npm run dev 101-main.js 
Bob | Jane | Sylvie
bob@dylan:~$
</pre><br>
<b>Repo:</b>

<li>GitHub repository: alx-backend-javascript</li>
<li>Directory: 0x00-ES6_basic</li>
<li>File: 101-iterateThroughObject.js</li>
