var express=require('express')
var AdminRouter=require('./Routes/admin')
var CustomerRouter=require('./Routes/customer')
var db=require('./DB_Connection')
var car=require('./Routes/car')
var person=require('./Routes/person')
var post=require('./Routes/post')
var comment=require('./Routes/comments')
var app=express()
app.use(express.json())
db
  .authenticate()
  .then(async res => {
    await db.sync();
    console.log("Database Connected");
  })
  .catch(err => {
    console.log("Error:", err);
  });

app.use('/',AdminRouter)
app.use('/',CustomerRouter)
app.use('/',person)
app.use('/',car)
app.use('/',post)
app.use('/',comment)

app.listen(3000,()=>{
    console.log("server is runnig at the port: ");
})