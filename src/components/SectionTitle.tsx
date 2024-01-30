export default function SectionTitle({ title }: { title: string[] }) {
  return (
    <div className="text-gray-400">
      {title[0]} <span className="text-gray-500">{title[1]}</span>
    </div>
  );
}
