function Home() {
  return (
    <div style={styles.container}>
      <h1>Welcome to My Portfolio</h1>
      <p><strong>Name:</strong> Shivom Parashari</p>
      <p><strong>UID:</strong> 23BAI70407</p>
      <p><strong>Branch:</strong> AI & ML</p>
      <p><strong>Location:</strong> Bareilly</p>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    textAlign: "center"
  }
};

export default Home;
