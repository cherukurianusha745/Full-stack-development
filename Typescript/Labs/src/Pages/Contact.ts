import React, { useState } from "react";


interface FormData {
name: string;
email: string;
message: string;
}


const Contact: React.FC = () => {
const [formData, setFormData] = useState<FormData>({
name: "",
email: "",
message: ""
});


const handleChange = (
e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
setFormData({ ...formData, [e.target.name]: e.target.value });
};


const handleSubmit = (e: React.FormEvent) => {
e.preventDefault();
if (!formData.name || !formData.email) {
alert("Please fill all required fields");
return;
}
alert("Form submitted successfully!");
};
return (
<div className="page">
<h1>Contact Us</h1>
<img src="https://via.placeholder.com/300" alt="Contact" />
<form onSubmit={handleSubmit}>
<input type="text" name="name" placeholder="Name" onChange={handleChange} />
<input type="email" name="email" placeholder="Email" onChange={handleChange} />
<textarea name="message" placeholder="Message" onChange={handleChange} />
<button type="submit">Submit</button>
</form>
</div>
);
};


export default Contact;