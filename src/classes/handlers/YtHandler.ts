import { BaseEventHandler, ForgeClient } from '@tryforge/forgescript';
import { ForgeNotifications } from "../.."
import { DataBase } from "@tryforge/forge.db"
import Youtube from "youtubei";

const youtube = new Youtube();

export interface INotificationsEvent {
    // Horror
}

export class YtHandler<T extends keyof INotificationsEvents> extends BaseEventHandler<INotificationsEvent, T> {
    register(client: ForgeClient): void {
        client.getExtension(ForgeNotifications, true)['emitter'].on(this.name, this.listener.bind(client))
    }
}
