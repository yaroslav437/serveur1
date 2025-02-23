import express from "express";
const app = express ();
app.get("/", (req,res)=>{
    console.log(req.rawHeaders);
    res.send("<h1>salut à tous, versions améliorée de mon serveur</h1>");
}
);

app.get("/about", (req,res)=>{
    
    res.send("<h1>à propos de moi</h1><p>salut  salut, moi c'est oscar emmanuel , jeune ingénieur passionné de tech </p>");
}
);

app.get("/contact", (req,res)=>{
    
    res.send("<h1>me contacter </h1><p>pour me contacter et suivre mes activités, je vous invite à vous connecter à mes pages facebook et linkedIn </p>");
}
);

const port =3002;
app.listen (port, ()=>{
    console.log(`server running in port ${port}`);
}

);