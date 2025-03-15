import User from '../models/userModel.js'


export const getAllUsers = async (req, res)=>{
    try{
            const users = await User.getAll() ;
            res.status(200).json(users) ; 
    }catch(err)
    {
        res.status(500).json({error:err.message});
    }
} ; 

export const getUserById = async (req , res) =>{
    try{
            const user = await User.getUserById(req.params.id) ; 
            if(user != null)
                return res.status(200).json(user)
            return res.status(404).json({message : 'User not found'})
    }catch (err)
    {
        res.status(500).json({error:err.message})
    }
} ;

export const UpdateUser = async (req , res) =>{
    try{
            const{name , email} = req.body ;
            await User.update(req.params.id , name , email) ; 
            res.status(200).json({ message: 'User updated' });
    }catch(err){
        return res.status(500).json({error:err.message}) // The server encountered an unexpected condition that prevented it from fulfilling the request.
    }
} ; 

export const CreateUser = async (req , res) =>{
    try{
        const {name , email} = req.body ; 
        await user.CreateUser(name,email) ; 
        res.status(201).json({message : 'User Created'})

    }catch(err)
    {
        return res.status(404).json({error: err.message}) //  The server could not find the requested resource.
    }
} ; 

export const deleteUser = async(req , res) =>{
    try{
        await user.delete(req.params.id) ; 
        res.status(200).json({message : 'User deleted'}) ; 

    }catch(err)
    {
        res.status(500).json({error : err.message}) ;
    }
} ;

