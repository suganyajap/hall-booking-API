const express=require("express");
const dotenv=require("dotenv");
const app=express();
app.use(express.json());
dotenv.config();
console.log(process.env);
const PORT=process.env.PORT;
const rooms=[
    {
        id:"100",
        name:"business_class",
        seats:"10",
        amenties:"wifi,free break_fast,AC,free pick_up and drop,free 2 hours bar access",
        price:"4500",
        bookingDetails:[{
            customer_name:"siva",
            date:"20.01.2022",
            start:"04.00 A.M",
            end:"11.00 P.M"
        }]
    },
    {
        id:"101",
        name:"superior",
        seats:"05",
        amenties:"wifi,free break_fast,AC,free pick_up and drop",
        price:"3500",
        bookingDetails:[{
            customer_name:"arun",
            date:"01.02.2022",
            start:"09.00 A.M",
            end:"09.00 P.M"
        }]
    },
    {
        id:"102",
        name:"standard",
        seats:"20",
        amenties:"wifi,free break_fast,AC",
        price:"2500",
        bookingDetails:[{
            customer_name:"prabu",
            date:"05.03.2022",
            start:"03.00 A.M",
            end:"06.00 P.M"
        }]
    }
]

//Home page
app.get("/",(request,response)=>{
    response.send("Welcome to Hall Booking");
});

//creating room
app.post("/create_room",(request,response)=>{
    rooms.push(request.body);
    response.send("room created successfully");
});

//Get all customers
app.get("/customers",(request,response)=>{
    let customer_arr=[]
    
    rooms.forEach((room)=>{
        let customerObj={roomName:room.name}
    
        room.bookingDetails.forEach((customer)=>{
            customerObj.customer_name=customer.customer_name
             customerObj.date=customer.date
            customerObj.start=customer.start
            customerObj.end=customer.end
    
            customer_arr.push(customerObj)
            
        })
    })
response.send(customer_arr);
});

//Get rooms
app.get("/rooms",(request,response)=>{
    response.send(rooms);
});

app.listen(PORT,()=>console.log("App is started in PORT",PORT));

