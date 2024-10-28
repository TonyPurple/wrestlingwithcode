interface SectionSeparatorProps {
  className?: string;
}

const SectionSeparator = ({ className = "" }: SectionSeparatorProps) => {
  return <hr className={`border-neutral-200 space-y-28 ${className}`} />;
};

export default SectionSeparator;
