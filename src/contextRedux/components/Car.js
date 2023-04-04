import React, { Component } from "react"
//import { myWtihMemo, MyPureComponent } from '../MemoPureCom'

class Car extends Component {
  // sumPublic () { }
  // sumPrivate = function () { }
  // sumArrow = () => { }
  // constructor(props) {
  //   console.log('props in car constructor: ', props)
  //   super(props)
  // }
  render () {
    const { make, quantity } = this.props.carData
    return (
      <div
        style={{
          border: "1px solid black",
          display: "inline-block",
          width: "100px",
          height: "100px",
          margin: "20px",
        }}
      >
        <p>{make}</p>
        <p>{quantity}</p>
      </div>
    )
  }
}
// Car.prototype.varPublic = 0
// const c = new Car()
// console.log(c)

//export default myWtihMemo(Car)
export default Car
