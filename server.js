if (process.env.NODE_ENV !== 'production') require('dotenv').config();
const app = require('./app');
const port = process.env.PORT || 5000;

app.listen(port, (error) => {
  if (error) throw error;
  console.log('Express app is listening on port ' + port);
});
