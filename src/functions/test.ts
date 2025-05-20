import { MessageType } from "discord.js"
import { Arg, NativeFunction } from @tryforge/forgescript"

export default new NativeFunction({
    name: "$test",
    version: "1.4.0",
    description: "This is just a test function",
    unwrap: true,
    brackets: false,
    async execute(ctx, args) {
        return this.success("Hi"!)
    },
