<<<<<<< HEAD
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    return {
        port: options.port,
        open: true,
        historyApiFallback: true,
        hot: true,
    };
}
=======
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
>>>>>>> 6374e2689713849f5b9ac55c7d8b9401ea971bdf
