const optionRule = '{1069} AND ({1070} OR {1071} OR {1072}) AND {1244} AND ({1245} OR {1339})';

// Output Example
/* const output = {
  and: [
    1069,
    { or: [1070, 1071, 1072] },
    1244,
    { or: [1245, 1339] },
  ]
}; */

let result = (options) => {
  const optionsArr = options.split(' AND ');
  const generate = optionsArr.map(item => {
    let orSpl = item.split(' OR ');
      if (orSpl.length < 2) {
              return Number(orSpl[0].replace(/[{()}]/g, ''))
      } else {
          let orSpls = orSpl.map(i => Number(i.replace(/[{()}]/g, '')))
        return {
          'or': orSpls
        }
      }
  });
  return generate
}

console.log('result:', result(optionRule));