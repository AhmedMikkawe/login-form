function solution(n) {
  let char = "L";
  let char2 = "";
  for (let i = 1; i < n; i++) {
    console.log(char);
  }
  for (let i = 0; i < n; i++) {
    char2 = char2.concat(char);
  }
  console.log(char2);
}
solution(4);
solution(100);
