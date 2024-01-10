

/*class Index extends React.Component {
    // render() {
    //     const { fruits } = this.props;
        // const fruits = this.props.fruits;

        return (
            <div>
                <h1>Fruits Index Page</h1>
                <nav>
                    <a href="/fruits/new">Create a New Fruit</a>
                </nav>
                <ul>
                    {fruits.map((fruit, i) => {
                        return (
                            <li>
                                The {' '}
                                <a href={`/fruits/${fruit._id}`}>
                                    {fruit.name}
                                </a> {' '}
                                is {fruit.color} <br></br>
                                {fruit.readyToEat
                                ? `It is ready to eat`
                            :   `It is NOT ready to eat`}
                            <br />
                            </li>
                        )
                    })

                    }
                </ul>
            </div>
        )
    }
}*/
const React = require('react');
const FruitsIndex = ({myFruits}) => {
    return (
        <div>
            <h1>Fruits Index Page</h1>
            <div>
      <h1>Fruits</h1>
      <ul>
        {myFruits.map((vegetable, index) => (
          <li key={index}>
            <a href={`/fruits/${vegetable.name}/${vegetable.isReadyToEat}`}>
              {vegetable.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  
        </div>
    )
}
module.exports = FruitsIndex;