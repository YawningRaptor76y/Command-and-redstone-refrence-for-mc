// ─── BEDROCK COMMAND DATA ────────────────────────────────────────────────────
// Self-registering data file. Loads after core.js.
// Stubs (empty groups or id ending in '2') are filtered here before register().

const _BEDROCK_RAW = [
  // ── SERVER ──────────────────────────────────────────────────────────────
  {
    id:"ability", name:"ability", alias:"",
    groups:["server","player","edu"],
    tags:["edu"],
    summary:"Grant or revoke player abilities",
    syntaxes:[
      `/<s>ability</s> <r>&lt;player: target&gt;</r> <l>worldbuilder|mayfly|mute</l> <r>&lt;true|false&gt;</r>`
    ],
    params:[
      ["player","target","Target player selector or name"],
      ["ability","enum","worldbuilder — block placement; mayfly — free flight; mute — chat suppression"],
      ["value","bool","true to grant, false to revoke"]
    ],
    notes:"Requires EDU mode enabled. `worldbuilder` lets the player place/destroy any block regardless of permissions."
  },
  {
    id:"camerashake", name:"camerashake", alias:"",
    groups:["server","player","display"],
    tags:[],
    summary:"Apply a camera shake effect to a player",
    syntaxes:[
      `/<s>camerashake</s> <l>add</l> <r>&lt;player: target&gt;</r> <o>[intensity: float]</o> <o>[seconds: float]</o> <o>[shakeType: CameraShakeType]</o>`,
      `/<s>camerashake</s> <l>stop</l> <o>[player: target]</o>`
    ],
    params:[
      ["player","target","Target player"],
      ["intensity","float","Shake strength (0.0–4.0)"],
      ["seconds","float","Duration in seconds"],
      ["shakeType","enum","positional or rotational"]
    ],
    notes:"Max intensity is 4.0. Use `stop` to cancel early. Stacks with multiple calls."
  },
  {
    id:"clearspawnpoint", name:"clearspawnpoint", alias:"",
    groups:["server","player"],
    tags:[],
    summary:"Remove a player's custom spawnpoint",
    syntaxes:[
      `/<s>clearspawnpoint</s> <o>[player: target]</o>`
    ],
    params:[
      ["player","target","Target player; defaults to executor"]
    ],
    notes:"Reverts player to world spawn. Does not affect `/setworldspawn`."
  },
  {
    id:"kick", name:"kick", alias:"",
    groups:["server","player"],
    tags:["srv"],
    summary:"Remove a player from the server",
    syntaxes:[
      `/<s>kick</s> <r>&lt;player: target&gt;</r> <o>[reason: string]</o>`
    ],
    params:[
      ["player","target","Player name or selector"],
      ["reason","string","Optional kick message shown to player"]
    ],
    notes:"Cannot kick operators. Reason string supports spaces without quotes."
  },
  {
    id:"list", name:"list", alias:"",
    groups:["server"],
    tags:["srv"],
    summary:"List all online players",
    syntaxes:[`/<s>list</s>`],
    params:[],
    notes:"Returns player count and names. Useful for scripts and RCON monitoring."
  },
  {
    id:"me", name:"me", alias:"",
    groups:["server","player","misc"],
    tags:[],
    summary:"Send an action message in chat",
    syntaxes:[`/<s>me</s> <r>&lt;message: string&gt;</r>`],
    params:[["message","string","Action text displayed as '* Name text'"]],
    notes:"Displays as italicized action text. No permission restriction."
  },
  {
    id:"msg", name:"msg", alias:"w, tell",
    groups:["server","player","misc"],
    tags:[],
    summary:"Send a private message to a player",
    syntaxes:[
      `/<s>msg</s> <r>&lt;player: target&gt;</r> <r>&lt;message: string&gt;</r>`
    ],
    params:[
      ["player","target","Recipient selector"],
      ["message","string","Private message content"]
    ],
    notes:"Aliases: `w`, `tell`. Only sender and recipient see the message."
  },
  {
    id:"op", name:"op", alias:"",
    groups:["server","player"],
    tags:["srv"],
    summary:"Grant operator status to a player",
    syntaxes:[`/<s>op</s> <r>&lt;player: target&gt;</r>`],
    params:[["player","target","Player to promote"]],
    notes:"Operators bypass most permission checks. Use `deop` to revoke."
  },
  {
    id:"deop", name:"deop", alias:"",
    groups:["server","player"],
    tags:["srv"],
    summary:"Revoke operator status from a player",
    syntaxes:[`/<s>deop</s> <r>&lt;player: target&gt;</r>`],
    params:[["player","target","Player to demote"]],
    notes:"Cannot deop yourself via command. Edit `ops.json` manually if needed."
  },
  {
    id:"permissions", name:"permissions", alias:"",
    groups:["server","player"],
    tags:["srv"],
    summary:"Reload or list permission levels",
    syntaxes:[
      `/<s>permissions</s> <l>reload</l>`,
      `/<s>permissions</s> <l>list</l>`
    ],
    params:[],
    notes:"Reloads `permissions.json`. Changes apply immediately without restart."
  },
  {
    id:"reload", name:"reload", alias:"",
    groups:["server"],
    tags:["srv"],
    summary:"Reload all functions, scripts, and resource packs",
    syntaxes:[`/<s>reload</s>`],
    params:[],
    notes:"Does not restart the server. Reloads `.mcfunction` files and behavior packs."
  },
  {
    id:"say", name:"say", alias:"",
    groups:["server","misc"],
    tags:[],
    summary:"Broadcast a message to all players",
    syntaxes:[`/<s>say</s> <r>&lt;message: string&gt;</r>`],
    params:[["message","string","Text sent to all players"]],
    notes:"Prefixed with sender name in brackets. Ignores `sendCommandFeedback` gamerule."
  },
  {
    id:"stop", name:"stop", alias:"",
    groups:["server"],
    tags:["srv"],
    summary:"Stop the server",
    syntaxes:[`/<s>stop</s>`],
    params:[],
    notes:"Gracefully saves and shuts down. No confirmation prompt."
  },
  {
    id:"whitelist", name:"whitelist", alias:"",
    groups:["server"],
    tags:["srv"],
    summary:"Manage the server whitelist",
    syntaxes:[
      `/<s>whitelist</s> <l>add</l> <r>&lt;player: string&gt;</r>`,
      `/<s>whitelist</s> <l>remove</l> <r>&lt;player: string&gt;</r>`,
      `/<s>whitelist</s> <l>list</l>`,
      `/<s>whitelist</s> <l>on</l>`,
      `/<s>whitelist</s> <l>off</l>`,
      `/<s>whitelist</s> <l>reload</l>`
    ],
    params:[["player","string","Player name (not selector)"]],
    notes:"Whitelist stored in `whitelist.json`. `reload` re-reads the file from disk."
  },

  // ── PLAYER ──────────────────────────────────────────────────────────────
  {
    id:"clear", name:"clear", alias:"",
    groups:["player"],
    tags:[],
    summary:"Remove items from a player's inventory",
    syntaxes:[
      `/<s>clear</s> <o>[player: target]</o> <o>[itemName: Item]</o> <o>[data: int]</o> <o>[maxCount: int]</o>`
    ],
    params:[
      ["player","target","Target player; defaults to executor"],
      ["itemName","Item","Item ID to remove"],
      ["data","int","Data value / damage value; -1 = any"],
      ["maxCount","int","Max items to remove; 0 = count only"]
    ],
    notes:"Use `maxCount: 0` to check if a player has the item without removing it. Returns count removed."
  },
  {
    id:"effect", name:"effect", alias:"",
    groups:["player","entity"],
    tags:[],
    summary:"Apply or remove status effects",
    syntaxes:[
      `/<s>effect</s> <r>&lt;player: target&gt;</r> <r>&lt;effect: Effect&gt;</r> <o>[seconds: int]</o> <o>[amplifier: int]</o> <o>[hideParticles: bool]</o>`,
      `/<s>effect</s> <r>&lt;player: target&gt;</r> <l>clear</l>`
    ],
    params:[
      ["player","target","Target entity or player"],
      ["effect","Effect","Effect ID (e.g. speed, blindness)"],
      ["seconds","int","Duration; max 1000000"],
      ["amplifier","int","Level - 1 (0 = level 1); max 255"],
      ["hideParticles","bool","true hides effect particles"]
    ],
    notes:"Use `clear` to remove all active effects. Amplifier 0 = level I."
  },
  {
    id:"enchant", name:"enchant", alias:"",
    groups:["player"],
    tags:[],
    summary:"Enchant a player's held item",
    syntaxes:[
      `/<s>enchant</s> <r>&lt;player: target&gt;</r> <r>&lt;enchantmentId: int&gt;</r> <o>[level: int]</o>`,
      `/<s>enchant</s> <r>&lt;player: target&gt;</r> <r>&lt;enchantmentName: Enchantment&gt;</r> <o>[level: int]</o>`
    ],
    params:[
      ["player","target","Target player"],
      ["enchantmentId / Name","int | Enchantment","Numeric ID or named enchantment"],
      ["level","int","Enchantment level; max depends on type"]
    ],
    notes:"Applies to the item currently held in the main hand. Incompatible enchantments can be forced via command."
  },
  {
    id:"experience", name:"experience", alias:"xp",
    groups:["player"],
    tags:[],
    summary:"Add, set, or query player experience",
    syntaxes:[
      `/<s>experience</s> <l>add</l> <r>&lt;player: target&gt;</r> <r>&lt;amount: int&gt;</r> <o>[points|levels]</o>`,
      `/<s>experience</s> <l>set</l> <r>&lt;player: target&gt;</r> <r>&lt;amount: int&gt;</r> <o>[points|levels]</o>`,
      `/<s>experience</s> <l>query</l> <r>&lt;player: target&gt;</r> <l>points|levels</l>`
    ],
    params:[
      ["player","target","Target player"],
      ["amount","int","XP amount; negative values subtract"],
      ["points|levels","enum","Unit type; defaults to points"]
    ],
    notes:"Alias: `xp`. Use negative values with `add` to subtract. `query` returns current value to chat."
  },
  {
    id:"fog", name:"fog", alias:"",
    groups:["player","display","world"],
    tags:[],
    summary:"Push or pop fog settings for a player",
    syntaxes:[
      `/<s>fog</s> <r>&lt;player: target&gt;</r> <l>push</l> <r>&lt;fogId: string&gt;</r> <r>&lt;userProvidedId: string&gt;</r>`,
      `/<s>fog</s> <r>&lt;player: target&gt;</r> <l>pop</l> <r>&lt;userProvidedId: string&gt;</r>`,
      `/<s>fog</s> <r>&lt;player: target&gt;</r> <l>remove</l> <r>&lt;userProvidedId: string&gt;</r>`
    ],
    params:[
      ["player","target","Target player"],
      ["fogId","string","Fog definition ID from resource pack"],
      ["userProvidedId","string","Unique identifier for this fog layer"]
    ],
    notes:"Fog stack is per-player. `pop` removes the top entry matching the ID. `remove` removes all matching entries."
  },
  {
    id:"gamemode", name:"gamemode", alias:"gm",
    groups:["player"],
    tags:[],
    summary:"Set a player's game mode",
    syntaxes:[
      `/<s>gamemode</s> <r>&lt;gameMode: GameMode&gt;</r> <o>[player: target]</o>`,
      `/<s>gamemode</s> <r>&lt;gameMode: int&gt;</r> <o>[player: target]</o>`
    ],
    params:[
      ["gameMode","GameMode | int","survival/s/0, creative/c/1, adventure/a/2, spectator/sp/6"],
      ["player","target","Target player; defaults to executor"]
    ],
    notes:"Alias: `gm`. Spectator mode is value 6 in Bedrock (not 3 like Java)."
  },
  {
    id:"give", name:"give", alias:"",
    groups:["player"],
    tags:[],
    summary:"Give items to a player",
    syntaxes:[
      `/<s>give</s> <r>&lt;player: target&gt;</r> <r>&lt;itemName: Item&gt;</r> <o>[amount: int]</o> <o>[data: int]</o> <o>[components: json]</o>`
    ],
    params:[
      ["player","target","Target player"],
      ["itemName","Item","Item identifier (e.g. minecraft:diamond)"],
      ["amount","int","Stack size; max 32767"],
      ["data","int","Damage/data value"],
      ["components","json","NBT-style item components"]
    ],
    notes:"Amount above stack size splits into multiple stacks. Components allow custom names, lore, enchants."
  },
  {
    id:"immutableworld", name:"immutableworld", alias:"",
    groups:["player","world","edu"],
    tags:["edu"],
    summary:"Toggle immutable world (no block changes)",
    syntaxes:[`/<s>immutableworld</s> <o>[true|false]</o>`],
    params:[["value","bool","true = no block changes; false = normal"]],
    notes:"EDU feature. Prevents all block placement and destruction when enabled."
  },
  {
    id:"inputpermission", name:"inputpermission", alias:"",
    groups:["player"],
    tags:[],
    summary:"Set player input permissions (movement, camera)",
    syntaxes:[
      `/<s>inputpermission</s> <l>set</l> <r>&lt;player: target&gt;</r> <r>&lt;permission: InputPermission&gt;</r> <r>&lt;state: enabled|disabled&gt;</r>`,
      `/<s>inputpermission</s> <l>query</l> <r>&lt;player: target&gt;</r> <r>&lt;permission: InputPermission&gt;</r> <r>&lt;state: enabled|disabled&gt;</r>`
    ],
    params:[
      ["player","target","Target player"],
      ["permission","InputPermission","movement or camera"],
      ["state","enum","enabled or disabled"]
    ],
    notes:"Disabling `movement` locks the player in place. Disabling `camera` prevents camera rotation."
  },
  {
    id:"kill", name:"kill", alias:"",
    groups:["player","entity"],
    tags:[],
    summary:"Instantly kill entities",
    syntaxes:[`/<s>kill</s> <o>[target: target]</o>`],
    params:[["target","target","Entity selector; defaults to executor"]],
    notes:"Deals fatal damage, triggers death events and drops. Does not bypass invulnerability on some entities."
  },
  {
    id:"music", name:"music", alias:"",
    groups:["player","display"],
    tags:[],
    summary:"Control background music for players",
    syntaxes:[
      `/<s>music</s> <l>play</l> <r>&lt;trackName: string&gt;</r> <o>[volume: float]</o> <o>[fadeSeconds: float]</o> <o>[repeatMode: repeat|play_once]</o>`,
      `/<s>music</s> <l>queue</l> <r>&lt;trackName: string&gt;</r> <o>[volume: float]</o> <o>[fadeSeconds: float]</o> <o>[repeatMode: repeat|play_once]</o>`,
      `/<s>music</s> <l>stop</l> <o>[fadeSeconds: float]</o>`,
      `/<s>music</s> <l>volume</l> <r>&lt;volume: float&gt;</r>`
    ],
    params:[
      ["trackName","string","Sound event name from resource pack"],
      ["volume","float","0.0–1.0"],
      ["fadeSeconds","float","Crossfade duration"],
      ["repeatMode","enum","repeat or play_once"]
    ],
    notes:"Music layer is separate from sound effects. `queue` waits for current track to finish."
  },
  {
    id:"playsound", name:"playsound", alias:"",
    groups:["player","display"],
    tags:[],
    summary:"Play a sound effect for players",
    syntaxes:[
      `/<s>playsound</s> <r>&lt;sound: string&gt;</r> <o>[player: target]</o> <o>[x y z]</o> <o>[volume: float]</o> <o>[pitch: float]</o> <o>[minVolume: float]</o>`
    ],
    params:[
      ["sound","string","Sound event ID"],
      ["player","target","Who hears the sound"],
      ["x y z","coords","Origin position"],
      ["volume","float","Audible radius scale"],
      ["pitch","float","1.0 = normal pitch"],
      ["minVolume","float","Volume at max distance"]
    ],
    notes:"Sound events defined in `sounds.json`. Volume controls distance falloff, not actual loudness directly."
  },
  {
    id:"ride", name:"ride", alias:"",
    groups:["player","entity"],
    tags:[],
    summary:"Make entities ride or stop riding other entities",
    syntaxes:[
      `/<s>ride</s> <r>&lt;riders: target&gt;</r> <l>start_riding</l> <r>&lt;ride: target&gt;</r> <o>[teleportRider: TeleportRules]</o> <o>[howToFill: FillType]</o>`,
      `/<s>ride</s> <r>&lt;riders: target&gt;</r> <l>stop_riding</l>`,
      `/<s>ride</s> <r>&lt;rides: target&gt;</r> <l>evict_riders</l>`,
      `/<s>ride</s> <r>&lt;rides: target&gt;</r> <l>summon_rider</l> <r>&lt;entityType: EntityType&gt;</r> <o>[spawnEvent]</o> <o>[nameTag]</o>`,
      `/<s>ride</s> <r>&lt;riders: target&gt;</r> <l>summon_ride</l> <r>&lt;entityType: EntityType&gt;</r> <o>[rideRules]</o> <o>[spawnEvent]</o> <o>[nameTag]</o>`
    ],
    params:[
      ["riders","target","Entity that will ride"],
      ["ride","target","Entity to be ridden"],
      ["entityType","EntityType","Type to summon as rider/ride"],
      ["teleportRider","TeleportRules","teleport_rider or no_teleport"],
      ["howToFill","FillType","until_full or no_fill"]
    ],
    notes:"Entities must have ride-compatible components. `evict_riders` removes all current passengers."
  },
  {
    id:"spawnpoint", name:"spawnpoint", alias:"",
    groups:["player"],
    tags:[],
    summary:"Set a player's individual spawn point",
    syntaxes:[
      `/<s>spawnpoint</s> <o>[player: target]</o> <o>[x y z]</o>`
    ],
    params:[
      ["player","target","Target player; defaults to executor"],
      ["x y z","coords","Spawn position; defaults to current position"]
    ],
    notes:"Overrides world spawn for that player. Use `clearspawnpoint` to reset."
  },
  {
    id:"stopsound", name:"stopsound", alias:"",
    groups:["player","display"],
    tags:[],
    summary:"Stop sounds playing for a player",
    syntaxes:[
      `/<s>stopsound</s> <r>&lt;player: target&gt;</r> <o>[sound: string]</o>`
    ],
    params:[
      ["player","target","Target player"],
      ["sound","string","Sound event to stop; omit to stop all"]
    ],
    notes:"Stops looping and one-shot sounds. Does not affect music layer (use `/music stop`)."
  },
  {
    id:"tag", name:"tag", alias:"",
    groups:["player","entity"],
    tags:[],
    summary:"Add, remove, or list entity tags",
    syntaxes:[
      `/<s>tag</s> <r>&lt;entity: target&gt;</r> <l>add</l> <r>&lt;name: string&gt;</r>`,
      `/<s>tag</s> <r>&lt;entity: target&gt;</r> <l>remove</l> <r>&lt;name: string&gt;</r>`,
      `/<s>tag</s> <r>&lt;entity: target&gt;</r> <l>list</l>`
    ],
    params:[
      ["entity","target","Target entity"],
      ["name","string","Tag string (case-sensitive)"]
    ],
    notes:"Tags are queryable via `@e[tag=name]`. Max 1024 tags per entity. Tags persist through saves."
  },
  {
    id:"teleport", name:"teleport", alias:"tp",
    groups:["player","entity"],
    tags:[],
    summary:"Teleport entities to a location or another entity",
    syntaxes:[
      `/<s>teleport</s> <r>&lt;destination: target&gt;</r>`,
      `/<s>teleport</s> <r>&lt;location: x y z&gt;</r> <o>[yRot: float]</o> <o>[xRot: float]</o>`,
      `/<s>teleport</s> <r>&lt;victim: target&gt;</r> <r>&lt;destination: target&gt;</r>`,
      `/<s>teleport</s> <r>&lt;victim: target&gt;</r> <r>&lt;location: x y z&gt;</r> <o>[yRot]</o> <o>[xRot]</o>`,
      `/<s>teleport</s> <r>&lt;victim: target&gt;</r> <r>&lt;location: x y z&gt;</r> <l>facing</l> <r>&lt;lookAtEntity: target&gt;</r>`,
      `/<s>teleport</s> <r>&lt;victim: target&gt;</r> <r>&lt;location: x y z&gt;</r> <l>facing</l> <r>&lt;lookAtPosition: x y z&gt;</r>`
    ],
    params:[
      ["victim","target","Entity to teleport"],
      ["destination","target","Entity to teleport to"],
      ["location","x y z","Absolute or relative coordinates"],
      ["yRot / xRot","float","Yaw and pitch angles"],
      ["facing","keyword","Face toward entity or position"]
    ],
    notes:"Alias: `tp`. Relative coords use `~`. Local coords use `^`. `facing` overrides rotation args."
  },
  {
    id:"title", name:"title", alias:"",
    groups:["player","display"],
    tags:[],
    summary:"Display title, subtitle, or actionbar text",
    syntaxes:[
      `/<s>title</s> <r>&lt;player: target&gt;</r> <l>title</l> <r>&lt;titleText: string&gt;</r>`,
      `/<s>title</s> <r>&lt;player: target&gt;</r> <l>subtitle</l> <r>&lt;subtitleText: string&gt;</r>`,
      `/<s>title</s> <r>&lt;player: target&gt;</r> <l>actionbar</l> <r>&lt;actionbarText: string&gt;</r>`,
      `/<s>title</s> <r>&lt;player: target&gt;</r> <l>clear</l>`,
      `/<s>title</s> <r>&lt;player: target&gt;</r> <l>reset</l>`,
      `/<s>title</s> <r>&lt;player: target&gt;</r> <l>times</l> <r>&lt;fadeIn: int&gt;</r> <r>&lt;stay: int&gt;</r> <r>&lt;fadeOut: int&gt;</r>`
    ],
    params:[
      ["player","target","Target player"],
      ["titleText / subtitleText","string","Display text; supports § color codes"],
      ["fadeIn / stay / fadeOut","int","Timing in ticks (20 ticks = 1 second)"]
    ],
    notes:"Set subtitle before title — subtitle only displays alongside a title. `times` persists until reset or changed."
  },
  {
    id:"titleraw", name:"titleraw", alias:"",
    groups:["player","display"],
    tags:[],
    summary:"Display title text using raw JSON",
    syntaxes:[
      `/<s>titleraw</s> <r>&lt;player: target&gt;</r> <l>title|subtitle|actionbar</l> <r>&lt;raw json: json&gt;</r>`,
      `/<s>titleraw</s> <r>&lt;player: target&gt;</r> <l>times</l> <r>&lt;fadeIn: int&gt;</r> <r>&lt;stay: int&gt;</r> <r>&lt;fadeOut: int&gt;</r>`,
      `/<s>titleraw</s> <r>&lt;player: target&gt;</r> <l>clear</l>`,
      `/<s>titleraw</s> <r>&lt;player: target&gt;</r> <l>reset</l>`
    ],
    params:[
      ["player","target","Target player"],
      ["raw json","json","rawtext JSON object (e.g. {\"rawtext\":[{\"text\":\"Hello\"}]})"],
      ["fadeIn / stay / fadeOut","int","Timing in ticks"]
    ],
    notes:"Supports `translate` and `score` components unlike plain `/title`. Use for localization."
  },

  // ── ENTITY ──────────────────────────────────────────────────────────────
  {
    id:"damage", name:"damage", alias:"",
    groups:["entity"],
    tags:[],
    summary:"Deal damage to an entity",
    syntaxes:[
      `/<s>damage</s> <r>&lt;target: target&gt;</r> <r>&lt;amount: int&gt;</r> <o>[cause: DamageCause]</o> <o>[entity &lt;damager: target&gt;]</o>`
    ],
    params:[
      ["target","target","Entity to damage"],
      ["amount","int","Damage points (raw, before armor)"],
      ["cause","DamageCause","Damage type (e.g. entity_attack, fall, fire)"],
      ["damager","target","Entity attributed as source"]
    ],
    notes:"Damage is raw — armor and effects still apply. `cause` affects death messages and game logic."
  },
  {
    id:"event", name:"event", alias:"",
    groups:["entity"],
    tags:[],
    summary:"Trigger a behavior pack event on an entity",
    syntaxes:[
      `/<s>event</s> <l>entity</l> <r>&lt;target: target&gt;</r> <r>&lt;eventName: string&gt;</r>`
    ],
    params:[
      ["target","target","Target entity"],
      ["eventName","string","Event defined in entity behavior JSON"]
    ],
    notes:"Events must be defined in the entity's behavior pack. Triggers component group adds/removes."
  },
  {
    id:"loot", name:"loot", alias:"",
    groups:["entity","world","blocks"],
    tags:[],
    summary:"Drop items using a loot table",
    syntaxes:[
      `/<s>loot</s> <l>spawn</l> <r>&lt;position: x y z&gt;</r> <l>loot</l> <r>&lt;lootTable: string&gt;</r>`,
      `/<s>loot</s> <l>spawn</l> <r>&lt;position: x y z&gt;</r> <l>kill</l> <r>&lt;target: target&gt;</r>`,
      `/<s>loot</s> <l>give</l> <r>&lt;players: target&gt;</r> <l>loot</l> <r>&lt;lootTable: string&gt;</r>`,
      `/<s>loot</s> <l>give</l> <r>&lt;players: target&gt;</r> <l>kill</l> <r>&lt;target: target&gt;</r>`,
      `/<s>loot</s> <l>insert</l> <r>&lt;position: x y z&gt;</r> <l>loot</l> <r>&lt;lootTable: string&gt;</r>`,
      `/<s>loot</s> <l>insert</l> <r>&lt;position: x y z&gt;</r> <l>kill</l> <r>&lt;target: target&gt;</r>`
    ],
    params:[
      ["position","x y z","World coordinates"],
      ["lootTable","string","Path to loot table JSON"],
      ["target","target","Entity to simulate killing for loot"],
      ["players","target","Target player(s) for give mode"]
    ],
    notes:"`spawn` drops items in world. `give` puts items in inventory. `insert` fills a container at position."
  },
  {
    id:"mobevent", name:"mobevent", alias:"",
    groups:["entity","world"],
    tags:[],
    summary:"Enable or disable mob events (raids, wandering traders, etc.)",
    syntaxes:[
      `/<s>mobevent</s> <r>&lt;event: MobEvent&gt;</r> <o>[value: bool]</o>`
    ],
    params:[
      ["event","MobEvent","minecraft:ender_dragon_event, minecraft:pillager_patrols_event, etc."],
      ["value","bool","true = enabled, false = disabled"]
    ],
    notes:"Omitting value queries current state. Affects world-level mob spawning events."
  },
  {
    id:"summon", name:"summon", alias:"",
    groups:["entity"],
    tags:[],
    summary:"Spawn an entity at a location",
    syntaxes:[
      `/<s>summon</s> <r>&lt;entityType: EntityType&gt;</r> <o>[spawnPos: x y z]</o> <o>[spawnEvent: string]</o> <o>[nameTag: string]</o>`,
      `/<s>summon</s> <r>&lt;entityType: EntityType&gt;</r> <o>[nameTag: string]</o> <o>[spawnPos: x y z]</o>`
    ],
    params:[
      ["entityType","EntityType","Entity identifier (e.g. minecraft:zombie)"],
      ["spawnPos","x y z","Spawn coordinates; defaults to executor position"],
      ["spawnEvent","string","Behavior pack event to fire on spawn"],
      ["nameTag","string","Custom name applied immediately"]
    ],
    notes:"SpawnEvent triggers component group changes defined in entity behavior JSON. Order of optional args varies by syntax."
  },

  // ── WORLD ───────────────────────────────────────────────────────────────
  {
    id:"alwaysday", name:"alwaysday", alias:"daylock",
    groups:["world"],
    tags:[],
    summary:"Lock or unlock the day/night cycle",
    syntaxes:[`/<s>alwaysday</s> <o>[lock: bool]</o>`],
    params:[["lock","bool","true = freeze time; false = resume cycle"]],
    notes:"Alias: `daylock`. Omitting the argument toggles current state."
  },
  {
    id:"changesetting", name:"changesetting", alias:"",
    groups:["world","server"],
    tags:["srv"],
    summary:"Change server settings at runtime",
    syntaxes:[
      `/<s>changesetting</s> <l>allow-cheats</l> <r>&lt;value: bool&gt;</r>`,
      `/<s>changesetting</s> <l>difficulty</l> <r>&lt;value: Difficulty&gt;</r>`
    ],
    params:[
      ["allow-cheats","bool","Enable or disable cheat commands"],
      ["difficulty","Difficulty","peaceful/p/0, easy/e/1, normal/n/2, hard/h/3"]
    ],
    notes:"Changes persist without restart. Limited to specific server properties."
  },
  {
    id:"difficulty", name:"difficulty", alias:"",
    groups:["world"],
    tags:[],
    summary:"Set world difficulty",
    syntaxes:[`/<s>difficulty</s> <r>&lt;difficulty: Difficulty&gt;</r>`],
    params:[["difficulty","Difficulty","peaceful/p/0, easy/e/1, normal/n/2, hard/h/3"]],
    notes:"Changing to peaceful removes hostile mobs. Difficulty affects mob damage, hunger, and mob spawning."
  },
  {
    id:"gamerule", name:"gamerule", alias:"",
    groups:["world"],
    tags:[],
    summary:"Get or set a gamerule value",
    syntaxes:[
      `/<s>gamerule</s> <r>&lt;rule: BoolGameRule&gt;</r> <o>[value: bool]</o>`,
      `/<s>gamerule</s> <r>&lt;rule: IntGameRule&gt;</r> <o>[value: int]</o>`
    ],
    params:[
      ["rule","GameRule","Gamerule name"],
      ["value","bool | int","New value; omit to query current"]
    ],
    notes:"Omitting value prints current setting. Bool and int rules are separate argument types.",
    gamerules:[
      ["commandBlockOutput","bool","true","Broadcast command block output to chat"],
      ["commandBlocksEnabled","bool","true","Enable/disable command block execution"],
      ["doDaylightCycle","bool","true","Toggle day/night progression"],
      ["doEntityDrops","bool","true","Toggle non-mob entity item drops"],
      ["doFireTick","bool","true","Toggle fire spread"],
      ["doImmediateRespawn","bool","false","Skip death screen, respawn instantly"],
      ["doInsomnia","bool","true","Enable phantom spawning from sleeplessness"],
      ["doLimitedCrafting","bool","false","Restrict crafting to unlocked recipes"],
      ["doMobLoot","bool","true","Toggle mob item drops"],
      ["doMobSpawning","bool","true","Toggle natural mob spawning"],
      ["doTileDrops","bool","true","Toggle block item drops when broken"],
      ["doWeatherCycle","bool","true","Toggle automatic weather changes"],
      ["drowningDamage","bool","true","Toggle drowning damage"],
      ["educationFeaturesEnabled","bool","false","Enable EDU edition features"],
      ["fallDamage","bool","true","Toggle fall damage"],
      ["fireDamage","bool","true","Toggle fire/lava damage"],
      ["freezeDamage","bool","true","Toggle powder snow freeze damage"],
      ["functionCommandLimit","int","10000","Max commands per function per tick"],
      ["keepInventory","bool","false","Retain inventory on death"],
      ["maxCommandChainLength","int","65536","Max command chain length per tick"],
      ["mobGriefing","bool","true","Toggle mob block interaction (creeper, enderman, etc.)"],
      ["naturalRegeneration","bool","true","Toggle passive health regen"],
      ["playersSleepingPercentage","int","100","% of players needed to skip night"],
      ["projectilesCanBreakBlocks","bool","true","Toggle projectile block breaking"],
      ["pvp","bool","true","Toggle player vs player damage"],
      ["randomTickSpeed","int","1","Rate of random block ticks (0 = off)"],
      ["recipesUnlock","bool","true","Auto-unlock recipes on item pickup"],
      ["respawnBlocksExplode","bool","true","Toggle bed/anchor explosion in wrong dimension"],
      ["sendCommandFeedback","bool","true","Show command output in chat"],
      ["showBorderEffect","bool","true","Show world border visual effect"],
      ["showCoordinates","bool","false","Display XYZ in HUD"],
      ["showDaysPlayed","bool","false","Display days survived in HUD"],
      ["showDeathMessages","bool","true","Broadcast death messages to chat"],
      ["showRecipeMessages","bool","true","Show recipe unlock notifications"],
      ["showTags","bool","true","Show entity tags above heads"],
      ["spawnRadius","int","5","Radius around world spawn for player spawn placement"],
      ["tntExplodes","bool","true","Toggle TNT explosion"],
      ["tntExplosionDropDecay","bool","false","TNT drops decay with explosion size"]
    ]
  },
  {
    id:"locate", name:"locate", alias:"",
    groups:["world"],
    tags:[],
    summary:"Find the nearest structure or biome",
    syntaxes:[
      `/<s>locate</s> <l>structure</l> <r>&lt;structure: Structure&gt;</r>`,
      `/<s>locate</s> <l>biome</l> <r>&lt;biome: Biome&gt;</r>`
    ],
    params:[
      ["structure","Structure","Structure identifier (e.g. minecraft:village)"],
      ["biome","Biome","Biome identifier (e.g. minecraft:jungle)"]
    ],
    notes:"Returns coordinates of the nearest match from executor's position. May be slow in unexplored terrain."
  },
  {
    id:"setworldspawn", name:"setworldspawn", alias:"",
    groups:["world"],
    tags:[],
    summary:"Set the world's default spawn point",
    syntaxes:[`/<s>setworldspawn</s> <o>[x y z]</o>`],
    params:[["x y z","coords","World spawn position; defaults to executor position"]],
    notes:"Affects all players without a personal spawnpoint. Does not override individual `/spawnpoint`."
  },
  {
    id:"tickingarea", name:"tickingarea", alias:"",
    groups:["world"],
    tags:[],
    summary:"Manage always-active ticking areas",
    syntaxes:[
      `/<s>tickingarea</s> <l>add</l> <r>&lt;from: x y z&gt;</r> <r>&lt;to: x y z&gt;</r> <o>[name: string]</o> <o>[preloadChunks: bool]</o>`,
      `/<s>tickingarea</s> <l>add</l> <l>circle</l> <r>&lt;center: x y z&gt;</r> <r>&lt;radius: int&gt;</r> <o>[name: string]</o> <o>[preloadChunks: bool]</o>`,
      `/<s>tickingarea</s> <l>remove</l> <r>&lt;name: string&gt;</r>`,
      `/<s>tickingarea</s> <l>remove</l> <r>&lt;position: x y z&gt;</r>`,
      `/<s>tickingarea</s> <l>remove_all</l>`,
      `/<s>tickingarea</s> <l>list</l> <o>[all-dimensions]</o>`
    ],
    params:[
      ["from / to","x y z","Corner coordinates of rectangular area"],
      ["center","x y z","Center of circular area"],
      ["radius","int","Radius in chunks (max 4)"],
      ["name","string","Optional identifier for the area"],
      ["preloadChunks","bool","Force-load chunks immediately"]
    ],
    notes:"Max 10 ticking areas per dimension. Areas persist through restarts. Radius max is 4 chunks."
  },
  {
    id:"time", name:"time", alias:"",
    groups:["world"],
    tags:[],
    summary:"Query or change the world time",
    syntaxes:[
      `/<s>time</s> <l>add</l> <r>&lt;amount: int&gt;</r>`,
      `/<s>time</s> <l>query</l> <l>daytime|gametime|day</l>`,
      `/<s>time</s> <l>set</l> <r>&lt;amount: int&gt;</r>`,
      `/<s>time</s> <l>set</l> <l>day|midnight|night|noon|sunrise|sunset</l>`
    ],
    params:[
      ["amount","int","Ticks to add or set (0–24000 per day)"],
      ["query target","enum","daytime (0–24000), gametime (total ticks), day (total days)"]
    ],
    notes:"24000 ticks = 1 full day. `set day` = 1000, `noon` = 6000, `sunset` = 12000, `night` = 13000, `midnight` = 18000, `sunrise` = 23000."
  },
  {
    id:"weather", name:"weather", alias:"",
    groups:["world"],
    tags:[],
    summary:"Set the weather state",
    syntaxes:[
      `/<s>weather</s> <l>clear|rain|thunder</l> <o>[duration: int]</o>`
    ],
    params:[
      ["state","enum","clear, rain, or thunder"],
      ["duration","int","Duration in ticks; default ~random 6000–18000"]
    ],
    notes:"Thunder requires rain. Setting `clear` overrides both rain and thunder. Duration resets on world reload if not set."
  },

  // ── BLOCKS / ITEMS ──────────────────────────────────────────────────────
  {
    id:"clone", name:"clone", alias:"",
    groups:["blocks","world"],
    tags:[],
    summary:"Copy blocks from one region to another",
    syntaxes:[
      `/<s>clone</s> <r>&lt;begin: x y z&gt;</r> <r>&lt;end: x y z&gt;</r> <r>&lt;destination: x y z&gt;</r> <o>[maskMode]</o> <o>[cloneMode]</o>`,
      `/<s>clone</s> <r>&lt;begin: x y z&gt;</r> <r>&lt;end: x y z&gt;</r> <r>&lt;destination: x y z&gt;</r> <l>filtered</l> <o>[cloneMode]</o> <r>&lt;tileName: Block&gt;</r> <o>[blockStates]</o>`
    ],
    params:[
      ["begin / end","x y z","Source region corners"],
      ["destination","x y z","Destination lower-NW corner"],
      ["maskMode","enum","replace (all), masked (non-air), filtered (specific block)"],
      ["cloneMode","enum","normal, move (clears source), force (allow overlap)"],
      ["tileName","Block","Block to filter by in filtered mode"]
    ],
    notes:"Max 32768 blocks per operation. `move` replaces source with air. Destination region is inferred from source size."
  },
  {
    id:"fill", name:"fill", alias:"",
    groups:["blocks"],
    tags:[],
    summary:"Fill a region with a block",
    syntaxes:[
      `/<s>fill</s> <r>&lt;from: x y z&gt;</r> <r>&lt;to: x y z&gt;</r> <r>&lt;tileName: Block&gt;</r> <o>[blockStates]</o> <o>[oldBlockHandling]</o>`,
      `/<s>fill</s> <r>&lt;from: x y z&gt;</r> <r>&lt;to: x y z&gt;</r> <r>&lt;tileName: Block&gt;</r> <o>[blockStates]</o> <l>replace</l> <o>[replaceTileName]</o> <o>[replaceBlockStates]</o>`
    ],
    params:[
      ["from / to","x y z","Region corners"],
      ["tileName","Block","Block to fill with"],
      ["blockStates","json","Block state key-value pairs"],
      ["oldBlockHandling","enum","replace, destroy, keep, hollow, outline"]
    ],
    notes:"`hollow` fills walls only. `outline` fills edges only. `keep` skips non-air. `destroy` drops existing blocks. Max 32768 blocks."
  },
  {
    id:"setblock", name:"setblock", alias:"",
    groups:["blocks"],
    tags:[],
    summary:"Place a single block at a position",
    syntaxes:[
      `/<s>setblock</s> <r>&lt;position: x y z&gt;</r> <r>&lt;tileName: Block&gt;</r> <o>[blockStates]</o> <o>[oldBlockHandling]</o>`
    ],
    params:[
      ["position","x y z","Target coordinates"],
      ["tileName","Block","Block identifier"],
      ["blockStates","json","State overrides (e.g. [\"facing\":\"north\"])"],
      ["oldBlockHandling","enum","replace (default), destroy, keep"]
    ],
    notes:"`destroy` drops the existing block as an item. `keep` does nothing if position is not air."
  },
  {
    id:"structure", name:"structure", alias:"",
    groups:["blocks","world"],
    tags:[],
    summary:"Save and load structure files",
    syntaxes:[
      `/<s>structure</s> <l>save</l> <r>&lt;name: string&gt;</r> <r>&lt;from: x y z&gt;</r> <r>&lt;to: x y z&gt;</r> <o>[saveMode: memory|disk]</o> <o>[includeEntities: bool]</o> <o>[includeBlocks: bool]</o>`,
      `/<s>structure</s> <l>load</l> <r>&lt;name: string&gt;</r> <r>&lt;to: x y z&gt;</r> <o>[rotation: Rotation]</o> <o>[mirror: Mirror]</o> <o>[animationMode]</o> <o>[animationSeconds: float]</o> <o>[includeEntities: bool]</o> <o>[includeBlocks: bool]</o> <o>[waterlogged: bool]</o> <o>[integrity: float]</o> <o>[seed: string]</o>`,
      `/<s>structure</s> <l>delete</l> <r>&lt;name: string&gt;</r>`
    ],
    params:[
      ["name","string","Structure identifier"],
      ["from / to","x y z","Bounding box corners for save"],
      ["to","x y z","Paste origin for load"],
      ["rotation","Rotation","0_degrees, 90_degrees, 180_degrees, 270_degrees"],
      ["mirror","Mirror","none, x, z, xz"],
      ["integrity","float","0.0–1.0; random block removal probability"],
      ["seed","string","Seed for integrity randomization"]
    ],
    notes:"`memory` structures are session-only. `disk` saves to world folder as `.mcstructure`. Integrity 1.0 = no degradation."
  },

  // ── DISPLAY / HUD ───────────────────────────────────────────────────────
  {
    id:"camera", name:"camera", alias:"",
    groups:["display","player"],
    tags:[],
    summary:"Control camera perspective and position",
    syntaxes:[
      `/<s>camera</s> <r>&lt;players: target&gt;</r> <l>set</l> <r>&lt;cameraPreset: string&gt;</r> <o>[ease &lt;easeTime: float&gt; &lt;easeType: Easing&gt;]</o> <o>[pos &lt;x y z&gt;]</o> <o>[rot &lt;xRot yRot&gt;]</o> <o>[facing &lt;target|x y z&gt;]</o>`,
      `/<s>camera</s> <r>&lt;players: target&gt;</r> <l>clear</l>`,
      `/<s>camera</s> <r>&lt;players: target&gt;</r> <l>fade</l> <o>[time &lt;fadeIn hold fadeOut&gt;]</o> <o>[color &lt;r g b&gt;]</o>`
    ],
    params:[
      ["players","target","Target player(s)"],
      ["cameraPreset","string","Preset ID from resource pack (e.g. minecraft:free)"],
      ["easeTime","float","Transition duration in seconds"],
      ["easeType","Easing","linear, in_quad, out_quad, etc."],
      ["pos","x y z","Camera world position"],
      ["rot","xRot yRot","Camera pitch and yaw"],
      ["fade color","r g b","RGB 0–1 float values for screen fade"]
    ],
    notes:"`clear` returns camera to player-follow mode. `fade` blacks out screen without moving camera. Requires camera preset defined in resource pack."
  },
  {
    id:"hud", name:"hud", alias:"",
    groups:["display","player"],
    tags:[],
    summary:"Show or hide HUD elements for a player",
    syntaxes:[
      `/<s>hud</s> <r>&lt;player: target&gt;</r> <l>hide</l> <o>[hudElement: HudElement]</o>`,
      `/<s>hud</s> <r>&lt;player: target&gt;</r> <l>reset</l> <o>[hudElement: HudElement]</o>`
    ],
    params:[
      ["player","target","Target player"],
      ["hudElement","HudElement","all, paperdoll, armor, tooltips, touch_controls, crosshair, hotbar, health, progress_bar, hunger, air_bubbles, horse_health, status_effects, item_text"]
    ],
    notes:"`reset` restores default visibility. `hide` without element hides everything. Persists until reset or relog."
  },
  {
    id:"scoreboard", name:"scoreboard", alias:"",
    groups:["display","misc"],
    tags:[],
    summary:"Manage scoreboard objectives, players, and display",
    syntaxes:[
      `/<s>scoreboard</s> <l>objectives add</l> <r>&lt;objective: string&gt;</r> <l>dummy</l> <o>[displayName: string]</o>`,
      `/<s>scoreboard</s> <l>objectives remove</l> <r>&lt;objective: string&gt;</r>`,
      `/<s>scoreboard</s> <l>objectives list</l>`,
      `/<s>scoreboard</s> <l>objectives setdisplay</l> <r>&lt;slot: DisplaySlot&gt;</r> <o>[objective: string]</o> <o>[ascending|descending]</o>`,
      `/<s>scoreboard</s> <l>players set</l> <r>&lt;player: target&gt;</r> <r>&lt;objective: string&gt;</r> <r>&lt;score: int&gt;</r>`,
      `/<s>scoreboard</s> <l>players add</l> <r>&lt;player: target&gt;</r> <r>&lt;objective: string&gt;</r> <r>&lt;count: int&gt;</r>`,
      `/<s>scoreboard</s> <l>players remove</l> <r>&lt;player: target&gt;</r> <r>&lt;objective: string&gt;</r> <r>&lt;count: int&gt;</r>`,
      `/<s>scoreboard</s> <l>players list</l> <o>[player: target]</o>`,
      `/<s>scoreboard</s> <l>players reset</l> <r>&lt;player: target&gt;</r> <o>[objective: string]</o>`,
      `/<s>scoreboard</s> <l>players test</l> <r>&lt;player: target&gt;</r> <r>&lt;objective: string&gt;</r> <r>&lt;min: int&gt;</r> <o>[max: int]</o>`,
      `/<s>scoreboard</s> <l>players operation</l> <r>&lt;targetPlayer: target&gt;</r> <r>&lt;targetObj: string&gt;</r> <r>&lt;op: Operation&gt;</r> <r>&lt;sourcePlayer: target&gt;</r> <r>&lt;sourceObj: string&gt;</r>`
    ],
    params:[
      ["objective","string","Scoreboard objective name"],
      ["displayName","string","Display label in sidebar/list"],
      ["slot","DisplaySlot","list, sidebar, or belowname"],
      ["player","target","Score holder (player name or fake player)"],
      ["score / count","int","Score value"],
      ["op","Operation","= += -= *= /= %= < > ><"]
    ],
    notes:"Only `dummy` type is available in Bedrock. Fake player names start with `#` by convention. `><` swaps values."
  },

  // ── MISC ────────────────────────────────────────────────────────────────
  {
    id:"execute", name:"execute", alias:"",
    groups:["misc"],
    tags:[],
    summary:"Run commands with modified executor, position, or conditions",
    syntaxes:[
      `/<s>execute</s> <l>as</l> <r>&lt;origin: target&gt;</r> <r>... run &lt;command&gt;</r>`,
      `/<s>execute</s> <l>at</l> <r>&lt;origin: target&gt;</r> <r>... run &lt;command&gt;</r>`,
      `/<s>execute</s> <l>in</l> <r>&lt;dimension: Dimension&gt;</r> <r>... run &lt;command&gt;</r>`,
      `/<s>execute</s> <l>positioned</l> <r>&lt;x y z&gt;</r> <r>... run &lt;command&gt;</r>`,
      `/<s>execute</s> <l>positioned as</l> <r>&lt;origin: target&gt;</r> <r>... run &lt;command&gt;</r>`,
      `/<s>execute</s> <l>rotated</l> <r>&lt;yRot xRot&gt;</r> <r>... run &lt;command&gt;</r>`,
      `/<s>execute</s> <l>rotated as</l> <r>&lt;origin: target&gt;</r> <r>... run &lt;command&gt;</r>`,
      `/<s>execute</s> <l>facing</l> <r>&lt;x y z&gt;</r> <r>... run &lt;command&gt;</r>`,
      `/<s>execute</s> <l>facing entity</l> <r>&lt;origin: target&gt;</r> <r>... run &lt;command&gt;</r>`,
      `/<s>execute</s> <l>align</l> <r>&lt;axes: string&gt;</r> <r>... run &lt;command&gt;</r>`,
      `/<s>execute</s> <l>anchored</l> <r>&lt;eyes|feet&gt;</r> <r>... run &lt;command&gt;</r>`,
      `/<s>execute</s> <l>if|unless block</l> <r>&lt;position: x y z&gt;</r> <r>&lt;block: Block&gt;</r> <o>[blockStates]</o> <r>... run &lt;command&gt;</r>`,
      `/<s>execute</s> <l>if|unless blocks</l> <r>&lt;begin end destination&gt;</r> <l>all|masked</l> <r>... run &lt;command&gt;</r>`,
      `/<s>execute</s> <l>if|unless entity</l> <r>&lt;target: target&gt;</r> <r>... run &lt;command&gt;</r>`,
      `/<s>execute</s> <l>if|unless score</l> <r>&lt;target&gt;</r> <r>&lt;objective&gt;</r> <l>matches</l> <r>&lt;range&gt;</r> <r>... run &lt;command&gt;</r>`,
      `/<s>execute</s> <l>if|unless score</l> <r>&lt;target&gt;</r> <r>&lt;objective&gt;</r> <r>&lt;op&gt;</r> <r>&lt;source&gt;</r> <r>&lt;sourceObj&gt;</r> <r>... run &lt;command&gt;</r>`
    ],
    params:[
      ["origin","target","Entity to execute as or at"],
      ["dimension","Dimension","overworld, nether, the_end"],
      ["axes","string","Any combo of x, y, z (e.g. 'xz') for align"],
      ["block","Block","Block type for if/unless block check"],
      ["range","int range","Score range (e.g. 1..10, ..5, 3)"],
      ["op","Operation","= < > <= >= for score comparison"]
    ],
    notes:"Subcommands chain left to right. `run` terminates the chain and executes the command. `if/unless` can be used without `run` to test conditions and return success/fail."
  },
  {
    id:"function", name:"function", alias:"",
    groups:["misc"],
    tags:[],
    summary:"Run a .mcfunction file",
    syntaxes:[`/<s>function</s> <r>&lt;name: string&gt;</r>`],
    params:[["name","string","Function path relative to behavior pack (no .mcfunction extension)"]],
    notes:"Functions run all commands in the same tick. Max commands per function controlled by `functionCommandLimit` gamerule."
  },
  {
    id:"schedule", name:"schedule", alias:"",
    groups:["misc"],
    tags:[],
    summary:"Schedule a function to run after a delay",
    syntaxes:[
      `/<s>schedule</s> <l>on_area_loaded</l> <l>add</l> <r>&lt;from: x y z&gt;</r> <r>&lt;to: x y z&gt;</r> <r>&lt;function: string&gt;</r>`,
      `/<s>schedule</s> <l>on_area_loaded</l> <l>add</l> <l>tickingarea</l> <r>&lt;name: string&gt;</r> <r>&lt;function: string&gt;</r>`
    ],
    params:[
      ["from / to","x y z","Region that must be loaded"],
      ["name","string","Named ticking area to wait for"],
      ["function","string","Function path to execute when area loads"]
    ],
    notes:"Fires once when the specified area is fully loaded. Useful for world init logic. No tick-delay variant in Bedrock (unlike Java)."
  },
  {
    id:"testfor", name:"testfor", alias:"",
    groups:["misc"],
    tags:[],
    summary:"Test whether entities match a selector",
    syntaxes:[`/<s>testfor</s> <r>&lt;victim: target&gt;</r>`],
    params:[["victim","target","Entity selector to test"]],
    notes:"Returns success if at least one entity matches. Use with conditional command blocks. Superseded by `/execute if entity` in most contexts."
  },
  {
    id:"testforblock", name:"testforblock", alias:"",
    groups:["misc","blocks"],
    tags:[],
    summary:"Test whether a block matches at a position",
    syntaxes:[
      `/<s>testforblock</s> <r>&lt;position: x y z&gt;</r> <r>&lt;tileName: Block&gt;</r> <o>[blockStates]</o>`
    ],
    params:[
      ["position","x y z","Block coordinates to check"],
      ["tileName","Block","Expected block type"],
      ["blockStates","json","Optional state constraints"]
    ],
    notes:"Superseded by `/execute if block` but still functional. Returns success/fail for command block chains."
  },
  {
    id:"testforblocks", name:"testforblocks", alias:"",
    groups:["misc","blocks"],
    tags:[],
    summary:"Compare two block regions for equality",
    syntaxes:[
      `/<s>testforblocks</s> <r>&lt;begin: x y z&gt;</r> <r>&lt;end: x y z&gt;</r> <r>&lt;destination: x y z&gt;</r> <o>[all|masked]</o>`
    ],
    params:[
      ["begin / end","x y z","Source region corners"],
      ["destination","x y z","Comparison region origin"],
      ["mode","enum","all = exact match; masked = ignore air in source"]
    ],
    notes:"Superseded by `/execute if blocks`. Returns success if regions match. `masked` ignores air blocks in the source region."
  },
  {
    id:"tickworld", name:"tickworld", alias:"",
    groups:["misc","world"],
    tags:[],
    summary:"Control world tick rate",
    syntaxes:[
      `/<s>tickworld</s> <l>rate</l> <r>&lt;ticksPerSecond: float&gt;</r>`,
      `/<s>tickworld</s> <l>freeze</l>`,
      `/<s>tickworld</s> <l>unfreeze</l>`,
      `/<s>tickworld</s> <l>step</l> <o>[ticks: int]</o>`,
      `/<s>tickworld</s> <l>query</l>`
    ],
    params:[
      ["ticksPerSecond","float","Target TPS; default 20; range 1–10000"],
      ["ticks","int","Number of ticks to advance when using step"]
    ],
    notes:"Useful for debugging and map-making. `freeze` halts all ticking. `step` advances by N ticks while frozen. Does not affect command block timing."
  },
  {
    id:"worldbuilder", name:"worldbuilder", alias:"",
    groups:["misc","edu"],
    tags:["edu"],
    summary:"Toggle worldbuilder status for the executor",
    syntaxes:[`/<s>worldbuilder</s> <o>[true|false]</o>`],
    params:[["value","bool","true = worldbuilder on; false = off"]],
    notes:"EDU feature. Grants ability to place/destroy any block. Equivalent to `/ability worldbuilder true`."
  },

  // ── EDU ─────────────────────────────────────────────────────────────────
  {
    id:"classroommode", name:"classroommode", alias:"",
    groups:["edu"],
    tags:["edu"],
    summary:"Enable classroom mode restrictions",
    syntaxes:[`/<s>classroommode</s> <o>[true|false]</o>`],
    params:[["value","bool","true = classroom restrictions active"]],
    notes:"EDU only. Restricts player actions to classroom-safe behaviors."
  },
  {
    id:"code", name:"code", alias:"",
    groups:["edu"],
    tags:["edu"],
    summary:"Open the Code Builder interface",
    syntaxes:[`/<s>code</s>`],
    params:[],
    notes:"EDU only. Opens the Code Builder UI for the executing player."
  },
  {
    id:"codebuilder", name:"codebuilder", alias:"",
    groups:["edu"],
    tags:["edu"],
    summary:"Open Code Builder for a specific player",
    syntaxes:[`/<s>codebuilder</s> <r>&lt;player: target&gt;</r>`],
    params:[["player","target","Target player to open Code Builder for"]],
    notes:"EDU only. Unlike `/code`, this targets another player."
  },
  {
    id:"connect", name:"connect", alias:"wsserver",
    groups:["edu","server"],
    tags:["edu"],
    summary:"Connect to a WebSocket server",
    syntaxes:[`/<s>connect</s> <r>&lt;serverUri: uri&gt;</r>`],
    params:[["serverUri","uri","WebSocket URI (ws:// or wss://)"]],
    notes:"Alias: `wsserver`. Enables external tooling via WebSocket. EDU and some server setups only."
  },
  {
    id:"enableencryption", name:"enableencryption", alias:"",
    groups:["edu"],
    tags:["edu"],
    summary:"Enable encryption for WebSocket connections",
    syntaxes:[`/<s>enableencryption</s> <r>&lt;key: string&gt;</r> <r>&lt;iv: string&gt;</r>`],
    params:[
      ["key","string","Base64-encoded AES key"],
      ["iv","string","Base64-encoded initialization vector"]
    ],
    notes:"EDU only. Used with WebSocket scripting to secure the connection channel."
  },
  {
    id:"closewebsocket", name:"closewebsocket", alias:"",
    groups:["edu","server"],
    tags:["edu"],
    summary:"Close the active WebSocket connection",
    syntaxes:[`/<s>closewebsocket</s>`],
    params:[],
    notes:"EDU only. Terminates the current WebSocket session opened by `/connect`."
  },
  {
    id:"agent", name:"agent", alias:"",
    groups:["edu"],
    tags:["edu"],
    summary:"Control the EDU Code Builder agent",
    syntaxes:[
      `/<s>agent</s> <l>move</l> <r>&lt;direction: AgentDirection&gt;</r>`,
      `/<s>agent</s> <l>turn</l> <r>&lt;direction: left|right&gt;</r>`,
      `/<s>agent</s> <l>attack</l> <r>&lt;direction: AgentDirection&gt;</r>`,
      `/<s>agent</s> <l>destroy</l> <r>&lt;direction: AgentDirection&gt;</r>`,
      `/<s>agent</s> <l>drop</l> <r>&lt;slotNum: int&gt;</r> <r>&lt;quantity: int&gt;</r> <r>&lt;direction: AgentDirection&gt;</r>`,
      `/<s>agent</s> <l>dropall</l> <r>&lt;direction: AgentDirection&gt;</r>`,
      `/<s>agent</s> <l>inspect</l> <r>&lt;direction: AgentDirection&gt;</r>`,
      `/<s>agent</s> <l>inspectdata</l> <r>&lt;direction: AgentDirection&gt;</r>`,
      `/<s>agent</s> <l>detect</l> <r>&lt;direction: AgentDirection&gt;</r>`,
      `/<s>agent</s> <l>detectredstone</l> <r>&lt;direction: AgentDirection&gt;</r>`,
      `/<s>agent</s> <l>transfer</l> <r>&lt;srcSlot: int&gt;</r> <r>&lt;quantity: int&gt;</r> <r>&lt;dstSlot: int&gt;</r>`,
      `/<s>agent</s> <l>place</l> <r>&lt;slotNum: int&gt;</r> <r>&lt;direction: AgentDirection&gt;</r>`,
      `/<s>agent</s> <l>till</l> <r>&lt;direction: AgentDirection&gt;</r>`,
      `/<s>agent</s> <l>setitem</l> <r>&lt;slotNum: int&gt;</r> <r>&lt;itemName: Item&gt;</r> <r>&lt;quantity: int&gt;</r> <r>&lt;auxValue: int&gt;</r>`,
      `/<s>agent</s> <l>getitem</l> <r>&lt;slotNum: int&gt;</r>`,
      `/<s>agent</s> <l>getitemcount</l> <r>&lt;slotNum: int&gt;</r>`,
      `/<s>agent</s> <l>getitemspace</l> <r>&lt;slotNum: int&gt;</r>`,
      `/<s>agent</s> <l>getitemdetail</l> <r>&lt;slotNum: int&gt;</r>`,
      `/<s>agent</s> <l>collect</l> <r>&lt;itemName: Item&gt;</r>`,
      `/<s>agent</s> <l>teleport</l> <r>&lt;position: x y z&gt;</r> <r>&lt;direction: AgentDirection&gt;</r>`,
      `/<s>agent</s> <l>create</l>`
    ],
    params:[
      ["direction","AgentDirection","forward, back, left, right, up, down"],
      ["slotNum","int","Inventory slot (1-indexed)"],
      ["quantity","int","Item count"],
      ["itemName","Item","Item identifier"]
    ],
    notes:"EDU only. Agent is a programmable in-world entity. `create` spawns the agent if it doesn't exist."
  }
];

// Strip stubs before registration: empty groups[] or id ending in '2'
SECTIONS.register({
  id:         'bedrock',
  label:      'Bedrock Commands',
  badge:      'Minecraft Bedrock Edition · All Commands',
  commandPrefix: '/',
  accent: {
    '--blue':      '#00aaff',
    '--blue-dim':  '#004e7a',
    '--blue-glow': 'rgba(0,170,255,0.13)'
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
    { key:'edu',     label:'EDU Only'     },
    { key:'dev',     label:'Dev Only'     }
  ],
  groupOrder: ['server','player','entity','world','blocks','display','misc','edu'],
  groupMeta: {
    server:  '⬡ Server',
    player:  '⬡ Player',
    entity:  '⬡ Entity',
    world:   '⬡ World',
    blocks:  '⬡ Blocks / Items',
    display: '⬡ Display / HUD',
    misc:    '⬡ Misc / Logic',
    edu:     '⬡ EDU Only'
  },
  commands: _BEDROCK_RAW.filter(c => c.groups.length > 0 && !c.id.endsWith('2'))
});
