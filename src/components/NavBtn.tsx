export default function NavBtn({
  children,
  title,
  onClick,
  comparison,
  className,
}: {
  className?: string;
  comparison: boolean;
  title: string;
  children?: React.ReactNode;
} & Pick<React.HTMLProps<HTMLButtonElement>, "onClick">) {
  return (
    <button
      onClick={onClick}
      className={` ${
        comparison === true
          ? "before:absolute before:content-[''] before:left-0 before:h-full before:bg-white before:w-1 before:rounded-lg before:bg-gradient-to-br before:from-indigo-500 before:via-purple-500 before:to-pink-500 "
          : ""
      } flex relative  items-center hover:bg-white/5 transition-all py-2 pl-5 text-gray-400 fill-gray-400 font-medium text-sm   ${className} ${
        children ? "gap-3" : ""
      }`}
    >
      {children}
      <span>{title}</span>
    </button>
  );
}
