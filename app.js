const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3003);
app.get('/', (req, res) => {
    res.send('Hello, Express');
});
app.get('/success', (req, res) => {
    res.send('Hello, Success!!');
});

app.listen(app.get('port'), ()=>{
    console.log(app.get('port'), '번 포트에서 대기 중');
});
   