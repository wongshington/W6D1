const sum = function sum() {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
};

const sumRest = function sumRest(...args) {
  let result = 0;
  for (let i = 0; i < args.length; i++) {
    result += args[i];
  }
  return result;
};

class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`says ${sound} to ${person}!`);
    return true;
  }
}

const markov = new Cat("Markov");
const breakfast = new Cat("Breakfast");

// Function.prototype.myBind = function (ctx) {
//   return () => this.apply(ctx);
// };

Function.prototype.myBind = function myBind() {
  const target = arguments[0];
  const args = Array.from(arguments).slice(1);
  const targetFunction = this;

  return function() {
    const callTimeArgs = Array.from(arguments);
    targetFunction.apply(target, args.concat(callTimeArgs));
  };
};

Function.prototype.myRestBind = function myRestBind(...args) {
  const target = args[0];
  const restArgs = args.slice(1);
  console.log();
  return (...bindTimeArgs) => {
    this.apply(target, restArgs.concat(bindTimeArgs));
  };
};

const curriedSum = function curriedSum(argCount) {
  const numbers = [];
  const _curriedSum = function _curriedSum(num) {
    numbers.push(num);
    if (numbers.length === argCount) {
      return sum(...numbers);
    } else {
      return _curriedSum;
    }
  };
  return _curriedSum;
};

 Function.prototype.curry = function curry(argCount) {
  const args = [];
  const targetFunction = this;
  const _curry = function _curry(num) {
    args.push(num);
      if (args.length === argCount) {
        return targetFunction(...args);
      } else {
        return _curry;
      }
  };
  return _curry;
};
