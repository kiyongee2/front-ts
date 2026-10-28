// 1. State 타입 : 상태의 모양
export interface BankState {
  balance: number;
  history: string[];
}

// 2. Action 타입 : Union으로 가능한 액션을 모두 나열
export type BankAction =
  | { type: "DEPOSIT"; amount: number }
  | { type: "WITHDRAW"; amount: number }
  | { type: "RESET" };

// 초기값도 BankState 타입을 따름
export const initialState: BankState = {
  balance: 0,
  history: [],
};

// 3. 리듀서 : (현재 상태, 액션) => 새 상태
export function bankReducer(state: BankState, action: BankAction): BankState {
  switch (action.type) {
    case "DEPOSIT":
      // 이 case 안에서 action은 { type: "DEPOSIT"; amount: number }로 좁혀짐
      return {
        balance: state.balance + action.amount,
        history: [...state.history, `입금 ${action.amount.toLocaleString()}원`],
      };
    case "WITHDRAW":
      if (action.amount > state.balance) {
        alert("잔액이 부족합니다.");
        return state;
      }
      return {
        balance: state.balance - action.amount,
        history: [...state.history, `출금 ${action.amount.toLocaleString()}원`],
      };
    case "RESET":
      // RESET에는 amount가 없으므로 action.amount를 쓰면 타입 오류
      return initialState;
    default:
      return state;
  }
}