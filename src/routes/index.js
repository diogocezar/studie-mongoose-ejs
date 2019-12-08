const router = require('express').Router();
const contactController = require('../controllers/contactController');

router.route('/contacts')
  .get(contactController.index)
  .post(contactController.create);

router.route('/contacts/:id')
  .get(contactController.view)
  .put(contactController.update)
  .delete(contactController.remove);

module.exports = router;