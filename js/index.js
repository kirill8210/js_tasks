let view = document.querySelector('.wrapper');
let controller = document.querySelector('.switch');
controller.addEventListener('click', () =>{
    if (view.classList.contains('theme-dark')){
        view.classList.remove('theme-dark');
        view.classList.add('theme-bright');
        controller.innerHTML = 'Dark'
    } else {
        view.classList.remove('theme-bright');
        view.classList.add('theme-dark');
        controller.innerHTML = 'Bright'
    }
});


const apps = document.querySelectorAll('.apps');
const div = document.createElement('p');
div.classList.add('p');
div.textContent = 'one';
const button = document.createElement('button');
button.classList.add('p');
button.textContent = '';
const startBtn = document.querySelectorAll('#start');

for (let i = 0; i < apps.length -1; i++) {
    startBtn[i].addEventListener('click', (event) => {
        event.preventDefault();
        apps[i].classList.add('up');
    });
}

/*
1. Палиндром. Являются ли значение палиндромом\n' +
    'возвращает true или false' +
    'palindrome('racecar');' +
    'palindrome('table');' +
    'palindrome(\'Анна\');' +
    'palindrome('А роза упала на лапу Азора');
*/

function palindrome(str){
    str = str.toLowerCase().replace(/\s/g, '');
    return str === str.split('').reverse().join('');
}

function palindrome1(str){
    const length = Math.floor(str.length / 2);
    str = str.toLowerCase().replace(/\s/g, '');
    for (let i = 0; i < length; i++)
        if (str[i] !== str[str.length - i - 1]){
            return false
        }
    return true
}

console.log('task1: ' + palindrome('racecar')); //true
console.log('task1: ' + palindrome('table')); //false
console.log('task1: ' + palindrome1('Анна')); //true
console.log('task1: ' + palindrome1('А роза упала на лапу Азора')); //true

/*
2. Find vowels. Создать функцию, которая возвращает количество гласных.

    console.log('task2: ' + findVowers('hello')); //2
    console.log('task2: ' + findVowers('why')); //0
*/

function findVowers(str){
    let count = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    for (let char of str.toLowerCase()){
        if (vowels.includes(char)){
            count += 1;
        }
    }
    return count;
}

function findVowers2(str){
    const matched = str.match(/[aeiou]/gi);
    return matched ? matched.length : 0;
}

console.log('task2: ' + findVowers('hello')); //2
console.log('task2: ' + findVowers2('why')); //0

/*
3. FizzBuzz. Создать функцию, которая возвращает числа по символам.
Если число делится на 3 то выводим fizz.
Если число делится на 5 то выводим buzz.
Если число делится на 3 и 5 то выводим fizzbuzz.

//1 2 fizz 4 buzz fizz 7 8

*/

function fizzBuzz(num){
    let arr = [];
    for (let i = 1; i <= num; i++){
        if (i % 3 === 0 && i % 5 === 0){
            arr.push('fizzbuzz')
        }
        else if (i % 3 === 0){
            arr.push('fizz')
        }
        else if (i % 5 === 0){
            arr.push('buzz')
        }
        else{
            arr.push(i)
        }
    }
    return console.log('task3: ' + arr);
}
fizzBuzz(8);

/*
4. Anagram. Написать функцию, которая будет проверять является ли 2 строки анаграммой.
Анограмма содержание одинаковых символов в разном порядке

anagram(friend, Finder);  // true
anagram('hello', 'world');  //false
*/

function buildCharObject(str) {
    const charObj = {};
    str = str.toLowerCase().replace(/[^\w]/g);
    for (let char of str){
        charObj[char] = charObj[char] + 1 || 1;
    }
    return charObj;
}

function anagram(a, b){
    const aCharObj = buildCharObject(a);
    const bCharObj = buildCharObject(b);

    if (Object.keys(aCharObj).length !== Object.keys(bCharObj).length){
        return false;
    }
    for (let char in aCharObj){
        if (aCharObj[char] !== bCharObj[char]){
            return false;
        }
    }
    return true;
}

const anagram2 = (a, b) => [...a.toLowerCase()].sort().join() === [...b.toLowerCase()].sort().join();

console.log('task4: ' + anagram('friend', 'Finder')); // true
console.log('task4: ' + anagram2('hello', 'world')); //false

/*
5. Fibonacci. Написать функцию fibonacci(n),
которая возвращает n-ый элемент из последовательности fibonacci.

fibonacci(8) // 21
*/

function fibonacci(n){
    const arr = [0, 1];
    for (let i = 2; i <= n; i++){
        const prevN = arr[i - 1];
        const nextN = arr[i - 2];
        arr.push(prevN + nextN)
    }
    return arr[n];
}

function fibonacci1(num){
    let a = 1,
        b = 1;

    for (let i = 3; i <= num; i++){
        [a, b] = [b, a + b]
    }
    return b
}

function fibonacci2(num){
    if (num < 2){
        return num;
    }
    return fibonacci2(num - 1) + fibonacci2(num - 2);
}

console.log('task5 ' + fibonacci(8)); //21
console.log('task5 ' + fibonacci1(10)); //89
console.log('task5 ' + fibonacci2(4)); //5

/*
6. Class Names. Отсортировать массив,
вывести отсортированый по частоте использования массив без повторений
let className = ['header', 'menu', 'menu', 'link', 'link', 'footer', 'menu', 'link'];

let res = ['header', 'link', 'menu', 'footer'];
 */

let className = ['header', 'menu', 'menu', 'link', 'link', 'footer', 'menu', 'link'];

let count = {};

for (let i = 0; i < className.length; i++){
    let current = className[i];
    if (count[current]){
        count[current] += 1
    } else {
        count[current] = 1;
    }
    //console.log(count);
}

let res = Object.keys(count).sort((a, b) => count[b] - count[a]);
console.log('task6: ' + res);

/*
7. Currencies. Из массива получить данные по приходу и расходу

const input = [
    ['usa', 'buy', 500],
    ['usa', 'sell', 500],
    ['gbr', 'buy', 500],
    ['usa', 'sell', 500],
    ['eur', 'buy', 500],
    ['uar', 'sell', 500],
];

const output = {
     eur:  [500, 0]
     gbr:  [500, 0]
     uar:  [0, 500]
     usa:  [500, 1700]
}

 */

const input = [
    ['usa', 'buy', 500],
    ['usa', 'sell', 200],
    ['gbr', 'buy', 500],
    ['usa', 'sell', 1500],
    ['eur', 'buy', 500],
    ['uar', 'sell', 500],
];

let result = {};

input.forEach((item)=> {

    let [currency, type, amount] = item;

    if (!result[currency]){
        result[currency] = [0, 0];
    }

    result[currency][type === 'buy' ? 0 : 1] +=amount;

});

let result2 = input.reduce((acc, curr) =>{
    acc[curr[0]] = acc[curr[0]] || [0, 0];
    acc[curr[0]][curr[1] === 'buy' ? 0 : 1] += curr[2];
    return acc;
}, {});

console.log('task7:');
console.log(result);
console.log(result2);

/*
8. Maze task. Если у данного лабиринта решение

let maze = [
    [1, 1, 1, 0, 0, 1],
    [1, 1, 1, 1, 0, 1],
    [0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 0],
];

checkPath({x: 3, y: 0}, {x: 5, y: 5}) //true
 */

let maze = [
    [1, 1, 1, 0, 0, 1],
    [1, 1, 1, 1, 0, 1],
    [0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 0],
];

function checkPath(start, end) {
    maze[start.y][start.x] = 5;

    let sibLings = getValidSib(start);
    if (sibLings.length > 0){
        for (let i = 0; i < sibLings.length; i++){
            let current = sibLings[i];

            let isSolved = current.x === end.x && current.y === end.y;
            let notVisited = maze[current.y][current.x] !== 5;

            if (isSolved || (notVisited && checkPath(current, end))){
                return true;
            }
        }
    }
    return false;

}

function getValidSib(cord){
    let {x, y} = cord;

    let cords = [];

    if (maze[y - 1] !== undefined){
        cords.push({x: x, y: y-1, val: maze[y-1][x]})
    }
    if (maze[y + 1] !== undefined){
        cords.push({x: x, y: y+1, val: maze[y+1][x]})
    }
    if (maze[y][x-1] !== undefined){
        cords.push({x: x-1, y: y, val: maze[y][x-1]})
    }
    if (maze[y][x+1] !== undefined){
        cords.push({x: x+1, y: y, val: maze[y][x+1]})
    }
    return cords.filter(el => el.val === 0);
}
console.log('task8: ' + checkPath({x: 3, y: 0}, {x: 5, y: 5}));
//console.log(maze); весь путь

/*
9. ATM task. Написать фукцию, где аргумент сумма, и нужно получить колиство купюр.
дополнительные условия:
- наименьшее количество купюр
- нет лимита и сумма минимальная равна минимальной купюре
- нет лимита на снятие
- нет лимита на купюры
- купюры 100, 50, 20, 10
*/

function iWantToGet(ammountRequired) {
    const availableNotes = [100, 50, 20, 10];
    const result = [];

    if (ammountRequired > 0){
        for (let i = 0; i < availableNotes.length; i++){
            let note = availableNotes[i];

            while (ammountRequired - note >= 0){
                ammountRequired -= note;
                result.push(note)
            }
        }
    } else {
        console.log('enter new ammount')
    }

    return result;
}

console.log('task9: ' + iWantToGet(370));

/*
10. ATM task-2. Написать фукцию, где аргумент сумма, и нужно получить колиство купюр.
дополнительные условия:
- наименьшее количество купюр
- лимиты на купюры
let limits = {1000: 5, 500: 2, 100: 5, 50: 100, 20:6};
*/

let iWantToGet2 = ( ammountRequired, limits) =>{

    function collect(ammount, nominals){
        if (ammount === 0) return {};
        if (!nominals.length) return;

        let currentNominal = nominals[0];
        let availableNotes = limits[currentNominal];
        let notesNeeded = Math.floor(ammount / currentNominal);
        let numberOfNotes = Math.min(availableNotes, notesNeeded);

        for (let i = numberOfNotes; i >= 0; i--){
            let result = collect(ammount - i * currentNominal, nominals.slice(1));
            if (result){
                return i ? {[currentNominal]: i, ...result } : result;
            }
        }
    }

    let nomiminals = Object.keys(limits)
        .map(Number)
        .sort((a, b) => b -a);

    return collect(ammountRequired, nomiminals)

};



let limits = {1000: 5, 500: 2, 100: 5, 50: 100, 30: 6};

console.log('task10:');
console.log(iWantToGet2(1770, limits));

/*
11. Простые числа (Делятся только на 1 и на самого себя). Вывести простые числа
*/

function isPrime(num) {
    for (let i = 2, max = Math.sqrt(num); i <= max; i++){
        if (num % i === 0){
            return false
        }
    }
    return num > 1;
}
console.log(isPrime(5));

function getPrimes(num){
    const primes = [];
    for (let i = 2; i <= num; i++){
        if (isPrime(i))
            primes.push(i)
    }
    return primes;
}

console.log(getPrimes(55));

function getPrimes2(num) {
    const seive = [];
    const primes = [];

    for (let i = 2; i <= num; i++){
        if (!seive[i]){
            primes.push(i);
            for (let j = i * i; j <= num; j += i){
                seive[j] = true;
            }
        }
    }
    return primes;
}
console.log(getPrimes2(55));

/*
12. Sum of two. Из массива найти два числа, которые в сумме равны n.
*/

const sumOfTwo = (arr, target) =>{
    const result = [];

    for (let i = 0; i < arr.length; i++){
        for (let j = i + 1; j < arr.length; j++){
            if (arr[i] + arr[j] === target){
                result.push(i);
                result.push(j);
            }
        }
    }

    return result;
};

console.log(sumOfTwo([2, 7, 11, 15, 27], 22));

const sumOfTwo2 = (arr, target) =>{
    const numObject = {};

    for (let i = 0; i < arr.length; i++){
        numObject[arr[i]] = i;
    }
    for (let i = 0; i < arr.length; i++){
        const diff = target - arr[i];

        if (numObject[diff] && numObject[diff] !== i){
            return[i, numObject[diff]];
        }
    }
    return [];
};

console.log(sumOfTwo2([6, 15, 8, 27], 14));

/*
12. Sum of three. Из массива найти два числа, которые в сумме равны n.

const array = [-1, 0, 1, 2, -1, -4]; // [[-1][-1][2]], [[-1][0][1]]

*/

const array = [-1, 0, 1, 2, -1, -4];

const threeSun = function (nums, target = 0) {

    const result = [];

    if (nums.length < 3){
        return result;
    }
    nums = nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length -2; i++){
        if (nums[i] > target){
            break;
        }

        if (i > 0 && nums[i] === nums[i-1]){
            continue;
        }

        let j = i + 1;
        let k = nums.length -1;

        while (j < k){
            let sum = nums[i] + nums[j] + nums[k];

            if (sum === target){
                result.push([nums[i], nums[j], nums[k]]);

                while (nums[j] === nums[j+1]) j++;
                while (nums[k] === nums[k-1]) k--;

                j++;
                k--;
                continue;
            }
            if (sum < target){
                j++;
                continue;
            }
            if (sum > target){
                k--;
                continue;
            }

        }
    }
    return result;
};

console.log(threeSun(array));

/*
13. Удаление дубликатов из массива.
*/

const arr1 = [1, 1, 2];

const arr2 = [0, 0, 1, 1, 1, 1, 1, 1, 1, 2, 2, 3, 3, 4 ];

let removeDubles = function (nums) {
    for (let i = 0; i < nums.length; i++){
        if (nums[i] === nums[i - 1]){
            nums.splice(i, 1);
            i--;
        }
    }
    return nums.length
};

console.log(removeDubles(arr1));
console.log(arr1);

console.log(removeDubles(arr2));
console.log(arr2);

/*
14. Одинокое число.
*/

const ar = [4, 8, 4, 1, 2, 1, 2];
const singleNum = function (nums) {
    let uniq = new Set();
    let uniqSum = 0;
    let numSum = 0;
    for (let i = 0; i < nums.length; i++){
        const current = nums[i];
        if (!uniq.has(current)){
            uniq.add(current);
            uniqSum += current;
        }
        numSum += current;
    }
    return uniqSum * 2 - numSum;
};

console.log(singleNum(ar));

const ar3 = [4, 1, 2, 1, 2];
const singleNum1 = function (nums) {
    let uniq = Array.from(new Set(nums));

    let reduceSum = (s, i) => s + i;

    let uniqSum = uniq.reduce(reduceSum);
    let numSum = nums.reduce(reduceSum);

    return uniqSum * 2 - numSum;
};

console.log(singleNum1(ar3));

/*
15. Как далеко я могу сидеть в кинотеатре от ближайшего соседа в ряду.
*/

const input1 = [1, 0, 0, 0, 1, 0, 1]; // 2
const input2 = [1, 0, 0, 0]; //3

const maxDistToSeats = function (seats) {
    let max = 0;
    let count = 0;
    let i = 0;

    if (seats[i] === 0){
        while (seats[i] === 0){
            i++;
            count += 1;
        }
        max = count;
        count = 0;
    }

    for (; i < seats.length; i++){
        let current = seats[i];

        if (i === seats.length -1 && current === 0){
            count += 1;
            max = Math.max(max, count);
            break;
        }

        if (current === 1){
            count = 0;
        } else {
            count +=1;
            max = Math.max(max, Math.ceil(count/2))
        }
    }

    return max;
};

console.log(maxDistToSeats(input1));
console.log(maxDistToSeats(input2));
