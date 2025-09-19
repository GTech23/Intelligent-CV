import { Link } from "react-router-dom";

const Button = ({ text, to }) => {
  return (
    <Link
      to={to}
      className="py-3 relative px-12 border-zinc-400 border-1 min-w-[200px] text-center bottom-0 transition cursor-pointer rounded-md hover:bg-[#FAFBFC]"
    >
      {text}
    </Link>
  );
};

export default Button;
