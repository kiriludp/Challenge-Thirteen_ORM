const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route (*´ー)ﾉ(ノд`)!</h1>")
});

module.exports = router;