import user from "@/models/user"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


const JWT_SECRET = process.env.TOKEN_SECRET
export const GET = async (req, res) => {
    const { username, password } = req.body;
    
    const user = await user.findOne(u => u.username === username || u.email === username);
    if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
    }
    else{
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        else{
            const token = jwt.sign({ username }, process.env.JWT_SECRET, {expiresIn: '1h'});
            return res.status(200).json({user, token});
        }
        
    }
};
