const isAnagram = (s, t) => {
  let s1 = s.split("").sort().join("");
  let t1 = t.split("").sort().join("");
for(let i=0;i<s.length-1;i++){
    
}
  return s1 === t1;
};
console.log(isAnagram("listen", "silent"));
