//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
const { Configuration, OpenAIApi }= require( "openai");
const express=require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const configuration = new Configuration({
    organization: "org-j1Q5H1F3v87aQHCRIN0qm7F5",
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);




const app = express()

app.use(bodyParser.json())
app.use(cors())
const port= 3080

app.post('/', async (req,res) =>{
    const {message}=req.body;
    console.log(message,"message");
   // console.log(currentModel,"currentModel")

     const response=await openai.createCompletion({
        model: "text-davinci-003",//you can choice any model from the open ai site
        prompt: `${message}`,
        max_tokens: 100,
        temperature: 0.5,
    });
    // console.log()
    res.json({
        //data:response.data
        
            message : response.data.choices[0].text,
           //data:message,
        })
    
});


app.listen(port,()=>{
    console.log(`Example app 
    listening at 
    http://localhost:${port}`)
});