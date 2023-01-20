import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
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
    console.log(props.userData[component][index]);
    return (
      <div key={index}>
        <div className="flex justify-between">
          <h2>Work Experience #{index}</h2>
          <button
            className="btn btn-error"
            onClick={() =>
              props.handleDeleteClick(
                props.userData.experience[index].id,
                component
              )
            }
          >
            <FaTrashAlt />
          </button>
        </div>
        <input
          type="text"
          placeholder="Your company"
          name="company"
          onChange={(e) => props.handleChange(e, index, component)}
          value={user.company}
        />

        <input
          type="text"
          placeholder="Your position"
          name="position"
          onChange={(e) => props.handleChange(e, index, component)}
          value={user.position}
        />

        <input
          type="text"
          placeholder="Your city"
          name="city"
          onChange={(e) => props.handleChange(e, index, component)}
          value={user.city}
        />

        <input
          type="text"
          placeholder="Your state"
          name="state"
          onChange={(e) => props.handleChange(e, index, component)}
          value={user.state}
        />

        <input
          type="text"
          placeholder="Your timeframe"
          name="timeframe"
          onChange={(e) => props.handleChange(e, index, component)}
          value={user.timeframe}
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
      <h2>Education</h2>
      {listItems}
      <button className="btn btn-info" onClick={handleClick}>
        <FaPencilAlt className="pr-1" />
        New
      </button>
    </>
  );
};

export default Experience;
