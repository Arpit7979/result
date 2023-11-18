import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;


let physics = [
  { regNo: "2343001", marks: "22" },
  { regNo: "2343002", marks: "15" },
  { regNo: "2343003", marks: "22" },
  { regNo: "2343004", marks: "13" },
  { regNo: "2343005", marks: "20" },
  { regNo: "2343006", marks: "12" },
  { regNo: "2343008", marks: "25" },
  { regNo: "2343009", marks: "13" },
  { regNo: "2343010", marks: "16" },
  { regNo: "2343011", marks: "Apna check karo!! 😂" },
  { regNo: "2343012", marks: "4" },
  { regNo: "2343013", marks: "28" },
  { regNo: "2343014", marks: "15" },
  { regNo: "2343015", marks: "-" },
  { regNo: "2343016", marks: "23" },
  { regNo: "2343017", marks: "23" },
  { regNo: "2343018", marks: "22" },
  { regNo: "2343019", marks: "24" },
  { regNo: "2343020", marks: "24" },
  { regNo: "2343021", marks: "24.5" },
  { regNo: "2343022", marks: "28" },
  { regNo: "2343023", marks: "22.5" },
  { regNo: "2343024", marks: "24" },
  { regNo: "2343025", marks: "21" },
  { regNo: "2343026", marks: "19" },
  { regNo: "2343027", marks: "10.5" }
  
];



// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

var heading = "Physics Minor-2 Marks ✌️";

// GET home page
app.get("/", async (req, res) => {
 
  res.render("index.ejs",{question: heading});
});

// POST a new post
app.post("/submit", (req, res) => {
  let answer = req.body.answer.trim();

  if(answer>=2343001 && answer<=2343027){
  var output = physics.filter(obj => {
    return obj.regNo ===answer
  });
  res.render("index.ejs",{question: "You have scored :"+ output[0].marks});

}else{
  res.render("index.ejs",{question: "You have entered incorrect reg. no."});
}
  
  
});


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
