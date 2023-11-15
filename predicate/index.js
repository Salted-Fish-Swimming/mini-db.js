const eq = x => y => x === y;
const is = typ => x => typeof x === typ;

const not = p => x => !p(x);
const and = (...preds) => x => preds.every(f => f(x));
const or = (...preds) => x => preds.some(f => f(x));

const isNone = or(eq(null), eq(undefined));

export {
  eq, is,
  not, and, or,
  isNone,
}

export { m } from './match.js';
