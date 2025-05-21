import { YoutubeEvents } from "../classes/handlers/YoutubeEvent"
import { ForgeNotifications } from "../classes/structures/ForgeNotifications"
import { Interpreter } from "@tryforge/forgescript"
import { Innertube } from "youtubei.js"

let youtube: Innertube;
(async() => {
  youtube = await Innertube.create();
})()

export default new YoutubeEvents({
  name: "ytNewVideo",
  version: "0.0.1",
  description: "Get notification from new released videos",
  listener() {
    const commands = this.getExtension(ForgeNotifications, true).commands.get('ytNewVideo')
    if (!commands) return;
    
    let latestVid = {}
    async function newVid() {
      const channel = await youtube.getChannel('nfyhDAexlFbGW--V')
      latestVid = await channel.videos[0]
    }    
    setInterval(newVid, 100000)
    for (const command of commands) {
      Interpreter.run({
        obj: latestVid,
        client: this,
        command,
        data: command.complied.code
      })
    }
  }
})

