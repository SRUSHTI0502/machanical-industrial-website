function IndustriesServed() {
    return (
      <div style={{ fontFamily: "Arial, sans-serif" }}>
       
  
        {/* Header Section */}
        <header style={{ 
          textAlign: "center", 
          padding: "50px", 
          background: "url('https://source.unsplash.com/1600x600/?industry,factory')", 
          color: "black"
        }}>
          <h1>Industries We Serve</h1>
          <p>Delivering Excellence Across Multiple Sectors</p>
        </header>
  
        {/* Industries List */}
        <section style={{ padding: "40px", textAlign: "center" }}>
          <h2>Our Expertise</h2>
          <p>We provide solutions for various mechanical industries, ensuring quality and innovation.</p>
  
          <div style={{ backgroundColor:"yellow",display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", padding: "20px" }}>
            <div style={{backgroundColor:"grey", border: "1px solid #ddd", padding: "20px", borderRadius: "5px" }}>
              <h3>Automotive Industry</h3>
              <p>Providing precision engineering solutions for automobile manufacturing.</p>
            </div>
  
            <div style={{ backgroundColor:"grey",border: "1px solid #ddd", padding: "20px", borderRadius: "5px" }}>
              <h3>Aerospace Industry</h3>
              <p>Supplying high-quality components for the aerospace sector.</p>
            </div>
  
            <div style={{ backgroundColor:"grey",border: "1px solid #ddd", padding: "20px", borderRadius: "5px" }}>
              <h3>Manufacturing</h3>
              <p>Optimizing industrial machinery for efficient production lines.</p>
            </div>
  
            <div style={{ backgroundColor:"grey",border: "1px solid #ddd", padding: "20px", borderRadius: "5px" }}>
              <h3>Energy & Power</h3>
              <p>Supporting the energy sector with innovative mechanical solutions.</p>
            </div>
  
            <div style={{ backgroundColor:"grey",border: "1px solid #ddd", padding: "20px", borderRadius: "5px" }}>
              <h3>Construction</h3>
              <p>Developing advanced machinery for large-scale construction projects.</p>
            </div>
  
            <div style={{backgroundColor:"grey", border: "1px solid #ddd", padding: "20px", borderRadius: "5px" }}>
              <h3>Oil & Gas</h3>
              <p>Enhancing safety and efficiency in oil and gas operations.</p>
            </div>
          </div>
        </section>
  
        
      </div>
    );
  }
  
  export default IndustriesServed;
  