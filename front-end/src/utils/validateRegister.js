function isDataInvalid(name, email, password) {
  const minNameLength = 12;
  const minPassLength = 6;

  if (name.length < minNameLength) return true;

  if (!email.match(/\S+@\S+\.\S+/)) return true;

  if (password.length < minPassLength) return true;

  return false;
}

export default isDataInvalid;
