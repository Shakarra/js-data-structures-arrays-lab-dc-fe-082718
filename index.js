// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];
function destructivelyAppendDriver(name) {
  drivers.push(name);
}

// drivers;

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
drivers.pop();
};

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function appendDriver (name) {
  return [...drivers, name];
}  

function prependDriver (name) {
  return [name, ...drivers];
}  
function drivers.slice(-1);
// drivers.slice(1);
