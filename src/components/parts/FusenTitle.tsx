interface FusenTitleProps {
  title: string;
}

const FusenTitle = ({ title }: FusenTitleProps) => {
  return (
    <div className="border-l-8 border-sky-300 bg-stone-100 p-2 px-4">
      <h2 className="text-2xl text-stone-600">{title}</h2>
    </div>
  );
};

export default FusenTitle;
