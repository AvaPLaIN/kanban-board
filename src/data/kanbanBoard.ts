export const kanbanConfig = {
  areas: [
    {
      id: "123",
      title: "Backlog",
      items: [
        {
          id: "kanbanBoard1",
          createdAt: "1656520881",
          createdBy: "ava",
          assignedTo: "karl",
          title: "First Title Test",
          description: "first desc ever",
          priority: 2,
          status: "todo",
          tags: ["bug", "refactor"],
        },
        {
          id: "kanbanBoard2",
          createdAt: "1656520882",
          createdBy: "olaf",
          assignedTo: "ava",
          title: "Second Title Test",
          description: "seconda descri ever",
          priority: 3,
          status: "done",
          tags: ["task"],
        },
      ],
    },
    {
      id: "1234",
      title: "To Do",
      items: [
        {
          id: "kanbanBoard3",
          createdAt: "1656520883",
          createdBy: "hans",
          assignedTo: "robi",
          title: "Thrid Title Test",
          description: "thridooo descii ever",
          priority: 4,
          status: "done",
          tags: ["task", "feature"],
        },
      ],
    },
  ],
};
