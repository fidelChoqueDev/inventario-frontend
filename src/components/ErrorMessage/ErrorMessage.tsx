import "./ErrorMessage.css";
interface Props {
  children: React.ReactNode;
}
export default function ErrorMessage({ children }: Props) {
  return <p className="c-error-message">{children}</p>;
}
