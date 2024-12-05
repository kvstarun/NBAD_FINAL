import React from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaLock } from 'react-icons/fa'; // Import only the used icons
import ChartComponent from './ChartComponent'; // Ensure you have a properly configured ChartComponent
import { useInView } from 'react-intersection-observer'; // Scroll animation
import { motion } from 'framer-motion'; // For smooth animations

function Summary() {
  const { ref: cardRef, inView: inViewCard } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div style={styles.container}>
      <motion.div
        style={styles.card}
        ref={cardRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inViewCard ? 1 : 0, y: inViewCard ? 0 : 50 }}
        transition={{ duration: 1 }}
      >
        <h1 style={styles.title}>Project Summary</h1>
        <p style={styles.paragraph}>
          This project is a single-page application (SPA) designed to deliver a dynamic user experience
          with high responsiveness and robust backend capabilities. The frontend is developed using React,
          a powerful JavaScript library known for its efficient rendering and state management features.
        </p>
        <p style={styles.paragraph}>
          The backend of the application runs on Node.js, utilizing Express.js to manage server-side logic
          and routing. Node.js's non-blocking I/O model provides efficient processing of simultaneous client
          requests, making it suitable for applications expecting high traffic volumes. MongoDB, our chosen
          NoSQL database, handles data storage with its flexible document structure, facilitating quick
          retrieval and storage of data, which is crucial for the performance of real-time web applications.
        </p>
        <p style={styles.paragraph}>
          Authentication across the platform is secured using JSON Web Tokens (JWT), ensuring that all
          transactions remain secure and that user data is protected. This project combines cutting-edge
          technology with a strong focus on security and scalability.
        </p>
      </motion.div>

      {/* Tech Stack Section */}
      <motion.div
        style={styles.techStack}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 style={styles.techStackTitle}>Tech Stack</h2>
        <div style={styles.techItems}>
          <div style={styles.techItem}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" style={styles.icon} />
            <p>React.js</p>
          </div>
          <div style={styles.techItem}>
            <img src="https://www.svgrepo.com/show/376337/node-js.svg" alt="Node.js" style={styles.icon} />
            <p>Node.js & Express</p>
          </div>
          <div style={styles.techItem}>
            <img src="https://www.svgrepo.com/show/373845/mongo.svg" alt="MongoDB" style={styles.icon} />
            <p>MongoDB</p>
          </div>
          <div style={styles.techItem}>
            <img src="data:image/png;base64,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" alt="JWT Authentication" style={styles.icon} />
            <p>JWT Authentication</p>
          </div>
        </div>
      </motion.div>

      {/* Chart Section */}
      <motion.div
        style={styles.chartContainer}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 style={styles.chartTitle}>Dynamic Data Visualization</h2>
        <ChartComponent chartType="Complex Bar Chart: Multi-Layer Analysis" />
        <p style={styles.chartDescription}>
          The chart dynamically visualizes complex multi-layered data. It showcases trends in renewable energy
          capacity, including various components such as Solar, Wind (onshore/offshore), Hydro, Gas, and more.
          It provides a clear comparison between projected and actual data values over time.
        </p>
      </motion.div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#1C2B36', // Darker background for contrast
    color: '#fff', // White text for visibility
    fontFamily: "'Poppins', sans-serif", // Clean, modern font
    padding: '20px',
  },
  card: {
    backgroundColor: '#2D3E50', // Darker card background for contrast
    padding: '40px 60px',
    borderRadius: '15px', // Soft rounded corners
    boxShadow: '0 15px 40px rgba(0,0,0,0.3)', // Larger shadow for depth
    maxWidth: '800px',
    width: '90%',
    textAlign: 'left', // Left-aligned text for better readability
    marginBottom: '40px', // Space between sections
  },
  title: {
    fontSize: '3rem',
    fontWeight: '700',
    marginBottom: '20px',
    color: '#F0DB4F', // Vibrant yellow for a modern feel
  },
  paragraph: {
    fontSize: '1.2rem',
    lineHeight: '1.6',
    color: '#E0E0E0',
    marginBottom: '20px',
  },
  techStack: {
    maxWidth: '950px',
    width: '100%',
    backgroundColor: '#3C5668',
    borderRadius: '15px',
    padding: '40px',
    boxShadow: '0 15px 40px rgba(0,0,0,0.2)',
    marginBottom: '40px',
    textAlign: 'center',
  },
  techStackTitle: {
    fontSize: '2.5rem',
    fontWeight: '600',
    marginBottom: '30px',
    color: '#F0DB4F',
  },
  techItems: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
    gap: '30px',
  },
  techItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  icon: {
    maxWidth: '80px',
    maxHeight: '80px',
    marginBottom: '15px',
    transition: 'transform 0.3s ease',
  },
  chartContainer: {
    maxWidth: '950px',
    width: '100%',
    padding: '40px',
    backgroundColor: '#3C5668',
    borderRadius: '15px',
    boxShadow: '0 15px 40px rgba(0,0,0,0.2)',
    textAlign: 'center',
  },
  chartTitle: {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#F0DB4F',
    marginBottom: '20px',
  },
  chartDescription: {
    fontSize: '1.1rem',
    color: '#E0E0E0',
    marginTop: '20px',
    fontStyle: 'italic',
  },
};

export default Summary;
