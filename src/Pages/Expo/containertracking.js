// src/pages/ContainerTracking.js
import React from 'react';
import headerimage from '../../Assets/expoassets/MainPage/HeaderSection.png';

const ContainerTracking = () => (
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
      <h1 style={{ fontSize: '36px', fontWeight: '800', marginBottom: '20px' }}>CONTAINER TRACKING</h1>

      <h2 style={{ fontSize: '28px', fontWeight: '700' }}>
        ATEX Certified Bluetooth Beacons: Advanced Container Tracking for Hazardous Waste Management
      </h2>

      <p style={{ fontSize: '20px', marginTop: '10px', fontStyle: 'italic' }}>
        Reliable | Secure | Compliant.
      </p>

      <p style={{ fontSize: '18px', marginTop: '20px' }}>
        In the hazardous waste industry, precise tracking of containers is essential for safety, compliance, and efficiency.
        ATEX-certified Bluetooth beacons provide a cutting-edge, real-time tracking solution designed specifically for hazardous waste management operations.
      </p>

      <h3 style={{ fontSize: '24px', marginTop: '30px', marginBottom: '10px',color:'#0081A3' }}>Why Choose ATEX-Certified Bluetooth Beacons?</h3>
      <ul style={{ fontSize: '18px', paddingLeft: '20px' }}>
        <li style={{ marginBottom: '10px' }}><strong>Real-Time Tracking</strong> – Continuously monitor the location and movement of hazardous waste containers.</li>
        <li style={{ marginBottom: '10px' }}><strong>ATEX-Certified for Safety</strong> – Meets the highest safety standards in explosive and hazardous environments.</li>
        <li style={{ marginBottom: '10px' }}><strong>Automated Compliance Reporting</strong> – Simplifies regulatory adherence with digital logs and alerts.</li>
        <li style={{ marginBottom: '10px' }}><strong>Enhanced Security</strong> – Reduces risk of unauthorized access or misplacement of containers.</li>
        <li style={{ marginBottom: '10px' }}><strong>Seamless Integration</strong> – Works with existing waste management and logistics platforms.</li>
      </ul>

      <h3 style={{ fontSize: '24px', marginTop: '30px',marginBottom: '10px',color:'#73BB44' }}>Key Features</h3>
      <ul style={{ fontSize: '18px', paddingLeft: '20px' }}>
        <li style={{ marginBottom: '10px' }}><strong>Long-Range Bluetooth Connectivity</strong> – Reliable data transmission across wide operational zones.</li>
        <li style={{ marginBottom: '10px' }}><strong>Durable & Explosion-Proof Design</strong> – Built for extreme conditions in hazardous environments.</li>
        <li style={{ marginBottom: '10px' }}><strong>Custom Alerts & Notifications</strong> – Instant updates on movement and unauthorized handling.</li>
        <li style={{ marginBottom: '10px' }}><strong>Low-Power Consumption</strong> – Extended battery life for uninterrupted monitoring.</li>
      </ul>

      <h3 style={{ fontSize: '24px', marginTop: '30px', marginBottom: '10px',color:'#00877B'  }}>Applications</h3>
      <ul style={{ fontSize: '18px', paddingLeft: '20px' }}>
        <li style={{ marginBottom: '10px' }}><strong>Waste Transport Tracking</strong> – Monitor movement from collection sites to disposal facilities.</li>
        <li style={{ marginBottom: '10px' }}><strong>Storage Site Monitoring</strong> – Maintain visibility of waste materials in secured zones.</li>
        <li style={{ marginBottom: '10px' }}><strong>Incident Prevention & Response</strong> – Alerts for potential risks or unauthorized handling.</li>
      </ul>

      <p style={{ fontSize: '20px', fontWeight: '600', marginTop: '40px' }}>
        Upgrade Your Hazardous Waste Management with ATEX-Certified Bluetooth Beacons
      </p>
      <p style={{ fontSize: '18px' }}>
        Ensure safety, compliance, and efficiency in your operations with our cutting-edge container tracking solution.
      </p>
      <br />
      <p style={{ fontSize: '20px', fontWeight: '700' }}>Contact us today to learn more or schedule a demo.</p>
    </div>
  </div>
);

export default ContainerTracking;
