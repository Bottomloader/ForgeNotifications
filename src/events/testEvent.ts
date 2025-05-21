import { YoutubeEvents } from "../classes/handlers/YoutubeEvent"
import { ForgeNotifications } from "../classes/structures/ForgeNotifications"

export default new YoutubeEvents({
  name: "testEvent",
  version: "0.0.1",
  description: "Just a test event",
  listener() {
    const commands = this.getExtension(ForgeNotifications, true).commands.get('testEvent')
  }
})
  
