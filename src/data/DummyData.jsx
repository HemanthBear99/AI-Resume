export default {
  firstName: "John",
  lastName: "Doe",
  jobTitle: "Software Engineer",
  address: "1234 Elm Street, Springfield, IL 62704",
  phone: "(987)-654-3210",
  email: "john.doe@example.com",
  themeColor: "#3498db",
  summary:
    "Passionate software engineer with over 5 years of experience in developing scalable web applications. Skilled in various programming languages and frameworks. Adept at problem-solving and delivering high-quality software solutions.",
  experience: [
    {
      id: 1,
      title: "Software Engineer",
      companyName: "Microsoft",
      city: "Redmond",
      state: "WA",
      startDate: "Feb 2020",
      endDate: "",
      currentlyWorking: true,
      workSummary:
        "Developed and maintained web applications using C# and .NET Core.\n" +
        "• Collaborated with cross-functional teams to define, design, and ship new features.\n" +
        "• Improved application performance and scalability by optimizing code and database queries.\n" +
        "• Mentored junior developers and conducted code reviews to ensure high-quality code.",
    },
    {
      id: 2,
      title: "Backend Developer",
      companyName: "Facebook",
      city: "Menlo Park",
      state: "CA",
      startDate: "Jul 2017",
      endDate: "Jan 2020",
      currentlyWorking: false,
      workSummary:
        "Designed and implemented RESTful APIs using Node.js and Express.\n" +
        "• Integrated third-party services and APIs to enhance application functionality.\n" +
        "• Ensured data integrity and security by implementing robust authentication and authorization mechanisms.\n" +
        "• Participated in agile development processes and contributed to sprint planning and retrospectives.",
    },
  ],
  education: [
    {
      id: 1,
      universityName: "Stanford University",
      startDate: "Sep 2015",
      endDate: "Jun 2017",
      degree: "Master of Science",
      major: "Computer Science",
      description:
        "Focused on advanced algorithms, machine learning, and distributed systems. Conducted research on deep learning techniques and their applications in natural language processing.",
    },
    {
      id: 2,
      universityName: "University of California, Berkeley",
      startDate: "Sep 2011",
      endDate: "May 2015",
      degree: "Bachelor of Science",
      major: "Electrical Engineering and Computer Science",
      description:
        "Studied a broad range of topics including software engineering, computer architecture, and signal processing. Completed several projects on embedded systems and IoT devices.",
    },
  ],
  skills: [
    {
      id: 1,
      name: "Python",
      rating: 95,
    },
    {
      id: 2,
      name: "Java",
      rating: 90,
    },
    {
      id: 3,
      name: "C#",
      rating: 85,
    },
    {
      id: 4,
      name: "JavaScript",
      rating: 100,
    },
    {
      id: 5,
      name: "Node.js",
      rating: 90,
    },
    {
      id: 6,
      name: "Docker",
      rating: 80,
    },
  ],
}
