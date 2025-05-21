"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YoutubeEvents = void 0;
const forgescript_1 = require("@tryforge/forgescript");
const ForgeNotifications_1 = require("../structures/ForgeNotifications");
class YoutubeEvents extends forgescript_1.BaseEventHandler {
    register(client) {
        client.getExtension(ForgeNotifications_1.ForgeNotifications, true);
    }
}
exports.YoutubeEvents = YoutubeEvents;
