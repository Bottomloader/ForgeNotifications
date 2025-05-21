import { EventManager, ForgeClient, ForgeExtension, FunctionManager } from '@tryforge/forgescript'
import { YoutubeManager as CommandManager } from '../managers/CommandManager'
import { join } from 'path'

/* export interface YtConfig {
  iLoveCock: string
} */

export class ForgeNotifications extends ForgeExtension {
    name = 'forge.notifications'
    description = ''
    version = '1.0.0'
    commands!: any

    /* constructor(public options: YtConfig) {
      super()
      console.log(options.iLoveCock)
    } */

    public init(client: ForgeClient): void {
      this.commands = new CommandManager(client);
      this.load(join(__dirname, '../../functions'));
    }
}
