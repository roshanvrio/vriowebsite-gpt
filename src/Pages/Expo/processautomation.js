// src/pages/ProcessAutomation.js
import React from 'react';
import headerimage from '../../Assets/expoassets/MainPage/HeaderSection.png';

const ProcessAutomation = () => (
  <div>
    {/* Header Section */}
    <div
      style={{
        backgroundImage: `url(${headerimage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '100%',
        height: '423px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
        marginBottom: '0',
        paddingBottom: '0',
      }}
    >
      <p style={{ fontSize: '32px', fontWeight: '700', margin: '0' }}>Meet The Team at</p>
      <p style={{ fontSize: '40px', fontWeight: '800', margin: '0' }}>WASTE EXPO 2025</p>
      <p style={{ fontSize: '28px', fontWeight: '600', marginTop: '10px' }}>Booth 613</p>
    </div>

    {/* Content Section */}
    <div style={{ padding: '40px', color: 'white', backgroundColor: '#222' }}>
      <h1 style={{ fontSize: '36px', fontWeight: '800', marginBottom: '20px' }}>
        INTELLIGENT BUSINESS PROCESS AUTOMATION
      </h1>

      <h2 style={{ fontSize: '28px', fontWeight: '700' }}>
        Intelligent Business Automation with RPA to Reduce DSO
      </h2>

      <p style={{ fontSize: '20px', marginTop: '10px', fontStyle: 'italic' }}>
        Faster Payments | Reduced Risk | Increased Efficiency
      </p>

      <p style={{ fontSize: '18px', marginTop: '20px' }}>
        Managing accounts receivable and reducing Days Sales Outstanding (DSO) is a challenge in the hazardous waste industry.
        Intelligent Business Automation powered by Robotic Process Automation (RPA) streamlines invoicing, payment collections,
        and reconciliation, improving cash flow and operational efficiency.
      </p>

      <h3 style={{ fontSize: '24px', marginTop: '30px', marginBottom: '10px', color: '#0081A3' }}>How RPA Reduces DSO</h3>
      <ul style={{ fontSize: '18px', paddingLeft: '20px' }}>
        <li style={{ marginBottom: '10px' }}><strong>Automated Invoice Processing</strong> – Generate and send accurate invoices instantly, reducing delays and errors.</li>
        <li style={{ marginBottom: '10px' }}><strong>Smart Payment Reminders</strong> – AI-driven reminders notify customers about upcoming and overdue payments.</li>
        <li style={{ marginBottom: '10px' }}><strong>Seamless ERP & CRM Integration</strong> – Synchronize financial data for real-time tracking and faster reconciliation.</li>
        <li style={{ marginBottom: '10px' }}><strong>Automated Dispute Resolution</strong> – Identify and resolve payment discrepancies efficiently with AI-driven workflows.</li>
        <li style={{ marginBottom: '10px' }}><strong>Predictive Cash Flow Analysis</strong> – Leverage data analytics to anticipate payment trends and optimize collections.</li>
      </ul>

      <h3 style={{ fontSize: '24px', marginTop: '30px', marginBottom: '10px', color: '#73BB44' }}>Key Features</h3>
      <ul style={{ fontSize: '18px', paddingLeft: '20px' }}>
        <li style={{ marginBottom: '10px' }}><strong>End-to-End Invoice Automation</strong> – Eliminate manual data entry and reduce errors.</li>
        <li style={{ marginBottom: '10px' }}><strong>Intelligent Payment Matching</strong> – Automatically reconcile incoming payments with outstanding invoices.</li>
        <li style={{ marginBottom: '10px' }}><strong>Customizable Workflows</strong> – Adapt RPA solutions to specific business processes and compliance requirements.</li>
        <li style={{ marginBottom: '10px' }}><strong>Real-Time DSO Monitoring</strong> – Track outstanding receivables with AI-powered dashboards.</li>
        <li style={{ marginBottom: '10px' }}><strong>Secure & Compliant Transactions</strong> – Ensure adherence to financial regulations and industry standards.</li>
      </ul>

      <h3 style={{ fontSize: '24px', marginTop: '30px', marginBottom: '10px', color: '#00877B' }}>Applications</h3>
      <ul style={{ fontSize: '18px', paddingLeft: '20px' }}>
        <li style={{ marginBottom: '10px' }}><strong>Automated Billing & Collections</strong> – Improve efficiency and accelerate payments.</li>
        <li style={{ marginBottom: '10px' }}><strong>Regulatory & Compliance Management</strong> – Maintain audit-ready financial records.</li>
        <li style={{ marginBottom: '10px' }}><strong>Customer Engagement & Support</strong> – Enhance communication through automated reminders and self-service portals.</li>
        <li style={{ marginBottom: '10px' }}><strong>Dispute Management</strong> – Reduce delays by resolving payment issues through intelligent automation.</li>
      </ul>

      <p style={{ fontSize: '20px', fontWeight: '700', marginTop: '40px' }}>
        Transform Financial Operations with RPA in the Hazardous Waste Industry
      </p>
      <p style={{ fontSize: '18px' }}>
        Accelerate cash flow, improve efficiency, and minimize risk with RPA-powered automation.
       
      </p>
      <p style={{ fontSize: '20px', fontWeight: '700' }}>  Contact us today to explore how automation can optimize your financial processes.</p>
    </div>
  </div>
);

export default ProcessAutomation;
