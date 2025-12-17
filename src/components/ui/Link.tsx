interface LinkProps {
  title: string;
  href: string;
  parentDecoration: string;
  linkDecoration: string;
  style?: React.CSSProperties;
}

const Link = ({
  title,
  href,
  parentDecoration,
  linkDecoration,
  style,
}: LinkProps) => {
  return (
    <div className={parentDecoration}>
      <a href={href} className={"underline " + linkDecoration} style={style}>
        {title}
      </a>
    </div>
  );
};

export default Link;
