import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {

  const [currentName, setCurrentName] = useState('');
  const [currentPhone, setCurrentPhone] = useState('');
  const [currentEmail, setCurrentEmail] = useState('');





  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSubmittedContact(currentName, currentPhone, currentEmail);
    if (props.contacts.some(e => e.name === currentName)) {
      alert('This name is already in the list.');
    }
    else { setCurrentName(''); setCurrentPhone(''); setCurrentEmail(''); alert('Added contact'); }

    console.log(props.contacts);
  };



  return (
    <div>
      <section>
        <ContactForm
          currentName={currentName}
          setCurrentName={setCurrentName}
          currentPhone={currentPhone}
          setCurrentPhone={setCurrentPhone}
          currentEmail={currentEmail}
          setCurrentEmail={setCurrentEmail}
          handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts={props.contacts} />
      </section>
    </div>
  );
};
