import { createContext } from "react";

// 1. Context에 담을 값의 타입
export interface User {
  name: string;
  age: number;
}

// 2. createContext<타입>(기본값) : 기본값도 User 타입을 따라야 함
export const UserContext = 
    createContext<User>({ name: "", age: 0 });