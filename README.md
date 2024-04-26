deploy : https://testovoe-woad.vercel.app/

Задача на рефакторинг:
```
function func(string, a, b) {
  let aIndex = -1;
  let bIndex = -1;

  for (let i = string.length - 1; i > 0; i--) {
    if (string[i] === a) {
      aIndex = i;
    }
    if (string[i] === b) {
      bIndex = i;
    }
  }
  return Math.max(aIndex, bIndex);
```
