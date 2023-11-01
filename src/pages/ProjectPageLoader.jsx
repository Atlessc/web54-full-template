import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProjectPageLoader() {
  const { projectName } = useParams();
  const [ProjectPage, setProjectPage] = useState(projectName);

  useEffect(() => {
    import(`./projects/${ProjectPage}.jsx`)
      .then((module) => {
        setProjectPage(() => module.default);
      })
      .catch((err) => {
        setProjectPage(() => (
          <div>
            <h1>404</h1>
            <p>Project not found</p>
          </div>
        ));
      });
  }
  , [projectName]);

  if (!ProjectPage) return <div>Loading ...</div>

  return <ProjectPage />
}