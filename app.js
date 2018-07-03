import restify from 'restify';
import morgan from 'morgan';
import bodyParser from 'body-parser';

const app = restify.createServer();

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