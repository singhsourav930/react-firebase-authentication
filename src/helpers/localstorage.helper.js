class LStorage {
  static setUserData = (userData = {}) => {
    localStorage.setItem("userData", JSON.stringify(userData));
    return userData;
  };

  static removeUserData = () => {
    localStorage.removeItem("userData");
    return {};
  };

  static getUserData = () => {
    try {
      let userData = localStorage.getItem("userData") || null;
      if (userData) {
        userData = JSON.parse(userData);
      }
      return userData;
    } catch (e) {
      alert(e?.message || e);
    }
  };
}

export { LStorage };
