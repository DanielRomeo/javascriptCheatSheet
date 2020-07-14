import express from 'express';

const app = express();
const port = 5000;

interface name{
	name: stsja;
}
console.log('aa');

app.get('/', (req, res) => {
  res.send('The sedulous hyena ate the antelope!');
});
app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});
