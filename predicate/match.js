const partial = (pattern, objekt) => {
  if (Array.isArray(pattern)) {
    for (const idx in pattern) {
      if (partial(pattern[idx], objekt[i])) {} else {
        return false;
      }
    }
    return true;
  } else if (typeof pattern === 'object') {
    for (const key in pattern) {
      if (partial(pattern[key], objekt[key])) {} else {
        return false;
      }
    }
    return true;
  } else if (typeof pattern === 'function') {
    return pattern(objekt);
  } else {
    return pattern === objekt;
  }
};

const total = (pattern, objekt) => {
  if (Array.isArray(pattern)) {
    return totalArray(pattern, objekt);
  } else if (typeof pattern === 'object') {
    return totalObjekt(pattern, objekt);
  } else if (typeof pattern === 'function') {
    return pattern(objekt);
  } else {
    return pattern === objekt;
  }
}

const totalArray = (pattern, array) => {
  if (Array.isArray(array) && pattern.length === array.length) {
    for (const index in pattern) {
      if (total(pattern[index], array[index])) {} else {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

const totalObjekt = (pattern, objekt) => {
  if (typeof objekt === 'object') {
    const pkeys = Object.keys(pattern);
    const okeys = Object.keys(objekt);
    if (pkeys.length === okeys.length) {
      for (const key in pattern) {
        const subpat = pattern[key];
        if (total(pattern[key], objekt[key])) {} else {
          return false;
        }
      };
      return true;
    }
  }
  return false;
};

const match = { partial, total, }
const m = {
  p: p => v => partial(p, v),
  t: p => v => total(p, v),
};

export { m, match }