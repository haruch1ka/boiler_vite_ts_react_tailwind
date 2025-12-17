const TagSmallRound = ({
  label,
  children,
}: {
  label: string;
  children?: React.ReactNode;
}) => (
  <span className="inline-flex items-center rounded-2xl bg-stone-300 p-1 text-xs font-semibold text-stone-700">
    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-400">
      {children}
    </span>
    <span className="px-2">{label}</span>
  </span>
);
export default TagSmallRound;
