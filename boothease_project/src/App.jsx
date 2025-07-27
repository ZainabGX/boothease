import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    idea: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ fontFamily: "Arial", maxWidth: "600px", margin: "auto", padding: "20px" }}>
      <h1>نموذج طلب البوث</h1>
      {submitted ? (
        <div style={{ color: "green", fontWeight: "bold" }}>
          تم إرسال النموذج بنجاح!
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>الاسم:</label><br />
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div>
            <label>رقم الجوال:</label><br />
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
          </div>
          <div>
            <label>البريد الإلكتروني:</label><br />
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div>
            <label>الخدمة المطلوبة:</label><br />
            <input type="text" name="service" value={formData.service} onChange={handleChange} required />
          </div>
          <div>
            <label>فكرة البوث:</label><br />
            <textarea name="idea" value={formData.idea} onChange={handleChange} required />
          </div>
          <button type="submit">إرسال</button>
        </form>
      )}
    </div>
  );
}

export default App;