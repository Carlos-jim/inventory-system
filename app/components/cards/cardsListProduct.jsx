export default function SummaryCard({ title, count, icon, bgColor }) {
    return (
      <div className={`flex items-center p-4 border rounded-lg ${bgColor}`}>
        <div className="text-3xl">{icon}</div>
        <div className="ml-4">
          <p className="text-sm font-medium">{title}</p>
          <p className="text-xl font-bold">{count}</p>
        </div>
      </div>
    );
  }
  