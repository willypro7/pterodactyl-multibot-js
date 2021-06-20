# Pterodactyl Multi Bot
Host multiple Discord.JS bots on 1 pterodactyl panel server!

## Use
Upload the file to your Pterodactyl server.
In line 45 add the bots you want to start with `start( BOT FILE );`
For example:
`start('mybot')` when you start the server this will execute `node mybot.js`
You can modify the command that will execute in Line 16

## Required NPM packages
- Chalk

## Recommended RAM and CPU for your server
1 (simple) bot takes around 60mb RAM. <br>
**Table**
| Bots | RAM  | CPU     |
|------|------|---------|
| 1    | 60mb | Unknown |
| 2    | 120mb | Unknown |
| 3    | 160mb | Unknown |

## Recommended hostings
- [MoonHosting (8 GB Free)](https://discord.gg/kvx4FG9U5z)
