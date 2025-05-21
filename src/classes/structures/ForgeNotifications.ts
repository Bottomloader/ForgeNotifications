import { EventManager, ForgeClient, ForgeExtension, FunctionManager } from '@tryforge/forgescript'
//import { ForgeDB } from '@tryforge/forge.db'
import { YoutubeManager as CommandManager } from '../managers/CommandManager'
//import Youtube from 'youtubei'
import { join } from 'path'

export interface YtConfig {
  // sample property to demonstrate passing values around
  hello: string
}

export class ForgeNotifications extends ForgeExtension {
    name = 'forge.notifications'
    description = ''
    version = '1.0.0'
    commands!: any

    constructor(public options: YtConfig) {
      super()
      // log the option's hello property to the console
      console.log(options.hello)
    }

    public init(client: ForgeClient): void {
      this.commands = new CommandManager(client);
      EventManager.load('youtubeEvents', join(__dirname, '../../events'));
      this.load(join(__dirname, '../../natives'));
    }
}

// this would log 'hello world!' to the console
let notif = new ForgeNotifications({hello: 'hello world!'})