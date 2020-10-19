module.exports=app=>{
    const agents=require("./agent.controller.js");
    app.post("/agents/addAgemt", agents.addAgent);

};
