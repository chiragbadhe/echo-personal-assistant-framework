import React, { useState, useEffect } from "react";

export default function SelectPort( ) {
  const [ports, setPorts] = useState([]);
  const [selectedPort, setSelectedPort] = useState(null);

  useEffect(() => {
    async function fetchPorts() {
      const response = await fetch("http://localhost:3001/ports");
      const ports = await response.json();
      setPorts(ports);
    }

    fetchPorts();
  }, []);

  console.log(ports);

  function handlePortChange(event) {
    const path = event.target.value;
    setSelectedPort(path);

    // Make a POST request to the server with the selected port
    fetch("http://localhost:3001/select-port", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ path: event.target.value }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to send selected port to server");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <select className="px-[10px] py-[5px] outline-none" value={selectedPort} onChange={handlePortChange}>
      <option value="">Select a port</option>
      {ports.map((port) => (
        <option key={port.path} value={port.path}>
          {port.path}
        </option>
      ))}
    </select>
  );
}
