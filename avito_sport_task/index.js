/**
 * 🏆 Чемпионат по шагам
    Условие задачи
    Мы в Авито любим проводить соревнования — недавно мы устроили чемпионат по шагам. И вот настало время подводить итоги!
    Необходимо определить userIds участников, которые прошли наибольшее количество шагов steps за все дни, не пропустив ни одного дня соревнований.
 */

const data = [
  [
    { userId: 1, steps: 5000 },
    { userId: 2, steps: 1500 },
    { userId: 3, steps: 1500 },
  ],
  [{ userId: 2, steps: 1000 }],
];

// #Вывод
// champions = { 'userIds': [2], 'steps': 2500 }

// Сложность по времени написанного алгоритма
// O(n * m + k) - первый мой вариант - по сути он верный, но k в самом худшем случае и есть n * m
// O((n * m)^2) - второй вариант, не досмотрел, тут явно лишний квадрат
// O(2(n * m)) = O(n * m) - исправленный второй вариант (верный)

function findChampions(data) {
  const tempResult = {};

  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
      if (tempResult[data[i][j].userId]) {
        tempResult[data[i][j].userId] = {
          steps: tempResult[data[i][j].userId].steps + data[i][j].steps,
          count: tempResult[data[i][j].userId].count + 1,
        };
      } else {
        tempResult[data[i][j].userId] = { steps: data[i][j].steps, count: 1 };
      }
    }
  }

  // количество дней соревнований
  const maxCount = data.length;
  let maxSteps = 0;
  let winnerIds = [];

  for (const userId of Object.keys(tempResult)) {
    if (maxCount > tempResult[userId].count) {
      // участник пропустил дни, пропускаем его
      continue;
    }
    if (
      maxSteps === tempResult[userId].steps &&
      maxCount === tempResult[userId].count
    ) {
      winnerIds.push(userId);
    }

    if (maxSteps < tempResult[userId].steps) {
      maxSteps = tempResult[userId].steps;
      if (winnerIds.length > 0) {
        winnerIds.pop();
      }
      winnerIds.push(userId);
    }
  }
  return { userIds: winnerIds, steps: maxSteps };
}

console.log(findChampions(data));
