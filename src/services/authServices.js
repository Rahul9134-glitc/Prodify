import { getData, saveData, removeData } from "../utils/storage";

const registerUser = (newUserData) => {
  const users = getData("users");

  const ExistUser = users.some((user) => user.email === newUserData.email);

  if (ExistUser) {
    return {
      success: false,
      message: "User already exists",
    };
  }

  const newUser = {
    id: Date.now(),
    name: newUserData.name,
    email: newUserData.email,
    password: newUserData.password,
  };

  users.push(newUser);
  saveData("users", users);
  return {
    success: true,
    message: "Registration successful",
  };
};

const loginUser = (email, password) => {
  console.log(email.email)
  console.log(password)

  const users = getData("users");
  const matchUser = users.find(
    (user) => user.email === email && user.password === password,
  );

  if (matchUser) {
    saveData("currentUser", matchUser);
    return {
      success: true,
      message: "Login successful",
      user: matchUser,
    };
  } else {
    return {
      success: false,
      message: "Invalid email or password",
    };
  }
};

const changePassword = (
  currentPassword,
  newPassword,
  confirmPassword
) => {
  const users = getData("users");
  const currentUser = getData("currentUser");

  if (currentPassword !== currentUser.password) {
    return {
      success: false,
      message: "Current password is incorrect",
    };
  }

  if (newPassword !== confirmPassword) {
    return {
      success: false,
      message: "Passwords do not match",
    };
  }

  const updatedUsers = users.map((user) =>
    user.id === currentUser.id
      ? { ...user, password: newPassword }
      : user
  );

  saveData("users", updatedUsers);

  const updatedCurrentUser = {
    ...currentUser,
    password: newPassword,
  };

  saveData("currentUser", updatedCurrentUser);

  return {
    success: true,
    message: "Password Updated Successfully",
  };
};


export { loginUser, registerUser, changePassword };
