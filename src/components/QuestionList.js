import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions, loading, onDeleteClick}) {

  if (loading === true) {
    return <p>Loading ... </p>
  } else {
    return (
    <section>
      <h1>Quiz Questions</h1>
      <ul> 
        {/* display QuestionItem components here after fetching */}
        {questions.map((question) => (
          <QuestionItem 
            key={question.id}
            question={question}
            onDeleteClick={onDeleteClick}
          />)
        )}
        
      </ul>
    </section>
  );}
}

export default QuestionList;
