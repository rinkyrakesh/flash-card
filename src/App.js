import { useState } from "react";
import "./index.css";

const questions = [
  {
    id: 123,
    question: "what is React?",
    answer: "React is a framework.",
  },
  {
    id: 456,
    question: "what is Javascript?",
    answer: "Javascript is a language.",
  },
  {
    id: 789,
    question: "what is Java?",
    answer: "Java is a backend language.",
  },
  {
    id: 234,
    question: "what is CSS?",
    answer: "CSS is a stylesheet.",
  },
];

function FlashCards() {
  const [selectedId, setSelectedId] = useState(null);
  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }

  return (
    <div className="flashcards">
      {questions.map((question) => (
        <div
          key={question.id}
          onClick={() => handleClick(question.id)}
          className={question.id === selectedId ? "selected" : ""}
        >
          <p>
            {question.id === selectedId ? question.answer : question.question}
          </p>
        </div>
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}

export default App;
