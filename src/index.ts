#!/usr/bin/env node
import { Command } from "commander";
import { chat } from "./chat";

const program = new Command();
program.command('chat', {isDefault:true}).action(async () => {
	await chat();
})

program.parse(process.argv);
