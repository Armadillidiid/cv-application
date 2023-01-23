import uniqid from "uniqid";

const useAutofill = (setUserData) => {
  setUserData((prevState) => ({
    firstName: "Richard",
    lastName: "Stallman",
    title: "Software Developer",
    email: "richardstallman@gmail.com",
    phoneNumber: "+(1)-710-239-9011",
    website: "richiemillie.com",
    bio: "I provided technical leadership for complex projects. I used the latest technologies such as Cloud Service, Visual Studio 2019 and Azure DevOps. I gained experience with data technologies such as SQL Servers, NoSQL databases, full text search engines and caching. My daily work consisted mostly of maintaining full project life-cycle tasks including testing, debugging, technical analysis, design and coding.",
    education: [
      {
        id: uniqid(),
        school: "Harvard University",
        degree: "Computer Science",
        city: "Cambridge",
        state: "Massachusetts",
        timeframe: "1970-1974",
      },
      {
        id: uniqid(),
        school: "Rivers State University",
        degree: "Electrical Engineering",
        city: "Port Harcourt",
        state: "Rivers",
        timeframe: "2018-2023",
      },
    ],
    experience: [
      {
        id: uniqid(),
        company: "Massachusetts Institute of Technology",
        position: "Research assistant",
        city: "Cambrridge",
        state: "Massachusetts",
        timeframe: "1975-1984",
        description:
          "I provided technical leadership for complex projects. I used the latest technologies such as Cloud Service, Visual Studio 2019 and Azure DevOps. I gained experience with data technologies such as SQL Servers, NoSQL databases, full text search engines and caching. My daily work consisted mostly of maintaining full project life-cycle tasks including testing, debugging, technical analysis, design and coding.",
      },
    ],
    project: [
      {
        id: uniqid(),
        name: "GNU Project",
        description:
          "As the founder of the GNU project, I have dedicated my career to the promotion of software freedom. I began the project in 1983 with the goal of creating a free and open-source operating system. To that end, I developed the GNU Compiler Collection (GCC), which is widely used as the default compiler on many Unix-like operating systems. Throughout my career, I have continuously advocated for the use and development of free and open-source software, and have been a vocal critic of proprietary software and the concept of software ownership.",
      },
      {
        id: uniqid(),
        name: "GNU Compiler Collection",
        description:
          "I developed the GNU C Library (glibc) as part of the GNU project. It is a collection of common system functions that are used by many Unix-like operating systems. glibc provides the interface between the Linux kernel and user programs, and includes functions for basic input/output operations, memory management, string manipulation, and other common system tasks. It is widely used and considered as an essential component of Linux system.",
      },
    ],
    skill: [
      {
        id: uniqid(),
        name: "C",
      },
      {
        id: uniqid(),
        name: "C++",
      },
      {
        id: uniqid(),
        name: "Lisp",
      },
      {
        id: uniqid(),
        name: "Rust",
      },
      {
        id: uniqid(),
        name: "Python",
      },
      {
        id: uniqid(),
        name: "Assembly"
      },
      {
        id: uniqid(),
        name: "Git"
      },
      {
        id: uniqid(),
        name: "Linux"
      }
    ],
  }));
};

export default useAutofill;
