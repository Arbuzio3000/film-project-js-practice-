'use strict';

let numberOfFilms;

function start(){
  numberOfFilms = prompt('Сколько фильмов вы посмотрели?');

  while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
    numberOfFilms = prompt('Сколько фильмов вы посмотрели?');
  }
}

start();

let lastMovie = '',
  raitingMovie = '';

const personMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};


function questions(){
  for (let i = 1; i <= numberOfFilms; i ++){
    lastMovie = '';
    raitingMovie = '';
  
    while (lastMovie == null || raitingMovie == null || lastMovie == '' || raitingMovie == '' || lastMovie.length <=2 || lastMovie.length >= 50){
      lastMovie = prompt(`Какой ${i} фильм посмотрели?`);
      raitingMovie = prompt('На сколько вы его оцените?');
    }
    personMovieDB.movies[lastMovie] = raitingMovie;
  }
  
  console.log(personMovieDB.movies);
  console.log(personMovieDB.count);
}

questions();


function level(){
  if (personMovieDB.count < 10){
    alert('Мало фильмов');
  } else if(30 >= personMovieDB.count >= 10){
    alert('Классический зритель');
  } else if (personMovieDB.count > 30){
    alert('Вы киноман');
  } else{
    alert('Произошла ошибка');
  }
}

level();

function showMyDB(){
  if (personMovieDB.privat == false){
    console.log(personMovieDB);
  } else console.log('Доступ запрещен');
}

showMyDB();

function writeYourGenres(){
  for (let i = 0; i < 3; i++){
    personMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`);
  }
  console.log(personMovieDB.genres);
}

writeYourGenres();