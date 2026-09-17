import React, { useCallback, useState } from "react";
import Button from "./components/Button";

function App() {
  // Example 1 - Basic useCallback
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);

  // Example 2 - useCallback + Child Component
  // The same handleClick function is passed to Button
  // Button.jsx uses React.memo

  // Example 3 - useCallback with dependency
  const showCount = useCallback(() => {
    console.log("Count is:", count);
  }, [count]);

  // Example 4 -useCallback with a message
  const showMessage = useCallback(() => {
    alert("Hello Lokesh!");
  }, []);

  // Example 5 — useCallback with an input
  const [name, setName] = useState("");

  const handleName = useCallback((event) => {
    setName(event.target.value);
  }, []);

  // Example 6 - useCallback with two dependencies
  const [age, setAge] = useState(20);

  const showDetails = useCallback(() => {
    console.log("Name:", name);
    console.log("Age:", age);
  }, [name, age]);

  // Example 7 - useCallback with a parameter
  const multiply = useCallback((number) => {
    console.log("Result:", number * 2);
  }, []);

  // Example 8 - useCallback + React.memo
  const showName = useCallback(() => {
  console.log("Name is:", name);
  }, [name]);

  // Example 9 - useCallback with counter
  const [number, setNumber] = useState(0);

  const showNumber = useCallback(() => {
    console.log("Number is:", number);
  }, [number]);

  // Example 10
  const [email, setEmail] =useState("");

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    alert(`Email: ${email}`);
  }, [email]);



  return (
    <div>

      {/* Example 1 */}
      <h2>Example 1 - Basic useCallback</h2>

      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <button onClick={handleClick}>
        Click Me
      </button>

      {/* Example 2 */}
      <h2>Example 2 - Child Component</h2>

      <Button handleClick={handleClick} />

      {/* Example 3 */}
      <h2>Example 3 - Dependency</h2>

      <button onClick={showCount}>
        Show Count in Console
      </button>

      {/* Example 4 */}
      <h2>Example 4 - Message</h2>

      <button onClick={showMessage}>
        Show Message
      </button>

      {/* Example 5 */}
      <h2>Example 5 - Input</h2>

      <input type="text" value={name} onChange={handleName}
      placeholder="Enter your name"/>

      <p>Hello, {name}</p>

      {/* Example 6 */}
      <h2>Example 6 - Two Dependencies</h2>

      <button onClick={showDetails}>
        Show Details
      </button>

      {/* Example 7 */}
      <h2>Example 7 - Function Parameter</h2>

      <button onClick={() => multiply(5)}>
        Multiply 5 * 2
      </button>

      {/* Example 8 */}
      <h2>Example 8 - useCallback + React.memo</h2>

      <Button handleClick={showName} />

      {/* Example 9 */}
      <h2>Example 9 - useCallback with Counter</h2>

      <p>Number: {number}</p>
      
      <button onClick={() => setNumber(number + 1)}>
        Increase Number
      </button>

      <button onClick={showNumber}>
        Show Number in  Console
      </button>

      {/* Example 10 */}
      <h2>Example 10 - useCallback  with Form</h2>

      <form onSubmit={handleSubmit}>
        <input type="email" value={email} 
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Enter your email"/>

        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;