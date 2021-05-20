import api from "./api";

const checkAuth = async () => {
  if (localStorage.getItem("currentUser") !== null) {
    const obj = localStorage.getItem("currentUser");
    const jwt = JSON.parse(obj);
    try {
      const res = await api.post(
        "/isAuthed",
        {},
        {
          headers: { Authorization: `Bearer ${jwt.token}` },
        }
      );
      if (res.data.status) {
        return true;
      } else {
        localStorage.removeItem("currentUser");
        return false;
      }
    } catch (e) {
      localStorage.removeItem("currentUser");
      return false;
    }
  } else {
    return false;
  }
};

export default checkAuth;
