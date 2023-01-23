const Preview = ({ userData }) => {
  const educationList = userData.education.map((user, index) => {
    return (
      <div className="flex flex-col mt-3" key={index}>
        <h4 className="capitalize text-xxs font-semibold">{user.school}</h4>
        <div className="flex">
          <span className="text-xxs">{user.timeframe}</span>
          <span className="px-1 text-xxs">|</span>
          <span className="text-xxs">
            {user.city}, {user.state}
          </span>
        </div>
        <span className="text-xxs capitalize mt-0">{user.degree}</span>
      </div>
    );
  });

  const skillList = userData.skill.map((user, index) => {
    return (
      <li className="text-xxs mb-1" key={index}>
        {user.name}
      </li>
    );
  });

  const projectList = userData.project.map((user, index) => {
    return (
      <div className="flex flex-col mt-3" key={index}>
            <h4 className="capitalize text-xxs font-semibold">{user.name}</h4>
            <p className="text-xxs">{user.description}</p>

      </div>
    )
  })

  const experienceList = userData.experience.map((user, index) => {
    return (
      <div className="flex flex-col mt-3" key={index}>
        <h4 className="capitalize text-xxs font-semibold">{user.company}</h4>
        <div className="flex text-xxs mb-1">
          <span>{user.timeframe}</span>
          <span className="px-1">|</span>
          <span>
            {user.city}, {user.state}
          </span>
        </div>
        <p className="text-xxs">{user.description}</p>
      </div>
    );
  });

  return (
    <div className="bg-white p-10 my-6 sticky top-6 overflow-y-scroll w-[618px] max-h-[95vh] width-20 rounded-lg lg:scale-75 xl:scale-90 2xl:scale-100">
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold mb-0">
          {userData.firstName} {userData.lastName}
        </h2>
        <span className="uppercase text-xs font-semibold  text-black">
          {userData.title}
        </span>
        <div className="text-black text-xxs font-light">
          <span>{userData.email}</span>
          <b className="font-normal px-2">|</b>
          <span>{userData.phoneNumber}</span>
        </div>
        <div className="mt-4 text-black text-xxs font-light">
          <p>{userData.bio}</p>
        </div>
        <div className="grid grid-cols-5 gap-5 mt-4">
          <div className="col-span-2">
            <div className="flex flex-col text-black">
              {userData.education[0] && (
                <h3 className="text-black uppercase text-sm font-semibold mb-0">
                  Education
                </h3>
              )}
              {educationList}
            </div>
            <div className="flex flex-col text-black">
              {userData.skill[0] && (
                <h3 className="text-sm uppercase font-semibold mb-3 mt-4">
                  Skills
                </h3>
              )}
              <div className="flex flex-col ">
                <ul className="list-disc list-inside">{skillList}</ul>
              </div>
            </div>
          </div>
          <div className="col-span-3">
            <div className="flex flex-col text-black">
              <h3 className="uppercase text-sm font-semibold mb-0">
                Experience
              </h3>
              {experienceList}
            </div>
            <div className="flex flex-col text-black">
              <h3 className="text-sm uppercase font-semibold mt-4">Projects</h3>
              {projectList}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
