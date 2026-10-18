export default function VariableTypes() {
  let numberVariable = 123;
  let floatingPointNumber = 234.345;
  let stringVariable = "Hello World!";
  let booleanVariable = true;
  let isNumber = typeof numberVariable;
  let isString = typeof stringVariable;
  let isBoolean = typeof booleanVariable;
  let myString = "Football";
  let myNumber = 1023;
  // With AI
  let sampleCount = 42;
  let sampleLabel = "Lab 3";
  return (
    <div id="wd-variable-types">
      <h4>Variables Types</h4>
      numberVariable = {numberVariable}
      <br />
      floatingPointNumber = {floatingPointNumber}
      <br />
      stringVariable = {stringVariable}
      <br />
      booleanVariable = {booleanVariable + ""}
      <br />
      isNumber = {isNumber}
      <br />
      isString = {isString}
      <br />
      isBoolean = {isBoolean}
      <br />
      sampleCount = {sampleCount}, typeof = {typeof sampleCount}
      <br />
      sampleLabel = {sampleLabel}, typeof = {typeof sampleLabel}
      <br />
      myString = {myString}, typeof = {typeof myString}
      <br />
      myNumber = {myNumber}, typeof = {typeof myNumber}
      <hr />
    </div>
  );
}
