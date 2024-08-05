import './Button.css'

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  // Custom properties
  disabled?: boolean
  handleClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button = ({ content, handleClick , ...props}: ButtonProps) => {
  return (
    <button {...props} onClick={handleClick}>
      {content}
      </button>
  )
}

export default Button