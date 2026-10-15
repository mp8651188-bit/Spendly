import React from "react";
import { Link } from "react-router-dom";
import Header1 from "../../components/Layout/Header1";
import Footer from "../../components/Layout/Footer";
import "./AboutUs.css";

const AboutUs = () => (
  <>
    <Header1 allowAuthenticated />
    <main className="auth-page-wrapper">
      <div className="about-us-content">
        <article className="about-us-page">
          <div className="about-us-card">
            <h1 className="about-us-title">Get to know Spendly</h1>
            <section className="about-section">
              <h2 className="section-title">A clearer picture of your money</h2>
              <p className="section-text">Small purchases add up. Spendly brings your income and everyday expenses into one place so you can see where your money goes, review your habits, and make informed spending decisions.</p>
              <p className="section-text">Whether you are tracking groceries, travel, bills, or your monthly salary, start with a few entries and build a routine that works for you.</p>
            </section>
            <section className="about-section">
              <h2 className="section-title">What you can do</h2>
              <ul className="features-list">
                <li>Record income and expenses with an amount, date, category, and description.</li>
                <li>Edit entries when plans change, or delete records you no longer need.</li>
                <li>Search transactions and filter by income, expenses, or a custom date range.</li>
                <li>Explore financial summaries and category breakdowns in the analytics view.</li>
                <li>Export transaction reports to Excel for your own records.</li>
                <li>Update your profile and choose a light or dark theme.</li>
              </ul>
            </section>
            <section className="about-section">
              <h2 className="section-title">Start in three steps</h2>
              <ol className="section-text">
                <li><strong>Create your account.</strong> Register and follow the email verification steps, then sign in.</li>
                <li><strong>Add your first transaction.</strong> Choose income or expense, enter the details, and save it.</li>
                <li><strong>Review your month.</strong> Filter your records, check your analytics, and export a report when you need one.</li>
              </ol>
            </section>
            <section className="about-section">
              <h2 className="section-title">Built around your everyday routine</h2>
              <p className="section-text">Spendly is a manual expense tracker: you decide what to record and how to categorize it. It does not move money or require access to your bank account. Your summaries reflect the entries you add, so keeping them up to date gives you a more useful overview.</p>
            </section>
            <section className="about-section">
              <h2 className="section-title">Your information matters</h2>
              <p className="section-text">Your account and transaction records are saved so you can return to them later. You can manage your profile, remove individual transactions, and export reports. Read our <Link className="contact-link" to="/privacy-policy">Privacy Policy</Link> for details about storage, connected services, and your choices.</p>
            </section>
            <section className="about-section">
              <h2 className="section-title">Questions or feedback?</h2>
              <p className="section-text">Spendly is customized and maintained by <a className="contact-link" href="https://github.com/mp8651188-bit">@mp8651188-bit</a>. Share a suggestion or report a problem through the <Link className="contact-link" to="/contact-us">Contact page</Link> or email <a className="contact-link" href="mailto:mp8651188@gmail.com">mp8651188@gmail.com</a>.</p>
            </section>
            <p className="closing-text">Ready to start? <Link className="contact-link" to="/register">Create an account</Link> or <Link className="contact-link" to="/login">sign in</Link> to track your next transaction.</p>
          </div>
        </article>
      </div>
    </main>
    <Footer />
  </>
);

export default AboutUs;
