import path from "path";

const projectDir = path.join(import.meta.dirname, "../../");
const devDir = path.join(projectDir, "dev");
const luaDir = path.join(projectDir, "../lua");

export const __DIRS = {
  project: projectDir,
  dev: devDir,
  bin: path.join(projectDir, "bin"),
  nvimConfig: path.join(luaDir, "nvim-config"),
  nvimCache: path.join(luaDir, "nvim-cache"),
};
