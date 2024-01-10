

  /* class New extends React.Component {
     render() {
       return (
           <div>
               <h1>New Fruit page</h1>
               */{/* NOTE: action will be the route, method will be the HTTP verb */}
               /*<form action="/fruits" method="POST">
                 Name: <input type="text" name="name" /><br/>
                 Color: <input type="text" name="color" /><br/>
                 Is Ready To Eat: <input type="checkbox" name="readyToEat" /><br/>
                 <input type="submit" name="" value="Create Fruit"/>
               </form>
           </div>);
       }
     }*/

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
                  <h1>Fruit Form</h1>
         <form action="/fruits" method="post"style={formStyle}>
           <label>
             Name: <input type="text" name="name" required style={inputStyle}/>
           </label><br />
           <label>
             Color: <input type="text" name="color" required style={inputStyle}/>
           </label><br />
           <label>
           Ready to Eat: <input type="checkbox" name="isReadyToEat" />
           </label><br />
           <button type="submit" style={buttonStyle}>Add Fruits</button>
         </form>
       </div>
       )
     }