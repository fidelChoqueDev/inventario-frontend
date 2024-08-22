import "./ErrorMessage.css";
interface Props {
  children: React.ReactNode;
  className?: string;
  variant?: "FontSizeNormal";
  visibility?: boolean;
}

const NAME_CLASS = "c-error-message";

const errorMessageVariant = {
  FontSizeNormal: NAME_CLASS + "--fs-normal",
};

export default function ErrorMessage({
  children,
  variant,
  visibility,
  className,
}: Props) {
  const classToApply = [
    variant ? errorMessageVariant[variant] : "",
    visibility ? "visible" : "",
    className ? className : "",
  ];

  return (
    <p className={`c-error-message ${classToApply.join(" ")}`}>{children}</p>
  );
}
