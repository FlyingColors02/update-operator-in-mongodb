let mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/UpdateOperation")
        .then(()=>console.log("database got connected"))
        .catch(error=>console.log("something went wrong!!",error.message));

let UpdateSchema=new mongoose.Schema({
    name:{type:String},
    type:[String],
    author:{type:String},
    price:{type:Number}
});

let UpdateModel = mongoose.model("bookCollection",UpdateSchema);

//creating data
async function CreateColl(){
    let data = new UpdateModel({
        name:"Harry Potter and the Philosopher Stone",
        type:["magic","fantacy","fiction"],
        author:"R K Rowline",
        price:500
    })
    let item = await data.save();
}
//CreateColl();


//Update Approach 1
async function UpdateFunction(id){
    let book=await UpdateModel.findById(id);
    if(!book){return console.log("invalid id")}
    book.author="J K Rowling";
    book.price="500";
    let  data = await book.save();
    console.log (data);
}
//UpdateFunction("5ea7ee59f2448851a8a5690b");


//Update Approach-2
async function UpdateFun(id){
    let book= await UpdateModel.update({_id:id},{
        $set:{
            price:600,
        }
    });
//console.log(book);
}
//UpdateFun("5ea7ee59f2448851a8a5690b");

async function updateFunction(id){
    let book= await UpdateModel.findByIdAndUpdate(id,{
        $set:{
            price:500
        }
    })
console.log(book);
}
updateFunction("5ea7ee59f2448851a8a5690b");