import React from "react";

const projects = [
  {
    name: "Stock Exchange",
    description: "In this project, I had to implement an API that tracked the prices of stocks. Additionally, I implemented a web application that allows users to buy and sell stocks, a login and registration system that stores user passwords securely, a 'quote' feature that allows users to get the latest stock price for a given stock symbol, a 'history' feature that shows a user's transaction history, and a 'cash' feature that allows users to add or withdraw funds from their account.",
    githubLink: "https://github.com/Agent-Cr0wn/Projects/tree/main/finance"
  },
  {
    name: "SQL Queries",
    description: "In this project called Fiftyville, I used SQL queries to solve a mystery. I had access to a SQLite database and used SQL SELECT queries to access the data I needed. I kept a log of all SQL queries that I ran on the database and added comments above each query describing my thought process. Once I solved the mystery, I completed each of the lines in a text file with the name of the thief, the city that the thief escaped to, and the name of the thief’s accomplice who helped them escape town.",
    githubLink: "https://github.com/Agent-Cr0wn/Projects/tree/main/fiftyville"
  },
  {
    name: "Github repository",
    description: "Here is more projects that I had to complete for one of my computer science courses called CS50.",
    githubLink: "https://github.com/Agent-Cr0wn/Projects"
  }
];

const Projects = () => {
  return (
    <div id="Projects" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240] m-auto gap-8 justify-center">
        <div className="text-center">
          <p className="text-4xl font-extrabold tracking-widest text-orange-300">
            Projects
          </p>
          {projects.map(project => (
            <div key={project.name} className="py-4">
              <h3 className="text-[#0981bd] font-extrabold text-2xl">
                {project.name}
              </h3>
              <p className="font-bold tracking-widest text-center text-white py-2 max-w-6xl">
                {project.description}
              </p>
              <a
                href={project.githubLink}
                target="_blank" rel="noopener noreferrer"
                className="inline-block py-2 px-4 font-bold text-black bg-orange-300 rounded hover:bg-orange-100 transition duration-300 ease-in-out">
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};



export default Projects;
