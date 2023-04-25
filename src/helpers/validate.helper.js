class Validate {
  static email = (email = "") => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  static minLength = (data = "", minLength) => {
    return data.length >= minLength;
  };

  static equalLength = (data = "", length) => {
    return data.length === length;
  };
}

export { Validate };
