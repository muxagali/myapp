let rerenderEntireTree = () => {}

const state = {
    users: [
        {
          "id": 1,
          "username": "mukhagali",
          "first_name": "Mukhagali",
          "last_name": "Aryn",
          "email": "axumilize@gmail.com",
          "password": "arynov00"
        },
        {
          "id": 2,
          "username": "qadyraly",
          "first_name": "Qadyr ",
          "last_name": "Ali",
          "email": "qadyr@gmail.com",
          "password": "123456789"
        },
        {
          "id": 3,
          "username": "nur2000",
          "first_name": "Nurdaylet",
          "last_name": "Dikhanbay",
          "email": "dado@gmail.com",
          "password": "Nur2000"
        }
    ],
    companies: [
        {
          "id": 1,
          "name": "abaystreet",
          "resource": "web platform for trades"
        },
        {
          "id": 2,
          "name": "kolesa",
          "resource": "web store for cars"
        },
        {
          "id": 3,
          "name": "kaspikz",
          "resource": "bank"
        }
    ],
    messages: [
      {
        "id": 1,
        "body": "This is my first message in today!",
        "timestamp": new Date()
      },
      {
        "id": 2,
        "body": "This is my second message in today!",
        "timestamp": new Date()
      },
      {
        "id": 3,
        "body": "This is my thirds message in today!",
        "timestamp": new Date()
      },
    ]
}

export const createUser = (username, first_name, last_name, email, password) => {
  let user = {
    "id": 4,
    "username": username,
    "first_name": first_name,
    "last_name": last_name,
    "email": email,
    "password": password
  }
  state.users.push(user)
  rerenderEntireTree(state)
}

export const subscribe = (observer) => {
  rerenderEntireTree = observer
}

export default state