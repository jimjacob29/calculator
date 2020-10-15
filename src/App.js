import React from "react";
import "./styles.css";
import { evaluate } from "mathjs";

export default function App() {
  const clear = () => {
    expression = "";
    Setexpression("");
  };
  const back = () => {
    let newExpression = "";
    for (let i = 0; i < expression.length - 1; i++) {
      newExpression = newExpression + expression[i];
    }
    Setexpression(newExpression);
  };

  const calculate = () => {
    try {
      let result = evaluate(expression);
      Setexpression(result.toString());
    } catch (ex) {
      Setexpression("");
    }
  };
  const handleClick = (value) => {
    console.log(value);
    if (value === "AC") {
      clear();
    } else if (value === "Del") {
      back();
    } else if (value === "=") {
      calculate();
    }
    // else if (expression.includes(".") && value === ".") {
    //   return;
    // }
    else {
      let i = 0;
      let newExpression = "";
      if (expression.length === 0) {
        newExpression = newExpression + value;
      } else {
        for (; i < expression.length - 1; i++) {
          newExpression = newExpression + expression[i];
        }
        if (
          (expression[i] === "+" ||
            expression[i] === "-" ||
            expression[i] === "/" ||
            expression[i] === "*") &&
          (value === "+" || value === "-" || value === "*" || value === "/")
        ) {
          newExpression = newExpression + value;
        } else {
          newExpression = newExpression + expression[i];
          newExpression = newExpression + value;
        }
      }
      Setexpression(newExpression);
    }
  };
  let [expression, Setexpression] = React.useState("");
  return (
    <div className="center">
      <div className="disp">{expression}</div>
      <div>
        {[7, 8, 9, "+"].map((el) => (
          <button className="btnSize" key={el} onClick={() => handleClick(el)}>
            {el}
          </button>
        ))}
      </div>

      <div>
        {[4, 5, 6, "*"].map((el) => (
          <button className="btnSize" key={el} onClick={() => handleClick(el)}>
            {el}
          </button>
        ))}
      </div>

      <div>
        {[1, 2, 3, "-"].map((el) => (
          <button className="btnSize" key={el} onClick={() => handleClick(el)}>
            {el}
          </button>
        ))}
      </div>

      <div>
        {[0, ".", "AC", "+"].map((el) => (
          <button className="btnSize" key={el} onClick={() => handleClick(el)}>
            {el}
          </button>
        ))}
      </div>
      <div>
        {["=", "Del"].map((el) => (
          <button className="btnSize" key={el} onClick={() => handleClick(el)}>
            {el}
          </button>
        ))}
      </div>
    </div>
  );
}
