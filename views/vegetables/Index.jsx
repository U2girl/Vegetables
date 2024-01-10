const React = require('react');
const VegetablesIndex = ({p}) => {
    return (
        <div>
            <h1>Vegetables Index Page</h1>
            <div>
      <h1>Vegetables</h1>
      <ul>
        {p.map((vegetable, index) => (
          <li key={index}>
            <a href={`/vegetables/${vegetable.name}/${vegetable.isReadyToEat}`}>
              {vegetable.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  
        </div>
    )
}
module.exports = VegetablesIndex;