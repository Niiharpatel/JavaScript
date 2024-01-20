let data = "Nihar";
let data1 = "  Guru  ";
let data2 = "Patel";
let data3 = 15;

console.log(data.length); // 5

console.log(data.toUpperCase()); // NIHAR

console.log(data.toLowerCase()); //  nihar

console.log(data.replace("Nihar", "Guru")); //   Guru

console.log(data1.trim()); //  remove space from start and end of string

console.log(data.slice(1, 4)); // har = start from 1 index and end at 3 index

console.log(data.slice(1)); // ihar = start from 1 index to end of string

console.log(data.concat(data2)); // NiharPatel

console.log(data.includes("N")); // true = bcz N is include in string => case sensitive

console.log(data.includes("n")); // false = bcz n is include in string in upperCase => case sensitive

console.log(data.startsWith("N")); // true => case sensitive

console.log(data.endsWith("R")); // false => case sensitive

console.log(data.search("i")); // 2 => serach word in string and give index of that word

console.log(data.match("i")); // ['i'] => search word in string and give output in array

console.log(data.indexOf("h")); // 2 => give index value

console.log(data.lastIndexOf("i")); // 1 => check string from last

console.log(data.charAt("3")); // a => give character of  that index

console.log(data.charCodeAt(2)); // 104 => give the unicode for that index character

console.log(data.split("")); //  [ 'N', 'i', 'h', 'a', 'r' ]  convert string to array

console.log(data.repeat(3)); // NiharNiharNihar

console.log(data.substring(1, 4)); // iha  => same as slice but we can't add negative value

console.log(data3.toString()); // convert integer into string datatype

console.log(data.valueOf()); // Nihar => print the string as it is
