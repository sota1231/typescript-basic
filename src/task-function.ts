type Student = {
  name: string;
  score: number;
};

const getResultMessage = (student: Student): string => {
  if (student.score >= 60) {
    return `${student.name}さんは合格です。`;
  } else {
    return `${student.name}さんは不合格です。`;
  }
};
const studentA = {
  name: '侍太郎',
  score: 70,
};

let resultMessage = getResultMessage(studentA);

console.log(resultMessage);



type GetResultMessage = (student: Student) => string;

const getResultMessageB: GetResultMessage = (student) => {
  if (student.score >= 60) {
    return `${student.name}さんは合格です。`;
  } else {
    return `${student.name}さんは不合格です。`;
  }
};
const studentB = {
  name: '侍花子',
  score: 10,
};

let resultMessageB = getResultMessageB(studentB);

console.log(resultMessageB);