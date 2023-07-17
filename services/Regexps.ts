const regexps = {
  email:
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
  password: /^(?=.*[0-9]).{8,}$/,
  username: /^[a-zA-Z0-9]{6,}$/,
  title: /[\w\W]{5,}/,
};

export default regexps;
