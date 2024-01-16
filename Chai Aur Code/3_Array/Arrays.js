const marvel_heros = ["ironman", "spiderman", "thor"];

const dc_heros = ["batman", "flash", "superman"];

// marvel_heros.push(dc_heros);

// console.log("marvel_heros:", marvel_heros);

// const all_heros = marvel_heros.concat(dc_heros);

// console.log("all_heros:", all_heros);

// const all_heros = [...marvel_heros, ...dc_heros];
// console.log("all_heros:", all_heros);

let arr = [1, 2, 3, 4, 15, 13, 12];
// let arr = [1, 2, 3, 4, [5, 6, 7], [8, [9, 10, 11]], 12];
// const newArr = arr.flat(Infinity);
// const newArr = arr.flat(2);

const newArr = [...new Set(arr)];

console.log("newArr:", newArr);
