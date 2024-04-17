import React, { useState } from "react";

const initState = [
  { id: 1, username: "김수민" },
  { id: 2, username: "배소연" },
  { id: 3, username: "박수현" },
  { id: 4, username: "이정민" },
  { id: 5, username: "김가희" },
  { id: 6, username: "이진경" },
];

const Main = () => {
  // member 목록 상태
  const [members, setMembers] = useState(initState);
  // id 상태
  const [nextId, setNextId] = useState(7);
  // input 상태
  const [username, setUsername] = useState("");

  // input 이벤트 핸들러
  const onChange = e => {
    setUsername(e.target.value);
  };

  const onClick = () => {
    console.log("사용자 이름 추가!");

    // 배열의 내장 함수 concat을 사용하여 새로운 항목을 추가한 배열로 만든다.
    const nextMembers = members.concat({
      id: nextId,
      username: username,
    });
    setNextId(nextId + 1);
    setMembers(nextMembers);
    setUsername("");
  };

  // remove 이벤트 핸들러
  const onRemove = id => {
    const nextMembers = members.filter(member => member.id !== id);
    setMembers(nextMembers);
  };

  return (
    <div>
      <input onChange={onChange} value={username} />
      <button onClick={onClick}>사용자 추가</button>

      <ul>
        {members.map(member => (
          <li key={member.id} onDoubleClick={() => onRemove(member.id)}>
            {member.username}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Main;
