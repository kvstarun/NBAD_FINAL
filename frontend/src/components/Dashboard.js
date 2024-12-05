import React, { useState } from 'react';

function Dashboard() {
  const [isHovering, setIsHovering] = useState(false);

  const handleHover = (hoverState) => {
    setIsHovering(hoverState);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Global Energy Outlook 2024</h1>
        <p style={styles.content}>
          The "Global Energy Perspective 2024" provides a comprehensive analysis of the evolving energy sector, 
          emphasizing the challenges and opportunities of the energy transition. It highlights the need for urgent action 
          to accelerate the pace of change to meet global climate goals. The report details a range of scenarios that explore 
          different pathways to a more sustainable and resilient energy future, emphasizing the importance of technological 
          innovation, regulatory frameworks, and capital investment.
        </p>
        <p style={styles.content}>
          Significant trends include the strategic reshoring of energy supply chains, advances in renewable energy technologies, 
          and the critical role of digitalization in improving system efficiencies. The analysis also covers the implications 
          of geopolitical shifts, supply chain complexities, and economic conditions that could influence global energy strategies.
        </p>
        <img
          src="/image.png"
          alt="Global Energy Outlook 2024"
          style={styles.image}
        />
        <p style={styles.source}>
          Source:{" "}
          <a
            href="https://www.mckinsey.com/industries/energy-and-materials/our-insights/global-energy-perspective"
            style={{
              ...styles.link,
              textDecoration: isHovering ? "underline" : "none",
            }}
            onMouseEnter={() => handleHover(true)}
            onMouseLeave={() => handleHover(false)}
          >
            McKinsey Global Energy Perspective 2024
          </a>
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    background: "linear-gradient(to right, #000, #434343)", // Dark gradient background
    fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif", // Updated to Helvetica for a sleek look
    color: "#FFF", // Overall light text for contrast on dark background
    animation: "fadeIn 1s ease-in-out",
  },
  card: {
    backgroundColor: "#2c2c2c", // Dark card background
    padding: "50px",
    borderRadius: "10px", // Maintaining rounded corners but less pronounced
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.25)", // Increased shadow for depth
    maxWidth: "800px",
    width: "90%",
    textAlign: "left", // Aligned text to left for better readability
    animation: "slideIn 0.5s ease-out",
  },
  title: {
    fontSize: "3rem", // Larger title font size
    color: "#FFFFFF",
    marginBottom: "30px",
  },
  content: {
    fontSize: "1.2rem",
    lineHeight: "2",
    color: "#CCCCCC", // Light grey for text for readability without being too bright
    marginBottom: "20px",
  },
  image: {
    maxWidth: "100%",
    height: "auto",
    borderRadius: "10px",
    marginBottom: "30px",
  },
  source: {
    fontSize: "1rem",
    color: "#BBBBBB", // Slightly lighter grey for less important text
  },
  link: {
    color: "#1E90FF", // Bright blue for links to stand out
    textDecoration: "none",
    cursor: "pointer",
  },
};

export default Dashboard;
