import React from "react";

export const ContactForm = ({
  currentName,
  setCurrentName,
  currentPhone,
  setCurrentPhone,
  currentEmail,
  setCurrentEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={currentName}
          onChange={(e) => setCurrentName(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Phone:</label>
        <input
          type="tel"
          value={currentPhone}
          onChange={(e) => setCurrentPhone(e.target.value)}
          required
          pattern="[0-9]{10}"
          placeholder="Enter 10-digit phone number"
        />
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          value={currentEmail}
          onChange={(e) => setCurrentEmail(e.target.value)}
          required
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};
