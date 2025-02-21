import React, { useState } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";

const ResumeGenerator = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    summary: "",
    experience: "",
    education: "",
    skills: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFont("helvetica", "bold");
    doc.text("Resume", 20, 20);
    doc.setFont("helvetica", "normal");
    doc.text(`Name: ${formData.name}`, 20, 40);
    doc.text(`Email: ${formData.email}`, 20, 50);
    doc.text(`Phone: ${formData.phone}`, 20, 60);
    doc.text(`Summary: ${formData.summary}`, 20, 70, { maxWidth: 170 });
    doc.text(`Experience: ${formData.experience}`, 20, 90, { maxWidth: 170 });
    doc.text(`Education: ${formData.education}`, 20, 110, { maxWidth: 170 });
    doc.text(`Skills: ${formData.skills}`, 20, 130, { maxWidth: 170 });
    doc.save("resume.pdf");
  };

  return (
    <div className="p-5">
      <h2>Resume Generator</h2>
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="phone" placeholder="Phone" onChange={handleChange} />
      <textarea name="summary" placeholder="Summary" onChange={handleChange} />
      <textarea name="experience" placeholder="Experience" onChange={handleChange} />
      <textarea name="education" placeholder="Education" onChange={handleChange} />
      <textarea name="skills" placeholder="Skills" onChange={handleChange} />
      <button onClick={generatePDF}>Generate PDF</button>
    </div>
  );
};

export default ResumeGenerator;
