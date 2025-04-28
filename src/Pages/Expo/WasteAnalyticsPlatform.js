import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';

// Main Page assets
import headerimage from '../../Assets/expoassets/MainPage/HeaderSection.png';
import image1 from '../../Assets/expoassets/MainPage/image1.png';
import bgImage from '../../Assets/expoassets/MainPage/bgimg.png';

// Insider Page assets
import back from '../../Assets/expoassets/InsiderPage/fi-rs-arrow-left.png';
import iimage1 from '../../Assets/expoassets/InsiderPage/image1.png';
import iimage2 from '../../Assets/expoassets/InsiderPage/image2.png';
import iimage3 from '../../Assets/expoassets/InsiderPage/image3.png';
import iimage4 from '../../Assets/expoassets/InsiderPage/image4.png';
import iimage5 from '../../Assets/expoassets/InsiderPage/image5.png';
import iimage6 from '../../Assets/expoassets/InsiderPage/image6.png';
import iimage7 from '../../Assets/expoassets/InsiderPage/image7.png';
import iimage8 from '../../Assets/expoassets/InsiderPage/image8.png';
import iimage9 from '../../Assets/expoassets/InsiderPage/image9.png';


const styles = {

    
    bgSection: {
      backgroundImage: `url(${bgImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      width: '100%',
      height: '666px',
      padding: '40px',
    }}

const WasteAnalyticsPlatform = () => {
    const navigate = useNavigate();
    

    const [showSalesModal, setShowSalesModal] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleShowSalesModal = () => setShowSalesModal(true);
  const handleCloseSalesModal = () => setShowSalesModal(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  return (
    <div >
       <div
        style={{
          backgroundImage: `url(${headerimage})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          // backgroundPosition: 'center',
          width: '100%',
          height: '423px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundSize: 'cover',
          textAlign: 'center',
          color: 'white',
          marginBottom: '0',   // Remove space below
          paddingBottom: '0',
        }}
      >
        <p style={{ fontSize: '32px', fontWeight: '700', margin: '0' }}>Meet The Team at</p>
        <p style={{ fontSize: '40px', fontWeight: '800', margin: '0' }}>WASTE EXPO 2025</p>
        <p style={{ fontSize: '28px', fontWeight: '600', marginTop: '10px' }}>Booth 613</p>
      </div>

     <section style={styles.bgSection}>
     <Row style={{display: 'flex',justifyContent: 'center'}}>
     <Col md="auto" style={{ display: 'flex', alignItems: 'center' }}>
        <img 
          src={back} 
          alt="Back" 
          style={{ cursor: 'pointer', width: '30px', height: '30px' }}
          onClick={() => navigate('/')}
        />
      </Col>
      <Col md={10} style={{ display: 'flex', justifyContent: 'center' }}>
        <p style={{ textAlign: 'center', fontSize: '48px', fontWeight: '800', color: 'white' }}>
          WASTE ANALYTICS PLATFORM
        </p>
      </Col>
    </Row>
    <br/>
    <Row style={{margin:'10px'}}>
  <Col md="auto">
    <div 
      style={{
        width: '6px',
        height: '57px',
        backgroundColor: '#0081A3',
        margin: '0 auto',  // Center the line horizontally
      }}
    />
  </Col>
  <Col md="auto" style={{alignContent:'center'}}>
    <p style={{
      fontSize: '24px',
      fontWeight: '800',
      color: 'white',
      marginBottom: '0',  // Set margin-bottom to 0
    }}>
      AI Analytics Platform Domains for Waste Servicers
    </p>
  </Col>
</Row>
<br/>
  <div style={{ display: 'flex', flexWrap: 'wrap', color: 'white' }}>
   
    <div style={{ flex: '1', minWidth: '300px' }}>
      <img src={image1} alt="Dashboard" style={{ width: '100%', maxWidth: '500px' }} />
    </div>
    <div style={{ flex: '1', minWidth: '300px', padding: '20px' }}>
     
      <p style={{fontSize:'24px',fontWeight:'500'}}>
      Gain a Competitive Edge with Intelligent Insights Across Your Entire Waste Management Lifecycle.
      </p>
      <br />
      <br />
      <p style={{fontSize:'24px',fontWeight:'500'}}>
      Our Waste Analytics Platform leverages the power of Artificial Intelligence to provide actionable insights across critical areas of your business:
      </p>
    </div>
  </div>
</section>

<div style={{backgroundColor:"#3F3F3F",padding:'20px'}}>
<Row style={{ padding: '20px' }}>
  <Col md={8}>
    <p style={{ fontSize: '32px', fontWeight: '700', color: 'white' }}>Marketing</p>
    <p style={{ fontSize: '20px', color: 'white', textAlign: 'left' }}>
      <strong>Prerequisite data needed</strong>
      <br />
      • Manifest data from RCRA
      <br />
      • Waste Pricing
      <br />
      • Waste Profile master
      <br />
      <span>
        • More info: 
        <a
          href="https://www.epa.gov/e-manifest/learn-about-hazardous-waste-electronic-manifest-system-e-manifest"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'lightblue' }}
        >
          EPA eManifest
        </a>
      </span>
      <br />
      <br />
      <Button variant="link" onClick={handleShowModal} style={{ color: 'lightblue', padding: '0' }}>
        Read More
      </Button>
    </p>
  </Col>
  <Col md={4}>
    <img src={iimage1} alt="Manifest Info" style={{ width: '100%', borderRadius: '8px' }} />
  </Col>

  {/* Modal for full content */}
  <Modal show={showModal} onHide={handleCloseModal} size="lg" centered className="dark-theme-modal">
    <Modal.Header closeButton>
      <Modal.Title className="modal-title">Marketing</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <div className="modal-content">
        <strong>Prerequisite Data Needed</strong>
        <div style={{ marginTop: '5px' }}>
          • Manifest data from RCRA
          <br />
          • Waste Pricing
          <br />
          • Waste Profile master
          <br />
          <a
            href="https://www.epa.gov/e-manifest/learn-about-hazardous-waste-electronic-manifest-system-e-manifest"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            &nbsp;&nbsp;&nbsp;More info on EPA eManifest
          </a>
        </div>
        
        <br />
        <strong>Key Data Available in eManifest Historical Database</strong>
        <div style={{ marginTop: '5px' }}>
          <strong>Manifest Details</strong>
          <br />
          • Manifest tracking number
          <br />
          • Submission type (paper, hybrid, electronic)
          <br />
          • Status (in transit, received, rejected, etc.)
          <br />
          • Submission dates (creation, certification, receipt)
        </div>
        <br />

        <div style={{ marginTop: '5px' }}>
          <strong>Generator Information</strong>
          <br />
          • Site name and address
          <br />
          • EPA ID number
          <br />
          • Contact details
          <br />
          • Waste generator type (e.g., large quantity generator)
        </div>
        <br />

        <div style={{ marginTop: '5px' }}>
          <strong>Transporter Information</strong>
          <br />
          • Transporter company name
          <br />
          • EPA ID number
          <br />
          • Transporter sequence and routing details
        </div>
        <br />

        <div style={{ marginTop: '5px' }}>
          <strong>TSDF Information</strong>
          <br />
          • Facility name and address
          <br />
          • EPA ID number
          <br />
          • Receipt and handling of waste
        </div>
        <br />

        <div style={{ marginTop: '5px' }}>
          <strong>Hazardous Waste Details</strong>
          <br />
          • Waste codes (e.g., D001 for ignitable waste)
          <br />
          • Quantity (in pounds, kilograms, gallons, etc.)
          <br />
          • Units of measurement
          <br />
          • Packaging type
          <br />
          • Description of the waste
        </div>
        <br />

        <div style={{ marginTop: '5px' }}>
          <strong>Discrepancy and Rejection Information</strong>
          <br />
          • Discrepancy types (quantity mismatch, incorrect waste code, etc.)
          <br />
          • Rejection reasons and handling instructions
        </div>
        <br />

        <div style={{ marginTop: '5px' }}>
          <strong>Signatures and Certifications</strong>
          <br />
          • Digital or scanned signatures
          <br />
          • Date/time stamps of each signature step
          <br />
          • Certifications from generators, transporters, and receiving facilities
        </div>
        <br />

        <div style={{ marginTop: '5px' }}>
          <strong>Key Questions to Know</strong>
          <br />
          • Which customers generate what type of waste annually by site?
          <br />
          • What is the market size based on type of material disposal?
          <br />
          • Why are certain sites producing more waste than others? What should be the corresponding 
          &nbsp;&nbsp;&nbsp;offering to the client site?
        </div>
      </div>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleCloseModal}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
</Row>


<br />
<br />
<Row style={{ padding: '20px' }}>
  <Col md={8}>
    <p style={{ fontSize: '32px', fontWeight: '700', color: 'white' }}>Sales</p>
    <p style={{ fontSize: '20px', color: 'white', textAlign: 'left' }}>
      <strong>Prerequisite Data Needed</strong>
      <br />
      • Manifest data from RCRA
      <br />
      • Handler Database - 
      <a
        href="https://rcrapublic.epa.gov/rcra-public-export/?outputType=CSV"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: 'lightblue' }}
      >
        Handler Database
      </a>
      <br />
      • Compliance, Monitoring, and Enforcement - 
      <a
        href="https://rcrapublic.epa.gov/rcra-public-export/?outputType=CSV"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: 'lightblue' }}
      >
        Compliance Data
      </a>
      <br />
      • Waste Pricing
      <br />
      • Customer Master
      <br />
      • Account Master
      <br />
      • Transaction history
      <br />
      • Compliance
      <br />
      <span>
        • More info: 
        <a
          href="https://www.epa.gov/e-manifest/learn-about-hazardous-waste-electronic-manifest-system-e-manifest"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'lightblue' }}
        >
          EPA eManifest
        </a>
      </span>
      <br />
      <br />
      <Button variant="link" onClick={handleShowSalesModal} style={{ color: 'lightblue', padding: '0' }}>
        Read More
      </Button>
    </p>
  </Col>
  <Col md={4}>
    <img src={iimage2} alt="Sales Info" style={{ width: '100%', borderRadius: '8px' }} />
  </Col>

  {/* Modal for Sales content */}
  <Modal show={showSalesModal} onHide={handleCloseSalesModal} size="lg" centered className="dark-theme-modal">
    <Modal.Header closeButton>
      <Modal.Title className="modal-title">Sales</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <div className="modal-content">
        <strong>Prerequisite Data Needed</strong>
        <div style={{ marginTop: '5px' }}>
          • Manifest data from RCRA
          <br />
          • Handler Database - 
          <a
            href="https://rcrapublic.epa.gov/rcra-public-export/?outputType=CSV"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Handler Database
          </a>
          <br />
          • Compliance, Monitoring, and Enforcement - 
          <a
            href="https://rcrapublic.epa.gov/rcra-public-export/?outputType=CSV"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Compliance Data
          </a>
          <br />
          • Waste Pricing
          <br />
          • Customer Master
          <br />
          • Account Master
          <br />
          • Transaction history
          <br />
          • Compliance
        </div>

        <br />
        <strong>Key Questions to know</strong>
        <div style={{ marginTop: '5px' }}>
          • How do I increase sales in my top 100 customer base?
          <br />
          • What are the top compliance issues with this customer?
          <br />
          • How much is the estimated spend at this customer?
        </div>
      </div>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleCloseSalesModal}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
</Row>


<br />
<br />

{/* trial */}






{/* <Row style={{ padding: '20px' }}>
<Col>

    <p style={{fontSize:'32px',fontWeight:'700',color:'white'}}>Marketing</p>
    <p style={{ fontSize: '20px', color: 'white', textAlign: 'left' }}>
      <span style={{ display: 'inline-block', marginLeft: '20px' }}></span> <strong>Prerequisite data needed:</strong>
      <br />
      <span style={{ marginLeft: '40px' }}>•</span> Manifest data from RCRA
      <br />
      <span style={{ marginLeft: '40px' }}>•</span> Waste Pricing
      <br />
      <span style={{ marginLeft: '40px' }}>•</span> Waste Profile master
      <br />
      <span style={{ marginLeft: '40px' }}>•</span> More info: <a href="https://www.epa.gov/e-manifest/learn-about-hazardous-waste-electronic-manifest-system-e-manifest" target="_blank" rel="noopener noreferrer" style={{ color: 'lightblue' }}>EPA eManifest</a>
      <br /><br />

      <span style={{ display: 'inline-block', marginLeft: '20px' }}>•</span> <strong>Key Data Available in eManifest Historical Database:</strong>
      <br />
      <strong style={{ marginLeft: '40px' }}>1. Manifest Details</strong>
      <br />
      <span style={{ marginLeft: '60px' }}>•</span> Manifest tracking number
      <br />
      <span style={{ marginLeft: '60px' }}>•</span> Submission type (paper, hybrid, electronic)
      <br />
      <span style={{ marginLeft: '60px' }}>•</span> Status (in transit, received, rejected, etc.)
      <br />
      <span style={{ marginLeft: '60px' }}>•</span> Submission dates (creation, certification, receipt)
      <br />
      <strong style={{ marginLeft: '40px' }}>2. Generator Information</strong>
      <br />
      <span style={{ marginLeft: '60px' }}>•</span> Site name and address
      <br />
      <span style={{ marginLeft: '60px' }}>•</span> EPA ID number
      <br />
      <span style={{ marginLeft: '60px' }}>•</span> Contact details
      <br />
      <span style={{ marginLeft: '60px' }}>•</span> Waste generator type (e.g., large quantity generator)
      <br />
      <strong style={{ marginLeft: '40px' }}>3. Transporter Information</strong>
      <br />
      <span style={{ marginLeft: '60px' }}>•</span> Transporter company name
      <br />
      <span style={{ marginLeft: '60px' }}>•</span> EPA ID number
      <br />
      <span style={{ marginLeft: '60px' }}>•</span> Transporter sequence and routing details
      <br />
      <strong style={{ marginLeft: '40px' }}>4. TSDF Information</strong>
      <br />
      <span style={{ marginLeft: '60px' }}>•</span> Facility name and address
      <br />
      <span style={{ marginLeft: '60px' }}>•</span> EPA ID number
      <br />
      <span style={{ marginLeft: '60px' }}>•</span> Receipt and handling of waste
      <br />
      <strong style={{ marginLeft: '40px' }}>5. Hazardous Waste Details</strong>
      <br />
      <span style={{ marginLeft: '60px' }}>•</span> Waste codes (e.g., D001 for ignitable waste)
      <br />
      <span style={{ marginLeft: '60px' }}>•</span> Quantity (in pounds, kilograms, gallons, etc.)
      <br />
      <span style={{ marginLeft: '60px' }}>•</span> Units of measurement
      <br />
      <span style={{ marginLeft: '60px' }}>•</span> Packaging type
      <br />
      <span style={{ marginLeft: '60px' }}>•</span> Description of the waste
      <br />
      <strong style={{ marginLeft: '40px' }}>6. Discrepancy and Rejection Information</strong>
      <br />
      <span style={{ marginLeft: '60px' }}>•</span> Discrepancy types (quantity mismatch, incorrect waste code, etc.)
      <br />
      <span style={{ marginLeft: '60px' }}>•</span> Rejection reasons and handling instructions
      <br />
      <strong style={{ marginLeft: '40px' }}>7. Signatures and Certifications</strong>
      <br />
      <span style={{ marginLeft: '60px' }}>•</span> Digital or scanned signatures
      <br />
      <span style={{ marginLeft: '60px' }}>•</span> Date/time stamps of each signature step
      <br />
      <span style={{ marginLeft: '60px' }}>•</span> Certifications from generators, transporters, and receiving facilities
      <br /><br />

      <span style={{ display: 'inline-block', marginLeft: '20px' }}>•</span> <strong>Key Questions to Know:</strong>
      <br />
      <span style={{ marginLeft: '40px' }}>•</span> Which customers generate what type of waste annually by site?
      <br />
      <span style={{ marginLeft: '40px' }}>•</span> What is the market size based on type of material disposal?
      <br />
      <span style={{ marginLeft: '40px' }}>•</span> Why are certain sites producing more waste than others? What should be the corresponding offering to the client site?
    </p>
  </Col>
  <Col>
    <img src={iimage1} alt="Manifest Info" />
  </Col>
  
</Row> */}

{/* 3 */}
{/* <Row style={{padding:'20px'}}>
    <Col>
    <p style={{fontSize:'32px',fontWeight:'700',color:'white'}}>Smart Scheduling</p>
    <p style={{
  fontSize: '22px',
  color: 'white',
  textAlign: 'left',  // Adjust text alignment if needed
}}>
  <span style={{ display: 'inline-block', marginLeft: '20px' }}>•</span> <strong>Use Case:</strong> Inefficient scheduling leads to wasted fuel, missed pickups, and frustrated clients. Adapting to last-minute changes and ensuring optimal resource allocation is a constant challenge.
  <br />
  <br/>
  <span style={{ display: 'inline-block', marginLeft: '20px' }}>•</span> <strong >Solution:</strong> Our platform uses AI algorithms to dynamically optimize collection routes based on real-time traffic, vehicle availability, and client schedules. Minimize travel time, reduce fuel consumption, improve on-time performance, and proactively manage unexpected disruptions for seamless operations.
</p>

    </Col>
    <Col>
    <img src={iimage3}></img>
    </Col>
</Row>
<br />
<br />
<Row style={{padding:'20px'}}>
<Col>
    <img src={iimage4}></img>
    </Col>
    <Col>
    <p style={{fontSize:'32px',fontWeight:'700',color:'white'}}>4. Smart Transportation: Real-Time Visibility, Enhanced Efficiency</p>
    <p style={{
  fontSize: '22px',
  color: 'white',
  textAlign: 'left',  // Adjust text alignment if needed
}}>
  <span style={{ display: 'inline-block', marginLeft: '20px' }}>•</span> <strong>Use Case:</strong>  Lack of real-time visibility into your fleet and the status of waste shipments can lead to delays, compliance issues, and increased operational costs. Ensuring the safe and efficient transport of hazardous materials is paramount.
  <br />
  <br />
  <span style={{ display: 'inline-block', marginLeft: '20px' }}>•</span> <strong >Solution:</strong> Integrate real-time tracking data with AI-powered analytics to monitor vehicle locations, optimize routes for fuel efficiency, and proactively identify potential delays or hazards. Improve communication with drivers and clients, ensure regulatory compliance during transit, and enhance overall transportation efficiency.
</p>

    </Col>
   
</Row>
<br />
<br /> */}
{/* 5
<Row style={{padding:'20px'}}>
    <Col>
    <p style={{fontSize:'32px',fontWeight:'700',color:'white'}}>5. Disposal Planning: Data-Driven Decisions for Optimal Waste Handling.</p>
    <p style={{
  fontSize: '22px',
  color: 'white',
  textAlign: 'left',  // Adjust text alignment if needed
}}>
  <span style={{ display: 'inline-block', marginLeft: '20px' }}>•</span> <strong>Use Case:</strong> Determining the most cost-effective and environmentally sound disposal methods for various hazardous waste streams can be complex and time-consuming. Ensuring compliance with evolving regulations is critical.
  <br />
  <span style={{ display: 'inline-block', marginLeft: '20px' }}>•</span> <strong >Solution:</strong> Our platform analyzes waste characteristics, regulatory requirements, and available disposal facilities to recommend the most efficient and compliant disposal pathways. Optimize waste sorting, minimize disposal costs, and generate comprehensive reports for regulatory compliance and environmental stewardship.
</p>

    </Col>
    <Col>
    <img src={iimage5}></img>
    </Col>
</Row>
<br />
<br />
<Row style={{padding:'20px'}}>
<Col>
    <img src={iimage6}></img>
    </Col>
    <Col>
    <p style={{fontSize:'32px',fontWeight:'700',color:'white'}}>6. Regulatory Compliance: Stay Ahead of Evolving Requirements</p>
    <p style={{
  fontSize: '22px',
  color: 'white',
  textAlign: 'left',  // Adjust text alignment if needed
}}>
  <span style={{ display: 'inline-block', marginLeft: '20px' }}>•</span> <strong>Use Case:</strong> Keeping up with complex and ever-changing hazardous waste regulations is a significant burden. Non-compliance can lead to hefty fines and reputational damage.<br />
  <br />
  <span style={{ display: 'inline-block', marginLeft: '20px' }}>•</span> <strong >Solution:</strong> Our AI-powered platform continuously monitors regulatory updates at the local, state, and national levels. Receive proactive alerts on changes relevant to your operations, automate reporting processes, and ensure adherence to all compliance requirements, minimizing risk and ensuring peace of mind.
</p>

    </Col>
   
</Row>
<br />
<br /> */}
{/* 7 */}
{/* <Row style={{padding:'20px'}}>
    <Col>
    <p style={{fontSize:'32px',fontWeight:'700',color:'white'}}>7. Safety Analytics: Proactive Risk Management, Safer Operations</p>
    <p style={{
  fontSize: '22px',
  color: 'white',
  textAlign: 'left',  // Adjust text alignment if needed
}}>
  <span style={{ display: 'inline-block', marginLeft: '20px' }}>•</span> <strong>Use Case:</strong> Ensuring the safety of your personnel and the environment is paramount. Identifying potential hazards and implementing preventative measures can be challenging with traditional methods. <br />
  <span style={{ display: 'inline-block', marginLeft: '20px' }}>•</span> <strong >Solution:</strong> Analyze historical incident data, near-miss reports, and operational parameters to identify potential safety risks. Our AI algorithms can predict high-risk scenarios, recommend proactive safety measures, and provide insights for improving training programs and operational protocols, fostering a safer working environment.
</p>

    </Col>
    <Col>
    <img src={iimage7}></img>
    </Col>
</Row>
<br />
<br />
<Row style={{padding:'20px'}}>
<Col>
    <img src={iimage8}></img>
    </Col>
    <Col>
    <p style={{fontSize:'32px',fontWeight:'700',color:'white'}}>8. Invoicing and Billing: Streamlined Processes, Faster Payments</p>
    <p style={{
  fontSize: '22px',
  color: 'white',
  textAlign: 'left',  // Adjust text alignment if needed
}}>
  <span style={{ display: 'inline-block', marginLeft: '20px' }}>•</span> <strong>Use Case:</strong> Manual invoicing and billing processes are often prone to errors, delays, and disputes, impacting cash flow and administrative efficiency.
  <br />
  <br />
  <span style={{ display: 'inline-block', marginLeft: '20px' }}>•</span> <strong >Solution:</strong> Automate the invoicing and billing process based on service completion, waste volume, and agreed-upon rates. Generate accurate invoices quickly, track payment status, and integrate with your accounting systems for seamless financial management and improved cash flow.
</p>
</Col>   
</Row>
<br />
<br />
<Row style={{padding:'20px'}}>
    <Col>
    <p style={{fontSize:'32px',fontWeight:'700',color:'white'}}>9. Customer Analytics: Deeper Understanding, Enhanced Satisfaction</p>
    <p style={{
  fontSize: '22px',
  color: 'white',
  textAlign: 'left',  // Adjust text alignment if needed
}}>
  <span style={{ display: 'inline-block', marginLeft: '20px' }}>•</span> <strong>Use Case:</strong> Understanding customer needs, preferences, and service history is crucial for building strong relationships and improving customer satisfaction. Gathering and analyzing this data manually is often inefficient. <br />
  <span style={{ display: 'inline-block', marginLeft: '20px' }}>•</span> <strong >Solution:</strong> Our platform provides a 360-degree view of your customers, analyzing service history, communication logs, and feedback to identify trends and areas for improvement. Personalize your service offerings, proactively address potential issues, and enhance customer loyalty.
</p>

    </Col>
    <Col>
    <img src={iimage9}></img>
    </Col>
</Row> */}

</div>

    </div>
  );
};

export default WasteAnalyticsPlatform;
