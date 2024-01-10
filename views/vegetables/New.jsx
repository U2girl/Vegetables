const React = require('react');
export default function New() {

  const container= {
    display: 'flex',
    alignItems: 'center',
    justifyContent:'center',
    height: '100vh', /* Set the container height to 100% of the viewport height */
  };
  const formStyle = {
    maxWidth: '400px',
    margin: 'auto',
    padding: '20px',
    borderRadius: '8px',
    background: 'linear-gradient(to right, #ff8a00, #da1b60)',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };
  const inputStyle = {
    width: '100%',
    padding: '8px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    transition: 'border-color 0.3s',
  };
  const buttonStyle = {
    background: '#da1b60',
    color: '#fff',
    padding: '10px',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background 0.3s',
  };
  return (
    <div style={container}>
        <h1>Vegetable Form</h1>
    <form action="/vegetables" method="post"style={formStyle}>
      <label>
        Name: <input type="text" name="name" required style={inputStyle}/>
      </label><br />
      <label>
        Color: <input type="text" name="color" required style={inputStyle}/>
      </label><br />
      <label>
      Ready to Eat: <input type="checkbox" name="isReadyToEat" />
      </label><br />
      <button type="submit" style={buttonStyle}>Add Vegetable</button>
    </form>
  </div>
  )
}