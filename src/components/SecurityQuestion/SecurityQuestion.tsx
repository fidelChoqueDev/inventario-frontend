import "./SecurityQuestion.css";
import InputForm from "../InputForm/InputForm";

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

  return (
    <div className="security-question-container">
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
        <div className="security-question-arrow"></div>
      </div>
      <InputForm
        errorMessage={errorMessage}
        name="secretAnswer"
        type="text"
        placeholder="Introduce tu respuesta"
        value={answer}
        onChange={onAnswerChange}
        pattern="^.+$"
        required={true}
      />
    </div>
  );
};

export default SecurityQuestion;
