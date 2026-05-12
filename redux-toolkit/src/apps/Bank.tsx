
import {useSelector, useDispatch} from 'react-redux';
import {deposit, withdraw} from '../store/bankSlice';
import {useState} from 'react';

const Bank = () => {
  const balance = useSelector(
    (state: { bank: { balance: number } }) => state.bank.balance);
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();

  const handleDeposit = () => {
      dispatch(deposit(Number(amount)));
  };

  const handleWithdraw = () => {
    dispatch(withdraw(Number(amount)));
  };

  return (
    <div>
      <h2>잔액: {balance}원</h2>
      <input
        type="number"
        value={amount}
        step="1000"
        onChange={(e) => setAmount(Number(e.target.value))}
        placeholder="금액 입력"
      />
      <button onClick={handleDeposit}>입금</button>
      <button onClick={handleWithdraw}>출금</button>
    </div>
  );
}

export default Bank;