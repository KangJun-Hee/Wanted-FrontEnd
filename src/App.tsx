import React, { useState, useEffect } from "react";
import "./App.css";
import List from "./component/List";
import Form from "./component/Form";
import { Link } from "react-router-dom";

function App() {
  //State stuff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //Run once when the app start
  useEffect(() => {
    getLocalTodos();
  }, []);
  //useEffect
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  //Functions
  const filterHandler = () => {
    console.log("status in filterHandler:", status);

    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  //Save to local
  const saveLocalTodos = () => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  };
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos") as any);
      setTodos(todoLocal);
    }
  };
  return (
    <div className="App">
      <header>
        <a href="https://vast-kidney-95e.notion.site/8e612943477141d29aac5bc9850a503d?pvs=4">
          Notion
        </a>
        <h1>Junhee's Todo List{inputText}</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <List filteredTodos={filteredTodos} setTodos={setTodos} todos={todos} />
      <div>
        <ul>
          <li>
            DOM과 Virtual DOM:가상 DOM(Virtual DOM): 실제 DOM 조작 대신 가상의
            메모리 내 트리를 사용하여 효율적으로 UI를 렌더링합니다.
          </li>
          <li>
            리액트의 특징:다양한 라이브러리나 프레임워크와 호환이 가능, 컴포넌트
            기반의 아키텍처 제공 등의 장점을 가져 UI 개발을 쉽게 도와주는
            프론트엔드의 대표적인 라이브러리. 결과적으로 React는 JSX를
            JavaScript에 넣음으로써(말 그대로 거꾸로) 훨씬 간결하고 가독성이
            뛰어나며 포괄적인 코드를 제공합니다. 바로 이런 이유 때문에 생성된
            컴포넌트를 쉽게 재사용할 수 있습니다.
          </li>
          <li>flux 패턴에 대하여 설명해주세요.</li>
          <li>
            상태관리:리액트에서 전역의 상태를 관리하기 위해서 사용하는 방법이다.
            컴포넌트간의 상태들을 한군데다가 모아놓고 공유해서 사용하는 방식. 
            리액트의 상태관리는 Context API, Redux, MobX 등의 상태관리가 있으며,
            Context API보다 Redux를 사용하는 이유는 대규모 개발에서
            유지보수성이나 작업효율을 높이기에는 Redux를 사용하는것이 좋기
            때문에 많은 사람들이 Redux를 사용한다. 리액트 16.3이후 버전에서는
            그래도 Context API가 개선되어 사용하기 좋아졌다.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
