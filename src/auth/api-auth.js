const baseUrl = process.env.REACT_APP_MERN_BACKEND;

const signin = async (user) => {
  console.log(baseUrl + "/auth/signin/");
  try {
    let response = await fetch(baseUrl + "/auth/signin", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const signout = async () => {
  try {
    let response = await fetch(baseUrl + "/auth/signout/", { method: "GET" });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

export { signin, signout };
