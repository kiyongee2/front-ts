
// 동적 키와 값
type StringMap = Record<string, string>;

const translations: StringMap = {
  hello: '안녕하세요',
  goodbye: '안녕히 가세요',
};

// 출력
console.log(translations.hello); // '안녕하세요'
console.log(translations.goodbye); // '안녕히 가세요'

// 특정 키만 허용
type Fruit = 'apple' | 'banana' | 'orange';

const prices: Record<Fruit, number> = {
  apple: 1000,
  banana: 1500,
  orange: 2000,
};

// 출력
for (const fruit in prices) {
  console.log(`${fruit}: ${prices[fruit as Fruit]}원`);
}

// 인터페이스와 함께 사용
interface User {
  id: number;
  name: string;
}
type UserMap = Record<string, User>;

const users: UserMap = {
  'user1': { id: 1, name: 'Alice' },
  'user2': { id: 2, name: 'Bob' },
};

// 출력
for (const userId in users) {
  console.log(`${userId}: ${JSON.stringify(users[userId as keyof UserMap])}`);
}
