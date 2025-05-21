"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const YoutubeEvent_1 = require("../classes/handlers/YoutubeEvent");
const ForgeNotifications_1 = require("../classes/structures/ForgeNotifications");
exports.default = new YoutubeEvent_1.YoutubeEvents({
    name: "testEvent",
    version: "0.0.1",
    description: "Just a test event",
    listener() {
        const commands = this.getExtension(ForgeNotifications_1.ForgeNotifications, true).commands.get('testEvent');
    }
});
