
const teams = [
{
name:"Chennai Super Kings",
short:"CSK",
captain:"MS Dhoni",
city:"Chennai",
wins:5,
logo:"https://upload.wikimedia.org/wikipedia/en/2/2e/Chennai_Super_Kings_Logo.svg"
},

{
name:"Mumbai Indians",
short:"MI",
captain:"Rohit Sharma",
city:"Mumbai",
wins:5,
logo:"https://upload.wikimedia.org/wikipedia/en/c/cd/Mumbai_Indians_Logo.svg"
},

{
name:"Royal Challengers Bangalore",
short:"RCB",
captain:"Faf du Plessis",
city:"Bangalore",
wins:0,
logo:"https://upload.wikimedia.org/wikipedia/en/4/4a/Royal_Challengers_Bangalore_Logo.svg"
},

{
name:"Kolkata Knight Riders",
short:"KKR",
captain:"Shreyas Iyer",
city:"Kolkata",
wins:2,
logo:"https://upload.wikimedia.org/wikipedia/en/4/4c/Kolkata_Knight_Riders_Logo.svg"
}
];


const players = [

{name:"MS Dhoni",team:"CSK",role:"Wicket Keeper",matches:250,runs:5082},
{name:"Ruturaj Gaikwad",team:"CSK",role:"Batsman",matches:60,runs:2200},
{name:"Ravindra Jadeja",team:"CSK",role:"All-Rounder",matches:210,runs:2700},

{name:"Rohit Sharma",team:"MI",role:"Batsman",matches:245,runs:6200},
{name:"Jasprit Bumrah",team:"MI",role:"Bowler",matches:130,runs:50},
{name:"Suryakumar Yadav",team:"MI",role:"Batsman",matches:140,runs:3400},

{name:"Virat Kohli",team:"RCB",role:"Batsman",matches:240,runs:7600},
{name:"Glenn Maxwell",team:"RCB",role:"All-Rounder",matches:125,runs:2700},

{name:"Andre Russell",team:"KKR",role:"All-Rounder",matches:115,runs:2300},
{name:"Sunil Narine",team:"KKR",role:"Bowler",matches:165,runs:1050}
];



const matches = [

{
date:"2026-04-01",
team1:"CSK",
team2:"MI",
venue:"Chennai",
result:"Upcoming"
},

{
date:"2026-04-03",
team1:"RCB",
team2:"KKR",
venue:"Bangalore",
result:"RCB Won"
},

{
date:"2026-04-05",
team1:"MI",
team2:"CSK",
venue:"Mumbai",
result:"Upcoming"
}
];


const pointsTable = [

{team:"CSK",played:14,win:9,loss:5,points:18},
{team:"MI",played:14,win:8,loss:6,points:16},
{team:"KKR",played:14,win:8,loss:6,points:16},
{team:"RCB",played:14,win:7,loss:7,points:14}

];


function loadTeams(data = teams){

if(!document.getElementById("teamContainer")) return;

let output="";

data.forEach(team=>{
output+=`
<div class="card">
<img src="${team.logo}" width="100">
<h3>${team.name}</h3>
<p><b>Captain:</b> ${team.captain}</p>
<p><b>City:</b> ${team.city}</p>
<p><b>Trophies:</b> ${team.wins}</p>
</div>`;
});

document.getElementById("teamContainer").innerHTML=output;
}



function searchTeams(){

let value=document
.getElementById("teamSearch")
.value.toLowerCase();

let filtered=teams.filter(team =>
team.name.toLowerCase().includes(value)
);

loadTeams(filtered);
}



function loadPlayers(data = players){

if(!document.getElementById("playerContainer")) return;

let output="";

data.forEach(player=>{
output+=`
<div class="card">
<h3>${player.name}</h3>
<p><b>Team:</b> ${player.team}</p>
<p><b>Role:</b> ${player.role}</p>
<p><b>Matches:</b> ${player.matches}</p>
<p><b>Runs:</b> ${player.runs}</p>
</div>`;
});

document.getElementById("playerContainer").innerHTML=output;
}



function filterPlayers(){

let search=document
.getElementById("playerSearch")
.value.toLowerCase();

let role=document
.getElementById("roleFilter").value;

let filtered=players.filter(player => {

return(
player.name.toLowerCase().includes(search) &&
(role==="All" || player.role===role)
);

});

loadPlayers(filtered);
}


function loadMatches(data = matches){

if(!document.getElementById("matchContainer")) return;

let output="";

data.forEach(match=>{

let status =
match.result==="Upcoming"
? "orange"
: "green";

output+=`
<div class="card">
<h3>${match.team1} vs ${match.team2}</h3>
<p>Date: ${match.date}</p>
<p>Venue: ${match.venue}</p>
<p style="color:${status}">
${match.result}
</p>
</div>`;
});

document.getElementById("matchContainer").innerHTML=output;
}



function filterMatches(team){

if(team==="all"){
loadMatches(matches);
return;
}

let filtered = matches.filter(m =>
m.team1===team || m.team2===team
);

loadMatches(filtered);
}

function sortPoints(){

pointsTable.sort(
(a,b)=>b.points-a.points
);

console.log(pointsTable);
}


function validateForm(){

let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
let msg=document.getElementById("msg").value;

if(name===""||email===""||msg===""){
alert("Please fill all fields");
return false;
}

let emailPattern =
/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if(!email.match(emailPattern)){
alert("Invalid Email");
return false;
}

alert("Message Sent Successfully ✅");
return true;
}


function logout(){
alert("Logged out successfully!");
}


window.onload=function(){

loadTeams();
loadPlayers();
loadMatches();

};