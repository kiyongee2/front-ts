"use strict";
const translations = {
    hello: '안녕하세요',
    goodbye: '안녕히 가세요',
};
// 출력
console.log(translations.hello); // '안녕하세요'
console.log(translations.goodbye); // '안녕히 가세요'
const prices = {
    apple: 1000,
    banana: 1500,
    orange: 2000,
};
// 출력
for (const fruit in prices) {
    console.log(`${fruit}: ${prices[fruit]}원`);
}
const users = {
    'user1': { id: 1, name: 'Alice' },
    'user2': { id: 2, name: 'Bob' },
};
// 출력
for (const userId in users) {
    console.log(`${userId}: ${JSON.stringify(users[userId])}`);
}
