//* Import repository
const UserRepository = require("../repositories/UserRepository");

class UserController {
  //TODO: Method GET.
  async index(request, response) {
    const { orderBy } = request.query;

    const users = await UserRepository.findAll(orderBy);

    return response.json(users);
  }

  //TODO: Method GET by ID.
  async show(request, response) {
    const { id } = request.params;

    const userById = await UserRepository.findById(id);

    if (!userById) {
      return response.status(404).json({ error: "Users not found." });
    }

    return response.json(userById);
  }

  //TODO: Method POST.
  async story(request, response) {
    const { username, lastname } = request.body;

    if (!username || !lastname) {
      return response
        .status(400)
        .json({ error: "User Name or Last Name is required" });
    }

    const users = await UserRepository.create({ username, lastname });

    if (users === null)
      return response.status(400).json({ error: "Problem create user." });

    const userReturn = await UserRepository.findById(users.coduser);

    return response.json(userReturn);
  }
}

module.exports = new UserController();
