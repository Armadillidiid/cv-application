import { FaPlus, FaTrashAlt } from "react-icons/fa";
import uniqid from "uniqid";

const Education = (props) => {
  const component = "education"
  const handleClick = () => {
    props.setUserData((prevUser) => ({
      ...prevUser,
      education: [
        ...prevUser.education,
        {
          id: uniqid(),
          school: "",
          degree: "",
          city: "",
          state: "",
          timeframe: "",
        },
      ],
    }));
  };

  const listItems = props.userData.education.map((user, index) => {
    console.log(props.userData.education[index]);
    return (
      <div key={index} className="mb-4">
        <div className="flex justify-between align-middle">
          <h2 className="text-white">University/School #{index}</h2>
          {props.userData.education.length > 1 ? (
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
          placeholder="Your school"
          name="school"
          onChange={(e) => props.handleChange(e, index, "education")}
          value={props.userData.education[index].school}
          className="rounded-md bg-slate-700 hover:bg-slate-600 transition duration-300 w-full mb-2 text-white"
        />

        <input
          type="text"
          placeholder="Your degree"
          name="degree"
          onChange={(e) => props.handleChange(e, index, "education")}
          value={user.degree}
          className="rounded-md bg-slate-700 hover:bg-slate-600 transition duration-300 w-full mb-2 text-white"
        />

        <input
          type="text"
          placeholder="Your city"
          name="city"
          onChange={(e) => props.handleChange(e, index, "education")}
          value={user.city}
          className="rounded-md bg-slate-700 hover:bg-slate-600 transition duration-300 w-full mb-2 text-white"
        />

        <input
          type="text"
          placeholder="Your state"
          name="state"
          onChange={(e) => props.handleChange(e, index, "education")}
          value={user.state}
          className="rounded-md bg-slate-700 hover:bg-slate-600 transition duration-300 w-full mb-2 text-white"
        />

        <input
          type="text"
          placeholder="Timeframe"
          name="timeframe"
          onChange={(e) => props.handleChange(e, index, "education")}
          value={user.timeframe}
          className="rounded-md bg-slate-700 hover:bg-slate-600 transition duration-300 w-full mb-2 text-white"
        />
      </div>
    );
  });

  return (
    <div className="bg-slate-800 p-6 my-6 rounded-lg">
      <h2 className="text-white">Education</h2>
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

export default Education;
