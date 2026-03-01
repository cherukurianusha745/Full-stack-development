function checkLogin(){

let user = localStorage.getItem("login");

let logoutBtn = document.getElementById("logoutBtn");
let authLinks = document.getElementById("authLinks");

if(user){
if(logoutBtn) logoutBtn.style.display="inline";
if(authLinks) authLinks.style.display="none";
}
}


function logout(){

localStorage.removeItem("login");

alert("✅ Logged Out Successfully");

window.location.href="login.html";
}


function signup(){

let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
let password=document.getElementById("password").value;
let confirm=document.getElementById("confirm").value;
let role=document.getElementById("role").value;
let phone=document.getElementById("phone").value;

if(name==""||email==""||password==""||
confirm==""||phone==""){
alert("⚠ Fill all fields");
return;
}

if(password!==confirm){
alert("⚠ Passwords do not match");
return;
}

let user={
name,
email,
password,
role,
phone
};

localStorage.setItem(email,
JSON.stringify(user));

alert("✅ Registration Successful");

window.location.href="login.html";
}

function login(){

let email=document.getElementById("loginEmail").value;
let pass=document.getElementById("loginPass").value;

let user=
JSON.parse(localStorage.getItem(email));

if(user && user.password===pass){

localStorage.setItem("login",email);

alert("✅ Login Successful");

window.location.href="index.html";
}
else{
alert("❌ Invalid Email or Password");
}
}



function addEmployee(){

let name=document.getElementById("empName").value;
let dept=document.getElementById("dept").value;
let contact=document.getElementById("contact").value;

if(name==""||dept==""||contact==""){
alert("⚠ Enter all employee details");
return;
}

let employees=
JSON.parse(localStorage.getItem("employees"))||[];

employees.push({
name,
dept,
contact,
status:"Active"
});

localStorage.setItem(
"employees",
JSON.stringify(employees)
);

alert("✅ Employee Added Successfully!");

loadEmployees();
loadEmployeeCount();
}


function loadEmployees(){

let table=document.getElementById("empTable");
if(!table) return;

let employees=
JSON.parse(localStorage.getItem("employees"))||[];

let output="";

employees.forEach((emp,index)=>{

output+=`
<tr>
<td>${emp.name}</td>
<td>${emp.dept}</td>
<td>${emp.contact}</td>
<td>${emp.status}</td>
<td>
<button onclick="deleteEmployee(${index})">
Delete
</button>
</td>
</tr>`;
});

table.innerHTML=output;
}


function deleteEmployee(index){

let employees=
JSON.parse(localStorage.getItem("employees"));

employees.splice(index,1);

localStorage.setItem(
"employees",
JSON.stringify(employees)
);

alert("🗑 Employee Deleted");

loadEmployees();
loadEmployeeCount();
}



function loadEmployeeCount(){

let employees=
JSON.parse(localStorage.getItem("employees"))||[];

let count=document.getElementById("empCount");

if(count)
count.innerText=employees.length;
}


function markAttendance(){

let name=document.getElementById("attName").value;
let status=document.getElementById("status").value;

if(name==""){
alert("⚠ Enter Employee Name");
return;
}

let attendance=
JSON.parse(localStorage.getItem("attendance"))||[];

attendance.push({
name,
status,
date:new Date().toLocaleDateString()
});

localStorage.setItem(
"attendance",
JSON.stringify(attendance)
);

alert("✅ Attendance Marked Successfully!");

loadAttendance();
}


function loadAttendance(){

let table=
document.getElementById("attendanceTable");

if(!table) return;

let attendance=
JSON.parse(localStorage.getItem("attendance"))||[];

let output="";

attendance.forEach(a=>{

output+=`
<tr>
<td>${a.name}</td>
<td>${a.status}</td>
<td>${a.date}</td>
</tr>`;
});

table.innerHTML=output;
}

function calculateSalary(){

let basic=
Number(document.getElementById("basic").value);

let allow=
Number(document.getElementById("allow").value);

let deduct=
Number(document.getElementById("deduct").value);

if(isNaN(basic)||isNaN(allow)||isNaN(deduct)){
alert("⚠ Enter valid salary values");
return;
}

let net=basic+allow-deduct;

document.getElementById("netSalary")
.innerHTML="Net Salary : ₹ "+net;

let payroll=
JSON.parse(localStorage.getItem("payroll"))||[];

payroll.push({
employee:
document.getElementById("pname").value,
netSalary:net
});

localStorage.setItem(
"payroll",
JSON.stringify(payroll)
);

alert("✅ Payroll Calculated Successfully!");
}


function contact(){

let name=document.getElementById("cname").value;
let email=document.getElementById("cemail").value;
let msg=document.getElementById("msg").value;

if(name==""||email==""||msg==""){
alert("⚠ Fill all fields");
return;
}

alert("✅ Message Sent Successfully!");
}
window.onload=function(){

checkLogin();
loadEmployees();
loadEmployeeCount();
loadAttendance();

};