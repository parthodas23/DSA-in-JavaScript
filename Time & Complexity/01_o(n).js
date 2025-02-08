const grocaries = ["milk", "bread", "eggs", "suger"];

const findGrocaries = (item1, item2) => {
  // O(n)
  for (let i = 0; i < grocaries.length; i++) {
    if (grocaries[i] === item1) {
      console.log(`Found : ${item1}`);
    }
  }
  // O(n)
  for (let j = 0; j < grocaries.length; j++) {
    if (grocaries[j] === item2) {
      console.log(`Found : ${item2}`);
    }
  }

  // n + n => 2n O(2n)
  // drops the const --> so it's become O(n)
};

findGrocaries("eggs", "suger");
