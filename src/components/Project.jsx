import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
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
    console.log(props.userData[component][index]);
    return (
      <div key={index}>
        <div className="flex justify-between">
          <h2>Project #{index}</h2>
          <button
            className="btn btn-error"
            onClick={() =>
              props.handleDeleteClick(
                props.userData.project[index].id,
                component
              )
            }
          >
            <FaTrashAlt />
          </button>
        </div>

        <input
          type="text"
          placeholder="Your name"
          name="name"
          onChange={(e) => props.handleChange(e, index, component)}
          value={user.name}
        />

        <input
          type="text"
          placeholder="Your description"
          name="description"
          onChange={(e) => props.handleChange(e, index, component)}
          value={user.description}
        />
      </div>
    );
  });

  return (
    <>
      <h2>Projects Completed</h2>
      {listItems}
      <button className="btn btn-info" onClick={handleClick}>
        <FaPencilAlt className="pr-1" />
        New
      </button>
    </>
  );
};

export default Project;
