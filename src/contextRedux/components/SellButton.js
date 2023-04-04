import React from "react"

class SellButton extends React.Component {
  render () {
    const { make, id } = this.props.carData
    return (
      <button onClick={this.props.handleSell} style={{ margin: "30px" }}>
        sell {make}
      </button>
    )
  }
}

export default SellButton
