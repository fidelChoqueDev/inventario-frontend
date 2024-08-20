import { memo, useMemo } from "react";
import "./Checkbox.css";
import Icon from "../Icon/Icon";

interface Props {
  clickable: boolean;
  content: string;
  isChecked?: boolean;
  name: string;
  onChange?: () => void;
}

/**
 * Checkbox component
 * @param clickable - whether the checkbox is clickable or not
 * @param label - label of the checkbox
 * @param isChecked - whether the checkbox is checked or not
 * @param name - name of the checkbox
 * @param onChange (opcional) - callback function when the checkbox is clicked, if clickable is false, this prop is ignored
 */

const Checkbox = memo(
  function Checkbox({ clickable, content, name, isChecked, onChange }: Props) {
    const handleChange = useMemo(() => {
      if (!clickable)
        return (e: React.ChangeEvent<HTMLInputElement>) => {
          e.preventDefault();
        };
      return onChange;
    }, [clickable, onChange]);
    return (
      <div className="c-checkbox">
        <div className="c-checkbox">
          <input
            id={name}
            className="c-checkbox__input"
            name={name}
            type="checkbox"
            checked={isChecked}
            onChange={handleChange}
          />
          <label
            htmlFor={name}
            className={`c-checkbox__box ${clickable ? "" : "c-checkbox__box--noclick"}`}
          >
            <Icon type="Verification" />
          </label>
        </div>

        <span>{content}</span>
      </div>
    );
  },
  (prevProps: Props, nextProps: Props) =>
    prevProps.isChecked === nextProps.isChecked,
);

export default Checkbox;
