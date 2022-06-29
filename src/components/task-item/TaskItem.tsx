import { Tag, TaskItemContainer } from "./TaskItem.styes";
import { ITaskItem } from "./TaskItem.types";

const TaskItem = (props: ITaskItem) => {
  const {
    id,
    createdAt,
    createdBy,
    assignedTo,
    title,
    description,
    priority,
    status,
    tags,
  } = props;
  return (
    <TaskItemContainer {...props}>
      <div className="header">
        <h2 className="title">{title}</h2>
      </div>

      <div className="main">
        <div className="content">
          <div className="description">{description}</div>
          <div className="tags">
            {tags.map((tag) => (
              <Tag key={tag} tag={tag} className="tag">
                {tag}
              </Tag>
            ))}
          </div>
        </div>

        <div className="info">
          <div className="info-item assigned-to">
            <span>assigned to:</span>
            <span>{assignedTo}</span>
          </div>
          <div className="info-item created-by">
            <span>created by:</span>
            <span>{createdBy}</span>
          </div>
          <div className="info-item priority">
            <span>priority:</span>
            <span>{priority}</span>
          </div>
          <div className="info-item created-at">
            <span>created at:</span>
            <span>{createdAt}</span>
          </div>
        </div>
      </div>
    </TaskItemContainer>
  );
};

export default TaskItem;
