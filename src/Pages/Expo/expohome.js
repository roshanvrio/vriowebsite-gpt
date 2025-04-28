// src/pages/Expo/ExpoHome.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

import headerimage from '../../Assets/expoassets/MainPage/HeaderSection.png';
import bgImage from '../../Assets/expoassets/MainPage/bgimg.png';
import image1 from '../../Assets/expoassets/MainPage/image1.png';
import dec from '../../Assets/expoassets/MainPage/Rectangle 2251.png';
import image2 from '../../Assets/expoassets/MainPage/image2.png';
import image3 from '../../Assets/expoassets/MainPage/image3.png';
import image4 from '../../Assets/expoassets/MainPage/image4.png';
import image5 from '../../Assets/expoassets/MainPage/image5.png';

const styles = {
  bgSection: {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '666px',
    padding: '40px',
  },
  heading: {
    fontSize: '42px',
    fontWeight: '800',
    color: 'white',
    textAlign: 'left',
  },
  paragraph: {
    fontSize: '24px',
    fontWeight: '500',
    color: 'white',
    textAlign: 'left',
  },
  bulletText: {
    fontSize: '22px',
    fontWeight: 700,
    color: 'white',
    textAlign: 'left',
  },
  hr: {
    width: '100%',
    height: '3px',
    backgroundColor: 'white',
    margin: '50px 0',
  },
  sectionContainer: {
    backgroundColor: '#3F3F3F',
    padding: '30px',
    textAlign: 'left',
  },
};

const InfoSection = ({ image, title, subtitle, benefit, showDivider = true, readMorePath }) => (
  <>
    <Row>
      <Col md={6}>
        <img src={image} alt={title} className="img-fluid" />
      </Col>
      <Col md={6}>
        <p style={{ fontSize: '48px', color: 'white', textAlign: 'left', fontWeight: '800', textTransform: 'uppercase' }}>
          {title}
        </p>
        {subtitle && <p style={{ fontSize: '24px', fontWeight: '700', color: 'white' }}>{subtitle}</p>}
        {benefit && title !== "SALES GROWTH WITH AI" && title !== "PROCESS AUTOMATION" && title !== "CONTAINER TRACKING" && (
          <p style={styles.bulletText}>
            • <span>Benefit:</span>{' '}
            <span style={{ fontWeight: 400 }}>{benefit}</span>
          </p>
        )}
        {benefit && (title === "CONTAINER TRACKING" || title === "SALES GROWTH WITH AI" || title === "PROCESS AUTOMATION") && (
          <p style={styles.bulletText}>
            <span style={{ fontWeight: 400 }}><strong>{benefit}</strong></span>
          </p>
        )}
        {readMorePath && (
          <Link
            to={readMorePath}
            style={{
              ...styles.paragraph,
              textDecoration: 'underline',
              display: 'inline-block',
              marginTop: '1rem',
            }}
          >
            Read more
          </Link>
        )}
      </Col>
    </Row>
    {showDivider && <div style={styles.hr}></div>}
  </>
);

function ExpoHome() {
  return (
    <div className="App">
      <div
        style={{
          backgroundImage: `url(${headerimage})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          width: '100%',
          height: '423px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundSize: 'cover',
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

      <section style={styles.bgSection}>
        <Row>
          <Col md={6}>
            <img src={image1} alt="Dashboard" className="img-fluid" />
          </Col>
          <Col md={6}>
            <Row>
              <Col md={2}>
                <img src={dec} alt="Decorative" style={{ marginTop: '1.5rem' }} />
              </Col>
              <Col md={10}>
                <p style={styles.heading}>WASTE ANALYTICS PLATFORM</p>
              </Col>
            </Row>
            <p style={styles.paragraph}>
              VRIO Digital introduces the Waste Analytics Platform – an AI-powered solution designed to optimize every
              aspect of your hazardous waste operations, from marketing to regulatory compliance.
            </p>
            <Link
              to="/wasteanalyticsplatform"
              style={{ ...styles.paragraph, textDecoration: 'underline', display: 'inline-block', marginTop: '1rem' }}
            >
              Read more
            </Link>
          </Col>
        </Row>
      </section>

      <div style={styles.sectionContainer}>
        <div style={{ padding: '20px' }}>
          <p style={{ fontSize: '32px', fontWeight: '800', color: 'white' }}>Our Other Powerful Solutions</p>
          <p style={styles.paragraph}>
            Beyond our comprehensive analytics platform, VRIO Digital offers a suite of solutions designed to further
            optimize your hazardous waste management operations:
          </p>
        </div>

        <InfoSection
          image={image2}
          title="CONTAINER TRACKING"
          benefit={
            <>
              ATEX Certified Bluetooth Beacons: Advanced Container Tracking for Hazardous Waste Management
              <br />
              <br />
              Reliable | Secure | Compliant.
            </>
          }
          readMorePath="/container-tracking"
        />
        <InfoSection
          image={image4}
          title="SALES GROWTH WITH AI"
          benefit={
            <>
              Sales Growth with AI for the Hazardous Waste Industry
              <br />
              <br />
              Smarter Insights | Higher Conversions | Scalable Growth
            </>
          }
          readMorePath="/sales-growth"
        />
        <InfoSection
          image={image5}
          title="PROCESS AUTOMATION"
          benefit={
            <>
              Intelligent Business Automation with RPA to Reduce DSO
              <br />
              <br />
              Faster Payments | Reduced Risk | Increased Efficiency
            </>
          }
          readMorePath="/process-automation"
          showDivider={false}
        />
      </div>
    </div>
  );
}

export default ExpoHome;
