import restify from 'restify';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app = restify.createServer();

//connect db
import secret from './secret/secret';
mongoose.connect(secret.db_url);
const ewDB = mongoose.connection;

ewDB.on('error', (err)=>{
    throw err;
});
ewDB.once('open', ()=>{
    console.log('DB open');
});

//import routes
import user_route from './route/user.route';

//set middleware
app.use(morgan('dev'));
app.use(bodyParser.json());

//add endpoint to server
user_route.applyRoutes(app, '/users');

app.get('/', (req, res)=>{
    console.log('asdf');
    res.end();
});

//service at 8000 port
app.listen(8000, ()=>{
    console.log('server open');
});