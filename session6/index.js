// console.log(1);

// setTimeout(() => {
//   console.log(2);
// }, 3000);

// console.log(3);

// async / await

const context = {
  users: null,
};

window.onload = async () => {
  await getUsers();
  renderUsers();
  viewInfoUser();
};

const getUsers = async () => {
  const res = await fetch('https://reqres.in/api/users');
  const usersData = await res.json();
  context.users = usersData.data;
};

const renderUsers = () => {
  for (let i = 0; i < context.users.length; i++) {
    let eachUser = context.users[i];
    let li = `
      <li id="user_${i}">
        ${eachUser.first_name}
      </li>
    `;
    let ul = document.getElementById('ul_users');
    ul.innerHTML += li;
  }
  // context.users.forEach((eachUser) => {
  //   let li = `
  //     <li>  
  //       <a href="">${eachUser.first_name}</a>
  //     </li>
  //   `;
  //   let ul = document.getElementById('ul_users');
  //   ul.innerHTML += li;
  // })
};

const viewInfoUser = () => {
  for (let i = 0; i < context.users.length; i++) {
    let li = document.getElementById(`user_${i}`);
    let user_info = document.getElementById('user_info');
    li.addEventListener('click', () => {
      user_info.innerHTML = '';
      let eachUser = context.users[i];
      user_info.innerHTML += `
        <img src=${eachUser.avatar}>
        <br />
        <b>First Name: </b>${eachUser.first_name}
        <br />
        <b>Last Name: </b>${eachUser.last_name}
        <br />
        <b>Email: </b>${eachUser.email}
      `
    })
  }
};

