export default function SkillCard({
  heading,
  subheading,
  content,
  logo,
  className = "",
}: {
  heading: string;
  subheading: string;
  content: string;
  logo: React.ReactNode;
  className: string;
}) {
  return (
    <div
      className={`flex flex-col items-start text-left border border-solid border-dark w-1/4 h-[35%] ${className}`}
    >
      <div className="flex items-start">
        <div>{logo}</div>
        <h3 className="">{heading}</h3>
      </div>
      <h4 className="">{subheading}</h4>
      <p className="">{content}</p>
    </div>
  );
}
