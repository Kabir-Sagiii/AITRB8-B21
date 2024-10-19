function UnControlled() {
  const addDataInPara = () => {
    var inputDomElement = document.querySelector("input");
    var pDomElement = document.querySelector("p");
    pDomElement.innerText = inputDomElement.value;
    inputDomElement.value = "";
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>UnControlled Component</h2>
      <form>
        <input type="text" placeholder="enter text" />
        <button onClick={addDataInPara} type="button">
          Submit
        </button>
        <br />
        <br />
        <hr />
        <br />
        <br />
        <p></p>
      </form>
    </div>
  );
}

export default UnControlled;
