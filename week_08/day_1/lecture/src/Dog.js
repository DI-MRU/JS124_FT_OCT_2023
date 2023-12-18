import React from "react";

class Dog extends React.Component {
  render() {
    const dogName = "Peanut";
    return (
      <h2>
        Hi, I am {dogName}! I have {this.props.limbs} limbs.
      </h2>
    );
  }
}

export default Dog;
