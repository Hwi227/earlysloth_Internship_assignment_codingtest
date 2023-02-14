/*
주어진 이중 배열의 좌우를 반전시키는 함수 solution을 완성해주세요.

입력 예시 1)
[
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

출력 예시 1)
[
    [3, 2, 1],
    [6, 5, 4],
    [9, 8, 7],
]

입력 예시 2)
[
    [0, 0, 0, 1],
    [0, 0, 1, 0],
    [0, 1, 0, 0],
    [1, 0, 0, 0],
]

출력 예시 2)
[
    [1, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
]
*/

const arr = [
  [1, 0, 0, 0, 0],
  [1, 0, 0, 0, 0],
  [1, 0, 0, 0, 0],
  [1, 0, 0, 0, 0],
  [1, 0, 0, 0, 0],
]

const solution = arr => {
   return arr.map(value => value.reverse());
}

const answer = solution(arr)
// [
//   [ 0, 0, 0, 0, 1 ],
//   [ 0, 0, 0, 0, 1 ],
//   [ 0, 0, 0, 0, 1 ],
//   [ 0, 0, 0, 0, 1 ],
//   [ 0, 0, 0, 0, 1 ]
// ]

console.log(answer)