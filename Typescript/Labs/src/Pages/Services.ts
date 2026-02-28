import React from "react";


interface Service {
id: number;
name: string;
}


const Services: React.FC = () => {
const services: Service[] = [
{ id: 1, name: "Web Development" },
{ id: 2, name: "App Development" },
{ id: 3, name: "UI/UX Design" }
];


return (
<div className="page">
<h1>Our Services</h1>
<img src="https://via.placeholder.com/300" alt="Services" />
<ul>
{services.map(service => (
<li key={service.id}>{service.name}</li>
))}
</ul>
</div>
);
};


export default Services;