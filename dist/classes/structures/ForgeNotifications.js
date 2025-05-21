"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForgeNotifications = void 0;
const forgescript_1 = require("@tryforge/forgescript");
const CommandManager_1 = require("../managers/CommandManager");
const path_1 = require("path");
/* export interface YtConfig {
  iLoveCock: string
} */
class ForgeNotifications extends forgescript_1.ForgeExtension {
    name = 'forge.notifications';
    description = '';
    version = '1.0.0';
    commands;
    /* constructor(public options: YtConfig) {
      super()
      console.log(options.iLoveCock)
    } */
    init(client) {
        this.commands = new CommandManager_1.YoutubeManager(client);
        this.load((0, path_1.join)(__dirname, '../../functions'));
    }
}
exports.ForgeNotifications = ForgeNotifications;
