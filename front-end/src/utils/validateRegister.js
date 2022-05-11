function validateData(name, email, password) {
  const nameLength = 12;
  const passLength = 6;

  if (name.length < nameLength) return true;

  if (!email.match(/\S+@\S+\.\S+/)) return true;

  if (password.length < passLength) return true;

  return false;
}

export default validateData;
