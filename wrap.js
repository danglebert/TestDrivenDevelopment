// function wrap(str, col){
//   let strArr = str.split(' ');
//   let countArr = strArr.slice('').map(char => char.length + 1);
//   let rows = [];

//   let counter = 0;
//   for (let i = 0; i < countArr.length; ++i) {
//     counter = counter + countArr[i];
//     if (counter <= col) {
//       rows.push(strArr[i]);
//     } else {
//       console.log('WORD: ', strArr[i])
//       // rows.push("\n");
//       rows = rows.concat('\n')
//       counter = 0;
//     }

//     // console.log('HERE: ', rows)
//     // console.log('COUNTER: ', counter)
//   }

//   const answer = rows.map(word => {
//     if (word !== '\n') {
//       return word += ' ';
//     } else return word;
//   }).join('')

//   // const finalStr = strArr.join(' ')
//   console.log(answer)
//   return answer;
// }

//Theirs

function wrap(line, maxLen){
  if(line.length <= maxLen) return line;

  const indexOfBlank = line.lastIndexOf(' ', maxLen);
  let split;
  let offset;

  if(indexOfBlank > -1) {
    split = indexOfBlank;
    offset = 1;
  } else {
    split = maxLen;
    offset = 0;
  }

  return line.substring(0, split) + "\n" + wrap(line.substring(split + offset), maxLen)
}


module.exports = wrap
// wrap("Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.", 20)

// Lorem ipsum dolor
// sit eu amet, elit na
// magna sem amet nulla
// vel purus ac ligula.

// US
// 'Lorem ipsum dolor \neu amet, elit na \nsem amet nulla vel \nac ligula. '

// THEIRS
// 'Lorem ipsum dolor\n    sit eu amet, elit na\n    magnasem amet nulla\n    vel purus ac ligula.'
