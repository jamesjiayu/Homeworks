import React from "react"
//import { CounterContext } from "../App"
import Car from "./Car"
import { CounterApp } from "./CounterApp"
import SellButton from "./SellButton"

// uuid: universal unique id
/*
shallow copy (spread operator): copy only the first level of the properties
deep copy: recursive

loose comparison: ==
strict comparison: ===
shallow comparison: comparing the first level of the key value pairs, to do it, we can first check the length, then key value pairs
deep comparison: compare all the nested values recursively

React.memo: hoc, shouldComponentUpdate
useMemo
useCallback
*/

class CarsApp extends React.Component {

  state = {
    cars: [
      {
        make: "Toyota",
        quantity: 10,
        id: 1,
        date: new Date(),
      },
      {
        make: "Honda",
        quantity: 5,
        id: 2,
      },
      {
        make: "Nissan",
        quantity: 7,
        id: 3,
      },
    ],
  };

  handleSell = (index) => {
    // console.log(index);
    this.setState((prev) => {
      // const nextState = { ...prev };
      // console.log(nextState.cars === prev.cars); // true
      // nextState.cars[index].quantity = nextState.cars[index].quantity - 1; // mutable

      // immutable
      // const newCars = prev.cars.map((car, carIndex) => {
      //   if (carIndex === index) {
      //     return { ...car, quantity: car.quantity - 1 };
      //   } else return car;
      // });

      // const nextState = { ...prev, cars: newCars };

      // console.log(nextState.cars === prev.cars); // false
      // console.log(nextState.cars[index] === prev.cars[index]); // false

      // immutable
      const nextState = {
        ...prev,
        cars: [
          ...prev.cars.slice(0, index),
          {
            ...prev.cars[index],
            quantity: prev.cars[index].quantity - 1,
          },
          ...prev.cars.slice(index + 1),
        ],
      }

      // console.log(nextState.cars === prev.cars); // false
      // console.log(nextState.cars[index] === prev.cars[index]); // false

      // deep copy - might cause issues
      // const nextState = JSON.parse(JSON.stringify(prev));
      // console.log(prev, nextState);

      return nextState
    })
    // this.state.cars[index].quantity--;
    // this.setState(this.state);
  };

  render () {
    return (
      <>
        <div>
          {this.state.cars.map((car) => (
            <Car key={car.id} carData={car} />
          ))}
        </div>
        <div>
          {this.state.cars.map((car, index) => (
            <SellButton
              key={car.id}
              handleSell={() => this.handleSell(index)}
              carData={car}
            />
          ))}
        </div>
        <div>
          <CounterApp />
        </div>
      </>
    )
  }
}

export default CarsApp
