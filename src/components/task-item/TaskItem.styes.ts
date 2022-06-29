import styled from "styled-components";
import { ITaskItem } from "./TaskItem.types";

const statusColor = {
  backlog: "orange",
  todo: "green",
  inProgress: "blue",
  inReview: "purple",
  done: "red",
};

const handleStatusColor = (config: ITaskItem) => {
  return statusColor[config.status as keyof typeof statusColor];
};

const tagColor = {
  bug: "red",
  refactor: "blue",
  feature: "green",
  task: "orange",
};

const handleTagColor = (tag: string) => {
  return tagColor[tag as keyof typeof tagColor];
};

export const TaskItemContainer = styled.div`
  border-top: 10px solid ${(props: ITaskItem) => handleStatusColor(props)};
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: black;
  border-radius: 1rem;
  color: white;
  padding: 0 1rem 1rem 1rem;

  .header {
    padding: 1rem 0;
    width: 100%;

    .title {
      width: 100%;
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }
  }

  .main {
    display: flex;
    gap: 1rem;

    .content {
      flex: 0.6;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 1rem;

      .description {
        word-break: break-all;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
      }

      .tags {
        display: flex;
        align-items: center;
        gap: 1rem;
      }
    }

    .info {
      flex: 0.4;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      .info-item {
        display: flex;
        align-items: center;

        span {
          &:first-child {
            width: 7rem;
          }
        }
      }
    }
  }
`;

export const Tag = styled.div`
  background-color: ${(props: { tag: string }) => handleTagColor(props.tag)};
  padding: 0.2rem 0.5rem;
  border-radius: 0.5rem;
`;
