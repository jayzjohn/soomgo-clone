const express = require('express')
const app = express()
const port = 8080
const { newEnforcer } = require('casbin');
const cors = require('cors');

// For browser:
// import { newEnforcer } from 'casbin';
const jwt = require('jsonwebtoken');
require('dotenv').config();
app.use(cors());
app.use(express.json())

const sub = 'manager'; // the user that wants to access a resource.
const obj = 'data1'; // the resource that is going to be accessed.
const act = 'read'; // the operation that the user performs on the resource.


const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
  };

const generateToken = (user = '') => {
    try {
      // Gets expiration time
      const expiration =
        Math.floor(Date.now() / 1000) + 60 * 5
      // returns signed and encrypted token
      return jwt.sign(
          {
            data: {
              _id: user
            },
            exp: expiration
          },
          process.env.JWT_SECRET
        )
      
    } catch (error) {
      throw error
    }
  }

app.post('/login',cors(corsOptions), async (req, res) => {

    const {userName, password} = req.body
    const enforcer = await newEnforcer('basic_model.conf', 'basic_policy.csv');
    const opt = await enforcer.enforce(userName, obj, act);

    if(opt){
        const verify = generateToken(sub)
        res.status(200).json(verify)
    }else{
        res.status(401).send('permission deny')
    }
 
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})