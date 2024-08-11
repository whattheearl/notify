import { Events, Client, GatewayIntentBits } from 'discord.js';

const client = new Client({ intents: GatewayIntentBits.DirectMessages });

const channel = await client.users.createDM(process.env.DISCORD_USERID as string)

console.log(`sending ${new Date()}`);
channel.send('hi')

client.once(Events.ClientReady, startJobs);

client.login(process.env.DISCORD_SECRET)

