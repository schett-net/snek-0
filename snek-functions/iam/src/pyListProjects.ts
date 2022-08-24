import { fn, sendToProxy } from "./factory";
import { Project } from "./interfaces";

const pyListProjects = fn<{}, Project[]>(
  async () => {
    return sendToProxy<{}, Project[]>("pyListProjects");
  },
  {
    name: "pyListProjects",
  }
);

export default pyListProjects;
