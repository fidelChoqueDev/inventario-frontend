import "./SecurityQuestion.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { useState } from "react";

interface Props {
  questionOptions: string[];
  selectedQuestion: string;
  onQuestionChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  answer: string;
  onAnswerChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage: string;
}

const SecurityQuestion = (props: Props) => {
  const {
    questionOptions,
    selectedQuestion,
    onQuestionChange,
    answer,
    onAnswerChange,
    errorMessage,
  } = props;

  const [focused, setFocused] = useState<boolean>(false);

  const handleFocus = () => {
    setFocused(true);
  };

  return (
    <>
      <div className="security-question-select">
        <select
          name="secretQuestion"
          value={selectedQuestion}
          onChange={onQuestionChange}
          className="security-question-dropdown"
        >
          {questionOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="security-question-input">
        <input
          name="secretAnswer"
          type="text"
          placeholder="Introduce tu respuesta"
          value={answer}
          onChange={onAnswerChange}
          onFocus={handleFocus}
          data-focused={focused.toString()}
          className="c-input"
        />
        <ErrorMessage>{errorMessage}</ErrorMessage>
      </div>
    </>
  );
};

export default SecurityQuestion;
