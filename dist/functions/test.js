"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$tes",
    version: "0.0.1",
    description: "This is just a test function",
    unwrap: true,
    brackets: false,
    async execute(ctx, args) {
        return this.success("Hi");
    },
});
