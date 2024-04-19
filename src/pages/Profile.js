import React from "react";
import { useParams } from "react-router-dom";

const data = {
  sumin: {
    name: "수민",
    description: "걍 김수민임",
  },
  soyeon: {
    name: "소연이",
    description: "소연이. 오늘 파르페 같이 먹을거임",
  },
};

const Profile = () => {
  // useParams: URL 파라미터의 값을 조회할 수 있게 해준다.
  const params = useParams();

  const profile = data[params.username];

  return (
    <div>
      <h1>사용자 프로필</h1>
      <div>
        {profile ? (
          <div>
            <h2>{profile.name}</h2>
            <p>{profile.description}</p>
          </div>
        ) : (
          <p>존재하지 않는 프로필입니다.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
