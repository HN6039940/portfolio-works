import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
  space: import.meta.env.VITE_SPACE_ID,
  accessToken: import.meta.env.VITE_ACCESS_TOKEN,
  environment: "master",
});

export const useFetchProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProject = async () => {
    try {
      const response = await client.getEntries("project");
      const projectFields = response.items.map((project) => {
        const {
          title,
          url,
          image: {
            fields: {
              file: { url: imageUrl = "" },
            },
            sys: { id },
          } = {},
        } = project.fields;
        return { title, url, imageUrl, id };
      });
      setProjects(projectFields);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      return console.log(error);
    }
  };
  useEffect(() => {
    fetchProject();
  }, []);

  return [projects, loading];
};
