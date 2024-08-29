interface TimelineItemProps {
  title: string;
  duration: string;
  description: string;
}
const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  duration,
  description,
}) => (
  <div className="timeline-item">
    <h4 className="title">{title}</h4>
    <h5 className="time">{duration}</h5>
    <div dangerouslySetInnerHTML={{ __html: description }} />
  </div>
);

export default TimelineItem;
