import Link from "next/link";

export type TTaskProps = {
  id: string;
  title: string;
  status: string;
  description: string;
};
const Task = ({ data }: { data: TTaskProps }) => {
  const { title, status, description, id: taskId } = data;
  // console.log(taskId);
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <h3 className="text-lg font-semibold mb-2"> {title}</h3>

      <p className="text-sm text-gray-700 mb-4"> {description}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div
            className={`w-4 h-4 ${status === "Todo" ? "bg-orange-500" : ""} ${
              status === "In Progress" ? "bg-[#008080]" : ""
            }
            ${status === "Done" ? "bg-blue-500" : ""}
             rounded-full mr-2`}
          ></div>
          <p className="text-xs text-gray-600">{status}</p>
        </div>
      </div>
      <div className="flex justify-between mt-3">
        <div className="flex gap-2">
          <button className="border px-2 py-1 rounded text-xs text-gray-500 hover:text-gray-700">
            Edit
          </button>
          <Link href={`/${taskId}`}>
            <button className="border px-2 py-1 rounded text-xs text-gray-500 hover:text-gray-700">
              View
            </button>
          </Link>
        </div>
        <button className="border px-2 py-1 rounded text-xs text-red-500 hover:text-red-700">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Task;
