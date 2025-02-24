import React from "react";
import './styles.css'

const ProjectsPage = () => {
  return (
    <form>
    <div style={{maxWidth: "900px", margin: "auto", textAlign: "left"}}>
        
      <h1>Projects & Case Studies</h1>
      <div className="menu-items">
          <div className="menu-item">
            <img src="/image/images1.jpg" alt="Dish 1" className="menu-image" />
            </div>
            </div>
      <p>Explore our past successful projects and client experiences.</p>
      

      {/* Projects Section */}
      <h2>Successful Projects</h2>
      <div>
        <div style={{ border: "1px solid #ddd", padding: "10px", marginBottom: "10px" }}>
          <h3>Factory Automation</h3>
          <p>A factory that implemented automation experienced a significant 35% increase in efficiency, demonstrating the substantial potential of automated systems to streamline production processes and boost productivity. .</p>
        </div>
        <div style={{ border: "1px solid #ddd", padding: "10px", marginBottom: "10px" }}>
          <h3>Steel Plant Upgrade</h3>
          <p>Reduced waste by 40% through eco-friendly solutions.</p>
        </div>
      </div>

      {/* Testimonials Section */}
      <h2>Client Testimonials</h2>
      <div>
        <blockquote>"Their automation solutions were game-changing!" - John Doe</blockquote>
        <blockquote>"The upgrade helped us reduce costs significantly." - Sarah Smith</blockquote>
      </div>
    </div>
    </form>
  );
};

export default ProjectsPage;
