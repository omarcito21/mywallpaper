import { registerPlugin } from "@capacitor/core";

export interface Iplugin{
  execute: () => Promise<{message: string}>;

}

const plugin = registerPlugin<Iplugin>('plugin');
export default plugin;