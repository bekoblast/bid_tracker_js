//DESC: Get All Bidders
const get_bidders = (req, res) => {
  res.status(200).json({ msg: "Get All Bidders!!" });
};

//DESC: Get Bidder by id
const get_bidder = (req, res) => {
  res.status(200).json({ msg: `Get Bidder #${req.params.id}` });
};

//DESC: Create new Bidder
const create_bidder = (req, res) => {
  console.log(req.body);
  const { name, phone, email } = req.body;
  if (!name || !phone || !email) {
    res.status(400);
    throw new Error("All Fields are Required!!");
  }
  res.status(201).json({ msg: "Create New Bidder!!" });
};

//DESC: Update Bidder by id
const update_bidder = (req, res) => {
  res.status(202).json({ msg: `Update Bidder #${req.params.id}` });
};

//DESC: Delete Bidder by id
const delete_bidder = (req, res) => {
  res.status(202).json({ msg: `Delete Bidder #${req.params.id}` });
};

module.exports = {
  get_bidders,
  get_bidder,
  create_bidder,
  update_bidder,
  delete_bidder,
};
