/* 
Write a function called `findUserByUsername` which accepts an array of objects, each with a key of username, and a string. The function should return the first object with the key of username that matches the string passed to the function. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
findUserByUsername(users, 'taco') // undefined
*/


function findUserByUsername(usersArray, username) {
  return usersArray.find(function (item) {
    if (item['username'] === username) {
      return item;
    }
  });

}
const users = [
  { username: 'mlewis' },
  { username: 'akagen' },
  { username: 'msmith' }
];

console.log(findUserByUsername(users, 'mlewis')) // {username: 'mlewis'}
console.log(findUserByUsername(users, 'taco')) // undefined

/*
Write a function called `removeUser` which accepts an array of objects, each with a key of username, and a string. The function should remove the object from the array. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

removeUser(users, 'akagen') // {username: 'akagen'}
removeUser(users, 'akagen') // undefined
*/

function removeUser(usersArray, username) {
  const x = usersArray.findIndex(function (item) {
    return item.username === username;
  });
  if (x === -1) return;
  return usersArray.splice(x, 1)[0];
}

const newUsers = [
  { username: 'mlewis' },
  { username: 'akagen' },
  { username: 'msmith' }
];

console.log(removeUser(newUsers, 'akagen')) // {username: 'akagen'}
console.log(removeUser(newUsers, 'akagen')) // undefined
