import { ForgeExtension } from "@tryforge/forgescript"
import { description, version } from '../package.json';

export class ForgeNotifications extends ForgeExtension 
{
    name = 'forge.notifications'; 
    description = description; 
    version = version; 

    public init() {
        this.load(__dirname + '/functions');
    }
}
