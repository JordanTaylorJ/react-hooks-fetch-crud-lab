import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then((res) => res.json())
    .then((questions) => setQuestions(questions))
    .finally(() => setLoading(false))
  }, []);

  function handleAddQuestion(newQuestion){
    setQuestions([...questions, newQuestion])
  }

  function handleDeleteClick(id){
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE"
    })
    .then((res) => res.json())
    .then(() => {
      const newQuestions = questions.filter((q) => q.id !== id);
      setQuestions(newQuestions);
    })
  }
  

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onAddQuestion={handleAddQuestion} questions={questions} /> : <QuestionList questions={questions} loading={loading} onDeleteClick={handleDeleteClick} />}
    </main>
  );
}

export default App;
