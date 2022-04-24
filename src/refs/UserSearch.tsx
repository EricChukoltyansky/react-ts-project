import { useState, useRef } from "react";

const users = [
  { name: "박지성", age: 30 },
  { name: "정지성", age: 31 },
  { name: "유지성", age: 32 },
  { name: "최지성", age: 33 },
  { name: "조지성", age: 34 },
];

const UserSearch: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>();
  const [name, setName] = useState<string>("");
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });
    setUser(foundUser);
  };

  return (
    <div>
      User Search
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button onClick={onClick}>Find User</button>
      <div>
        {user?.name}
        {user?.age}
      </div>
    </div>
  );
};

export default UserSearch;
