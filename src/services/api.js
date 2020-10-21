const API_ROOT = `http://localhost:3000/api/v1`;

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

//Communicate current user to the backend
const getCurrentUser = () => {
    return fetch(`${API_ROOT}/profile`, {
        headers: headers()
    })
    .then(res => res.json())
}

//Grab user params and send POST request to create new user
const createUser = (data) => {
    let obj = userObj(data)
    return fetch(`${API_ROOT}/users`, {
        method: "POST",
        headers: headers(),
        body: JSON.stringify({ "user": obj })
    })
    .then(res => res.json())
}

//Fetch athletes for current user
const getAthletes = () => {
    return fetch(`${API_ROOT}/athletes`, {
        headers: headers()
    })
    .then (res => res.json())
}

const createAthlete = (data) => {
    return fetch(`${API_ROOT}/athletes`, {
        method: "POST",
        headers: headers(),
        body: JSON.stringify({ "athlete": data })
    })
    .catch(error => alert(error.message))
}

const editAthlete = (data) => {
    return fetch(`${API_ROOT}/athletes/${data.id}`, {
        method: "PATCH",
        headers: headers(),
        body: JSON.stringify({ "athlete": data })
    })
    .catch(error => alert(error.message))
}

const deleteAthlete = (data) => {
    return fetch(`${API_ROOT}/athletes/${data.id}`, {
        method: "DELETE",
        headers: headers()
    })
    .then(res => res.json())
    .catch(error => alert(error.message))
}

//Export all functions
export const api = {
    auth: {
        login,
        getCurrentUser,
        createUser,
    },
    athletes: {
        getAthletes,
        createAthlete,
        editAthlete,
        deleteAthlete
    }
}