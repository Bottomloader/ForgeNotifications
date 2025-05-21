"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForgeNotifications = void 0;
const forgescript_1 = require("@tryforge/forgescript");
const CommandManager_1 = require("../managers/CommandManager");
const path_1 = require("path");
const fs_1 = __importDefault(require("fs"));
class ForgeNotifications extends forgescript_1.ForgeExtension {
    options;
    name = 'forge.notifications';
    description = '';
    version = '1.0.0';
    commands;
    constructor(options) {
        super();
        this.options = options;
        const value = options?.interval ?? 300000;
        fs_1.default.mkdirSync("forgeNotificationsDB");
        if (fs_1.default.existsSync('forgeNotificationsDB/youtube.json')) {
            const dataBase = JSON.parse(fs_1.default.readFileSync('/forgeNotificationsDB/youtube.json', 'utf-8'));
            dataBase.interval = value;
            fs_1.default.writeFileSync('forgeNotificationsDB/youtube.json', JSON.stringify(dataBase, null, 2));
        }
        else {
            const dataBase = { interval: value };
            fs_1.default.writeFileSync('forgeNotificationsDB/youtube.json', JSON.stringify(dataBase, null, 2));
        }
    }
    init(client) {
        this.commands = new CommandManager_1.YoutubeManager(client);
        forgescript_1.EventManager.load('ForgeNotificationsEvents', __dirname + '/../../events');
        this.load((0, path_1.join)(__dirname, '../../functions'));
        if (this.options?.events?.length)
            client.events.load("ForgeDBEvents", this.options.events);
    }
}
exports.ForgeNotifications = ForgeNotifications;
