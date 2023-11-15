const fromPairs = pairs => Object.fromEntries(pairs);
const toPairs = objekt => Object.entries(objekt);
const { keys, values } = Object;

const groupAt = (patterns, list) => {
  const result = patterns.map(_ => []);
  for (const item of list) {
    for (const index in patterns) {
      const pred = patterns[index];
      if (pred(item)) {
        result[index].push(item);
        break;
      }
    }
  }
  return result;
}

// to impl: pick
const pickWith = (fn, a, b) => {
  if (typeof a === 'object' && typeof b === 'object') {
    for (const key of a) {
      a[key] = fn(key, a[key], b[key]);
    }
    return a;
  } else {
    return b;
  }
}

const pick = (a, b) => mergeWith((_, x, y) => merge(x, y), a, b);

// to impl: merge

export {
  fromPairs, toPairs, keys, values,
  groupAt,
  pickWith, pick
}