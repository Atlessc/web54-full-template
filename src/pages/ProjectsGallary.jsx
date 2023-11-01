import { Link } from "react-router-dom";
import '../styles/ProjectsGallary.css'

export default function ProjectsGallary() {
  const projects = [
    {
      title: "Project1",
      name: "Project 1",
      image: "https://picsum.photos/200/300",
      description: "This is a description for project 1"
    },
    {
      title: "Project2",
      name: "Project 2",
      image: "https://picsum.photos/200/300",
      description: "This is a description for project 2"
    },
    {
      title: "Project3",
      name: "Project 3",
      image: "https://picsum.photos/200/300",
      description: "This is a description for project 3"
    },
    {
      title: "Project4",
      name: "Project 4",
      image: "https://picsum.photos/200/300",
      description: "This is a description for project 4"
    },
    {
      title: "Project5",
      name: "Project 5",
      image: "https://picsum.photos/200/300",
      description: "This is a description for project 5"
    },
    {
      title: "Project6",
      name: "Project 6",
      image: "https://picsum.photos/200/300",
      description: "This is a description for project 6"
    },
    {
      title: "Project7",
      name: "Project 7",
      image: "https://picsum.photos/200/300",
      description: "This is a description for project 7"
    },
    {
      title: "Project8",
      name: "Project 8",
      image: "https://picsum.photos/200/300",
      description: "This is a description for project 8"
    },
    {
      title: "Project9",
      name: "Project 9",
      image: "https://picsum.photos/200/300",
      description: "This is a description for project 9"
    },
    {
      title: "Project10",
      name: "Project 10",
      image: "https://picsum.photos/200/300",
      description: "This is a description for project 10"
    }
  ];

  return (
    <div className="projects-gallary">
      {projects.map((project, index) => (
        <Link key={index} className="project" to={`/projects/${project.title}`}>
          <img loading="lazy" src={project.image} alt={project.name} />
          <h3>{project.name}</h3>
          <p>{project.description}</p>
        </Link>
      ))}
    </div>
  );
}