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
          placeholder="Your school"
          name="school"
          onChange={(e) => props.handleChange(e, index)}
          value={props.userData.education[index].school}
        />

        <input
          type="text"
          placeholder="Your degree"
          name="degree"
          onChange={(e) => props.handleChange(e, index)}
          value={user.degree}
        />

        <input
          type="text"
          placeholder="Your city"
          name="city"
          onChange={(e) => props.handleChange(e, index)}
          value={user.city}
        />

        <input
          type="text"
          placeholder="Your state"
          name="state"
          onChange={(e) => props.handleChange(e, index)}
          value={user.state}
        />

        <input
          type="text"
          placeholder="Your timeframe"
          name="timeframe"
          onChange={(e) => props.handleChange(e, index)}
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
