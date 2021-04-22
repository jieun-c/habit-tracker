import React, { useEffect, useState, useRef, useCallback} from 'react';

const SimpleHabit = (props) => {
  //실제의 state값과, 업데이트 할 수 있는 state를 제공해준다.
  const [count, setCount] = useState(0); // 초기값 0
  const spanRef = useRef();

  const handleIncrement = useCallback (() => {
    setCount(count + 1);
  });

  useEffect(() =>{
    console.log(`mounted & updated : ${count}`);
  },[count]);
  //2번째 인자가 없다면 state나 props이 변경될 때마다 호출됨
  //2번째 인자가 [] 빈배열 이라면 마운트되었을때(처음)만 호출됨
  //2번째 인자에 [count]가 있다면 count가 변경될 때마다 호출됨

  return (
    <li className="habit">
      <span ref = {spanRef} className="habit-name">Reading</span>
      <span className="habit-count">{count}</span>
      <button
        className="habit-button habit-increase"
        onClick={handleIncrement}
      >
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
};

export default SimpleHabit;
