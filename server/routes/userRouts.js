import express from 'express';
import * as userController from '../controllers/userController.js';

const router = express.Router();

router.get('/', (req,res) => {
    console.log('Hello world!');
    res.send('Hello world!!');
});

router.get('/users', userController.getAllUsers);
router.get('/user/:id', userController.getSingleUser);
router.post('/user', userController.createUser);
router.put('/user/:id', userController.updateUser);
router.delete('/user/:id', userController.deleteUser);

export default router;