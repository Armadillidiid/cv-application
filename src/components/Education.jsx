import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import uniqid from "uniqid";

const Education = (props) => {
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

  const handleDeleteClick = (id) => {
    props.setUserData(prevUser => {
      const prevUserCopy = {...prevUser}
      prevUserCopy.education = prevUserCopy.education.filter(education => education.id !== id)
      return(prevUserCopy)
    })
  }

  const listItems = props.userData.education.map((user, index) => {
    console.log(props.userData.education[index]);
    return (
      <div key={index}>
        <div className="flex justify-between">
          <h2>University/School #{index}</h2>
          <button className="btn btn-error" onClick={() => handleDeleteClick(props.userData.education[index].id)}>
            <FaTrashAlt />
          </button>
        </div>
        <input
          type="text"
          index={index}
          placeholder="Your school"
          name="school"
          onChange={props.handleChange}
          value={props.userData.education[index].school}
        />

        <input
          type="text"
          index={index}
          placeholder="Your degree"
          name="degree"
          onChange={props.handleChange}
          value={user.degree}
        />

        <input
          type="text"
          index={index}
          placeholder="Your city"
          name="city"
          onChange={props.handleChange}
          value={user.city}
        />

        <input
          type="text"
          index={index}
          placeholder="Your state"
          name="state"
          onChange={props.handleChange}
          value={user.state}
        />

        <input
          type="text"
          index={index}
          placeholder="Your timeframe"
          name="timeframe"
          onChange={props.handleChange}
          value={user.timeframe}
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

export default Education;
