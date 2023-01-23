import { FaPlus, FaTrashAlt } from "react-icons/fa";
import uniqid from "uniqid";

const Experience = (props) => {
  const component = "experience";
  const handleClick = () => {
    props.setUserData((prevUser) => ({
      ...prevUser,
      experience: [
        ...prevUser.experience,
        {
          id: uniqid(),
          company: "",
          position: "",
          city: "",
          state: "",
          timeframe: "",
          description: "",
        },
      ],
    }));
  };

  const listItems = props.userData.experience.map((user, index) => {
    return (
      <div key={index} className="mb-4">
        <div className="flex justify-between">
          <h2 className="text-white">Work Experience #{index}</h2>
          {props.userData[component].length > 1 ? (
            <button
              className="btn btn-sm btn-outline hover:btn-error transition duration-300"
              onClick={() =>
                props.handleDeleteClick(
                  props.userData[component][index].id,
                  component
                )
              }
            >
              <FaTrashAlt />
            </button>
          ) : (
            ""
          )}
        </div>

        <input
          type="text"
          placeholder="Your company"
          name="company"
          onChange={(e) => props.handleChange(e, index, component)}
          value={user.company}
          className="rounded-md bg-slate-700 hover:bg-slate-600 transition duration-300 w-full mb-2 text-white"
        />

        <input
          type="text"
          placeholder="Your position"
          name="position"
          onChange={(e) => props.handleChange(e, index, component)}
          value={user.position}
          className="rounded-md bg-slate-700 hover:bg-slate-600 transition duration-300 w-full mb-2 text-white"
        />

        <input
          type="text"
          placeholder="Your city"
          name="city"
          onChange={(e) => props.handleChange(e, index, component)}
          value={user.city}
          className="rounded-md bg-slate-700 hover:bg-slate-600 transition duration-300 w-full mb-2 text-white"
        />

        <input
          type="text"
          placeholder="Your state"
          name="state"
          onChange={(e) => props.handleChange(e, index, component)}
          value={user.state}
          className="rounded-md bg-slate-700 hover:bg-slate-600 transition duration-300 w-full mb-2 text-white"
        />

        <input
          type="text"
          placeholder="Timeframe"
          name="timeframe"
          onChange={(e) => props.handleChange(e, index, component)}
          value={user.timeframe}
          className="rounded-md bg-slate-700 hover:bg-slate-600 transition duration-300 w-full mb-2 text-white"
        />

        <textarea
          rows={3}
          type="text"
          placeholder="Description of occupation"
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
      <h2 className="text-white">Practical Experience</h2>
      {listItems}
      <button className="btn bg-sky-400 hover:bg-sky-600 transition duration-500 text-black" onClick={handleClick}>
        <FaPlus className="pr-1" />
        <span className="pl-2">New</span>
      </button>
    </div>
  );
};

export default Experience;
