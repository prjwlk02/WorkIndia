const connection=require("./DB.js");

const Agent = function(agent) {
    this.agent_id = agent.agent_id;
    this.password = agent.password;
   
    };

    Agent.create = (a1,result)=> {
      conn.query("insert into Table SET ?",a1,(err,res)=>{
          if(err)
              throw err;
          else
              result(null,{status:'account created',status_code:'200'});
      });
      

  };

    module.exports=Agent;



