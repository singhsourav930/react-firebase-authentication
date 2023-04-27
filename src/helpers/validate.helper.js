class Validate {
  static email = (email = "") => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  static onlyCharacters = (data = "") => {
    return String(data).match(/^[a-zA-Z]+$/);
  };

  static minLength = (data = "", minLength) => {
    return data.length >= minLength;
  };

  static equalLength = (data = "", length) => {
    return data.length === length;
  };

  static checkDecimal = (number = "") => {
    return String(number).match(/^[-+]?[0-9]+\.[0-9]+$/);
  };
}

export { Validate };
