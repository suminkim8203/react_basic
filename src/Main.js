import React from "react";

const Main = ({ title, children }) => {
  // const = props; // props는 객체 = props 안의 속성을 불러옴

  return (
    <div>
      <h1>안녕하세요, 저는 {title}입니다.</h1>
      <h2>children 값은 {children}입니다.</h2>
    </div>
  );
};

Main.defaultProps = {
  title: "기본 이름",
};

export default Main;
