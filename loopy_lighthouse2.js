// for (let x = 100; x <= 200; x++) {
//   if (0 === x % 3 && 0 === x % 4) {
//     console.log("LoopyLighthouse")
//   }
//   else if (0 === x % 3) {
//     console.log("Loopy")
//   }
//   else if (0 === x % 4) {
//     console.log("Lighthouse")
//   }
//   else {
//     console.log(x);
//   }
// }

// function loopyLighthouse(range, multiples, words) {
//   for (var i = range[0]; i <= range[1]; i++) {
//     if (i % multiples[0] === 0 && i % multiples[1] === 0) {
//       console.log(words[0] + words[1]);
//     } else if (i % multiples[0] === 0) {
//       console.log(words[0]);
//     } else if (i % multiples[1] === 0) {
//       console.log(words[1]);
//     } else {
//       console.log(i);
//     }
//   }
// }

// console.log(loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]));

// DRY REFACTOR //

function loopyLighthouse(range, multiples, words) {
  var start = range[0];
  var end = range[1];
  var word1 = words[0];
  var word2 = words[1];

  for (var i = start; i <= end; i++) {
    var output = '';

    if (i % multiples[0] === 0) {
      output += word1;
    }

    if (i % multiples[1] === 0) {
      output += word2;
    }

    console.log(output || i);
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);