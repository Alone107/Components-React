import React from "react";
import { Success } from "./Success";
import { Items } from "./Items";
import { useState, useEffect } from "react";

export const List = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [searchVallue, setSearchVallue] = useState("");
  const [invites, setInvites] = useState([]);
  const [buttonInvite, setButtonInvite] = useState(false);

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((json) => {
        setUsers(json.data);
      })
      .catch((err) => {
        console.warn(err);
        alert("Ошибка при получении пользовать");
      })
      .finally(() => setLoading(false));
  }, []);

  const onChangeSearchVallue = (event) => {
    setSearchVallue(event.target.value);
  };

  const onClickInvite = (id) => {
    if (invites.includes(id)) {
      setInvites((prev) => prev.filter((_id) => _id !== id));
    } else {
      setInvites((prev) => [...prev, id]);
    }
  };

  const onClickButtonInvite = () => {
    setButtonInvite(true);
  };

  const onClickReset = () => {
    setButtonInvite(false)
  }

  return (
    <div>
      {buttonInvite ? (
        <Success invites={invites} onClickReset={onClickReset} />
      ) : (
        <Items
          searchVallue={searchVallue}
          onChangeSearchVallue={onChangeSearchVallue}
          Items={users}
          isLoading={isLoading}
          invites={invites}
          onClickInvite={onClickInvite}
          onClickButtonInvite={onClickButtonInvite}
        />
      )}
    </div>
  );
};
