const express = require('require');
const app = express();
app.listen(3000, () => console.log('listening at 3000'));
app.use(express.static('public'));

app.post('/index2', (request, response) => {
  console.log(request);
});
