const express = require('express');
const app = express();
const port = process.env.PORT || 4000;


app.use(express.static(`build`));

app.get('*', (req, res)=>{
    res.sendFile(`build/index.html`);
});

app.listen(port, () => {
    console.log('app listening on', port);
  });