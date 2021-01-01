/*
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
  b = prompt('На сколько оцените его?', ''),
  c = prompt('Один из последних просмотренных фильмов?', ''),
  d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB); */

/* ====Условия==== */

/*
if (4 == 9) {
  console.log('ok');
} else {
  console.log('error');
}
*/

/* ====Условия + Тернарный оператор==== */
//const num = 50;

/*
(num === 50) ? console.log('ok') : console.log('error');
*/

/* ====Swich==== */

/*
switch (num) {
  case 49:
    console.log('error');
    break;
  case 100:
    console.log('error');
    break;
  case 50:
    console.log('ok');
    break;

  default:
    console.log('не в этот раз');
    break;
}
*/

/* ====ЦИКЛЫ==== */

/* ====while==== */

/*
let num = 50;
while (num < 55) {
  console.log(num);
  num++;
}
*/

/* ====do while==== */
/*
let num = 50;
do {
  console.log(num);
  num++;
}
while (num < 55);
*/

/* ====for==== */

/*
let num = 55;
for (let i = 0; i < 10; i++) {
  if (i === 6) {
    break;
  }
  console.log(i);

}
*/

/*
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

for (let i = 0; i < 2; i++) {
  const a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?', '');

  if (a != null && b != null && a != '' && b != '' && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log('done');
  } else {
    console.log('error');
    i--;
  }

}

if (personalMovieDB.count < 10) {
  console.log('Просмотрено довольно мало фильмов');

} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
  console.log('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
  console.log('Вы киноман');
} else {
  console.log('Произошла ошибка');
}

console.log(personalMovieDB);
*/

/* ====Функции==== */

/*
function showFirstMessage(text) {
  console.log(text);
}
showFirstMessage('Hello world!');


function calc(a, b) {
  return (a + b);
}

console.log(calc(4, 3));

function ret() {
  let num = 50;
  return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function () {
  console.log('hello');
};
logger();
*/

//const calc = (a, b) => { return a + b };

let numberOfFilms;

function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log('done');
    } else {
      console.log('error');
      i--;
    }
  }
}

// rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');

  } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
  } else if (personalMovieDB.count > 30) {
    console.log('Вы киноман');
  } else {
    console.log('Произошла ошибка');
  }
}

// detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Вашь любимый жанр под номером ${i} `);
  }
}

writeYourGenres();