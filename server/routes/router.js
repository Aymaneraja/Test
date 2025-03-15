import express from "express"
import { CreateUser, UpdateUser, deleteUser, getAllUsers, getUserById } from "../controllers/UserController.js";


const router = express.Router()

router.get('/' , getAllUsers) ; 
router.get('/:id' , getUserById) ; 
router.post('/' , CreateUser) ; 
router.put('/:id' , UpdateUser) ; 
router.delete('/:id' , deleteUser) ; 

export default router ; 