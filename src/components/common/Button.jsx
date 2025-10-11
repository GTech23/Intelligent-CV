import { Link } from "react-router-dom";

const Button = ({ text, to, hasMargin = true }) => {
  return (
    <Link
      to={to}
      className={`py-3 block ${hasMargin ? 'mt-8' : 'mt-0'} relative px-6 border-zinc-400 border-1 min-w-[200px] text-center bottom-0 transition cursor-pointer rounded-md hover:bg-[#FAFBFC] sm:px-12`}
    >
      {text}
    </Link>
  );
};

export default Button;
