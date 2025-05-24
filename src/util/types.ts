import { EventData } from "../classes/handlers/YoutubeEvent.ts"

@Entity()
export class Record {
    @PrimaryColumn()
    ytInfo!: object
}
