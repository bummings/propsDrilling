import React from "react";
import ReactDOM from "react-dom";

import "./styles.css"; 

const MyComponentWithProps = props => {
  return (
    <h1>
      {" "}{props.greeting}, {props.name}{" "}
    </h1>
  );
};

const simpsonData = [
  {
    name: "Orville Simpson",
    spouse: "Yuma Hickman",
    children: [
      {
        name: "Abraham Simpson",
        spouse: "Mona",
        children: [
          {
            name: "Homer Simpson",
            spouse: "Marge Bouvier",
            children: [
              {
                name: "Bart Simpson"
              },
              {
                name: "Lisa Simpson"
              },
              {
                name: "Maggie Simpson"
              }
            ]
          }
        ]
      }
    ]
  }
];

const Parent = props => {
  return (
    <div>
      <h1>Parent: {props.name}</h1>
      <Child name={props.childName} grandchildName={props.grandchildName}/>
    </div>
  );
};

const Child = props => {
  return (
    <div>
      <h2>Child: {props.name}</h2>
      <Grandchild name={props.grandchildName} />
    </div>
  );
};

const Grandchild = props => {
  return (
    <div>
      <h3>Grandchild: {props.name}</h3>
    </div>
  );
};

function App() {
  return (
      <div className="container">
        {/* <MyComponentWithProps name='faux' greeting='sup' /> */}

        <Parent
          name={simpsonData[0].name}
          childName={simpsonData[0].children[0].name}
          grandchildName= {simpsonData[0].children[0].children[0].name}
        />
        <h4>lol omg my fuckin head</h4>
      </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
