import { Router } from 'restify-router';
import bodyParser from 'body-parser';
import morgan from 'morgan';
var router = new Router();

//set router's middleware
router.use(bodyParser.json());
router.use(morgan('dev'));

router.get('', (req, res)=>{
    res.json({
        'msg': 'are you admin?',
        'data': 'this is data of all users'
    });
});

router.post('/auth', (req, res)=>{
    const { id, pw } = req.body;

    res.json({
        'msg': 'this is auth page'
    });
});

router.post('/login', (req, res)=>{
    const { id, pw } = req.body;
    
    res.json({
        'msg': 'this is login page'
    });
});

router.post('/:id', (req, res)=>{
    const usr_token = req.usrToken;
    /*
    if (decode(usr_token).id == req.params.id){
        db.findOne({id: req.body.id}, {_id: -1, pw: -1}).then(user=>{
            res.json(user);
        });
    }else{
        res.json({
            'msg': 'are you hack?'
        });
    }
    */
    res.json({
        'msg': 'this is login page'
    });
});

router.put('/:id', (req, res)=>{
    res.json({
        'msg': 'this is update page'
    });
});

router.delete('/:id', (req, res)=>{
    res.json({
        'msg': 'this is delete page'
    });
});

export default router;