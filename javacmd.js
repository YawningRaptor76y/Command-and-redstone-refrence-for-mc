// ─── JAVA COMMAND DATA ───────────────────────────────────────────────────────
// Self-registering data file. Loads after core.js.
// Stubs (empty groups or id ending in '2') are filtered here before register().

const _JAVA_RAW = [

  // ── SERVER ──────────────────────────────────────────────────────────────
  {
    id:"ban", name:"ban", alias:"",
    groups:["server","player"],
    tags:["srv"],
    summary:"Add a player to the server ban list",
    syntaxes:[
      `/<s>ban</s> <r>&lt;name&gt;</r> <o>[reason]</o>`
    ],
    params:[
      ["name","string","Player name (not selector)"],
      ["reason","string","Optional ban reason shown to player"]
    ],
    notes:"Bans by name, not UUID. Player does not need to be online. Use `ban-ip` to ban by address. Stored in `banned-players.json`."
  },
  {
    id:"ban-ip", name:"ban-ip", alias:"",
    groups:["server","player"],
    tags:["srv"],
    summary:"Ban a player or IP address from the server",
    syntaxes:[
      `/<s>ban-ip</s> <r>&lt;name|ip-address&gt;</r> <o>[reason]</o>`
    ],
    params:[
      ["name | ip-address","string","Online player name or literal IP address"],
      ["reason","string","Optional reason"]
    ],
    notes:"If a name is given, bans the IP of that player if online. Stored in `banned-ips.json`. Does not affect players on different IPs."
  },
  {
    id:"banlist", name:"banlist", alias:"",
    groups:["server"],
    tags:["srv"],
    summary:"Display the server ban list",
    syntaxes:[
      `/<s>banlist</s> <o>[ips|players]</o>`
    ],
    params:[
      ["ips | players","enum","Filter by IP bans or name bans; defaults to players"]
    ],
    notes:"Lists all entries in the active ban list. Output goes to the server console."
  },
  {
    id:"deop", name:"deop", alias:"",
    groups:["server","player"],
    tags:["srv"],
    summary:"Revoke operator status from a player",
    syntaxes:[`/<s>deop</s> <r>&lt;targets&gt;</r>`],
    params:[["targets","entity","Player name or selector"]],
    notes:"Takes effect immediately. Player does not need to relog. Edits `ops.json`."
  },
  {
    id:"kick", name:"kick", alias:"",
    groups:["server","player"],
    tags:["srv"],
    summary:"Remove a player from the server",
    syntaxes:[`/<s>kick</s> <r>&lt;targets&gt;</r> <o>[reason]</o>`],
    params:[
      ["targets","entity","Player name or selector"],
      ["reason","string","Optional disconnect message"]
    ],
    notes:"Player is disconnected immediately. Does not ban. Selector must resolve to players only."
  },
  {
    id:"list", name:"list", alias:"",
    groups:["server"],
    tags:["srv"],
    summary:"List online players",
    syntaxes:[`/<s>list</s> <o>[uuids]</o>`],
    params:[["uuids","literal","If present, appends UUID of each player to output"]],
    notes:"Returns current and max player count. `uuids` subcommand useful for cross-referencing player data files."
  },
  {
    id:"op", name:"op", alias:"",
    groups:["server","player"],
    tags:["srv"],
    summary:"Grant operator status to a player",
    syntaxes:[`/<s>op</s> <r>&lt;targets&gt;</r>`],
    params:[["targets","entity","Player name or selector"]],
    notes:"Grants level 4 operator by default. Level is configurable in `server.properties` via `op-permission-level`."
  },
  {
    id:"pardon", name:"pardon", alias:"",
    groups:["server","player"],
    tags:["srv"],
    summary:"Remove a player from the ban list",
    syntaxes:[`/<s>pardon</s> <r>&lt;targets&gt;</r>`],
    params:[["targets","string","Player name to unban"]],
    notes:"Removes from `banned-players.json`. Player can reconnect immediately."
  },
  {
    id:"pardon-ip", name:"pardon-ip", alias:"",
    groups:["server"],
    tags:["srv"],
    summary:"Remove an IP address from the ban list",
    syntaxes:[`/<s>pardon-ip</s> <r>&lt;address&gt;</r>`],
    params:[["address","string","IP address to unban"]],
    notes:"Removes from `banned-ips.json`. Must be exact IP string match."
  },
  {
    id:"perf", name:"perf", alias:"",
    groups:["server"],
    tags:["srv"],
    summary:"Capture server performance data",
    syntaxes:[
      `/<s>perf</s> <l>start</l>`,
      `/<s>perf</s> <l>stop</l>`
    ],
    params:[],
    notes:"Records TPS and tick timing data to a report file. `stop` finalizes and writes output. Useful for profiling lag spikes."
  },
  {
    id:"reload", name:"reload", alias:"",
    groups:["server"],
    tags:["srv"],
    summary:"Reload loot tables, advancements, and functions",
    syntaxes:[`/<s>reload</s>`],
    params:[],
    notes:"Does not restart the server. Reloads all datapacks. Does not reload `server.properties` or world data."
  },
  {
    id:"save-all", name:"save-all", alias:"",
    groups:["server"],
    tags:["srv"],
    summary:"Force save all world data to disk",
    syntaxes:[`/<s>save-all</s> <o>[flush]</o>`],
    params:[["flush","literal","If present, waits for all pending chunk writes to complete"]],
    notes:"Safe to run at any time. `flush` blocks until write queue is empty — use before taking backups."
  },
  {
    id:"save-off", name:"save-off", alias:"",
    groups:["server"],
    tags:["srv"],
    summary:"Disable automatic saving",
    syntaxes:[`/<s>save-off</s>`],
    params:[],
    notes:"Pauses the autosave cycle. Use with `save-all flush` before taking live backups. Re-enable with `save-on`."
  },
  {
    id:"save-on", name:"save-on", alias:"",
    groups:["server"],
    tags:["srv"],
    summary:"Re-enable automatic saving",
    syntaxes:[`/<s>save-on</s>`],
    params:[],
    notes:"Resumes the autosave cycle after `save-off`. Always run this after a backup sequence."
  },
  {
    id:"stop", name:"stop", alias:"",
    groups:["server"],
    tags:["srv"],
    summary:"Stop the server",
    syntaxes:[`/<s>stop</s>`],
    params:[],
    notes:"Saves all worlds then shuts down. No confirmation. Scripts should call `save-all flush` first if timing matters."
  },
  {
    id:"whitelist", name:"whitelist", alias:"",
    groups:["server"],
    tags:["srv"],
    summary:"Manage the server whitelist",
    syntaxes:[
      `/<s>whitelist</s> <l>add</l> <r>&lt;targets&gt;</r>`,
      `/<s>whitelist</s> <l>remove</l> <r>&lt;targets&gt;</r>`,
      `/<s>whitelist</s> <l>list</l>`,
      `/<s>whitelist</s> <l>on</l>`,
      `/<s>whitelist</s> <l>off</l>`,
      `/<s>whitelist</s> <l>reload</l>`
    ],
    params:[["targets","string","Player name"]],
    notes:"Stored in `whitelist.json`. `enforce-whitelist` in `server.properties` kicks non-whitelisted players on `reload`. `on`/`off` toggles enforcement without removing entries."
  },

  // ── PLAYER ──────────────────────────────────────────────────────────────
  {
    id:"advancement", name:"advancement", alias:"",
    groups:["player"],
    tags:[],
    summary:"Grant or revoke advancements from players",
    syntaxes:[
      `/<s>advancement</s> <l>grant</l> <r>&lt;targets&gt;</r> <l>only</l> <r>&lt;advancement&gt;</r> <o>[criterion]</o>`,
      `/<s>advancement</s> <l>grant</l> <r>&lt;targets&gt;</r> <l>from</l> <r>&lt;advancement&gt;</r>`,
      `/<s>advancement</s> <l>grant</l> <r>&lt;targets&gt;</r> <l>through</l> <r>&lt;advancement&gt;</r>`,
      `/<s>advancement</s> <l>grant</l> <r>&lt;targets&gt;</r> <l>until</l> <r>&lt;advancement&gt;</r>`,
      `/<s>advancement</s> <l>grant</l> <r>&lt;targets&gt;</r> <l>everything</l>`,
      `/<s>advancement</s> <l>revoke</l> <r>&lt;targets&gt;</r> <l>only</l> <r>&lt;advancement&gt;</r> <o>[criterion]</o>`,
      `/<s>advancement</s> <l>revoke</l> <r>&lt;targets&gt;</r> <l>everything</l>`
    ],
    params:[
      ["targets","entity","Target player selector"],
      ["advancement","resource","Advancement resource location (e.g. minecraft:story/mine_stone)"],
      ["criterion","string","Specific advancement criterion to grant/revoke"]
    ],
    notes:"`only` affects a single advancement. `from` grants that advancement and all after it in the tree. `through` grants everything between root and target. `until` grants up to but not including target. Criteria are optional sub-goals within a single advancement."
  },
  {
    id:"clear", name:"clear", alias:"",
    groups:["player"],
    tags:[],
    summary:"Remove items from a player's inventory",
    syntaxes:[
      `/<s>clear</s> <o>[targets]</o> <o>[item]</o> <o>[maxCount]</o>`
    ],
    params:[
      ["targets","entity","Target player; defaults to executor"],
      ["item","item_predicate","Item ID with optional tag/nbt filter"],
      ["maxCount","int","Max to remove; omit to remove all matching"]
    ],
    notes:"If `maxCount` is 0, counts matching items without removing. Returns count via success value. Item predicate supports NBT and tag matching."
  },
  {
    id:"effect", name:"effect", alias:"",
    groups:["player","entity"],
    tags:[],
    summary:"Apply or remove status effects",
    syntaxes:[
      `/<s>effect</s> <l>give</l> <r>&lt;targets&gt;</r> <r>&lt;effect&gt;</r> <o>[seconds]</o> <o>[amplifier]</o> <o>[hideParticles]</o>`,
      `/<s>effect</s> <l>clear</l> <o>[targets]</o> <o>[effect]</o>`
    ],
    params:[
      ["targets","entity","Target entity or player"],
      ["effect","resource","Effect ID (e.g. minecraft:speed)"],
      ["seconds","int","Duration in seconds; use `infinite` for permanent"],
      ["amplifier","int","Level minus 1 (0 = level I); max 255"],
      ["hideParticles","bool","true suppresses particle display"]
    ],
    notes:"Java uses `give`/`clear` subcommands unlike Bedrock. `infinite` duration added in 1.19.4. `clear` without effect argument removes all active effects."
  },
  {
    id:"enchant", name:"enchant", alias:"",
    groups:["player"],
    tags:[],
    summary:"Enchant the held item of a player",
    syntaxes:[
      `/<s>enchant</s> <r>&lt;targets&gt;</r> <r>&lt;enchantment&gt;</r> <o>[level]</o>`
    ],
    params:[
      ["targets","entity","Target player"],
      ["enchantment","resource","Enchantment ID (e.g. minecraft:sharpness)"],
      ["level","int","Enchantment level; capped at max for that enchantment"]
    ],
    notes:"Applies to mainhand item. Incompatible enchantments will be rejected — command fails silently. Use NBT via `/give` to force incompatible combinations."
  },
  {
    id:"experience", name:"experience", alias:"xp",
    groups:["player"],
    tags:[],
    summary:"Add, set, or query player experience",
    syntaxes:[
      `/<s>experience</s> <l>add</l> <r>&lt;targets&gt;</r> <r>&lt;amount&gt;</r> <o>[points|levels]</o>`,
      `/<s>experience</s> <l>set</l> <r>&lt;targets&gt;</r> <r>&lt;amount&gt;</r> <o>[points|levels]</o>`,
      `/<s>experience</s> <l>query</l> <r>&lt;target&gt;</r> <r>&lt;points|levels&gt;</r>`
    ],
    params:[
      ["targets","entity","Target player selector"],
      ["amount","int","Amount of XP; negative values subtract"],
      ["points | levels","enum","points = raw XP; levels = full levels; defaults to points"]
    ],
    notes:"Alias: `xp`. `query` returns current value to chat and as command result. Negative `add` can reduce XP but not below 0. `set` with `points` cannot exceed points required for next level."
  },
  {
    id:"gamemode", name:"gamemode", alias:"",
    groups:["player"],
    tags:[],
    summary:"Change a player's game mode",
    syntaxes:[
      `/<s>gamemode</s> <r>&lt;gamemode&gt;</r> <o>[target]</o>`
    ],
    params:[
      ["gamemode","enum","survival | creative | adventure | spectator"],
      ["target","entity","Target player; defaults to executor"]
    ],
    notes:"Short forms accepted: `s`, `c`, `a`, `sp`. Spectator mode lets players fly through blocks and observe entities."
  },
  {
    id:"give", name:"give", alias:"",
    groups:["player","blocks"],
    tags:[],
    summary:"Give items to a player",
    syntaxes:[
      `/<s>give</s> <r>&lt;targets&gt;</r> <r>&lt;item&gt;</r> <o>[count]</o>`
    ],
    params:[
      ["targets","entity","Target player selector"],
      ["item","item_stack","Item ID with optional NBT compound"],
      ["count","int","Stack count; defaults to 1; max 2147483647 (engine splits into stacks)"]
    ],
    notes:"Item supports full NBT: `minecraft:diamond_sword{Enchantments:[{id:sharpness,lvl:5}]}`. Count beyond stack size splits into multiple stacks automatically."
  },
  {
    id:"kill", name:"kill", alias:"",
    groups:["player","entity"],
    tags:[],
    summary:"Kill entities",
    syntaxes:[`/<s>kill</s> <o>[targets]</o>`],
    params:[["targets","entity","Entity selector; defaults to executor"]],
    notes:"Applies 999999 damage flagged as out-of-world damage. Triggers death events and drops. `@e` kills all loaded entities including item drops and projectiles — use with care."
  },
  {
    id:"msg", name:"msg", alias:"tell, w",
    groups:["player","misc"],
    tags:[],
    summary:"Send a private message to a player",
    syntaxes:[
      `/<s>msg</s> <r>&lt;targets&gt;</r> <r>&lt;message&gt;</r>`
    ],
    params:[
      ["targets","entity","Recipient player selector"],
      ["message","string","Message text; not parsed for commands"]
    ],
    notes:"Aliases: `tell`, `w`. Sender and recipient both see the message. Cannot target non-player entities."
  },
  {
    id:"recipe", name:"recipe", alias:"",
    groups:["player"],
    tags:[],
    summary:"Grant or revoke crafting recipes",
    syntaxes:[
      `/<s>recipe</s> <l>give</l> <r>&lt;targets&gt;</r> <r>&lt;recipe&gt;</r>`,
      `/<s>recipe</s> <l>take</l> <r>&lt;targets&gt;</r> <r>&lt;recipe&gt;</r>`
    ],
    params:[
      ["targets","entity","Target player selector"],
      ["recipe","resource","Recipe resource location or * for all recipes"]
    ],
    notes:"Unlocked recipes appear in the recipe book. `*` grants or revokes all recipes. Recipes are stored per-player in world data."
  },
  {
    id:"ride", name:"ride", alias:"",
    groups:["player","entity"],
    tags:[],
    summary:"Control entity mounting relationships",
    syntaxes:[
      `/<s>ride</s> <r>&lt;targets&gt;</r> <l>mount</l> <r>&lt;vehicle&gt;</r>`,
      `/<s>ride</s> <r>&lt;targets&gt;</r> <l>dismount</l>`,
      `/<s>ride</s> <r>&lt;targets&gt;</r> <l>summon_ride</l> <r>&lt;entity&gt;</r> <o>[spawnEvent]</o> <o>[rideMode]</o>`,
      `/<s>ride</s> <r>&lt;targets&gt;</r> <l>summon_rider</l> <r>&lt;entity&gt;</r> <o>[spawnEvent]</o>`
    ],
    params:[
      ["targets","entity","Entity to be the rider"],
      ["vehicle","entity","Entity to mount; must be a single entity"],
      ["entity","resource","Entity type to summon"],
      ["spawnEvent","string","Spawn event to trigger on the summoned entity"],
      ["rideMode","enum","no_ride_change | reassign_rides | skip_riders"]
    ],
    notes:"Added in 1.20. Entities can be stacked. `summon_ride` spawns a vehicle under the target. `summon_rider` spawns an entity on top of the target."
  },
  {
    id:"spawnpoint", name:"spawnpoint", alias:"",
    groups:["player","world"],
    tags:[],
    summary:"Set a player's individual spawn point",
    syntaxes:[
      `/<s>spawnpoint</s> <o>[targets]</o> <o>[pos]</o> <o>[angle]</o>`
    ],
    params:[
      ["targets","entity","Target player; defaults to executor"],
      ["pos","coordinates","Block coordinates for spawn; defaults to current position"],
      ["angle","float","Facing angle on respawn (degrees)"]
    ],
    notes:"Overrides bed/respawn anchor spawn. Does not affect `/setworldspawn`. `angle` parameter added in 1.17."
  },
  {
    id:"teleport", name:"teleport", alias:"tp",
    groups:["player","entity","world"],
    tags:[],
    summary:"Teleport entities to a location or other entity",
    syntaxes:[
      `/<s>teleport</s> <r>&lt;destination&gt;</r>`,
      `/<s>teleport</s> <r>&lt;targets&gt;</r> <r>&lt;destination&gt;</r>`,
      `/<s>teleport</s> <r>&lt;targets&gt;</r> <r>&lt;location&gt;</r> <o>[rotation]</o>`,
      `/<s>teleport</s> <r>&lt;targets&gt;</r> <r>&lt;location&gt;</r> <l>facing</l> <r>&lt;facingLocation&gt;</r>`,
      `/<s>teleport</s> <r>&lt;targets&gt;</r> <r>&lt;location&gt;</r> <l>facing entity</l> <r>&lt;facingEntity&gt;</r> <o>[facingAnchor]</o>`
    ],
    params:[
      ["targets","entity","Entities to teleport"],
      ["destination","entity","Entity to teleport to"],
      ["location","coordinates","Target coordinates; supports relative (~) and local (^) notation"],
      ["rotation","rotation","Yaw and pitch values"],
      ["facingLocation","coordinates","Point to face after teleport"],
      ["facingEntity","entity","Entity to face after teleport"],
      ["facingAnchor","enum","eyes | feet — which part of the entity to face"]
    ],
    notes:"Alias: `tp`. Local coordinates (`^`) are relative to the entity's facing direction. Cross-dimension teleport is not supported directly — use `/execute in` to change dimension context."
  },
  {
    id:"xp", name:"xp", alias:"experience",
    groups:["player"],
    tags:[],
    summary:"Legacy XP command — use /experience",
    syntaxes:[
      `/<s>xp</s> <r>&lt;amount&gt;</r> <o>[targets]</o>`,
      `/<s>xp</s> <r>&lt;amount&gt;</r><l>L</l> <o>[targets]</o>`
    ],
    params:[
      ["amount","int","XP points to add"],
      ["L","literal","Suffix L to give levels instead of points"],
      ["targets","entity","Target player; defaults to executor"]
    ],
    notes:"Retained for backwards compatibility. Prefer `/experience` for new work. Negative values not supported in legacy syntax — use `/experience add` with negative for subtraction."
  },

  // ── ENTITY ──────────────────────────────────────────────────────────────
  {
    id:"attribute", name:"attribute", alias:"",
    groups:["entity","player"],
    tags:[],
    summary:"Read or modify entity attributes",
    syntaxes:[
      `/<s>attribute</s> <r>&lt;target&gt;</r> <r>&lt;attribute&gt;</r> <l>get</l> <o>[scale]</o>`,
      `/<s>attribute</s> <r>&lt;target&gt;</r> <r>&lt;attribute&gt;</r> <l>base</l> <l>get</l> <o>[scale]</o>`,
      `/<s>attribute</s> <r>&lt;target&gt;</r> <r>&lt;attribute&gt;</r> <l>base</l> <l>set</l> <r>&lt;value&gt;</r>`,
      `/<s>attribute</s> <r>&lt;target&gt;</r> <r>&lt;attribute&gt;</r> <l>modifier</l> <l>add</l> <r>&lt;uuid&gt;</r> <r>&lt;name&gt;</r> <r>&lt;value&gt;</r> <r>&lt;add|multiply|multiply_base&gt;</r>`,
      `/<s>attribute</s> <r>&lt;target&gt;</r> <r>&lt;attribute&gt;</r> <l>modifier</l> <l>remove</l> <r>&lt;uuid&gt;</r>`,
      `/<s>attribute</s> <r>&lt;target&gt;</r> <r>&lt;attribute&gt;</r> <l>modifier</l> <l>value</l> <l>get</l> <r>&lt;uuid&gt;</r> <o>[scale]</o>`
    ],
    params:[
      ["target","entity","Single entity target"],
      ["attribute","resource","Attribute ID (e.g. minecraft:generic.max_health)"],
      ["scale","float","Multiply output value by this factor"],
      ["value","double","New base value to set"],
      ["uuid","string","UUID of the modifier"],
      ["name","string","Human-readable modifier name"],
      ["add | multiply | multiply_base","enum","Modifier operation type"]
    ],
    notes:"`get` returns current effective value (base + all modifiers). `base get/set` ignores modifiers. Modifiers are identified by UUID — reuse the same UUID to overwrite. `multiply` applies to base, `multiply_base` stacks multiplicatively."
  },
  {
    id:"damage", name:"damage", alias:"",
    groups:["entity","player"],
    tags:[],
    summary:"Apply damage to an entity",
    syntaxes:[
      `/<s>damage</s> <r>&lt;target&gt;</r> <r>&lt;amount&gt;</r> <o>[damageType]</o> <o>[at &lt;location&gt;]</o>`,
      `/<s>damage</s> <r>&lt;target&gt;</r> <r>&lt;amount&gt;</r> <o>[damageType]</o> <o>[by &lt;entity&gt;]</o> <o>[from &lt;cause&gt;]</o>`
    ],
    params:[
      ["target","entity","Entity to damage; single entity only"],
      ["amount","float","Damage amount in half-hearts"],
      ["damageType","resource","Damage type tag (e.g. minecraft:generic, minecraft:fire)"],
      ["location","coordinates","Source location for directional knockback"],
      ["entity","entity","Entity to attribute damage to"],
      ["cause","entity","Indirect cause (e.g. the player who shot an arrow)"]
    ],
    notes:"Added in 1.19.4. Bypasses armor and enchantments by default depending on damage type. Triggers death events. Does not work on entities with `Invulnerable:1b`."
  },
  {
    id:"summon", name:"summon", alias:"",
    groups:["entity","world"],
    tags:[],
    summary:"Spawn an entity at a location",
    syntaxes:[
      `/<s>summon</s> <r>&lt;entity&gt;</r> <o>[pos]</o> <o>[nbt]</o>`
    ],
    params:[
      ["entity","resource","Entity type ID (e.g. minecraft:zombie)"],
      ["pos","coordinates","Spawn position; defaults to executor position"],
      ["nbt","compound","NBT data applied to the entity on spawn"]
    ],
    notes:"NBT is merged after default entity data is applied. Use `{NoAI:1b}` to spawn passive entities. Custom names via `{CustomName:'\"Name\"'}` — note the JSON string escaping."
  },
  {
    id:"data", name:"data", alias:"",
    groups:["entity","blocks","misc"],
    tags:[],
    summary:"Read or modify NBT data on entities, blocks, or storage",
    syntaxes:[
      `/<s>data</s> <l>get</l> <l>entity</l> <r>&lt;target&gt;</r> <o>[path]</o> <o>[scale]</o>`,
      `/<s>data</s> <l>get</l> <l>block</l> <r>&lt;targetPos&gt;</r> <o>[path]</o> <o>[scale]</o>`,
      `/<s>data</s> <l>get</l> <l>storage</l> <r>&lt;target&gt;</r> <o>[path]</o> <o>[scale]</o>`,
      `/<s>data</s> <l>merge</l> <l>entity</l> <r>&lt;target&gt;</r> <r>&lt;nbt&gt;</r>`,
      `/<s>data</s> <l>merge</l> <l>block</l> <r>&lt;targetPos&gt;</r> <r>&lt;nbt&gt;</r>`,
      `/<s>data</s> <l>merge</l> <l>storage</l> <r>&lt;target&gt;</r> <r>&lt;nbt&gt;</r>`,
      `/<s>data</s> <l>modify</l> <l>entity</l> <r>&lt;target&gt;</r> <r>&lt;path&gt;</r> <r>&lt;operation&gt;</r>`,
      `/<s>data</s> <l>modify</l> <l>block</l> <r>&lt;targetPos&gt;</r> <r>&lt;path&gt;</r> <r>&lt;operation&gt;</r>`,
      `/<s>data</s> <l>modify</l> <l>storage</l> <r>&lt;target&gt;</r> <r>&lt;path&gt;</r> <r>&lt;operation&gt;</r>`,
      `/<s>data</s> <l>remove</l> <l>entity</l> <r>&lt;target&gt;</r> <r>&lt;path&gt;</r>`,
      `/<s>data</s> <l>remove</l> <l>block</l> <r>&lt;targetPos&gt;</r> <r>&lt;path&gt;</r>`,
      `/<s>data</s> <l>remove</l> <l>storage</l> <r>&lt;target&gt;</r> <r>&lt;path&gt;</r>`
    ],
    params:[
      ["target","entity","Single entity target"],
      ["targetPos","coordinates","Block position"],
      ["target (storage)","resource","Storage namespace key"],
      ["path","nbt_path","Dot-notation NBT path (e.g. Inventory[0].id)"],
      ["scale","float","Multiply numeric output by this factor"],
      ["nbt","compound","NBT data to merge"],
      ["operation","enum","set | append | prepend | insert | merge — with optional source"]
    ],
    notes:"Storage is a persistent server-side NBT store keyed by namespace. `modify` operations support `from entity/block/storage` as data source. `get` with a numeric path returns the value as a command result, usable in scoreboard operations via `/execute store`."
  },
  {
    id:"loot", name:"loot", alias:"",
    groups:["entity","blocks","player"],
    tags:[],
    summary:"Drop items from a loot table",
    syntaxes:[
      `/<s>loot</s> <l>spawn</l> <r>&lt;targetPos&gt;</r> <l>loot</l> <r>&lt;lootTable&gt;</r>`,
      `/<s>loot</s> <l>spawn</l> <r>&lt;targetPos&gt;</r> <l>kill</l> <r>&lt;target&gt;</r>`,
      `/<s>loot</s> <l>spawn</l> <r>&lt;targetPos&gt;</r> <l>mine</l> <r>&lt;pos&gt;</r> <o>[tool]</o>`,
      `/<s>loot</s> <l>give</l> <r>&lt;players&gt;</r> <l>loot</l> <r>&lt;lootTable&gt;</r>`,
      `/<s>loot</s> <l>give</l> <r>&lt;players&gt;</r> <l>kill</l> <r>&lt;target&gt;</r>`,
      `/<s>loot</s> <l>insert</l> <r>&lt;targetPos&gt;</r> <l>loot</l> <r>&lt;lootTable&gt;</r>`,
      `/<s>loot</s> <l>replace entity</l> <r>&lt;entities&gt;</r> <r>&lt;slot&gt;</r> <l>loot</l> <r>&lt;lootTable&gt;</r>`
    ],
    params:[
      ["targetPos","coordinates","Position to drop items at"],
      ["lootTable","resource","Loot table resource location"],
      ["target","entity","Entity whose kill loot table to use"],
      ["pos","coordinates","Block position to simulate mining"],
      ["tool","item_stack","Tool to simulate for fortune/silk touch"],
      ["players","entity","Target players to give items to"],
      ["slot","slot","Equipment or inventory slot"]
    ],
    notes:"`mine` uses the block's loot table as if mined. `kill` uses the entity's death loot table without killing it. `insert` puts items into a container block. Loot is rolled fresh each call — random results expected."
  },
  {
    id:"spectate", name:"spectate", alias:"",
    groups:["entity","player"],
    tags:[],
    summary:"Spectate an entity as a spectator-mode player",
    syntaxes:[
      `/<s>spectate</s> <o>[target]</o> <o>[player]</o>`
    ],
    params:[
      ["target","entity","Entity to spectate"],
      ["player","entity","Spectator player; defaults to executor"]
    ],
    notes:"Player must be in spectator mode. Calling without arguments releases the current spectate lock. Cannot spectate the player themselves."
  },

  // ── WORLD ───────────────────────────────────────────────────────────────
  {
    id:"difficulty", name:"difficulty", alias:"",
    groups:["world"],
    tags:[],
    summary:"Set or query the world difficulty",
    syntaxes:[
      `/<s>difficulty</s> <o>[difficulty]</o>`
    ],
    params:[["difficulty","enum","peaceful | easy | normal | hard; omit to query current"]],
    notes:"Short forms accepted: `p`, `e`, `n`, `h`. Hardcore mode locks difficulty to hard — this command cannot change it."
  },
  {
    id:"gamerule", name:"gamerule", alias:"",
    groups:["world","misc"],
    tags:[],
    summary:"Set or query game rules",
    syntaxes:[
      `/<s>gamerule</s> <r>&lt;rule&gt;</r> <o>[value]</o>`
    ],
    params:[
      ["rule","string","Gamerule name (e.g. keepInventory, doDaylightCycle)"],
      ["value","bool | int","New value; omit to query current value"]
    ],
    gamerules:[
      ["announceAdvancements","bool","true","Broadcast advancement messages to all players"],
      ["blockExplosionDropDecay","bool","true","Whether block explosions drop fewer items at higher distances"],
      ["commandBlockOutput","bool","true","Whether command blocks output to chat"],
      ["commandModificationBlockLimit","int","32768","Max blocks a single command can modify"],
      ["disableElytraMovementCheck","bool","false","Disable server-side elytra movement validation"],
      ["disableRaids","bool","false","Prevent raid events from starting"],
      ["doDaylightCycle","bool","true","Whether time advances automatically"],
      ["doEntityDrops","bool","true","Whether non-mob entities drop items on removal"],
      ["doFireTick","bool","true","Whether fire spreads and burns out"],
      ["doImmediateRespawn","bool","false","Skip the death screen and respawn immediately"],
      ["doInsomnia","bool","true","Whether phantoms spawn for sleepless players"],
      ["doLimitedCrafting","bool","false","Restrict crafting to unlocked recipes only"],
      ["doMobLoot","bool","true","Whether mobs drop items on death"],
      ["doMobSpawning","bool","true","Whether mobs spawn naturally"],
      ["doPatrolSpawning","bool","true","Whether pillager patrols spawn"],
      ["doTileDrops","bool","true","Whether blocks drop items when broken"],
      ["doTraderSpawning","bool","true","Whether wandering traders spawn"],
      ["doVinesSpread","bool","true","Whether vines spread to adjacent blocks"],
      ["doWardenSpawning","bool","true","Whether the warden can spawn from shriekers"],
      ["doWeatherCycle","bool","true","Whether weather changes over time"],
      ["drowningDamage","bool","true","Whether entities take drowning damage"],
      ["enderPearlsVanishOnDeath","bool","true","Whether thrown ender pearls disappear on player death"],
      ["fallDamage","bool","true","Whether entities take fall damage"],
      ["fireDamage","bool","true","Whether entities take fire damage"],
      ["forgiveDeadPlayers","bool","true","Whether angered neutral mobs stop targeting after killing the player"],
      ["freezeDamage","bool","true","Whether entities take powder snow freeze damage"],
      ["globalSoundEvents","bool","true","Whether certain sounds (e.g. ender dragon death) are global"],
      ["keepInventory","bool","false","Whether players keep inventory on death"],
      ["lavaSourceConversion","bool","false","Whether lava can form new source blocks like water"],
      ["logAdminCommands","bool","true","Whether admin commands are logged to the server log"],
      ["maxCommandChainLength","int","65536","Max command chain length per tick"],
      ["maxEntityCramming","int","24","Max entities in the same space before suffocation damage"],
      ["mobExplosionDropDecay","bool","true","Whether mob explosions drop fewer items at higher distances"],
      ["mobGriefing","bool","true","Whether mobs can alter blocks (creeper, enderman, etc.)"],
      ["naturalRegeneration","bool","true","Whether players regenerate health passively"],
      ["playersSleepingPercentage","int","100","Percentage of players who must sleep to skip the night"],
      ["projectilesCanBreakBlocks","bool","true","Whether projectiles can break fragile blocks"],
      ["randomTickSpeed","int","3","Rate of random block ticks per chunk section per game tick"],
      ["reducedDebugInfo","bool","false","Suppress extended debug info on the F3 screen"],
      ["sendCommandFeedback","bool","true","Whether command output is shown in chat"],
      ["showDeathMessages","bool","true","Whether death messages are shown in chat"],
      ["snowAccumulationHeight","int","1","Max layers of snow that can accumulate (1–8)"],
      ["spawnRadius","int","10","Radius around world spawn where new players can spawn"],
      ["spectatorsGenerateChunks","bool","true","Whether spectators cause chunk loading"],
      ["tntExplosionDropDecay","bool","false","Whether TNT explosions drop fewer items at higher distances"],
      ["universalAnger","bool","false","Whether angered neutral mobs target any player, not just the aggressor"],
      ["waterSourceConversion","bool","true","Whether water can form new source blocks"],
      ["weatherCycle","bool","true","Whether weather changes (alias of doWeatherCycle in some versions)"]
    ],
    notes:"Rule names are case-sensitive. Omit value to query. Boolean rules accept `true`/`false`. Integer rules accept whole numbers within their valid range."
  },
  {
    id:"setworldspawn", name:"setworldspawn", alias:"",
    groups:["world"],
    tags:[],
    summary:"Set the world spawn point",
    syntaxes:[
      `/<s>setworldspawn</s> <o>[pos]</o> <o>[angle]</o>`
    ],
    params:[
      ["pos","coordinates","Spawn coordinates; defaults to executor position"],
      ["angle","float","Default facing angle for new spawns"]
    ],
    notes:"Affects all players without an individual spawnpoint set. `angle` added in 1.17. Compass needles in the overworld point to this location."
  },
  {
    id:"time", name:"time", alias:"",
    groups:["world"],
    tags:[],
    summary:"Query or change the world time",
    syntaxes:[
      `/<s>time</s> <l>add</l> <r>&lt;time&gt;</r>`,
      `/<s>time</s> <l>query</l> <r>&lt;daytime|gametime|day&gt;</r>`,
      `/<s>time</s> <l>set</l> <r>&lt;time&gt;</r>`
    ],
    params:[
      ["time","int | string","Ticks to add/set, or named value: day (1000), noon (6000), night (13000), midnight (18000)"]
    ],
    notes:"`daytime` wraps at 24000. `gametime` is total ticks since world creation and never wraps. `day` returns the number of in-game days elapsed. Named times only work with `set`."
  },
  {
    id:"weather", name:"weather", alias:"",
    groups:["world"],
    tags:[],
    summary:"Change the weather",
    syntaxes:[
      `/<s>weather</s> <r>&lt;clear|rain|thunder&gt;</r> <o>[duration]</o>`
    ],
    params:[
      ["clear | rain | thunder","enum","Target weather state"],
      ["duration","int","Duration in seconds; default and max vary by version"]
    ],
    notes:"Duration is in seconds, not ticks. Thunder implies rain — setting `thunder` also enables rain. Setting `clear` disables both."
  },
  {
    id:"worldborder", name:"worldborder", alias:"",
    groups:["world"],
    tags:[],
    summary:"Control the world border",
    syntaxes:[
      `/<s>worldborder</s> <l>add</l> <r>&lt;distance&gt;</r> <o>[time]</o>`,
      `/<s>worldborder</s> <l>center</l> <r>&lt;pos&gt;</r>`,
      `/<s>worldborder</s> <l>damage</l> <l>amount</l> <r>&lt;damagePerBlock&gt;</r>`,
      `/<s>worldborder</s> <l>damage</l> <l>buffer</l> <r>&lt;distance&gt;</r>`,
      `/<s>worldborder</s> <l>get</l>`,
      `/<s>worldborder</s> <l>set</l> <r>&lt;distance&gt;</r> <o>[time]</o>`,
      `/<s>worldborder</s> <l>warning</l> <l>distance</l> <r>&lt;distance&gt;</r>`,
      `/<s>worldborder</s> <l>warning</l> <l>time</l> <r>&lt;time&gt;</r>`
    ],
    params:[
      ["distance","float","Border size in blocks (total diameter)"],
      ["time","int","Transition time in seconds; 0 = instant"],
      ["pos","coordinates","Center position (2D, X and Z only)"],
      ["damagePerBlock","float","Damage per block outside the buffer per second"],
      ["distance (buffer)","float","Blocks outside border before damage begins"]
    ],
    notes:"Border is per-dimension. Default center is 0,0. `add` with negative distance shrinks. `warning distance` shows red vignette when within that many blocks. `warning time` shows warning when border will reach you within that many seconds."
  },
  {
    id:"spreadplayers", name:"spreadplayers", alias:"",
    groups:["world","player","entity"],
    tags:[],
    summary:"Scatter entities randomly across an area",
    syntaxes:[
      `/<s>spreadplayers</s> <r>&lt;center&gt;</r> <r>&lt;spreadDistance&gt;</r> <r>&lt;maxRange&gt;</r> <r>&lt;respectTeams&gt;</r> <r>&lt;targets&gt;</r>`,
      `/<s>spreadplayers</s> <r>&lt;center&gt;</r> <r>&lt;spreadDistance&gt;</r> <r>&lt;maxRange&gt;</r> <l>under</l> <r>&lt;maxHeight&gt;</r> <r>&lt;respectTeams&gt;</r> <r>&lt;targets&gt;</r>`
    ],
    params:[
      ["center","coordinates","Center of spread area (X Z only)"],
      ["spreadDistance","float","Minimum distance between each entity"],
      ["maxRange","float","Maximum radius from center"],
      ["respectTeams","bool","If true, keep team members together"],
      ["maxHeight","int","Maximum Y level to place entities (under variant)"],
      ["targets","entity","Entities to scatter"]
    ],
    notes:"Fails if it cannot fit all entities with the given constraints. `under` variant finds valid ground below `maxHeight`. Useful for minigame resets."
  },

  // ── BLOCKS / ITEMS ───────────────────────────────────────────────────────
  {
    id:"clone", name:"clone", alias:"",
    groups:["blocks","world"],
    tags:[],
    summary:"Copy blocks from one region to another",
    syntaxes:[
      `/<s>clone</s> <r>&lt;begin&gt;</r> <r>&lt;end&gt;</r> <r>&lt;destination&gt;</r> <o>[maskMode]</o> <o>[cloneMode]</o>`,
      `/<s>clone</s> <r>&lt;begin&gt;</r> <r>&lt;end&gt;</r> <r>&lt;destination&gt;</r> <l>filtered</l> <o>[cloneMode]</o> <r>&lt;filter&gt;</r>`
    ],
    params:[
      ["begin / end","coordinates","Source region corners"],
      ["destination","coordinates","Destination corner (lowest XYZ)"],
      ["maskMode","enum","replace | masked — masked skips air in source"],
      ["cloneMode","enum","normal | force | move — move deletes source after copy"],
      ["filter","block","Block type to filter (filtered mask mode only)"]
    ],
    notes:"`move` replaces source blocks with air after cloning. `force` allows source and destination to overlap. Destination region size is inferred from source — only the corner is specified."
  },
  {
    id:"fill", name:"fill", alias:"",
    groups:["blocks","world"],
    tags:[],
    summary:"Fill a region with a block type",
    syntaxes:[
      `/<s>fill</s> <r>&lt;from&gt;</r> <r>&lt;to&gt;</r> <r>&lt;block&gt;</r> <o>[fillMode]</o>`
    ],
    params:[
      ["from / to","coordinates","Region corners"],
      ["block","block","Block ID with optional block states and NBT"],
      ["fillMode","enum","replace | keep | outline | hollow | destroy"]
    ],
    notes:"`keep` only fills air blocks. `outline` fills only the outer shell. `hollow` fills outline and clears interior to air. `destroy` drops items from replaced blocks. Max 32768 blocks per command."
  },
  {
    id:"fillbiome", name:"fillbiome", alias:"",
    groups:["blocks","world"],
    tags:[],
    summary:"Set the biome in a region",
    syntaxes:[
      `/<s>fillbiome</s> <r>&lt;from&gt;</r> <r>&lt;to&gt;</r> <r>&lt;biome&gt;</r> <o>[replace &lt;filter&gt;]</o>`
    ],
    params:[
      ["from / to","coordinates","Region corners"],
      ["biome","resource","Biome ID to set (e.g. minecraft:desert)"],
      ["filter","resource","Only replace this biome type"]
    ],
    notes:"Added in 1.19.4. Affects the 4×4×4 biome grid — not block-precise. Client requires a reload (`F3+A`) to see visual changes."
  },
  {
    id:"setblock", name:"setblock", alias:"",
    groups:["blocks","world"],
    tags:[],
    summary:"Place a block at a specific position",
    syntaxes:[
      `/<s>setblock</s> <r>&lt;pos&gt;</r> <r>&lt;block&gt;</r> <o>[destroy|keep|replace]</o>`
    ],
    params:[
      ["pos","coordinates","Target block position"],
      ["block","block","Block ID with optional states (e.g. minecraft:stone_stairs[facing=east])"],
      ["destroy | keep | replace","enum","destroy drops items; keep only sets if air; replace (default) overwrites"]
    ],
    notes:"Block states go in brackets: `minecraft:oak_log[axis=y]`. NBT for block entities goes in braces: `minecraft:chest{Items:[]}`. Both can be combined."
  },
  {
    id:"item", name:"item", alias:"",
    groups:["blocks","entity","player"],
    tags:[],
    summary:"Modify items in inventories or block containers",
    syntaxes:[
      `/<s>item</s> <l>modify</l> <l>block</l> <r>&lt;pos&gt;</r> <r>&lt;slot&gt;</r> <r>&lt;modifier&gt;</r>`,
      `/<s>item</s> <l>modify</l> <l>entity</l> <r>&lt;targets&gt;</r> <r>&lt;slot&gt;</r> <r>&lt;modifier&gt;</r>`,
      `/<s>item</s> <l>replace</l> <l>block</l> <r>&lt;pos&gt;</r> <r>&lt;slot&gt;</r> <l>with</l> <r>&lt;item&gt;</r> <o>[count]</o>`,
      `/<s>item</s> <l>replace</l> <l>entity</l> <r>&lt;targets&gt;</r> <r>&lt;slot&gt;</r> <l>with</l> <r>&lt;item&gt;</r> <o>[count]</o>`,
      `/<s>item</s> <l>replace</l> <l>block</l> <r>&lt;pos&gt;</r> <r>&lt;slot&gt;</r> <l>from</l> <l>block</l> <r>&lt;sourcePos&gt;</r> <r>&lt;sourceSlot&gt;</r> <o>[modifier]</o>`,
      `/<s>item</s> <l>replace</l> <l>entity</l> <r>&lt;targets&gt;</r> <r>&lt;slot&gt;</r> <l>from</l> <l>entity</l> <r>&lt;sourceEntity&gt;</r> <r>&lt;sourceSlot&gt;</r> <o>[modifier]</o>`
    ],
    params:[
      ["pos","coordinates","Block container position"],
      ["targets","entity","Entity targets"],
      ["slot","slot","Slot reference (e.g. container.0, weapon.mainhand, armor.head)"],
      ["modifier","resource","Item modifier resource location"],
      ["item","item_stack","Item ID with optional NBT"],
      ["count","int","Stack count"]
    ],
    notes:"Item modifiers are defined in datapacks under `data/<ns>/item_modifiers/`. `from` copies an item from another slot, optionally applying a modifier mid-copy."
  },
  {
    id:"place", name:"place", alias:"",
    groups:["blocks","world"],
    tags:[],
    summary:"Place a structure, feature, jigsaw, or template",
    syntaxes:[
      `/<s>place</s> <l>feature</l> <r>&lt;feature&gt;</r> <o>[pos]</o>`,
      `/<s>place</s> <l>jigsaw</l> <r>&lt;pool&gt;</r> <r>&lt;target&gt;</r> <r>&lt;maxDepth&gt;</r> <o>[pos]</o>`,
      `/<s>place</s> <l>structure</l> <r>&lt;structure&gt;</r> <o>[pos]</o>`,
      `/<s>place</s> <l>template</l> <r>&lt;template&gt;</r> <o>[pos]</o> <o>[rotation]</o> <o>[mirror]</o> <o>[integrity]</o> <o>[seed]</o>`
    ],
    params:[
      ["feature","resource","Configured feature ID"],
      ["pool","resource","Jigsaw pool resource location"],
      ["target","string","Target jigsaw block name to start from"],
      ["maxDepth","int","Max jigsaw generation depth (1–7)"],
      ["structure","resource","Structure ID (e.g. minecraft:village/plains/town_center)"],
      ["template","resource","Structure template resource location"],
      ["rotation","enum","none | clockwise_90 | counterclockwise_90 | 180"],
      ["mirror","enum","none | left_right | front_back"],
      ["integrity","float","Block preservation rate 0.0–1.0"],
      ["seed","int","Seed for integrity randomization"]
    ],
    notes:"Replaces `/generate` from older versions. `feature` generates things like ore veins, trees, etc. `structure` places named structures. `template` places `.nbt` files. Integrity < 1.0 randomly omits blocks — useful for ruins effect."
  },

  // ── DISPLAY / HUD ────────────────────────────────────────────────────────
  {
    id:"bossbar", name:"bossbar", alias:"",
    groups:["display","misc"],
    tags:[],
    summary:"Create and manage boss bars",
    syntaxes:[
      `/<s>bossbar</s> <l>add</l> <r>&lt;id&gt;</r> <r>&lt;name&gt;</r>`,
      `/<s>bossbar</s> <l>remove</l> <r>&lt;id&gt;</r>`,
      `/<s>bossbar</s> <l>list</l>`,
      `/<s>bossbar</s> <l>get</l> <r>&lt;id&gt;</r> <r>&lt;max|value|players|visible&gt;</r>`,
      `/<s>bossbar</s> <l>set</l> <r>&lt;id&gt;</r> <l>color</l> <r>&lt;color&gt;</r>`,
      `/<s>bossbar</s> <l>set</l> <r>&lt;id&gt;</r> <l>max</l> <r>&lt;max&gt;</r>`,
      `/<s>bossbar</s> <l>set</l> <r>&lt;id&gt;</r> <l>name</l> <r>&lt;name&gt;</r>`,
      `/<s>bossbar</s> <l>set</l> <r>&lt;id&gt;</r> <l>players</l> <o>[targets]</o>`,
      `/<s>bossbar</s> <l>set</l> <r>&lt;id&gt;</r> <l>style</l> <r>&lt;style&gt;</r>`,
      `/<s>bossbar</s> <l>set</l> <r>&lt;id&gt;</r> <l>value</l> <r>&lt;value&gt;</r>`,
      `/<s>bossbar</s> <l>set</l> <r>&lt;id&gt;</r> <l>visible</l> <r>&lt;visible&gt;</r>`
    ],
    params:[
      ["id","resource","Unique boss bar ID (e.g. mynamespace:health)"],
      ["name","json_text","Display name as JSON text component"],
      ["color","enum","pink | blue | red | green | yellow | purple | white"],
      ["style","enum","progress | notched_6 | notched_10 | notched_12 | notched_20"],
      ["max","int","Maximum value of the bar"],
      ["value","int","Current value of the bar"],
      ["targets","entity","Players who see this bar"],
      ["visible","bool","Whether the bar is visible to assigned players"]
    ],
    notes:"Boss bars persist across reloads. Use `get` value/max for scoreboard-driven logic. `players` with no argument clears all viewers. ID namespace is required."
  },
  {
    id:"title", name:"title", alias:"",
    groups:["display","player"],
    tags:[],
    summary:"Display title, subtitle, or actionbar text to players",
    syntaxes:[
      `/<s>title</s> <r>&lt;targets&gt;</r> <l>title</l> <r>&lt;title&gt;</r>`,
      `/<s>title</s> <r>&lt;targets&gt;</r> <l>subtitle</l> <r>&lt;title&gt;</r>`,
      `/<s>title</s> <r>&lt;targets&gt;</r> <l>actionbar</l> <r>&lt;title&gt;</r>`,
      `/<s>title</s> <r>&lt;targets&gt;</r> <l>clear</l>`,
      `/<s>title</s> <r>&lt;targets&gt;</r> <l>reset</l>`,
      `/<s>title</s> <r>&lt;targets&gt;</r> <l>times</l> <r>&lt;fadeIn&gt;</r> <r>&lt;stay&gt;</r> <r>&lt;fadeOut&gt;</r>`
    ],
    params:[
      ["targets","entity","Target players"],
      ["title","json_text","Text as JSON text component"],
      ["fadeIn / stay / fadeOut","int","Timing in ticks"]
    ],
    notes:"Send `subtitle` before `title` — subtitle only displays alongside a title. `actionbar` appears above the hotbar. `reset` restores default timing values. `clear` removes visible title immediately."
  },
  {
    id:"display", name:"display", alias:"",
    groups:["display","entity"],
    tags:[],
    summary:"Summon and configure display entities (block, item, text)",
    syntaxes:[
      `/<s>summon</s> <l>minecraft:block_display</l> <o>[pos]</o> <o>[nbt]</o>`,
      `/<s>summon</s> <l>minecraft:item_display</l> <o>[pos]</o> <o>[nbt]</o>`,
      `/<s>summon</s> <l>minecraft:text_display</l> <o>[pos]</o> <o>[nbt]</o>`
    ],
    params:[
      ["pos","coordinates","Spawn position"],
      ["nbt","compound","Display entity NBT including transformation matrix, block_state, item, or text"]
    ],
    notes:"Added in 1.19.4. Display entities render without physics or hitbox. Transform via `transformation` NBT (translation/scale/rotation as left/right quaternions). `billboard` controls axis lock: fixed | vertical | horizontal | center. Interpolation duration settable via `interpolation_duration`."
  },
  {
    id:"particle", name:"particle", alias:"",
    groups:["display","world"],
    tags:[],
    summary:"Spawn a particle effect",
    syntaxes:[
      `/<s>particle</s> <r>&lt;name&gt;</r> <o>[pos]</o> <o>[delta]</o> <o>[speed]</o> <o>[count]</o> <o>[force|normal]</o> <o>[viewers]</o>`
    ],
    params:[
      ["name","resource","Particle type ID (e.g. minecraft:flame, minecraft:dust 1 0 0 1)"],
      ["pos","coordinates","Origin position"],
      ["delta","float float float","Spread offset on each axis"],
      ["speed","float","Particle speed multiplier"],
      ["count","int","Number of particles; 0 with nonzero delta uses delta as velocity vector"],
      ["force | normal","enum","force ignores player particle settings and render distance"],
      ["viewers","entity","Restrict visibility to these players"]
    ],
    notes:"Some particles take extra parameters after the ID (e.g. `dust` takes RGB + size). `count 0` with a delta vector emits one particle in that exact direction at `speed` velocity. `force` overrides the 32-block render distance limit."
  },
  {
    id:"playsound", name:"playsound", alias:"",
    groups:["display","player"],
    tags:[],
    summary:"Play a sound for players",
    syntaxes:[
      `/<s>playsound</s> <r>&lt;sound&gt;</r> <r>&lt;source&gt;</r> <r>&lt;targets&gt;</r> <o>[pos]</o> <o>[volume]</o> <o>[pitch]</o> <o>[minVolume]</o>`
    ],
    params:[
      ["sound","resource","Sound event ID (e.g. minecraft:entity.player.levelup)"],
      ["source","enum","master | music | record | weather | block | hostile | neutral | player | ambient | voice"],
      ["targets","entity","Players who hear the sound"],
      ["pos","coordinates","Sound origin position"],
      ["volume","float","Volume multiplier; > 1 increases audible range"],
      ["pitch","float","Pitch multiplier (0.5–2.0)"],
      ["minVolume","float","Minimum volume for distant players (0.0–1.0)"]
    ],
    notes:"Volume > 1 does not increase loudness beyond max — it extends audible range. `minVolume` ensures distant players hear a quiet version regardless of distance. Pitch outside 0.5–2.0 is clamped."
  },
  {
    id:"stopsound", name:"stopsound", alias:"",
    groups:["display","player"],
    tags:[],
    summary:"Stop a playing sound for players",
    syntaxes:[
      `/<s>stopsound</s> <r>&lt;targets&gt;</r> <o>[source]</o> <o>[sound]</o>`
    ],
    params:[
      ["targets","entity","Target players"],
      ["source","enum","Sound channel to stop; * for all channels"],
      ["sound","resource","Specific sound event to stop; omit to stop all in channel"]
    ],
    notes:"Omit both `source` and `sound` to stop all sounds for the target. `*` as source stops all channels. Does not stop sounds with fade-out — those play to completion."
  },

  // ── MISC / LOGIC ─────────────────────────────────────────────────────────
  {
    id:"execute", name:"execute", alias:"",
    groups:["misc","entity","world"],
    tags:[],
    summary:"Run commands with modified execution context",
    syntaxes:[
      `/<s>execute</s> <l>as</l> <r>&lt;targets&gt;</r> <l>run</l> <r>&lt;command&gt;</r>`,
      `/<s>execute</s> <l>at</l> <r>&lt;targets&gt;</r> <l>run</l> <r>&lt;command&gt;</r>`,
      `/<s>execute</s> <l>in</l> <r>&lt;dimension&gt;</r> <l>run</l> <r>&lt;command&gt;</r>`,
      `/<s>execute</s> <l>positioned</l> <r>&lt;pos&gt;</r> <l>run</l> <r>&lt;command&gt;</r>`,
      `/<s>execute</s> <l>positioned as</l> <r>&lt;targets&gt;</r> <l>run</l> <r>&lt;command&gt;</r>`,
      `/<s>execute</s> <l>rotated</l> <r>&lt;rot&gt;</r> <l>run</l> <r>&lt;command&gt;</r>`,
      `/<s>execute</s> <l>rotated as</l> <r>&lt;targets&gt;</r> <l>run</l> <r>&lt;command&gt;</r>`,
      `/<s>execute</s> <l>anchored</l> <r>&lt;eyes|feet&gt;</r> <l>run</l> <r>&lt;command&gt;</r>`,
      `/<s>execute</s> <l>align</l> <r>&lt;axes&gt;</r> <l>run</l> <r>&lt;command&gt;</r>`,
      `/<s>execute</s> <l>facing</l> <r>&lt;pos&gt;</r> <l>run</l> <r>&lt;command&gt;</r>`,
      `/<s>execute</s> <l>facing entity</l> <r>&lt;targets&gt;</r> <r>&lt;eyes|feet&gt;</r> <l>run</l> <r>&lt;command&gt;</r>`,
      `/<s>execute</s> <l>if block</l> <r>&lt;pos&gt;</r> <r>&lt;block&gt;</r>`,
      `/<s>execute</s> <l>if blocks</l> <r>&lt;start&gt;</r> <r>&lt;end&gt;</r> <r>&lt;destination&gt;</r> <r>&lt;all|masked&gt;</r>`,
      `/<s>execute</s> <l>if entity</l> <r>&lt;targets&gt;</r>`,
      `/<s>execute</s> <l>if score</l> <r>&lt;target&gt;</r> <r>&lt;objective&gt;</r> <r>&lt;operation&gt;</r> <r>&lt;source&gt;</r> <r>&lt;objective&gt;</r>`,
      `/<s>execute</s> <l>if score</l> <r>&lt;target&gt;</r> <r>&lt;objective&gt;</r> <l>matches</l> <r>&lt;range&gt;</r>`,
      `/<s>execute</s> <l>if biome</l> <r>&lt;pos&gt;</r> <r>&lt;biome&gt;</r>`,
      `/<s>execute</s> <l>if dimension</l> <r>&lt;dimension&gt;</r>`,
      `/<s>execute</s> <l>if loaded</l> <r>&lt;pos&gt;</r>`,
      `/<s>execute</s> <l>unless ...</l> <l>run</l> <r>&lt;command&gt;</r>`,
      `/<s>execute</s> <l>store result</l> <r>&lt;target&gt;</r> <r>&lt;path&gt;</r> <r>&lt;type&gt;</r> <r>&lt;scale&gt;</r> <l>run</l> <r>&lt;command&gt;</r>`,
      `/<s>execute</s> <l>store success</l> <r>&lt;target&gt;</r> <r>&lt;path&gt;</r> <r>&lt;type&gt;</r> <r>&lt;scale&gt;</r> <l>run</l> <r>&lt;command&gt;</r>`
    ],
    params:[
      ["targets","entity","Entity selector for as/at/rotated as/positioned as"],
      ["dimension","resource","Dimension ID (e.g. minecraft:overworld, minecraft:the_nether)"],
      ["pos","coordinates","Position for positioned/if block/facing"],
      ["block","block","Block predicate for if block"],
      ["axes","string","Combination of x, y, z for align (e.g. xz)"],
      ["target / source","string","Scoreboard entity or * for wildcard"],
      ["objective","string","Scoreboard objective name"],
      ["operation","enum","< | <= | = | >= | > for score comparison"],
      ["range","int_range","Integer range (e.g. 1..10, ..5, 3..)"],
      ["path","nbt_path | slot | bossbar_ref","Store destination path"],
      ["type","enum","byte | short | int | long | float | double — for NBT store"],
      ["scale","float","Multiply stored value by this factor"]
    ],
    notes:"Subcommands chain left to right and all apply to the `run` at the end. `unless` is the inverse of `if`. `store result` stores the return value of `run`; `store success` stores 1 if the command succeeded, 0 if not. `align` floors coordinates to block grid on specified axes. `anchored eyes` shifts the position origin to eye level for `^` local coordinates."
  },
  {
    id:"function", name:"function", alias:"",
    groups:["misc"],
    tags:[],
    summary:"Run a function file",
    syntaxes:[
      `/<s>function</s> <r>&lt;name&gt;</r> <o>[arguments]</o>`,
      `/<s>function</s> <r>&lt;name&gt;</r> <l>with</l> <r>&lt;source&gt;</r>`
    ],
    params:[
      ["name","resource","Function resource location (e.g. mynamespace:my_function)"],
      ["arguments","compound","Macro arguments passed to the function (1.20.2+)"],
      ["source","entity | block | storage","NBT source for macro argument resolution"]
    ],
    notes:"Functions run all commands in a single tick by default. Recursive calls are allowed but stack-depth limited. Macro functions (1.20.2+) use `$()` syntax and require argument NBT. Return value is the last command's result."
  },
  {
    id:"return", name:"return", alias:"",
    groups:["misc"],
    tags:[],
    summary:"Set a function's return value and exit early",
    syntaxes:[
      `/<s>return</s> <r>&lt;value&gt;</r>`,
      `/<s>return</s> <l>fail</l>`,
      `/<s>return</s> <l>run</l> <r>&lt;command&gt;</r>`
    ],
    params:[
      ["value","int","Integer return value"],
      ["fail","literal","Return 0 and mark function as failed"],
      ["command","command","Command whose result becomes the return value"]
    ],
    notes:"Added in 1.20. Stops function execution at this point. `return run` passes the wrapped command's result directly. Without `return`, a function's result is the last command's result."
  },
  {
    id:"say", name:"say", alias:"",
    groups:["misc","server"],
    tags:[],
    summary:"Broadcast a message to all players",
    syntaxes:[`/<s>say</s> <r>&lt;message&gt;</r>`],
    params:[["message","string","Text broadcast to all players"]],
    notes:"Prefixed with executor name in brackets. Cannot use JSON text — use `/tellraw` for formatting. Respects `commandBlockOutput` gamerule when run from command blocks."
  },
  {
    id:"schedule", name:"schedule", alias:"",
    groups:["misc","world"],
    tags:[],
    summary:"Schedule a function to run after a delay",
    syntaxes:[
      `/<s>schedule</s> <l>function</l> <r>&lt;function&gt;</r> <r>&lt;time&gt;</r> <o>[append|replace]</o>`,
      `/<s>schedule</s> <l>clear</l> <r>&lt;function&gt;</r>`
    ],
    params:[
      ["function","resource","Function to schedule"],
      ["time","int | string","Delay in ticks, or with suffix: t (ticks), s (seconds), d (days)"],
      ["append | replace","enum","append queues another execution; replace (default) cancels existing schedule"]
    ],
    notes:"Scheduled functions run at world tick level — not bound to executor context. `replace` cancels any pending schedule for that function before setting the new one. Schedules persist through `/reload`."
  },
  {
    id:"scoreboard", name:"scoreboard", alias:"",
    groups:["misc"],
    tags:[],
    summary:"Manage scoreboard objectives and player scores",
    syntaxes:[
      `/<s>scoreboard</s> <l>objectives</l> <l>add</l> <r>&lt;objective&gt;</r> <r>&lt;criteria&gt;</r> <o>[displayName]</o>`,
      `/<s>scoreboard</s> <l>objectives</l> <l>remove</l> <r>&lt;objective&gt;</r>`,
      `/<s>scoreboard</s> <l>objectives</l> <l>list</l>`,
      `/<s>scoreboard</s> <l>objectives</l> <l>setdisplay</l> <r>&lt;slot&gt;</r> <o>[objective]</o>`,
      `/<s>scoreboard</s> <l>objectives</l> <l>modify</l> <r>&lt;objective&gt;</r> <l>displayname</l> <r>&lt;name&gt;</r>`,
      `/<s>scoreboard</s> <l>objectives</l> <l>modify</l> <r>&lt;objective&gt;</r> <l>rendertype</l> <r>&lt;hearts|integer&gt;</r>`,
      `/<s>scoreboard</s> <l>players</l> <l>list</l> <o>[target]</o>`,
      `/<s>scoreboard</s> <l>players</l> <l>get</l> <r>&lt;target&gt;</r> <r>&lt;objective&gt;</r>`,
      `/<s>scoreboard</s> <l>players</l> <l>set</l> <r>&lt;targets&gt;</r> <r>&lt;objective&gt;</r> <r>&lt;score&gt;</r>`,
      `/<s>scoreboard</s> <l>players</l> <l>add</l> <r>&lt;targets&gt;</r> <r>&lt;objective&gt;</r> <r>&lt;score&gt;</r>`,
      `/<s>scoreboard</s> <l>players</l> <l>remove</l> <r>&lt;targets&gt;</r> <r>&lt;objective&gt;</r> <r>&lt;score&gt;</r>`,
      `/<s>scoreboard</s> <l>players</l> <l>reset</l> <r>&lt;targets&gt;</r> <o>[objective]</o>`,
      `/<s>scoreboard</s> <l>players</l> <l>enable</l> <r>&lt;targets&gt;</r> <r>&lt;objective&gt;</r>`,
      `/<s>scoreboard</s> <l>players</l> <l>operation</l> <r>&lt;targets&gt;</r> <r>&lt;targetObj&gt;</r> <r>&lt;operation&gt;</r> <r>&lt;source&gt;</r> <r>&lt;sourceObj&gt;</r>`
    ],
    params:[
      ["objective","string","Scoreboard objective name (max 16 chars)"],
      ["criteria","string","Tracking criteria (e.g. dummy, playerKillCount, minecraft.mined:minecraft.stone)"],
      ["displayName","json_text","Optional display name as JSON text"],
      ["slot","enum","list | sidebar | belowName | sidebar.team.<color>"],
      ["target / targets","string | entity","Player name, entity selector, or fake player name"],
      ["score","int","Integer score value"],
      ["operation","enum","+= | -= | *= | /= | %= | = | < | > | >< (swap)"]
    ],
    notes:"`dummy` criteria requires manual score changes. `enable` is required before a player can use `/trigger` on that objective. `operation` `><` swaps scores between target and source. `reset` without objective removes all scores for that entity. Fake player names (starting with `#`) are never shown to players but can hold scores."
  },
  {
    id:"tag", name:"tag", alias:"",
    groups:["misc","entity"],
    tags:[],
    summary:"Add or remove tags from entities",
    syntaxes:[
      `/<s>tag</s> <r>&lt;targets&gt;</r> <l>add</l> <r>&lt;name&gt;</r>`,
      `/<s>tag</s> <r>&lt;targets&gt;</r> <l>remove</l> <r>&lt;name&gt;</r>`,
      `/<s>tag</s> <r>&lt;targets&gt;</r> <l>list</l>`
    ],
    params:[
      ["targets","entity","Entity selector"],
      ["name","string","Tag string (max 256 chars)"]
    ],
    notes:"Tags are queryable via `@e[tag=name]`. Each entity can hold up to 1024 tags. Tags are stored in entity NBT under `Tags`. No spaces in tag names."
  },
  {
    id:"team", name:"team", alias:"",
    groups:["misc"],
    tags:[],
    summary:"Manage scorebaord teams",
    syntaxes:[
      `/<s>team</s> <l>add</l> <r>&lt;team&gt;</r> <o>[displayName]</o>`,
      `/<s>team</s> <l>remove</l> <r>&lt;team&gt;</r>`,
      `/<s>team</s> <l>empty</l> <r>&lt;team&gt;</r>`,
      `/<s>team</s> <l>join</l> <r>&lt;team&gt;</r> <o>[members]</o>`,
      `/<s>team</s> <l>leave</l> <r>&lt;members&gt;</r>`,
      `/<s>team</s> <l>list</l> <o>[team]</o>`,
      `/<s>team</s> <l>modify</l> <r>&lt;team&gt;</r> <r>&lt;option&gt;</r> <r>&lt;value&gt;</r>`
    ],
    params:[
      ["team","string","Team name"],
      ["displayName","json_text","Team display name as JSON text"],
      ["members","entity | string","Entities or fake player names to add/remove"],
      ["option","enum","collisionRule | deathMessageVisibility | displayName | friendlyFire | nametagVisibility | prefix | suffix | seeFriendlyInvisibles | color"],
      ["value","string","Value appropriate to the option"]
    ],
    notes:"`collisionRule` options: always | never | pushOtherTeams | pushOwnTeam. `nametagVisibility` / `deathMessageVisibility`: always | never | hideForOtherTeams | hideForOwnTeam. `seeFriendlyInvisibles` is bool. `color` sets nametag and chat color."
  },
  {
    id:"tellraw", name:"tellraw", alias:"",
    groups:["misc","display","player"],
    tags:[],
    summary:"Send a formatted JSON text message to players",
    syntaxes:[
      `/<s>tellraw</s> <r>&lt;targets&gt;</r> <r>&lt;message&gt;</r>`
    ],
    params:[
      ["targets","entity","Target players"],
      ["message","json_text","JSON text component or array of components"]
    ],
    notes:"Supports full JSON text: color, bold, italic, click events, hover events, score display, entity names, keybind display, NBT values. Array form concatenates components. Use `translate` key for localization-aware messages."
  },
  {
    id:"trigger", name:"trigger", alias:"",
    groups:["misc","player"],
    tags:[],
    summary:"Allow players to self-modify a scoreboard objective",
    syntaxes:[
      `/<s>trigger</s> <r>&lt;objective&gt;</r>`,
      `/<s>trigger</s> <r>&lt;objective&gt;</r> <l>add</l> <r>&lt;value&gt;</r>`,
      `/<s>trigger</s> <r>&lt;objective&gt;</r> <l>set</l> <r>&lt;value&gt;</r>`
    ],
    params:[
      ["objective","string","Scoreboard objective with `trigger` criteria"],
      ["value","int","Amount to add or absolute value to set"]
    ],
    notes:"Requires `/scoreboard players enable <player> <objective>` first. Resets the enabled state after use — must be re-enabled each time. Allows non-op players to signal game logic without granting command permissions."
  },
  {
    id:"locate", name:"locate", alias:"",
    groups:["misc","world"],
    tags:[],
    summary:"Find the nearest structure or biome",
    syntaxes:[
      `/<s>locate</s> <l>structure</l> <r>&lt;structure&gt;</r>`,
      `/<s>locate</s> <l>biome</l> <r>&lt;biome&gt;</r>`,
      `/<s>locate</s> <l>poi</l> <r>&lt;poi&gt;</r>`
    ],
    params:[
      ["structure","resource","Structure ID (e.g. minecraft:village)"],
      ["biome","resource","Biome ID (e.g. minecraft:mushroom_fields)"],
      ["poi","resource","Point of interest type (e.g. minecraft:home)"]
    ],
    notes:"Searches outward from executor position. May cause chunk generation in the search radius. Returns coordinates in chat — not a teleport. `poi` added in 1.19.4."
  },
  {
    id:"me", name:"me", alias:"",
    groups:["misc","player"],
    tags:[],
    summary:"Send an action message in chat",
    syntaxes:[`/<s>me</s> <r>&lt;message&gt;</r>`],
    params:[["message","string","Action text displayed as '* Name text'"]],
    notes:"Displays as italicized action text. No operator permission required."
  },
  {
    id:"debug", name:"debug", alias:"",
    groups:["misc"],
    tags:["dev"],
    summary:"Control the server debug profiler",
    syntaxes:[
      `/<s>debug</s> <l>start</l>`,
      `/<s>debug</s> <l>stop</l>`,
      `/<s>debug</s> <l>function</l> <r>&lt;name&gt;</r>`
    ],
    params:[["name","resource","Function to profile"]],
    notes:"Writes profiling data to `debug/` directory. `function` mode profiles a single function call. Results are viewable with the Java Flight Recorder or as `.txt` summaries."
  },
  {
    id:"jfr", name:"jfr", alias:"",
    groups:["misc"],
    tags:["dev"],
    summary:"Control Java Flight Recorder profiling",
    syntaxes:[
      `/<s>jfr</s> <l>start</l>`,
      `/<s>jfr</s> <l>stop</l>`
    ],
    params:[],
    notes:"Requires JFR-capable JVM. Writes `.jfr` recording file to the server directory. Use JDK Mission Control or similar to analyze results."
  },
  {
    id:"publish", name:"publish", alias:"",
    groups:["misc"],
    tags:["dev"],
    summary:"Open a singleplayer world to LAN",
    syntaxes:[
      `/<s>publish</s> <o>[allowCommands]</o> <o>[gamemode]</o> <o>[port]</o>`
    ],
    params:[
      ["allowCommands","bool","Whether other players can use commands"],
      ["gamemode","enum","Game mode for joining players"],
      ["port","int","LAN port to use; default is random"]
    ],
    notes:"Only available in singleplayer. Once opened, cannot be closed without restarting the world. Port parameter added in 1.18."
  },
  {
    id:"random", name:"random", alias:"",
    groups:["misc"],
    tags:[],
    summary:"Generate a random value or control random sequences",
    syntaxes:[
      `/<s>random</s> <l>value</l> <r>&lt;range&gt;</r>`,
      `/<s>random</s> <l>roll</l> <r>&lt;range&gt;</r> <o>[sequenceId]</o>`,
      `/<s>random</s> <l>reset</l> <r>&lt;sequenceId&gt;</r> <o>[seed]</o> <o>[includeWorldSeed]</o> <o>[includeSequenceId]</o>`
    ],
    params:[
      ["range","int_range","Integer range to pick from (e.g. 1..6)"],
      ["sequenceId","resource","Named sequence for deterministic random"],
      ["seed","int","Seed value for reset"],
      ["includeWorldSeed","bool","Mix in world seed when computing sequence seed"],
      ["includeSequenceId","bool","Mix in sequence ID string when computing seed"]
    ],
    notes:"Added in 1.20.2. `value` is non-deterministic. `roll` uses a named sequence for reproducible results — same seed + same calls = same output. Result is usable via `execute store`."
  },
  {
    id:"tick", name:"tick", alias:"",
    groups:["misc","world"],
    tags:[],
    summary:"Control the server tick rate",
    syntaxes:[
      `/<s>tick</s> <l>query</l>`,
      `/<s>tick</s> <l>rate</l> <r>&lt;rate&gt;</r>`,
      `/<s>tick</s> <l>freeze</l>`,
      `/<s>tick</s> <l>unfreeze</l>`,
      `/<s>tick</s> <l>step</l> <o>[ticks]</o>`,
      `/<s>tick</s> <l>step</l> <l>stop</l>`,
      `/<s>tick</s> <l>sprint</l> <r>&lt;ticks&gt;</r>`,
      `/<s>tick</s> <l>sprint</l> <l>stop</l>`
    ],
    params:[
      ["rate","float","Target ticks per second (1–10000); default 20"],
      ["ticks","int","Number of ticks to step or sprint"]
    ],
    notes:"Added in 1.20.3. Replaces the old `/tick` from older snapshot builds. `freeze` halts all game ticks. `step` advances by N ticks while frozen. `sprint` runs ticks as fast as possible for N ticks then returns to normal rate — useful for fast-forwarding simulations."
  },

  // ── STRUCTURES / DATAPACKS ───────────────────────────────────────────────
  {
    id:"datapack", name:"datapack", alias:"",
    groups:["misc","world"],
    tags:[],
    summary:"Manage loaded datapacks",
    syntaxes:[
      `/<s>datapack</s> <l>enable</l> <r>&lt;name&gt;</r> <o>[first|last|before &lt;existing&gt;|after &lt;existing&gt;]</o>`,
      `/<s>datapack</s> <l>disable</l> <r>&lt;name&gt;</r>`,
      `/<s>datapack</s> <l>list</l> <o>[available|enabled]</o>`
    ],
    params:[
      ["name","string","Datapack folder or zip name in quotes (e.g. \"file/mypack\")"],
      ["existing","string","Reference datapack for priority ordering"]
    ],
    notes:"Priority order determines which datapack wins on tag/function conflicts — last enabled = highest priority. Datapacks must be in the `datapacks/` folder of the world save. `list available` shows unloaded packs."
  },
  {
    id:"forceload", name:"forceload", alias:"",
    groups:["world","misc"],
    tags:[],
    summary:"Force chunks to remain loaded",
    syntaxes:[
      `/<s>forceload</s> <l>add</l> <r>&lt;from&gt;</r> <o>[to]</o>`,
      `/<s>forceload</s> <l>remove</l> <r>&lt;from&gt;</r> <o>[to]</o>`,
      `/<s>forceload</s> <l>remove</l> <l>all</l>`,
      `/<s>forceload</s> <l>query</l> <o>[pos]</o>`
    ],
    params:[
      ["from / to","coordinates","Chunk corners (block or chunk coordinates)"],
      ["pos","coordinates","Position to query if that chunk is force-loaded"]
    ],
    notes:"Force-loaded chunks tick even with no players nearby. Persists through server restart. Use sparingly — each force-loaded chunk has ongoing CPU cost. Coordinates are interpreted as block positions and converted to chunk coordinates internally."
  }
];

// Strip stubs before registration: empty groups[] or id ending in '2'
SECTIONS.register({
  id:            'java',
  label:         'Java Commands',
  badge:         'Minecraft Java Edition · All Commands',
  commandPrefix: '/',
  accent: {
    '--blue':      '#7fff00',
    '--blue-dim':  '#3a7000',
    '--blue-glow': 'rgba(127,255,0,0.13)'
  },
  filters: [
    { key:'all',     label:'All'          },
    { key:'server',  label:'Server'       },
    { key:'player',  label:'Player'       },
    { key:'entity',  label:'Entity'       },
    { key:'world',   label:'World'        },
    { key:'blocks',  label:'Blocks/Items' },
    { key:'display', label:'Display/HUD'  },
    { key:'misc',    label:'Misc'         },
    { key:'dev',     label:'Dev Only'     }
  ],
  groupOrder: ['server','player','entity','world','blocks','display','misc'],
  groupMeta: {
    server:  '⬡ Server',
    player:  '⬡ Player',
    entity:  '⬡ Entity',
    world:   '⬡ World',
    blocks:  '⬡ Blocks / Items',
    display: '⬡ Display / HUD',
    misc:    '⬡ Misc / Logic'
  },
  commands: _JAVA_RAW.filter(c => c.groups.length > 0 && !c.id.endsWith('2'))
});
