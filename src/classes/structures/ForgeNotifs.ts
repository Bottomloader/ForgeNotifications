import { EventManager, ForgeClient, ForgeExtension, FunctionManager } from '@tryforge/forgescript'
import { DataBase } from '@tryforge/forge.db'
// import { YoutubeManager as CommandManager } from '@managers/CommandManager'
import Youtube from 'youtubei'
import { join } from 'path'

export interface YtConfig {


// Config here if needed.

}

export class ForgeNotifs extends ForgeExtension {
    name = 'Forge.notifs'
    description = 'ForgeScript integration with youtubei'
    version = '1.0.0'

    // #kc: CommandManager

     constructor(public options: YtConfig) {
        super()
    }

    // this.#kc = new CommandManager(client);

    public init() {
    //  EventManager.load('youtubeEvents', join(__dirname, '../../events'));
     this.load(join(__dirname, '../../natives'));
    }
}


