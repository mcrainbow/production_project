import  { Configuration  as DevServerConfiguration} from "webpack-dev-server";
import { BuildOptions } from "./types/config";

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  console.log('buildDevServer', options);
  return {
    port: options.port,
    open: options.open,
    historyApiFallback: true,
  }
}