import MathLib from '../lib/math';

export const ops = (a, b) => {
  return {
    sum: MathLib.sum(a, b),
    div: MathLib.div(a, b)
  };
};

// import {sum, div} from '../lib/math';
//
// export const ops = (a, b) => {
//   return {
//     sum: sum(a, b),
//     div: div(a, b)
//   };
// };
