import React from "react";

import ContactInformation from "./ContactInformation";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <main className="min-h-screen bg-[var(--theme-bg)] text-[var(--theme-white)]">
      <ContactInformation />
      <ContactForm />
    </main>
  );
}

export default Contact;