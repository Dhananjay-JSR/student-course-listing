import express from "express";
import asyncLock from "async-lock";
const App = express();
const mockData = [
  {
    id: 1,
    name: "Introduction to React Native",
    instructor: "John Doe",
    description:
      "Learn the basics of React Native development and build your first mobile app.",
    enrollmentStatus: "Open",
    thumbnail: "your.image.here",
    duration: "8 weeks",
    schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: [
      "Basic JavaScript knowledge",
      "Familiarity with React",
      "Knowledge of mobile development",
    ],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to React Native",
        content:
          "Overview of React Native, setting up your development environment.",
      },
      {
        week: 2,
        topic: "Building Your First App",
        content: "Creating a simple mobile app using React Native components.",
      },
      {
        week: 3,
        topic: "Navigation in React Native",
        content: "Understanding navigation options in React Native.",
      },
      {
        week: 4,
        topic: "State Management",
        content: "Managing state in React Native applications.",
      },
      {
        week: 5,
        topic: "Advanced UI Components",
        content: "Exploring advanced UI components in React Native.",
      },
    ],
    students: [
      {
        id: 101,
        name: "Alice Johnson",
        email: "alice@example.com",
      },
      {
        id: 102,
        name: "Bob Smith",
        email: "bob@example.com",
      },
      {
        id: 103,
        name: "Charlie Brown",
        email: "charlie@example.com",
      },
      {
        id: 104,
        name: "Diana Miller",
        email: "diana@example.com",
      },
    ],
  },
  {
    id: 2,
    name: "Advanced Python Programming",
    instructor: "Sarah Lee",
    description:
      "Dive deep into advanced Python concepts and programming techniques.",
    enrollmentStatus: "Closed",
    thumbnail: "your.python.image",
    duration: "12 weeks",
    schedule: "Mondays and Wednesdays, 7:00 PM - 9:00 PM",
    location: "Onsite",
    prerequisites: [
      "Intermediate Python skills",
      "Knowledge of data structures",
      "Understanding of algorithms",
    ],
    syllabus: [
      {
        week: 1,
        topic: "Python Decorators",
        content: "Understanding and implementing decorators in Python.",
      },
      {
        week: 2,
        topic: "Concurrency with Python",
        content: "Exploring concurrent programming using Python.",
      },
      {
        week: 3,
        topic: "Advanced Data Structures",
        content:
          "Deep dive into advanced data structure implementations in Python.",
      },
    ],
    students: [
      {
        id: 201,
        name: "Charlie Brown",
        email: "charlie@example.com",
      },
      {
        id: 202,
        name: "Diana Miller",
        email: "diana@example.com",
      },
      {
        id: 203,
        name: "Eva White",
        email: "eva@example.com",
      },
    ],
  },
  {
    id: 3,
    name: "Data Science Fundamentals",
    instructor: "Alex Rodriguez",
    description:
      "An introduction to the world of data science and its fundamental concepts.",
    enrollmentStatus: "Open",
    thumbnail: "your.datascience.image",
    duration: "10 weeks",
    schedule: "Tuesdays and Thursdays, 5:00 PM - 7:00 PM",
    location: "Online",
    prerequisites: [
      "Basic programming knowledge",
      "Understanding of statistics",
      "Experience with a programming language",
    ],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Data Science",
        content: "Overview of data science and its applications.",
      },
      {
        week: 2,
        topic: "Data Cleaning and Preprocessing",
        content: "Techniques for cleaning and preprocessing raw data.",
      },
      {
        week: 3,
        topic: "Exploratory Data Analysis (EDA)",
        content: "Analyzing and visualizing data for insights.",
      },
      {
        week: 4,
        topic: "Machine Learning Basics",
        content: "Introduction to machine learning algorithms.",
      },
    ],
    students: [
      {
        id: 301,
        name: "Eva White",
        email: "eva@example.com",
      },
      {
        id: 302,
        name: "Frank Adams",
        email: "frank@example.com",
      },
      {
        id: 303,
        name: "George Brown",
        email: "george@example.com",
      },
    ],
  },
  {
    id: 4,
    name: "Mobile App Design Workshop",
    instructor: "Lisa Smith",
    description:
      "Hands-on workshop to learn mobile app design principles and tools.",
    enrollmentStatus: "InProgress",
    thumbnail: "your.mobileappdesign.image",
    duration: "6 weeks",
    schedule: "Fridays, 4:00 PM - 6:00 PM",
    location: "Onsite",
    prerequisites: [
      "Basic design skills",
      "Familiarity with design software",
      "Interest in user experience (UX)",
    ],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Mobile App Design",
        content: "Understanding the principles of mobile app design.",
      },
      {
        week: 2,
        topic: "User Interface (UI) Design",
        content: "Creating visually appealing user interfaces for mobile apps.",
      },
    ],
    students: [
      {
        id: 401,
        name: "George Brown",
        email: "george@example.com",
      },
      {
        id: 402,
        name: "Helen Taylor",
        email: "helen@example.com",
      },
      {
        id: 403,
        name: "Ivy Johnson",
        email: "ivy@example.com",
      },
      {
        id: 404,
        name: "Jack Miller",
        email: "jack@example.com",
      },
    ],
  },
  {
    id: 5,
    name: "Machine Learning Basics",
    instructor: "Michael Brown",
    description:
      "An introductory course to machine learning algorithms and concepts.",
    enrollmentStatus: "Open",
    thumbnail: "your.machinelearning.image",
    duration: "8 weeks",
    schedule: "Mondays and Wednesdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: [
      "Basic programming knowledge",
      "Understanding of linear algebra",
      "Interest in data analysis",
    ],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Machine Learning",
        content: "Overview of machine learning and its applications.",
      },
      {
        week: 2,
        topic: "Supervised Learning",
        content:
          "Understanding and implementing supervised learning algorithms.",
      },
      {
        week: 3,
        topic: "Unsupervised Learning",
        content: "Exploring unsupervised learning techniques.",
      },
    ],
    students: [
      {
        id: 501,
        name: "Ivy Johnson",
        email: "ivy@example.com",
      },
      {
        id: 502,
        name: "Jack Miller",
        email: "jack@example.com",
      },
      {
        id: 503,
        name: "Kevin Adams",
        email: "kevin@example.com",
      },
    ],
  },
  {
    id: 6,
    name: "JavaScript Frameworks Masterclass",
    instructor: "Emma Wilson",
    description:
      "Deep dive into popular JavaScript frameworks like React, Angular, and Vue.",
    enrollmentStatus: "Closed",
    thumbnail: "your.jsframeworks.image",
    duration: "10 weeks",
    schedule: "Thursdays, 7:00 PM - 9:00 PM",
    location: "Onsite",
    prerequisites: [
      "Intermediate JavaScript knowledge",
      "Understanding of HTML/CSS",
      "Experience with web development",
    ],
    syllabus: [
      {
        week: 1,
        topic: "React Basics",
        content: "Introduction to React and its fundamental concepts.",
      },
      {
        week: 2,
        topic: "Angular Essentials",
        content: "Exploring key concepts in the Angular framework.",
      },
      {
        week: 3,
        topic: "Vue.js Fundamentals",
        content: "Understanding the basics of Vue.js.",
      },
      {
        week: 4,
        topic: "Building SPA with React Router",
        content: "Creating single-page applications with React Router.",
      },
    ],
    students: [
      {
        id: 601,
        name: "Kevin Adams",
        email: "kevin@example.com",
      },
      {
        id: 602,
        name: "Laura White",
        email: "laura@example.com",
      },
      {
        id: 603,
        name: "Mia Turner",
        email: "mia@example.com",
      },
    ],
  },
  {
    id: 7,
    name: "Cybersecurity Fundamentals",
    instructor: "Ryan Johnson",
    description:
      "Learn the basics of cybersecurity, including threat detection and prevention.",
    enrollmentStatus: "InProgress",
    thumbnail: "your.cybersecurity.image",
    duration: "6 weeks",
    schedule: "Tuesdays, 5:30 PM - 7:30 PM",
    location: "Online",
    prerequisites: [
      "Basic IT knowledge",
      "Familiarity with networking",
      "Interest in cybersecurity",
    ],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Cybersecurity",
        content:
          "Overview of cybersecurity, common threats, and security measures.",
      },
      {
        week: 2,
        topic: "Network Security",
        content: "Understanding and implementing network security protocols.",
      },
      {
        week: 3,
        topic: "Ethical Hacking Techniques",
        content: "Exploring ethical hacking techniques and tools.",
      },
    ],
    students: [
      {
        id: 701,
        name: "Natalie Evans",
        email: "natalie@example.com",
      },
      {
        id: 702,
        name: "Oscar Ramirez",
        email: "oscar@example.com",
      },
      {
        id: 703,
        name: "Penelope Brown",
        email: "penelope@example.com",
      },
    ],
  },
  {
    id: 8,
    name: "Artificial Intelligence Applications",
    instructor: "Sophia Lee",
    description:
      "Explore practical applications of artificial intelligence in various industries.",
    enrollmentStatus: "Open",
    thumbnail: "your.aiapplications.image",
    duration: "12 weeks",
    schedule: "Fridays, 6:00 PM - 8:00 PM",
    location: "Onsite",
    prerequisites: [
      "Basic understanding of machine learning",
      "Programming skills in Python",
      "Interest in AI applications",
    ],
    syllabus: [
      {
        week: 1,
        topic: "Overview of AI Applications",
        content:
          "Introduction to real-world applications of artificial intelligence.",
      },
      {
        week: 2,
        topic: "Natural Language Processing (NLP)",
        content:
          "Exploring NLP and its applications in language understanding.",
      },
      {
        week: 3,
        topic: "Computer Vision Applications",
        content: "Understanding applications of computer vision in AI.",
      },
    ],
    students: [
      {
        id: 801,
        name: "Peter Turner",
        email: "peter@example.com",
      },
      {
        id: 802,
        name: "Quinn Carter",
        email: "quinn@example.com",
      },
      {
        id: 803,
        name: "Rebecca Moore",
        email: "rebecca@example.com",
      },
      {
        id: 804,
        name: "Simon White",
        email: "simon@example.com",
      },
    ],
  },
  {
    id: 9,
    name: "Digital Marketing Essentials",
    instructor: "Olivia Moore",
    description:
      "Learn the fundamentals of digital marketing and strategies for online success.",
    enrollmentStatus: "Closed",
    thumbnail: "your.digitalmarketing.image",
    duration: "8 weeks",
    schedule: "Wednesdays, 6:30 PM - 8:30 PM",
    location: "Online",
    prerequisites: [
      "Basic understanding of marketing principles",
      "Familiarity with social media",
      "Experience in content creation",
    ],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Digital Marketing",
        content: "Overview of digital marketing channels and strategies.",
      },
      {
        week: 2,
        topic: "Search Engine Optimization (SEO)",
        content:
          "Understanding and implementing SEO techniques for online visibility.",
      },
      {
        week: 3,
        topic: "Social Media Marketing",
        content: "Strategies for effective social media marketing.",
      },
      {
        week: 4,
        topic: "Email Marketing",
        content: "Creating successful email marketing campaigns.",
      },
      // Randomized additional syllabus entries...
    ],
    students: [
      {
        id: 901,
        name: "Rachel Turner",
        email: "rachel@example.com",
      },
      {
        id: 902,
        name: "Samuel Wilson",
        email: "samuel@example.com",
      },
      {
        id: 903,
        name: "Hannah Adams",
        email: "hannah@example.com",
      },
      {
        id: 904,
        name: "Isaac White",
        email: "isaac@example.com",
      },
      // Randomized additional student entries...
    ],
  },
  {
    id: 10,
    name: "Blockchain Technology Workshop",
    instructor: "Ethan Martinez",
    description:
      "Explore the fundamentals of blockchain technology and its practical applications.",
    enrollmentStatus: "Open",
    thumbnail: "your.blockchain.image",
    duration: "6 weeks",
    schedule: "Thursdays, 7:30 PM - 9:30 PM",
    location: "Onsite",
    prerequisites: [
      "Basic understanding of cryptography",
      "Programming skills in a language like JavaScript",
      "Familiarity with distributed systems",
    ],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Blockchain",
        content: "Overview of blockchain technology and its core components.",
      },
      {
        week: 2,
        topic: "Smart Contracts",
        content:
          "Understanding and creating smart contracts using blockchain platforms.",
      },
      {
        week: 3,
        topic: "Decentralized Applications (DApps)",
        content: "Building decentralized applications on blockchain.",
      },
      // Randomized additional syllabus entries...
    ],
    students: [
      {
        id: 1001,
        name: "Tina Rodriguez",
        email: "tina@example.com",
      },
      {
        id: 1002,
        name: "Victor Adams",
        email: "victor@example.com",
      },
      {
        id: 1003,
        name: "Zoe Turner",
        email: "zoe@example.com",
      },
      {
        id: 1004,
        name: "William Brown",
        email: "william@example.com",
      },
      // Randomized additional student entries...
    ],
  },
];

let DataStore = mockData.map((d) => {
  return {
    ...d,
    likes: 0,
  };
});

const lock = new asyncLock();

App.get("/", (req, res) => {
  res.json(DataStore);
});

async function AddLike(id: number) {
  await lock.acquire("DataStore", async () => {
    DataStore = DataStore.map((d) => {
      if (d.id === id) {
        return {
          ...d,
          likes: d.likes + 1,
        };
      }
      return d;
    });
  });
}

App.post("/like/:id", async (req, res) => {
  AddLike(parseInt(req.params.id));
  res.send("Liked");
});

App.listen(4000, () => {
  console.log("Server is running on port 4000");
});
