import { fn, sendToProxy } from "./factory";
import { Project } from "./interfaces";

const pyCreateProject = fn<string, Project>(
  async (args) => {
    return sendToProxy("pyCreateProject", args);
  },
  {
    name: "pyCreateProject",
    decorators: []
  }
);

export default pyCreateProject;
