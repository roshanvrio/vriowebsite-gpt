// src/pages/SalesGrowth.js
import React from 'react';
import headerimage from '../../Assets/expoassets/MainPage/HeaderSection.png';

const SalesGrowth = () => (
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
      <h1 style={{ fontSize: '36px', fontWeight: '800', marginBottom: '20px' }}>SALES GROWTH WITH AI</h1>

      <h2 style={{ fontSize: '28px', fontWeight: '700' }}>
        Sales Growth with AI for the Hazardous Waste Industry
      </h2>

      <p style={{ fontSize: '20px', marginTop: '10px', fontStyle: 'italic' }}>
        Smarter Insights | Higher Conversions | Scalable Growth
      </p>

      <p style={{ fontSize: '18px', marginTop: '20px' }}>
        Maximizing sales growth in the hazardous waste industry requires a data-driven approach.
        AI-powered solutions provide predictive analytics, automated lead generation, and personalized
        customer interactions, enabling waste management businesses to scale efficiently and optimize revenue streams.
      </p>

      <h3 style={{ fontSize: '24px', marginTop: '30px', marginBottom: '10px', color: '#0081A3' }}>
        AI Solutions for Sales Growth
      </h3>
      <ul style={{ fontSize: '18px', paddingLeft: '20px' }}>
        <li style={{ marginBottom: '10px' }}><strong>AI-Driven Lead Generation</strong> – Identify and target high-value prospects using machine learning.</li>
        <li style={{ marginBottom: '10px' }}><strong>Automated Sales Outreach</strong> – Use AI email and chatbots for lead nurturing and customer responses.</li>
        <li style={{ marginBottom: '10px' }}><strong>Dynamic Pricing Optimization</strong> – Adjust pricing based on demand, competitors, and regulations.</li>
        <li style={{ marginBottom: '10px' }}><strong>Intelligent CRM Integration</strong> – Predict customer needs and suggest best engagement strategies.</li>
        <li style={{ marginBottom: '10px' }}><strong>Sales Performance Analytics</strong> – Monitor KPIs and optimize sales team productivity with AI dashboards.</li>
      </ul>

      <h3 style={{ fontSize: '24px', marginTop: '30px', marginBottom: '10px', color: '#73BB44' }}>
        Key Features
      </h3>
      <ul style={{ fontSize: '18px', paddingLeft: '20px' }}>
        <li style={{ marginBottom: '10px' }}><strong>AI-Powered Sales Forecasting</strong> – Real-time, data-driven decision-making tools.</li>
        <li style={{ marginBottom: '10px' }}><strong>Intelligent Chatbots & Virtual Assistants</strong> – Improve customer response speed and quality.</li>
        <li style={{ marginBottom: '10px' }}><strong>Automated Proposal Generation</strong> – Save time with AI-generated sales documents.</li>
        <li style={{ marginBottom: '10px' }}><strong>Customer Sentiment Analysis</strong> – Better understand and adapt to client needs.</li>
        <li style={{ marginBottom: '10px' }}><strong>Competitive Market Insights</strong> – Stay ahead with predictive trends and benchmarks.</li>
      </ul>

      <h3 style={{ fontSize: '24px', marginTop: '30px', marginBottom: '10px', color: '#00877B' }}>
        Applications
      </h3>
      <ul style={{ fontSize: '18px', paddingLeft: '20px' }}>
        <li style={{ marginBottom: '10px' }}><strong>Lead Scoring & Qualification</strong> – Focus on the most promising prospects for higher conversions.</li>
        <li style={{ marginBottom: '10px' }}><strong>Customer Relationship Management</strong> – Streamline communication and customer service.</li>
        <li style={{ marginBottom: '10px' }}><strong>Regulatory & Compliance Support</strong> – Automate documentation for industry compliance.</li>
        <li style={{ marginBottom: '10px' }}><strong>Waste Collection & Logistics Optimization</strong> – Use AI to enhance scheduling and efficiency.</li>
      </ul>

      <p style={{ fontSize: '20px', fontWeight: '700', marginTop: '40px' }}>
        Transform Sales with AI in the Hazardous Waste Industry
      </p>
      <p style={{ fontSize: '18px' }}>
        Drive revenue growth, improve efficiency, and stay ahead of the competition with AI-powered sales strategies.
       
      </p>
      <p style={{ fontSize: '20px', fontWeight: '700' }}> Contact us today to explore how AI can elevate your business.</p>
    </div>
  </div>
);

export default SalesGrowth;
