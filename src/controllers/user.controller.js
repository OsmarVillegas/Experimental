import User from "../models/User";

export const createUser = (req, res) => {
  res.json("creating user");
};

export const getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

export const deleteUserById = async (req, res) => {
  try {
    const { userId } = req.params;
    await User.findByIdAndDelete(userId);
    res.status(204).json();
  } catch (error) {
    res.error;
  }
};

export const updateUserById = async (req, res) => {
  console.log(req.body);

  console.log(await User.encryptPassword(req.body.password));

  req.body.password = await User.encryptPassword(req.body.password);

  const updatedUser = await User.findByIdAndUpdate(
    req.params.userId,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json(updatedUser);
};
