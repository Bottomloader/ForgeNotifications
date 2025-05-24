import { TypedEmitter } from 'tiny-typed-emitter';
import { EventData } from '../classes/handlers/YoutubeEvent.ts'
import { Record } from './types';

export class DataBase {
    private static emitter: TypedEmitter<TransformEvents<EventData>>;
    private static entities: {
        record: typeof Record | typeof MongoRecord
        cd: typeof Cooldown | typeof MongoCooldown
    }


    public static async ytInfo(data: JSON.parse(Record)) {
        let latestVid = {}
        async function newVid() 
          const channel = await youtube.getChannel('nfyhDAexlFbGW--V')
          latestVid = await channel.videos[0]
          const dataBase = JSON.parse(fs.readFileSync('/forgeNotificationsDB/youtube.json', 'utf-8'))
          dataBase.infoObj = latestVid
        }
        setInterval(newVid, 100000)
        const nData = latestVid
        nData.identifier = this.make_intetifier(data)
        nData.name = data.name!
        nData.id = data.id!
        nData.type = data.type!
        nData.value = data.value!
        this.emitter.emit("ytNewVideo", { nData })
    }
}
