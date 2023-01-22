import { FaPlus, FaTrashAlt } from "react-icons/fa";
import uniqid from "uniqid";

const Skill = (props) => {
  const component = "skill";
  const exampleSkillList = [
    "Javascript",
    "React",
    "Next.js",
    "PostgreSQL",
    "Redux",
    "Tailwind",
    "Express.js",
    "MongoDB",
    "Bash",
    "Git",
  ];
  const handleClick = () => {
    props.setUserData((prevUser) => ({
      ...prevUser,
      skill: [
        ...prevUser.skill,
        {
          id: uniqid(),
          name: "",
        },
      ],
    }));
  };

  const listItems = props.userData[component].map((user, index) => {
    return (
      <div key={index} className="">
        <div className="flex justify-between gap-2">
          <input
            type="text"
            placeholder={exampleSkillList[index]}
            name="name"
            onChange={(e) => props.handleChange(e, index, component)}
            value={user.name}
            className="rounded-md bg-slate-700 hover:bg-slate-600 transition duration-300 w-full mb-2 text-white"
          />

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
      </div>
    );
  });

  return (
    <div className="bg-slate-800 p-6 my-6 rounded-lg">
      <h2 className="text-white">Skills && Frameworks</h2>
      {listItems}
      <button
        className="btn mt-4 bg-sky-400 hover:bg-sky-600 transition duration-500 text-black"
        onClick={handleClick}
      >
        <FaPlus className="pr-1" />
        <span className="pl-2">New</span>
      </button>
    </div>
  );
};

export default Skill;
