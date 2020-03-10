"use strict";

const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
  };

  user.mood = 'happy';

//   console.log(user);

  user.hobby = 'skydiving';

//   console.log(user);

  user.premium = false;

  const userKeys = Object.keys(user);

  for (let userKey of userKeys) {
    console.log(userKey + ":" + user[userKey]);
  }

  //console.log(Object.keys(user));




