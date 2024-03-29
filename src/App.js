import React from 'react';
import './App.css';
import NavBar from './components/navbar'
import Counters from './components/counters';

class App extends Counters  
{
  state =
    {
      counters:
        [
          { id: 1, value: 4 },
          { id: 2, value: -5 },
          { id: 3, value: 1 },
          { id: 4, value: 0 },
        ]
    };

  handleIncrement = counter => {
    const counters = [...this.state.counters]; //cloning the array
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  }

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () => 
  {
    const counters = this.state.counters.map
      (
        c => 
        {
          c.value = 0;
          return c;
        }
      );
    this.setState({counters});
  };

  render()
  {
    console.log("app-rendered");
    return (
      <React.Fragment>
       <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
       <main className="container">
         <Counters 
            onReset={this.handleReset} 
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            counters={this.state.counters}
          />
      </main>
    </React.Fragment>
    );
  };
  constructor() 
  {
    super();
    console.log("app-constructor");
  };
  componentDidMount()
  {
    console.log("app-mounted");
  };
}


export default App;
