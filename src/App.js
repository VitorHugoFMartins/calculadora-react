import { Container, Content, Row, Column, TitleText, BackgronndAnimate } from "./styles";
import Input from "./components/Input";
import Button from "./components/Button";
import { useState } from "react";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState("0");
  const [operation, setOperation] = useState("");

  const handleOnClear = () => {
    setCurrentNumber("0");
    setFirstNumber("0");
    setOperation("");
  }
  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === "0" ? num : prev + num}`)
  }
  const handleSumNumbers = () => {
    if (operation !== "" && firstNumber !== "0") {

      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setFirstNumber("0"); 
      setOperation("");

    } else {

      setFirstNumber(currentNumber);
      setCurrentNumber("0");
      setOperation("+");

    }
  }

  const handleSubNumbers = () => {
    if (operation !== "") {

      const sub = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sub));
      setFirstNumber("0"); 
      setOperation(""); 

    } else {
      setFirstNumber(currentNumber);
      setCurrentNumber("0");
      setOperation("-");
    }
  }
  const handleMultNumbers = () => {
    if (operation !== "" && firstNumber !== "0") {

      const mult = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(mult));
      setFirstNumber("0"); 
      setOperation(""); 

    } else {

      setFirstNumber(currentNumber);
      setCurrentNumber("0");
      setOperation("x");

    }
  }
  const handleDivNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(currentNumber);
      setCurrentNumber("0");
      setOperation("/");
    } else {
      const division = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(division));
      setOperation("");
    }
  }
  const handleDeleteNumber = () =>{
    if(currentNumber !== '0'){
      setCurrentNumber(prev => prev.length > 1 ? prev.slice(0, -1) : '0');
    }
  }
  const handleEquals = () => {

    if (operation !== "") {
      switch (operation) {
        case "+":
          handleSumNumbers()
          break;
        case "-":
          handleSubNumbers()
          break;
        case "x":
          handleMultNumbers()
          break;
        case "/":
          handleDivNumbers()
          break;
        default:
          break;
      }
      setOperation("");
    }
  }
  return (
    <Container>
      <Content>
      <TitleText>
          Calculadora em React
      </TitleText>
        <Input value={currentNumber} />
        <Row>
          <Button label={"/"} onClick={() => handleDivNumbers()} />
          <Button label={"CE"} onClick={() => handleOnClear()} />
          <Button label={"C"} onClick={() => handleOnClear()} />
          <Button label={"DEL"} onClick={() => handleDeleteNumber()} />
        </Row>
        <Row>
          <Button label={7} onClick={() => handleAddNumber("7")} />
          <Button label={8} onClick={() => handleAddNumber("8")} />
          <Button label={9} onClick={() => handleAddNumber("9")} />
          <Button label={"x"} onClick={() => handleMultNumbers()} />
        </Row>
        <Row>
          <Button label={4} onClick={() => handleAddNumber(4)} />
          <Button label={5} onClick={() => handleAddNumber("5")} />
          <Button label={6} onClick={() => handleAddNumber("6")} />
          <Button label={"-"} onClick={() => handleSubNumbers()} />
        </Row>
        <Row>
          <Button label={1} onClick={() => handleAddNumber("1")} />
          <Button label={2} onClick={() => handleAddNumber("2")} />
          <Button label={3} onClick={() => handleAddNumber("3")} />
          <Button label={"+"} onClick={() => handleSumNumbers()} />
        </Row>
        <Row>
          <Button label={"+/-"} onClick={() => handleAddNumber("")} />
          <Button label={0} onClick={() => handleAddNumber("0")} />
          <Button label={"."} onClick={() => handleAddNumber("")} />
          <Button label={"="} onClick={() => handleEquals()} />
        </Row>
      </Content>
    </Container>
  );
}

export default App;
