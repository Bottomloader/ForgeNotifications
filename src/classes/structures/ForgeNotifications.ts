import { EventManager, ForgeClient, ForgeExtension, FunctionManager } from '@tryforge/forgescript'
import { YoutubeManager as CommandManager } from '../managers/CommandManager'
import { EventData } from "../handlers/YoutubeEvent"
import { TypedEmitter } from "tiny-typed-emitter"
import { join } from 'path'
import fs from 'fs'

export interface YtConfig {
  interval?: number
  events?: Array<keyof EventData>
}

export type TransformEvents<T> = {
    [P in keyof T]: T[P] extends any[] ? (...args: T[P]) => any : never
}

export class ForgeNotifications extends ForgeExtension {
    name = 'forge.notifications'
    description = ''
    version = '1.0.0'
    commands!: any
    emitter = new TypedEmitter<TransformEvents<EventData>>()
    
    constructor(public options: YtConfig) {
      super()
      const value = options?.interval ?? 300000
      fs.mkdirSync("forgeNotificationsDB");
      if (fs.existsSync('forgeNotificationsDB/youtube.json')) {
        const dataBase = JSON.parse(fs.readFileSync('/forgeNotificationsDB/youtube.json', 'utf-8'))
        dataBase.interval = value
        fs.writeFileSync('forgeNotificationsDB/youtube.json', JSON.stringify(dataBase, null, 2))
      } else {
        const dataBase = { interval: value }
        fs.writeFileSync('forgeNotificationsDB/youtube.json', JSON.stringify(dataBase, null, 2))
      }
    }

    public init(client: ForgeClient): void {
      this.commands = new CommandManager(client);
      EventManager.load('ForgeNotificationsEvents', __dirname + '/../../events')
      this.load(join(__dirname, '../../functions'));
      if (this.options?.events?.length)
        client.events.load("ForgeNotificationsEvents", this.options.events)
      }
    }
