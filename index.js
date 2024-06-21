import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
const app = express();
// app.get('/', async(req, res) => {
//     try{
// res.json({data:"Dheeraj"})
//     }
//     catch(err){
// console.log(Error);
//     }
// })

app.use(bodyParser.urlencoded({extends: false}))
app.use(bodyParser.json())
app.use(cors())
app.get('/', (req, res)=> {

}
)
app.post('/signup', async(req, res) => {
    try{
            console.log(req.body);
            res.json({data: "Success"});
    }
    catch(err){
            console.log(Error);
                }
})
console.log();
app.listen(8000);
