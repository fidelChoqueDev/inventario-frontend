import "./Button.css";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  // Custom properties
  variant: "Primary" | "Secondary";
}

const buttonVariants = {
  Primary: "c-btn--primary",
  Secondary: "c-btn--secondary",
};

const Button = ({ variant, children, ...props }: ButtonProps) => {
  const classToApply = buttonVariants[variant] ?? "";
  return (
    <button className={`c-btn ${classToApply}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
