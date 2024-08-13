import "./CustomLink.css";
import { Link, LinkProps } from "react-router-dom";

export default function CustomLink(props: LinkProps) {
  return <Link {...props} className="c-custom-link" />;
}
