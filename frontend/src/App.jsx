import React, { useEffect, useState } from "react";
import styles from "./App.module.css"; // Import CSS module

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/data");
        const jsonData = await response.json();
        setData(jsonData.message);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>{data || "Loading..."}</div>
      <div className={styles.footer}>
        Copyright © {new Date().getFullYear()} Onur Sasmaz
      </div>
    </div>
  );
}

export default App;
