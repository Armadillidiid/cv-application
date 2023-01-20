import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import uniqid from "uniqid";

const Skill = (props) => {
  const component = "skill";
  const exampleSkillList = [
    'Javascript',
    'React',
    'Next.js',
    'PostgreSQL',
    'Redux',
    'Tailwind',
    'Express.js',
    'MongoDB',
    'Bash',
    'Git'
  ]
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
      <div key={index}>
        <div className="flex justify-between">
          <input
            type="text"
            placeholder={exampleSkillList[index]}
            name="name"
            onChange={(e) => props.handleChange(e, index, component)}
            value={user.name}
          />
          

          <button
            className="btn btn-error"
            onClick={() =>
              props.handleDeleteClick(
                props.userData[component][index].id,
                component
              )
            }
          >
            <FaTrashAlt />
          </button>
        </div>
      </div>
    );
  });

  return (
    <>
      <h2>Skills && Frameworks</h2>
      {listItems}
      <button className="btn btn-info" onClick={handleClick}>
        <FaPencilAlt className="pr-1" />
        New
      </button>
    </>
  );
};

export default Skill;
