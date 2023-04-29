export function toUpperCase(a) {
  let sp = a.split(" ");
  let newStr = "";
  sp.filter((e) => {
    newStr += " " + e[0].toUpperCase() + e.slice(1);
  });

  return newStr.trim();
}
