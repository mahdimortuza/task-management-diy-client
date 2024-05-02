interface TaskId {
  params: {
    taskId: string;
  };
}

const TaskDescriptionPage = async ({ params }: TaskId) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/tasks/${params.taskId}`
  );
  const task = await res.json();

  const { title, description, status } = task.result;
  console.log(title);
  return (
    <div className="container mx-auto py-8">
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <div className="mb-4">
          <h1 className="text-2xl font-semibold mt-2">Detail of {title}</h1>
        </div>
        <div>
          <div className="mb-4">
            <h2 className="text-lg font-semibold">{title}</h2>
            <div>
              <p className="text-gray-700 font-semibold">Status: {status}</p>
            </div>
            <p className="text-gray-600">Description: {description}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-gray-700 font-semibold">Deadline:</p>
              <p>June 15, 2024</p>
            </div>
            <div>
              <p className="text-gray-700 font-semibold">Team Members:</p>
              <p>John Doe, Jane Smith</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDescriptionPage;
