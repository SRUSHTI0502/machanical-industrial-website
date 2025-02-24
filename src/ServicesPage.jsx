import React from "react";

function servicesPage() {
    return (
      <div style={styles.container}>
        <h1 style={styles.heading}>Our Services</h1>
        <p style={styles.description}>
          We provide top-notch mechanical industry solutions tailored to your business needs.
        </p>
  
        <div style={styles.grid}>
          {services.map((service, index) => (
            <div key={index} style={styles.card}>
              <img src={service.image} alt={service.title} style={styles.image} />
              <h3 style={styles.title}>{service.title}</h3>
              <p style={styles.text}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  const services = [
    {
        title: "Precision Engineering",
        description: "High-quality machining and manufacturing solutions for industrial applications.",
        image: process.env.PUBLIC_URL + "/image/pEngine.jpg" 
       },
    {
      title: "Industrial Automation",
      description: "Automated systems and robotics to enhance efficiency in production.",
      image: process.env.PUBLIC_URL + "/image/iauto.webp" 
    },
    {
      title: "CNC Machining",
      description: "Advanced CNC machining for custom parts with high precision.",
      image: process.env.PUBLIC_URL + "/image/cnc.jpg" 
    },
    {
      title: "Metal Fabrication",
      description: "Expert metal fabrication for industrial and construction projects.",
      image: process.env.PUBLIC_URL + "/image/mf.avif" 
    },
  ];
  
  const styles = {
    container: {
      textAlign: "center",
      padding: "40px",
    },
    heading: {
      fontSize: "28px",
      marginBottom: "20px",
    },
    description: {
      fontSize: "18px",
      color: "#555",
      marginBottom: "30px",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "20px",
    },
    card: {
      background: "#f4f4f4",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    image: {
      width: "100%",
      borderRadius: "10px",
    },
    title: {
      fontSize: "20px",
      marginTop: "10px",
    },
    text: {
      fontSize: "16px",
      color: "#666",
    },
  };
  
  export default servicesPage;
  