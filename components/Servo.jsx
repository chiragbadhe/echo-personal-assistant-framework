import { useState } from "react";
import axios from "axios";

const Servo = () => {
  const [servoValue, setServoValue] = useState(180);

  const handleServoChange = (event) => {
    setServoValue(event.target.value);
  };

  const handleServoSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:3001/set-servo", { value: servoValue });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleServoSubmit}>
        <label htmlFor="servo">Servo value:</label>
        <input
          type="range"
          id="servo"
          name="servo"
          min="0"
          max="180"
          value={servoValue ? servoValue : 10}
          onChange={handleServoChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Servo;
