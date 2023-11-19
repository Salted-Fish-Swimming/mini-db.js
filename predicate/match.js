const matchAll = (pattern, objekt) => {
  if (Array.isArray(pattern)) {
    return matchArray(pattern, objekt);
  } else if (typeof pattern === 'object') {
    return matchobjekt(pattern, objekt);
  } else if (typeof pattern === 'function') {
    return pattern(objekt);
  } else {
    return pattern === objekt;
  }
};

const matchArray = (pattern, array) => {
  if (Array.isArray(array)) {
    for (const idx in pattern) {
      if (matchAll(pattern[idx], array[i])) {} else {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

const matchobjekt = (pattern, objekt) => {
  if (typeof objekt === 'object') {
    for (const key in pattern) {
      if (matchAll(pattern[key], objekt[key])) {} else {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

const match = matchAll;
const m = pat => obj => match(pat, obj)

export { m }
export default match