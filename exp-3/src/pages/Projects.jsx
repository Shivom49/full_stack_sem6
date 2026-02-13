function Projects() {
  return (
    <div style={styles.container}>
      <h1>My Projects</h1>

      <div style={styles.card}>
        <h3>Titanic Survival Prediction</h3>
        <p>Machine Learning web application using Streamlit & Flask.</p>
      </div>

      <div style={styles.card}>
        <h3>Fake News Detection</h3>
        <p>NLP based research project using Python and ML.</p>
      </div>

      <div style={styles.card}>
        <h3>Banking Interface</h3>
        <p>Full Stack project using HTML, CSS, JavaScript.</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    textAlign: "center"
  },
  card: {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "20px",
    margin: "20px auto",
    width: "60%",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
  }
};

export default Projects;
