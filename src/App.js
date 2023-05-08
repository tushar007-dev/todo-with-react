import { useState } from "react";

function App() {
  let [text, setText] = useState("");
  let [error, setError] = useState(false);
  let [taskArr, setTaskArr] = useState([]);
  let [button, setButton] = useState(false);
  let [editId, setSetEditId] = useState("");
  let [editText, setSetEditText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClick = () => {
    if (text) {
      taskArr.push(text);
      let arr = [...taskArr];
      setTaskArr(arr);
      setText("");
      console.log(taskArr);

      if (error) {
        setError(false);
        console.log("render hoini");
      }
    } else {
      console.log("nai");
      setError(true);
    }
  };

  let handleDelete = (id) => {
    console.log(id);
    taskArr.splice(id, 1);
    let arr = [...taskArr];
    setTaskArr(arr);
    console.log(taskArr);
  };

  let handleCancle = () => {
    setButton(false);
    setText("");
  };

  let handleEdit = (text, id) => {
    setButton(true);
    setText(text);
    console.log(text, id);

    setSetEditId(id);
    setSetEditText(text);
  };

  let handleUpdate = () => {
    setButton(false);
    setText("");
    console.log(editId, editText);

    taskArr[editId] = text;
    console.log(taskArr);
  };

  return (
    <section>
      <input onChange={handleChange} value={text} />
      <button onClick={handleClick}>Add</button>

      {button ? (
        <>
          <button onClick={handleUpdate}>Update</button>
          <button onClick={handleCancle}>Calcle</button>
        </>
      ) : (
        ""
      )}

      {error && <h1>write something</h1>}

      <ol>
        {taskArr.map((item, index) => (
          <>
            <li key={index}>
              {item} - {index}
              <button onClick={() => handleDelete(index)}>Delete</button>
              <button onClick={() => handleEdit(item, index)}>Edit</button>
            </li>
          </>
        ))}
      </ol>
    </section>
  );
}

export default App;
