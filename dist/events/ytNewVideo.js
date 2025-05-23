"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const YoutubeEvent_1 = require("../classes/handlers/YoutubeEvent");
const ForgeNotifications_1 = require("../classes/structures/ForgeNotifications");
const forgescript_1 = require("@tryforge/forgescript");
const youtubei_js_1 = require("youtubei.js");
const fs_1 = __importDefault(require("fs"));
let youtube;
(async () => {
    youtube = await youtubei_js_1.Innertube.create();
})();
exports.default = new YoutubeEvent_1.YoutubeEvents({
    name: "ytNewVideo",
    version: "0.0.1",
    description: "Get notification from new released videos",
    listener() {
        const commands = this.getExtension(ForgeNotifications_1.ForgeNotifications, true).commands.get('ytNewVideo');
        if (!commands)
            return;
        let latestVid = {};
        async function newVid() {
            const channel = await youtube.getChannel('nfyhDAexlFbGW--V');
            latestVid = await channel.videos[0];
            const dataBase = JSON.parse(fs_1.default.readFileSync('/forgeNotificationsDB/youtube.json', 'utf-8'));
            dataBase.infoObj = latestVid;
        }
        setInterval(newVid, 100000);
        for (const command of commands) {
            forgescript_1.Interpreter.run({
                obj: {},
                client: this,
                command,
                data: command.complied.code
            });
        }
    }
});
