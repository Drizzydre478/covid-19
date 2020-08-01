const express = require("express");
const app     = express();
const PORT    =  8000,
https         = require("https");
app.use(express.static(__dirname + "/public/dist/public"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const getTracker = (request,response) =>{
    https.get("https://thevirustracker.com/timeline/map-data.json", res =>{
        let data = ""
        res.on("data", chunk => {
            data += chunk
        })

        res.on("end", () => {
            console.log(typeof JSON.parse(data))
            response.json(JSON.parse(data))
        })
    }).on("error", err => {
        console.log("error", err)
        response.json(err)
    })
}

app.get("/", (req,res) => {
    console.log("request recieved")
    getTracker(req,res)
    console.log("request finished")
})

const getTracker2 = (request,response) =>{
    https.get("https://covidtracking.com/api/v1/us/daily.csv", res =>{
        let data = ""
        res.on("data", chunk => {
            data += chunk
        })

        res.on("end", () => {
            console.log(typeof JSON.parse(data))
            response.json(JSON.parse(data))
        })
    }).on("error", err => {
        console.log("error", err)
        response.json(err)
    })
}

app.get("/", (req,res) => {
    console.log("request recieved")
    getTracker2(req,res)
    console.log("request finished")
})



app.listen(PORT, () => console.log("listening on port 478"));