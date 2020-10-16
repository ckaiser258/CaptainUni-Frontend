const API_ROOT = `localhost:3000/api/v1`;

const token = () => localStorage.getItem("token");

const userObj = (data) => {
    return {
        first_name: data.first_name,
        last_name: data.last_name,
        username: data.username,
        password: data.password
    }
}

const headers = () => {
  return {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: token(),
  };
};

//Validate login credentials, exchange JWT token, send POST request for new session
const login = (data) => {
  return fetch(`${API_ROOT}/login`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({ "user": data }),
  }).then((res) => res.json());
};

//Fetch user after login, render JSON
const getCurrentUser = () => {
    return fetch(`${API_ROOT}/profile`, {
        headers: headers()
    })
    .then(res => res.json())
}

//Grab user params and send POST request to create new user
const createUser = data => {
    let obj = userObj(data)
    return fetch(`${API_ROOT}/users`, {
        method: "POST",
        headers: headers(),
        body: JSON.stringify({ "user": obj })
    })
    .catch(error => alert(error.message))
}