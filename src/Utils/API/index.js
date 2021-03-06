export const retrieve = async url => {
  const response = await fetch(url);
  if (response.status >= 300) {
    throw new Error("Fetch has failed");
  } else {
    const result = await response.json();
    return result;
  }
};

export const registerUser = async user => {
  const url = "https://teller-api.herokuapp.com/users";
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    method: 'POST',
    body: user
  })
  const clone = await response.clone()
  const result = await clone.json()
  return result
}

export const logInUser = async user => {
  const url = "https://teller-api.herokuapp.com/authentications";
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    method: 'POST',
    body: user
  });
  const clone = await response.clone();
  const result = await clone.json();
  return result;
};

export const sendNote = async (note, token) => {
  const url = "https://teller-api.herokuapp.com/api/v1/notes";
  const response = await fetch(url, {
    headers: {
      "Authorization": token,
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    method: "POST",
    body: note
  });
  const clone = await response.clone();
  const result = await clone.json();
  return result;
};

export const sendFavorites = async (favorite, token) => {
  const url = "https://teller-api.herokuapp.com/api/v1/favorites";
  const response = await fetch(url, {
    headers: {
      "Authorization": token,
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    method: "POST",
    body: favorite
  });
  const clone = await response.clone();
  const result = await clone.json();
  return result;
};

export const fetchFavorites = async token => {
  const url =
    "https://cors-anywhere.herokuapp.com/https://teller-api.herokuapp.com/api/v1/favorites";
  const response = await fetch(url, {
    headers: {
      "Authorization": token,
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    method: "GET"
  });
  const result = await response.json();
  return result;
};

export const fetchNotes = async token => {
  const url =
    "https://cors-anywhere.herokuapp.com/https://teller-api.herokuapp.com/api/v1/notes";
  const response = await fetch(url, {
    headers: {
      "Authorization": token,
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    method: "GET"
  });
  const result = await response.json();
  return result;
};

export const fetchGraphData = async (currency) => {
  const url =
      `https://cors-anywhere.herokuapp.com/https://teller-api.herokuapp.com/api/v1/assets/${currency}/history?interval=h2`;
  const response = await fetch(url);
  const result = await response.json();
  return result;
};

export const fetchAnalysis = async currency => {
  const url = `https://cors-anywhere.herokuapp.com/https://teller-ai.herokuapp.com/teller/watson_analysis?coin=${currency}`;
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    method: "GET"
  })
  const result = await response.json()
  return result
}