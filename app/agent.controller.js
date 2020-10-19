const { clearScreenDown } = require("readline");
const Agent=require("./agent.model.js");

exports.listAll = (req,res) =>

exports.addAgent=(req,res) =>{
    if(!req.body)
        res.send("cannot be agent");
        
        const a1=new Agent({
        agent_id:req.body.agent_id,
        password:req.body.password
        });

        Agent.create(a1,(err,data)=>{
            if(err)
                res.send(err);
            else
                res.send(data);
        });
};




