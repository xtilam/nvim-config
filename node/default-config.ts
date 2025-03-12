import path from "path";
import NVIMConfig from "./dev/model/NVIMConfig.js";

const nvimConfig = new NVIMConfig().useDefaultNVimOSDir();

export default nvimConfig;
