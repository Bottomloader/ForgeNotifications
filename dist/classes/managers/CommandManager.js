"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YoutubeManager = exports.handlerName = void 0;
const forgescript_1 = require("@tryforge/forgescript");
exports.handlerName = "ForgeNotifications";
class YoutubeManager extends forgescript_1.BaseCommandManager {
    handlerName = 'YTCommands';
}
exports.YoutubeManager = YoutubeManager;
