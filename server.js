import express from 'express';

const app = express();

const port = process.env.PORT || 9090;

app.listen(port, ()=> {
    console.log(`app is listening at port ${port} !!!`);
});

app.get('/', (req, res)=> {
    res.send("From a cyclic app upload");
})