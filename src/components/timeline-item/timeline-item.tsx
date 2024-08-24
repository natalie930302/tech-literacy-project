interface TimelineItemProps {
  title: string;
  time: string;
  tasks: {
    title: string;
    subtasks: (string | { subtask: string; subtasks: string[] })[];
  }[];
}
const TimelineItem: React.FC<TimelineItemProps> = ({ title, time, tasks }) => (
  <div className="timeline-item">
    <h4 className="title">{title || ""}</h4>
    <h5 className="time">{time || ""}</h5>
    <ol className="list-decimal list-outside flex flex-col space-y-4 pl-5">
      {tasks.map((task, index) => (
        <li key={index}>
          <h6 className="font-semibold">{task.title || ""}</h6>
          <ul className="list-disc list-outside flex flex-col space-y-2 pl-5">
            {task.subtasks.map((subtask, idx) =>
              typeof subtask === "string" ? (
                <li key={idx}>
                  <div className="text-denim-800">{subtask || ""}</div>
                </li>
              ) : (
                <li key={idx}>
                  <div className="text-denim-800">{subtask.subtask || ""}</div>
                  <ul className="list-disc list-outside pl-5">
                    {subtask.subtasks.map((sub, subIdx) => (
                      <li key={subIdx}>{sub || ""}</li>
                    ))}
                  </ul>
                </li>
              )
            )}
          </ul>
        </li>
      ))}
    </ol>
  </div>
);

export default TimelineItem;
