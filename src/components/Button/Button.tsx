import "./Button.css";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: () => void;
  // Custom properties
  variant: "Primary" | "Secondary";
}

const buttonVariants = {
  Primary: "c-btn--primary",
  Secondary: "c-btn--secondary",
};

const Button = (props: ButtonProps) => {
  const { variant, children, ...rest } = props;
  const classToApply = buttonVariants[variant] ?? "";
  return (
    <button className={`c-btn ${classToApply}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
