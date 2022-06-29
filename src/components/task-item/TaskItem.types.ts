export interface ITaskItem {
  id: string;
  createdAt: string;
  createdBy: string;
  assignedTo: string;
  title: string;
  description: string;
  priority: number;
  status: string;
  tags: string[];
}
