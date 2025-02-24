const capitalize = (str) => {
  return str
    .toLowerCase()
    .split(" ") // string to arr and sparate in space
    .map((word) => word[0].toUpperCase() + word.slice(1)) // word.slice(1) → "artha" (removes the first letter and keeps the rest)
    .join(" "); // arr to string and space
};
console.log(capitalize("partha pritham das"));
