import { FaPlus, FaTrashAlt } from "react-icons/fa";
import uniqid from "uniqid";

const Project = (props) => {
  const component = "project";
  const handleClick = () => {
    props.setUserData((prevUser) => ({
      ...prevUser,
      project: [
        ...prevUser.project,
        {
          id: uniqid(),
          name: "",
          description: "",
        },
      ],
    }));
  };

  const listItems = props.userData.project.map((user, index) => {
    return (
      <div key={index} className="mb-4">
        <div className="flex justify-between">
          <h2 className="text-white">Project #{index}</h2>
          {props.userData.project.length > 1 ? <button
            className="btn btn-sm btn-outline hover:btn-error transition duration-300"
            onClick={() =>
              props.handleDeleteClick(
                props.userData.project[index].id,
                component
              )
            }
          >
            <FaTrashAlt />
          </button> : ""}
        </div>

        <input
          type="text"
          placeholder="Your name"
          name="name"
          onChange={(e) => props.handleChange(e, index, component)}
          value={user.name}
          className="rounded-md bg-slate-700 hover:bg-slate-600 transition duration-300 w-full mb-2 text-white"
        />

        <textarea
          rows="3"
          placeholder="Your description"
          name="description"
          onChange={(e) => props.handleChange(e, index, component)}
          value={user.description}
          className="rounded-md bg-slate-700 hover:bg-slate-600 transition duration-300 w-full mb-2 text-white"
        />
      </div>
    );
  });

  return (
    <div className="bg-slate-800 p-6 my-6 rounded-lg">
      <h2 className="text-white">Projects Completed</h2>
      {listItems}
      <button
        className="btn bg-sky-400 hover:bg-sky-600 transition duration-500 text-black"
        onClick={handleClick}
      >
        <FaPlus className="pr-1" />
        <span className="pl-2">New</span>
      </button>
    </div>
  );
};

export default Project;
