//동적 키와 값
type StringMap = Record<string, string>

const translations: StringMap = {
  hello: '안녕하세요',
  goodbye: '안녕히 가세요'
};

// 출력
console.log(translations.hello);
console.log(translations.goodbye);

// 특정 키만 허용
type Fruit = 'apple' | 'banana' | 'orange';

const prices: Record<Fruit, number> = {
  apple: 2000,
  banana: 1500,
  orange: 1000
}

// 사과의 가격
console.log(`사과 가격: ${prices.apple}`);

// 전체 출력
for (const fruit in prices) {
  // fruit는 string 타입이므로 Fruit 타입으로 단언
  console.log(`${fruit}: ${prices[fruit as Fruit]}`);
}

