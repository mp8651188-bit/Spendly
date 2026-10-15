import React from "react";
import { Link } from "react-router-dom";
import Header1 from "../../components/Layout/Header1";
import Footer from "../../components/Layout/Footer";
import "./PrivacyAndPolicy.css";

const sections = [
  {
    title: "Information you provide",
    text: "Spendly stores the name, email address, and account details you provide when registering. Optional profile details may include your phone number, secondary email, address, birth date, gender, and favourite sport. Passwords for email accounts are stored as bcrypt hashes.",
  },
  {
    title: "Your financial records",
    text: "We store the income and expenses you enter, including amounts, dates, categories, references, and descriptions, to show your transaction history and calculate summaries. Spendly records transactions you enter manually; you do not need to provide bank passwords, card PINs, or payment credentials. Please keep these details out of transaction notes and contact messages.",
  },
  {
    title: "How your information is used",
    text: "Account details support sign-in, profile management, verification, and password recovery. Transaction records power your filters, financial summaries, analytics, and Excel exports. If you send a contact message, the information you submit is used to respond to your enquiry.",
  },
  {
    title: "Browser storage and sign-out",
    text: "Spendly uses browser local storage to remember your signed-in account and authentication token, and to save your light or dark theme preference. Signing out removes the saved account from that browser. Clearing browser storage also removes local preferences, but does not delete records saved in the database. Sign out when using a shared device.",
  },
  {
    title: "Connected services",
    text: "If you choose Google sign-in, Google provides the account information used to identify you, such as your name, email, and Google account identifier. Configured email providers process recipient addresses and message contents to deliver verification and password reset emails. Phone verification, when configured and used, sends your number to the SMS provider. Database and hosting providers may also process stored records and request logs, depending on how the app is run. These providers handle information under their own policies.",
  },
  {
    title: "Storage and security",
    text: "Financial and account records are stored in the application's configured database, rather than only in your browser. Even when accessed through localhost, configured database, email, and sign-in services may be remote. Password hashing and authentication tokens help protect account access, but no system can guarantee complete security. The current local setup uses HTTP; use it on a trusted device and connection.",
  },
  {
    title: "Managing and removing your information",
    text: "You can review and edit your profile, change your password, edit or delete individual transactions, and export transaction reports from the dashboard. Records remain in the configured database unless removed; signing out does not erase them. For help with account deletion, a copy of your information, or a privacy concern, contact the maintainer below. Any removal from backups depends on the database provider and backup configuration.",
  },
  {
    title: "Updates to this notice",
    text: "This notice describes the current version of Spendly. It will be revised when the app's features or data handling change, with the latest update date shown on this page.",
  },
];

const PrivacyAndPolicy = () => (
  <>
    <Header1 allowAuthenticated />
    <main className="auth-page-wrapper">
      <div className="legal-content">
        <div className="legal-container">
          <article className="legal-document">
            <h1 className="legal-title">Privacy Policy</h1>
            <p className="legal-last-updated">Last updated: 16 October 2026</p>
            <p className="legal-text">Your financial records are personal. This page explains what Spendly stores, why it is needed, and how you can manage your information while using the expense tracker.</p>
            {sections.map(({ title, text }, index) => (
              <section className="legal-section" key={title}>
                <h2 className="legal-heading">{index + 1}. {title}</h2>
                <p className="legal-text">{text}</p>
              </section>
            ))}
            <section className="legal-section">
              <h2 className="legal-heading">Contact about privacy</h2>
              <p className="legal-text">Email <a href="mailto:mp8651188@gmail.com">mp8651188@gmail.com</a> or visit our <Link to="/contact-us">Contact page</Link>. Describe your request without including your password, verification codes, or bank credentials.</p>
            </section>
            <Link className="contact-link" to="/about-us">Learn more about Spendly</Link>
          </article>
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default PrivacyAndPolicy;
