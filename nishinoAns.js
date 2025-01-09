const text_data = await fetch("./data.txt");
const text = await text_data.text();

const change = (str) => {
  const first_line = str[0];
  const second_line = str[1];
  const third_line = str[2] + str[3] + str[4] + str[5] + str[6];
  const fourth_line = str[7];
  const fifth_line = str[8];

  const idx = second_line.indexOf([...second_line].filter(char => char >= 'A' && char <= 'Z'));

  const answer = first_line.split('').reverse().join('')+'\n'
         + second_line.slice(idx) + second_line.slice(0,idx)+'\n'
         + third_line.replace(/\s+/g,'')+'\n'
         + fourth_line.replace(/[^a-zA-Z^]/g, '')+'\n'
         + fifth_line.replace("A", "C").replace("a", "c")
 
  return answer;
}

console.log(change(arr));

export default text;
