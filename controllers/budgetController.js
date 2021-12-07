const { Budget } = require("../models");

const budgetController = {
  async createBudget(req, res) {
    const { name, email, message } = req.body;

    try {
      const result = await Budget.create({
        name,
        email,
        message,
        createAt: new Date().toISOString(),
        updateAt: new Date().toISOString(),
      });
      console.log(result);
      return res.send("Sucess");
    } catch (error) {
      console.log("error:" + error);
      return res.send("error");
    }
  },
};

module.exports = budgetController;