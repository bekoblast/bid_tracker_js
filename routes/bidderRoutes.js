const express = require("express");
const router = express.Router();
const {
  get_bidders,
  get_bidder,
  create_bidder,
  update_bidder,
  delete_bidder,
} = require("../controllers/bidderController");

router.route("/").get(get_bidders).post(create_bidder);
router.route("/:id").get(get_bidder).put(update_bidder).delete(delete_bidder);

module.exports = router;
