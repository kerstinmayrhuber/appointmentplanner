import React from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";
import { useState } from "react";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  /*
Implement functions to add data to
contacts and appointments
*/
  function handleSubmittedContact(contactName, contactNumber, contactEmail) {
    setContacts(oldArray => [...oldArray, { name: contactName, number: contactNumber, email: contactEmail }]);
  }

  function handleSubmittedAppointment(appointmentName, appointmentContact, appointmentDate, appointmentTime) {
    setAppointments(oldArray => [...oldArray, { name: appointmentName, contact: appointmentContact, date: appointmentDate, time: appointmentTime }]);
  }


  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Navigate to={ROUTES.CONTACTS} replace />} />
      <Route path={ROUTES.CONTACTS} element={<ContactsPage contacts={contacts} handleSubmittedContact={handleSubmittedContact} />} />
      <Route path={ROUTES.APPOINTMENTS} element={<AppointmentsPage appointments={appointments} contacts={contacts} handleSubmittedAppointment={handleSubmittedAppointment} />} />
    </Route>
  ));

  return (
    <RouterProvider router={router} />
  );
}

export default App;
