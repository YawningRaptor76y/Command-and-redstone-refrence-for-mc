// ─── REDSTONE REFERENCE DATA ─────────────────────────────────────────────────
// Self-registering data file. Loads after core.js.
// commandPrefix: '' — these are reference entries, not commands.
// Stubs (empty groups[] or id ending in '2') filtered before register().
//
// Truth table schema used here:
//   truthTable: {
//     label:   string,          // section label override (optional)
//     columns: string[],        // column headers
//     rows:    (string|number)[][]  // 0=off, 1=on, X=don't-care, else string
//   }

const _RS_RAW = [

  // ══════════════════════════════════════════════════════════════════════════
  // GROUP: components
  // ══════════════════════════════════════════════════════════════════════════

  {
    id:"rs-dust", name:"Redstone Dust", alias:"redstone wire",
    groups:["components"],
    tags:[],
    summary:"Transmits redstone power up to 15 blocks; signal strength drops by 1 per block",
    syntaxes:[],
    params:[
      ["Signal Strength","integer 0–15","Power level carried. Drops 1 per dust block traveled. 0 = unpowered."],
      ["Connectivity","automatic","Dust connects to adjacent dust, components, and solid block tops/sides automatically. In Java, dust forms a cross by default; in Bedrock it connects to all 4 sides always."],
      ["Transmission direction","omni","Dust passes power in all connected directions simultaneously. It does not have a facing."]
    ],
    truthTable:{
      label:"Signal Decay per Block",
      columns:["Source Strength","Blocks Traveled","Strength at End"],
      rows:[
        [15,0,15],[15,1,14],[15,7,8],[15,14,1],[15,15,0],
        [8,0,8],[8,7,1],[8,8,0],
        [1,0,1],[1,1,0]
      ]
    },
    notes:"Dust does not power the block it sits on (weak power). It weakly powers blocks it is adjacent to. Only a solid opaque block can carry a strong power signal upward through dust placed on top of it.\n\n<strong>Java vs Bedrock:</strong> In Java Edition (1.16+) dust defaults to a dot shape and only connects when adjacent to a component or another connecting dust. In Bedrock Edition dust always connects to all 4 cardinal sides regardless of surroundings, which changes how T-intersections and isolated dots behave."
  },

  {
    id:"rs-torch", name:"Redstone Torch", alias:"",
    groups:["components"],
    tags:[],
    summary:"Constant power source; inverts its input — turns off when the block it is attached to is powered",
    syntaxes:[],
    params:[
      ["Output strength","15","Always outputs signal strength 15 when active."],
      ["Input","block attachment","Reads power state of the block it is placed on. If that block becomes powered, the torch turns off."],
      ["Burnout (Java)","latch","In Java, toggling a torch on/off more than 8 times in 60 game ticks causes it to burn out and stay off permanently until the chunk reloads or the torch is replaced."]
    ],
    truthTable:{
      label:"Torch Logic (Inverter)",
      columns:["Attached Block Powered","Torch Output"],
      rows:[[0,1],[1,0]]
    },
    notes:"A torch placed on the side or top of a block. Powering the block the torch is attached to extinguishes the torch after a 1-tick delay (Java) or immediately (Bedrock, subject to tick priority).\n\n<strong>Torch tower:</strong> Stacking torches on alternating sides of a column produces a NOT chain — each torch inverts the one below. This is the basis for clock circuits and edge detectors.\n\n<strong>Burnout (Java only):</strong> If a torch flickers more than 8 times within 60 game ticks it burns out. A burned-out torch appears off and does not respond to input until replaced or the chunk is reloaded."
  },

  {
    id:"rs-repeater", name:"Redstone Repeater", alias:"",
    groups:["components"],
    tags:[],
    summary:"Boosts signal back to 15, introduces a 1–4 tick delay, and can be locked by a side signal",
    syntaxes:[],
    params:[
      ["Delay","1–4 ticks","Set by right-clicking. Each tick = 0.1 seconds at 20 TPS. Output fires this many ticks after input changes."],
      ["Input","rear face","Only reads signal from the block/dust directly behind its rear face. Directional."],
      ["Output","front face","Outputs signal strength 15 regardless of input strength (as long as input > 0)."],
      ["Lock","side faces","If either side face receives power from another repeater or comparator facing into it, the repeater locks its current output state and ignores further input changes until the side signal is removed."]
    ],
    truthTable:{
      label:"Repeater States",
      columns:["Input > 0","Locked","Output"],
      rows:[
        [0,0,0],
        [1,0,1],
        [0,1,"Hold"],
        [1,1,"Hold"]
      ]
    },
    notes:"<strong>Signal boost:</strong> Because a repeater always outputs strength 15, placing one every 15 blocks allows infinite wire runs.\n\n<strong>Diode behavior:</strong> A repeater only passes signal in one direction (rear → front). It blocks back-propagation, making it essential for isolating circuit segments.\n\n<strong>Lock:</strong> A repeater is locked when a repeater or comparator on either side points into its side face and is active. While locked, the repeater holds whatever output state it had when it was locked — it does not update until the lock is released.\n\n<strong>Java vs Bedrock:</strong> Repeater delay scheduling follows different tick priority rules on each platform — see the Timing section for details."
  },

  {
    id:"rs-comparator", name:"Redstone Comparator", alias:"",
    groups:["components"],
    tags:[],
    summary:"Measures or compares signal strengths; reads container fullness and block states",
    syntaxes:[],
    params:[
      ["Mode","compare / subtract","Right-click to toggle. Compare: outputs rear input if rear ≥ side, else 0. Subtract: outputs rear − side (floor 0)."],
      ["Rear input","0–15","Primary signal input from the rear face."],
      ["Side input","0–15","Secondary input from either side face. The stronger of the two sides is used."],
      ["Output","0–15","Variable strength output from the front face."],
      ["Container read","block behind","When placed against a chest, barrel, furnace, hopper, dropper, dispenser, or similar, the comparator reads fullness as a 0–15 signal regardless of rear dust input."]
    ],
    truthTable:{
      label:"Compare Mode",
      columns:["Rear (R)","Side (S)","Output"],
      rows:[
        [15,0,15],[15,7,15],[15,15,15],
        [8,0,8],[8,7,8],[8,9,0],
        [4,4,4],[4,5,0],[0,"X",0]
      ]
    },
    notes:"<strong>Subtract mode truth table:</strong> Output = max(0, Rear − Side). Example: Rear=10, Side=6 → Output=4.\n\n<strong>Container measurement:</strong> Output = floor(1 + (fillRatio × 14)) when any slot is filled, or 0 when completely empty. For a double chest (54 slots), each item fills roughly 0.259 signal strength.\n\n<strong>Specific block reads:</strong> Beehive/bee nest: 0–5 (honey level). Cake: 0 (full) stepping down to 0 per slice eaten. Cauldron (Java): 0, 1, 2, 3 by water level. End Portal Frame: 0 or 15 (eye inserted). Jukebox: 0 (no disc) or disc-specific value 1–15. Lectern: page proportion 0–15. Sculk Sensor: last vibration frequency 1–15.\n\n<strong>Java vs Bedrock:</strong> Comparators update on the same tick schedule as repeaters but with their own priority. In Bedrock, the comparator's output update can lag one tick behind container changes in some edge cases."
  },

  {
    id:"rs-observer", name:"Observer", alias:"",
    groups:["components"],
    tags:[],
    summary:"Detects block state changes on the block it faces and emits a 1-tick pulse",
    syntaxes:[],
    params:[
      ["Detection face","front (arrow side)","Watches the block directly in front of the arrow. Triggers on any block state change: placement, removal, phase change, waterlog, growth, etc."],
      ["Output face","rear","Emits a 2-game-tick pulse (1 redstone tick) of strength 15 from the back face."],
      ["Self-triggering","chain risk","Two observers facing each other create an infinite clock — each pulse triggers the other. Intentional in clocks, unintentional elsewhere."]
    ],
    truthTable:{
      label:"Observer Output Timing",
      columns:["Event","Output Tick 1","Output Tick 2","Output Tick 3+"],
      rows:[
        ["Block state change",1,0,0],
        ["No change",0,0,0],
        ["Repeated changes","pulses","pulses","pulses"]
      ]
    },
    notes:"<strong>What triggers an observer:</strong> Block placement/removal, crop growth, fluid level change, piston arm extension/retraction, door open/close, note block tuning, grass spreading, snow accumulation, and most other block state changes. It does NOT detect changes to inventory contents (use a comparator for that) or entity presence.\n\n<strong>Pulse length:</strong> The output is always exactly 2 game ticks (1 redstone tick) regardless of how long the triggering state lasts.\n\n<strong>Java vs Bedrock:</strong> In Java, the observer fires synchronously with the block update. In Bedrock, the observer is processed in block event order, which can differ by 1 game tick in complex multi-observer chains."
  },

  {
    id:"rs-piston", name:"Piston / Sticky Piston", alias:"",
    groups:["components"],
    tags:[],
    summary:"Extends arm to push up to 12 blocks when powered; sticky variant also pulls one block on retraction",
    syntaxes:[],
    params:[
      ["Push limit","12 blocks","A piston can push a chain of up to 12 pushable blocks. If the 13th block is immovable, nothing moves."],
      ["Extension time","1 redstone tick (2 game ticks)","Takes 2 game ticks to fully extend. The arm is a separate block entity during this time."],
      ["Retraction time","1 redstone tick (2 game ticks)","Sticky piston retracts the adjacent block (if pushable) at the same speed."],
      ["Slime/Honey blocks","pull adjacent","Slime blocks pull attached blocks on retraction and can move entire structures. Honey blocks do the same but do not stick to slime blocks — this is the basis for flying machines."],
      ["Immovable blocks","obsidian, bedrock, etc.","Obsidian, bedrock, extended pistons, end portal frames, and a few others cannot be pushed or pulled."]
    ],
    truthTable:{
      label:"Sticky Piston State",
      columns:["Powered","Arm State","Block in Front Pulled"],
      rows:[
        [0,"Retracted","N/A"],
        [1,"Extending","N/A"],
        [1,"Extended","N/A"],
        [0,"Retracting","Yes (if sticky + block present)"]
      ]
    },
    notes:"<strong>0-tick pistons (Java only):</strong> Sending a pulse shorter than 1 game tick to a piston causes it to extend and retract within a single game tick, moving blocks without the arm becoming visible. This is considered an unintended mechanic; Mojang has patched several variants but not all.\n\n<strong>Quasi-connectivity (Java only):</strong> A piston is powered if a block diagonally above it or two blocks above it would power a piston placed there. See the Mechanics section for full detail.\n\n<strong>Bedrock piston behavior:</strong> Pistons in Bedrock do not have quasi-connectivity. Block event scheduling differs — see Timing section."
  },

  {
    id:"rs-button", name:"Button", alias:"",
    groups:["components"],
    tags:[],
    summary:"Momentary switch; outputs a pulse when pressed — stone: 10 ticks, wood: 15 ticks",
    syntaxes:[],
    params:[
      ["Stone button pulse","10 redstone ticks (1 second)",""],
      ["Wooden button pulse","15 redstone ticks (1.5 seconds)","Wooden buttons can also be triggered by arrows."],
      ["Output strength","15","Powers the block it is attached to (strong power) and adjacent dust/components."],
      ["Arrow trigger (wood only)","yes","An arrow shot into a wooden button activates it for the same duration."]
    ],
    truthTable:null,
    notes:"Buttons strongly power the block they are attached to. That block then weakly powers adjacent blocks, allowing torches on those blocks to be turned off. Buttons are not latching — they always return to unpowered after their pulse duration."
  },

  {
    id:"rs-lever", name:"Lever", alias:"",
    groups:["components"],
    tags:[],
    summary:"Latching switch; stays on or off until clicked again",
    syntaxes:[],
    params:[
      ["Output strength","15",""],
      ["State","on / off","Persists through chunk unload and server restart."],
      ["Power behavior","strong","Strongly powers the block it is attached to."]
    ],
    truthTable:null,
    notes:"The simplest persistent power source. Levers placed on the floor face up. Levers placed on the ceiling face down. Neither variant requires a wall — they can be placed on any solid face."
  },

  {
    id:"rs-pressure-plate", name:"Pressure Plate", alias:"",
    groups:["components"],
    tags:[],
    summary:"Activates when an entity stands on it; weighted variants scale output with entity count or item weight",
    syntaxes:[],
    params:[
      ["Stone / Wood","binary 0 or 15","Any entity (mob, player, item, boat, minecart) activates it. Output is 0 or 15 only."],
      ["Light Weighted (Gold)","0–15 scaled","Each item entity adds 1 signal strength. 15+ items → strength 15."],
      ["Heavy Weighted (Iron)","0–15 scaled","Each 10 item entities add 1 signal strength. 150+ items → strength 15."],
      ["Polished Blackstone","binary","Detects all entities. Identical to stone plate but different crafting material."]
    ],
    truthTable:{
      label:"Weighted Plate — Light (Gold)",
      columns:["Item Count","Signal Strength"],
      rows:[[0,0],[1,1],[2,2],[7,7],[14,14],[15,15],[20,15],[100,15]]
    },
    notes:"Pressure plates power the block they sit on (strong), which weakly powers adjacent blocks. They do not power dust on the same level — only the block below and adjacent components."
  },

  {
    id:"rs-daylight-detector", name:"Daylight Detector", alias:"",
    groups:["components"],
    tags:[],
    summary:"Outputs signal strength proportional to sky light level; right-click inverts to night detector",
    syntaxes:[],
    params:[
      ["Day mode output","0–15","Scales with sky light. Peaks at noon (strength 15), zero at night."],
      ["Night mode output","0–15","Inverted: peaks at midnight, zero at midday. Right-click to toggle."],
      ["Weather effect","reduced","Overcast sky reduces max output. Thunderstorm further reduces it."],
      ["Block light","ignored","Only sky light is measured, not torch/lamp light."]
    ],
    truthTable:{
      label:"Sky Light → Signal (Clear Weather)",
      columns:["Time of Day","Sky Light","Day Output","Night Output"],
      rows:[
        ["Dawn",9,4,11],["Morning",11,8,7],["Noon",15,15,0],
        ["Afternoon",11,8,7],["Dusk",9,4,11],["Midnight",0,0,15]
      ]
    },
    notes:"Useful for automatic lighting systems, day/night cycle triggers, and solar-powered contraptions. Weather does not reset the detector — it continuously updates every game tick."
  },

  {
    id:"rs-target-block", name:"Target Block", alias:"",
    groups:["components"],
    tags:[],
    summary:"Outputs a signal when hit by a projectile; strength varies with proximity to center",
    syntaxes:[],
    params:[
      ["Output strength","1–15","Closer to center of face = higher strength. Dead center = 15."],
      ["Pulse duration","4 game ticks (arrows) / 20 game ticks (trident)",""],
      ["Projectiles that trigger","arrow, trident, snowball, egg, fire charge, fishing hook",""]
    ],
    truthTable:{
      label:"Hit Position → Signal Strength",
      columns:["Distance from Center","Signal Strength"],
      rows:[["0.0 (center)",15],["~0.1",14],["~0.2",12],["~0.3",10],["~0.4",7],["~0.5 (edge)",1]]
    },
    notes:"The target block passes power through itself — the signal exits all six faces. It does not distinguish which face was hit. Useful for arrow-operated puzzles and precision input systems."
  },

  {
    id:"rs-dropper-dispenser", name:"Dropper / Dispenser", alias:"",
    groups:["components"],
    tags:[],
    summary:"Ejects items or activates items when powered; triggered on rising edge only",
    syntaxes:[],
    params:[
      ["Trigger","rising edge","Only activates once per low→high transition. A sustained signal does not repeatedly fire."],
      ["Dropper behavior","ejects item","Always drops item as an entity into the world in front of it."],
      ["Dispenser behavior","uses item","Fires projectiles, places blocks, equips armor, activates flint-and-steel, spawns from spawn eggs, etc. Falls back to dropping if no specific behavior exists."],
      ["Comparator output","container fullness","A comparator behind a dropper/dispenser reads inventory fullness 0–15."]
    ],
    truthTable:{
      label:"Trigger Behavior",
      columns:["Previous Signal","Current Signal","Fires"],
      rows:[[0,0,0],[0,1,1],[1,1,0],[1,0,0]]
    },
    notes:"Droppers and dispensers operate identically for redstone purposes — the difference is purely in what they do with the item. Both require a rising edge. Both can be chained with hoppers for item processing pipelines.\n\n<strong>Hopper lock:</strong> Powering a hopper disables it (stops item transfer). A dropper/dispenser is not a hopper — it does not lock on sustained signal."
  },

  {
    id:"rs-hopper", name:"Hopper", alias:"",
    groups:["components"],
    tags:[],
    summary:"Moves items between containers automatically; disabled (locked) when powered",
    syntaxes:[],
    params:[
      ["Transfer rate","1 item per 8 game ticks","When unlocked, moves one item every 8 game ticks from input to output inventory."],
      ["Input","top face and 5-block pick-up area above","Picks up item entities floating above it as well as pulling from containers placed on top."],
      ["Output","connected container below or in front",""],
      ["Lock","any power signal","Any redstone signal (strength 1–15) disables item transfer. Does not eject items — they stay inside."],
      ["Comparator output","inventory fullness 0–15",""]
    ],
    truthTable:{
      label:"Hopper Lock",
      columns:["Signal","Transfer Active"],
      rows:[[0,1],[1,0],[15,0]]
    },
    notes:"<strong>Hopper minecart:</strong> Works similarly but can pick up items through one layer of solid blocks and has a smaller inventory. Not lockable by redstone.\n\n<strong>Filter systems:</strong> Hoppers can be filtered by filling all but one slot with specific items, leaving only the target item type passable through the remaining slot. This requires careful item counting.\n\n<strong>Java vs Bedrock:</strong> In Java, hoppers check for items every game tick but only transfer every 8. In Bedrock, the timing is the same but the hopper is processed in entity tick order rather than block tick order, which can affect lag-sensitive designs."
  },

  {
    id:"rs-sculk-sensor", name:"Sculk Sensor / Calibrated Sculk Sensor", alias:"",
    groups:["components"],
    tags:[],
    summary:"Detects vibrations (sound events) within a radius and converts them to redstone signals",
    syntaxes:[],
    params:[
      ["Detection radius","8 blocks (standard) / 16 blocks (calibrated)",""],
      ["Output frequency","1–15","Each vibration type has a fixed output frequency. See notes for full table."],
      ["Active cooldown","1 second (20 game ticks)","After detecting a vibration the sensor enters a cooldown and ignores further input."],
      ["Wool occlusion","blocked","Wool and carpet placed between the sensor and a vibration source block the detection."],
      ["Calibrated input","side comparator signal","The calibrated variant only responds to the vibration type matching the comparator signal on its side. Filters all other frequencies."]
    ],
    truthTable:{
      label:"Vibration Frequency Table (selection)",
      columns:["Frequency","Vibration Type"],
      rows:[
        [1,"Step / Swim / Flap"],
        [2,"Land / Splash"],
        [3,"Item equip / Unequip"],
        [4,"Projectile land / Attach"],
        [5,"Dismount / Eject"],
        [6,"Pick up / Drop item"],
        [7,"Block interact (open/close)"],
        [8,"Block place / Destroy"],
        [9,"Fluid place / Remove"],
        [10,"Block change state"],
        [11,"Lightning strike"],
        [12,"Explode"],
        [13,"Hit / Attack"],
        [14,"Mob death / Kill"],
        [15,"Note block play / Resonate"]
      ]
    },
    notes:"<strong>Sneaking:</strong> A sneaking player does not produce step vibrations. They can still trigger sensors by placing/breaking blocks or interacting.\n\n<strong>Calibrated variant (Java 1.20 / Bedrock 1.20):</strong> Accepts a comparator signal on its side input that selects which frequency to respond to. All other frequencies are silently ignored, making it far more precise than the base sensor.\n\n<strong>Wool occlusion:</strong> Any wool or carpet block on any face of the path between source and sensor blocks the signal. Does not need to be a direct line-of-sight block."
  },


  // ══════════════════════════════════════════════════════════════════════════
  // GROUP: mechanics
  // ══════════════════════════════════════════════════════════════════════════

  {
    id:"mech-signal-strength", name:"Signal Strength", alias:"power level",
    groups:["mechanics"],
    tags:[],
    summary:"Integer 0–15 representing power level; affects comparator output, weighted plates, and wire decay",
    syntaxes:[],
    params:[
      ["Range","0–15","0 = unpowered. 15 = maximum power (torch, lever, button, repeater output)."],
      ["Dust decay","−1 per block","Each block of redstone dust reduces signal strength by 1. At 0 the wire is unpowered."],
      ["Repeater reset","always 15","Regardless of input strength, a repeater outputs 15."],
      ["Comparator passthrough","preserved","A comparator in compare mode passes the exact input strength (if rear ≥ side). In subtract mode it reduces it."]
    ],
    truthTable:{
      label:"Source Output Strengths",
      columns:["Source","Output Strength"],
      rows:[
        ["Redstone torch","15"],["Lever (on)","15"],["Button (active)","15"],
        ["Repeater output","15"],["Comparator output","0–15"],
        ["Daylight detector","0–15"],["Target block hit","1–15"],
        ["Weighted plate (light)","0–15"],["Redstone block","15"]
      ]
    },
    notes:"Signal strength matters most in three contexts: (1) comparator subtract mode, where it does arithmetic; (2) weighted pressure plates, which scale output with entity/item count; (3) sculk sensor frequency output, where the strength equals the vibration frequency."
  },

  {
    id:"mech-power-types", name:"Strong vs Weak Power", alias:"hard power, soft power",
    groups:["mechanics"],
    tags:[],
    summary:"Strong power lets a block power adjacent dust; weak power does not — determines whether a torch on the block turns off",
    syntaxes:[],
    params:[
      ["Strong (hard) power","from torches, repeaters, comparators, buttons, levers, blocks of redstone","The powered block itself can power redstone dust on any adjacent face. A torch placed on a strongly powered block turns off."],
      ["Weak (soft) power","from redstone dust","Dust only weakly powers the block it sits on. A torch on a weakly powered block does NOT turn off."]
    ],
    truthTable:{
      label:"Power Type Consequences",
      columns:["Power Source","Block Powered","Torch on Block Turns Off","Adjacent Dust Powered"],
      rows:[
        ["Repeater","Strong","Yes","Yes"],
        ["Redstone Torch","Strong","Yes","Yes"],
        ["Redstone Dust","Weak","No","No"],
        ["Lever","Strong","Yes","Yes"],
        ["Button","Strong","Yes","Yes"]
      ]
    },
    notes:"This distinction is critical for NOT gates and torch-based inverters. If you power a block with dust and place a torch on it, the torch stays on because dust only weakly powers the block. To turn off the torch you must use a repeater, comparator, or other strong-power source."
  },

  {
    id:"mech-quasi-connectivity", name:"Quasi-Connectivity", alias:"QC, indirect power",
    groups:["mechanics"],
    tags:[],
    summary:"Java only — pistons and dispensers activate if the block above them would be powered, even if they themselves are not",
    syntaxes:[],
    params:[
      ["Affected components","Piston, Sticky Piston, Dispenser, Dropper",""],
      ["Rule","if a dust or component directly above the device is powered, the device activates",""],
      ["Practical use","BUD (Block Update Detector) switches; allows powering a piston from the side without visible wire",""],
      ["Bedrock","not present","Bedrock Edition does not implement quasi-connectivity."]
    ],
    truthTable:{
      label:"Quasi-Connectivity Activation (Java)",
      columns:["Block Above Powered","Device Powered Directly","Device Activates"],
      rows:[[0,0,0],[0,1,1],[1,0,1],[1,1,1]]
    },
    notes:"<strong>BUD switch:</strong> A Block Update Detector exploits quasi-connectivity. A piston is placed so the block above it is powered, but the piston itself is not. It stays retracted. When a block update occurs adjacent to it (neighbor change, piston arm, etc.), it re-evaluates its power state and fires — acting as a one-shot or edge-detecting trigger.\n\n<strong>Portability warning:</strong> Contraptions relying on quasi-connectivity are broken in Bedrock Edition. Always note platform when sharing designs."
  },

  {
    id:"mech-update-order", name:"Block Update Order", alias:"BUD, neighbor update",
    groups:["mechanics"],
    tags:[],
    summary:"The sequence in which blocks receive updates when a neighbor changes; differs significantly between Java and Bedrock",
    syntaxes:[],
    params:[
      ["Java update order","North → South → West → East → Down → Up","When a block changes, it notifies neighbors in this fixed order. Exploitable for sequencing."],
      ["Bedrock update order","random / implementation-defined","Bedrock does not guarantee a fixed update order for neighbor notifications. Designs relying on Java's update order will behave unpredictably."],
      ["Shape update (Java 1.16+)","separate pass","Shape updates (wire connections, stair shapes) are propagated separately from block updates and occur after block state changes."]
    ],
    truthTable:null,
    notes:"<strong>Why this matters:</strong> Many Java technical contraptions (flying machines, 0-tick farms, duplication exploits) depend on a specific update order. The same design placed in Bedrock will often fire in the wrong sequence or not at all.\n\n<strong>Neighbor updates trigger:</strong> Block placement/removal, piston extension/retraction, redstone state change, fluid spread, plant growth. Each of these notifies adjacent blocks, which may then schedule tile ticks or react immediately depending on their type."
  },

  {
    id:"mech-redstone-block", name:"Block of Redstone", alias:"",
    groups:["mechanics"],
    tags:[],
    summary:"Permanent strong power source; can be pushed by pistons, making it the basis for movable power in flying machines",
    syntaxes:[],
    params:[
      ["Output","strong power 15 on all 6 faces",""],
      ["Movable","yes","Can be pushed and pulled by pistons and sticky pistons. Does not lose power state when moved."],
      ["Comparator detection","no","A comparator behind a block of redstone does not read it as a container — output is 0 unless rear dust carries signal."]
    ],
    truthTable:null,
    notes:"The block of redstone is distinct from a redstone torch: it cannot be turned off and it powers all six adjacent faces simultaneously at full strength. It is the standard power source for flying machines because it moves with the structure and remains active."
  },


  // ══════════════════════════════════════════════════════════════════════════
  // GROUP: gates
  // ══════════════════════════════════════════════════════════════════════════

  {
    id:"gate-not", name:"NOT Gate", alias:"inverter",
    groups:["gates"],
    tags:[],
    summary:"Outputs ON when input is OFF; built with a redstone torch",
    syntaxes:[],
    params:[
      ["Components","1 redstone torch, 1 block",""],
      ["Delay","1 redstone tick (torch delay)",""],
      ["Size","1×1×2 minimum",""]
    ],
    truthTable:{
      label:"NOT Gate Truth Table",
      columns:["Input (A)","Output (Q)"],
      rows:[[0,1],[1,0]]
    },
    notes:"Place a redstone torch on the side of a block. Run input wire into the top of that block. When input is high, the block is strongly powered, extinguishing the torch. Output is taken from the torch.\n\n<strong>Timing:</strong> The torch introduces a 1-tick delay. Chains of NOT gates accumulate 1 tick of delay per stage."
  },

  {
    id:"gate-and", name:"AND Gate", alias:"",
    groups:["gates"],
    tags:[],
    summary:"Outputs ON only when all inputs are ON",
    syntaxes:[],
    params:[
      ["2-input components","2 levers/signals, 1 block, 1 torch, 2 dust runs",""],
      ["Delay","1 redstone tick",""],
      ["Implementation","NAND into NOT — or NOR with inverted inputs",""]
    ],
    truthTable:{
      label:"AND Gate Truth Table",
      columns:["Input A","Input B","Output (A AND B)"],
      rows:[[0,0,0],[0,1,0],[1,0,0],[1,1,1]]
    },
    notes:"<strong>Standard build:</strong> Both input wires must carry signal to power a block. A torch on that block is the output (inverted). Then invert again with a second torch to get a true AND. Alternatively, build as NAND (see NAND gate) and invert the output.\n\n<strong>Simpler approach:</strong> Two signals feeding into a single dust path via separate blocks — but this only works if both signals are equivalent strength, because dust merges the higher of the two values, not an AND logic. A proper AND gate requires the torch-inversion approach."
  },

  {
    id:"gate-or", name:"OR Gate", alias:"",
    groups:["gates"],
    tags:[],
    summary:"Outputs ON when any input is ON; trivially implemented by merging dust lines",
    syntaxes:[],
    params:[
      ["Components","dust merge — no extra components required for basic OR",""],
      ["Delay","0 ticks (wire merge) or 1 tick (torch-based)",""],
      ["Caveat","merged dust carries max(A, B) strength — this is OR for binary signals",""]
    ],
    truthTable:{
      label:"OR Gate Truth Table",
      columns:["Input A","Input B","Output (A OR B)"],
      rows:[[0,0,0],[0,1,1],[1,0,1],[1,1,1]]
    },
    notes:"For binary (on/off) signals, an OR gate is just two dust lines joining at a T-intersection or merging into the same block. Because dust carries the maximum signal of all inputs, this naturally implements OR logic.\n\n<strong>When you need a true OR gate:</strong> If inputs are at different strengths and you care about signal strength (not just on/off), use a comparator-based approach or normalise inputs through repeaters first."
  },

  {
    id:"gate-nand", name:"NAND Gate", alias:"",
    groups:["gates"],
    tags:[],
    summary:"Outputs OFF only when all inputs are ON; universal gate — any logic circuit can be built from NAND alone",
    syntaxes:[],
    params:[
      ["Components","1 block, 1 torch per input pair (standard NOR+NOT arrangement)",""],
      ["Delay","1 redstone tick",""]
    ],
    truthTable:{
      label:"NAND Gate Truth Table",
      columns:["Input A","Input B","Output (A NAND B)"],
      rows:[[0,0,1],[0,1,1],[1,0,1],[1,1,0]]
    },
    notes:"Build as AND, then skip the output inverter — the torch output of an AND circuit is already NAND. NAND is functionally complete: NOT, AND, OR, XOR, and any combinational logic can be constructed from NAND gates alone. In practice Minecraft redstone uses mixed components rather than pure NAND networks."
  },

  {
    id:"gate-nor", name:"NOR Gate", alias:"",
    groups:["gates"],
    tags:[],
    summary:"Outputs ON only when all inputs are OFF; equivalent to OR followed by NOT",
    syntaxes:[],
    params:[
      ["Components","1 block, 1 torch, merged dust inputs",""],
      ["Delay","1 redstone tick",""]
    ],
    truthTable:{
      label:"NOR Gate Truth Table",
      columns:["Input A","Input B","Output (A NOR B)"],
      rows:[[0,0,1],[0,1,0],[1,0,0],[1,1,0]]
    },
    notes:"Merge both input dust lines into the same block face, then place a torch on that block. The torch inverts the OR. NOR is also functionally complete (like NAND) — every logic function can be built from NOR gates. Useful for 'all-off' detection in multi-input systems."
  },

  {
    id:"gate-xor", name:"XOR Gate", alias:"exclusive OR",
    groups:["gates"],
    tags:[],
    summary:"Outputs ON when inputs differ; outputs OFF when inputs are the same",
    syntaxes:[],
    params:[
      ["Components","2 torches, 2 blocks, dust routing — or 1 comparator build",""],
      ["Delay","2 redstone ticks (torch build) / 1 tick (comparator build)",""],
      ["Use cases","parity check, combination lock, toggle circuit detection",""]
    ],
    truthTable:{
      label:"XOR Gate Truth Table",
      columns:["Input A","Input B","Output (A XOR B)"],
      rows:[[0,0,0],[0,1,1],[1,0,1],[1,1,0]]
    },
    notes:"<strong>Torch build:</strong> Each input powers a block with a torch. Both torch outputs feed into a NOR block. The NOR output feeds back through another inversion to get XOR. Total 2-tick delay.\n\n<strong>Comparator build:</strong> Two comparators facing each other with inputs A and B. A subtract B and B subtract A, then OR the results. More compact, 1-tick delay, but signal-strength-dependent — inputs must be at strength 15 for clean binary XOR.\n\n<strong>Applications:</strong> Two-way light switches (flip either switch to toggle output), parity bits in storage systems, and combination lock inputs that respond only to change."
  },

  {
    id:"gate-xnor", name:"XNOR Gate", alias:"exclusive NOR",
    groups:["gates"],
    tags:[],
    summary:"Outputs ON when inputs are the same; outputs OFF when inputs differ — the equality gate",
    syntaxes:[],
    params:[
      ["Components","XOR followed by NOT",""],
      ["Delay","3 redstone ticks (torch build) / 2 ticks (comparator + NOT)",""]
    ],
    truthTable:{
      label:"XNOR Gate Truth Table",
      columns:["Input A","Input B","Output (A XNOR B)"],
      rows:[[0,0,1],[0,1,0],[1,0,0],[1,1,1]]
    },
    notes:"Build an XOR gate and invert the output with a torch. Used in equality detectors and combination locks that fire when the correct combination is set (all inputs matching a reference state)."
  },

  {
    id:"gate-rs-latch", name:"RS Latch", alias:"SR latch, RS NOR latch",
    groups:["gates"],
    tags:[],
    summary:"Bistable memory cell — Set input latches it ON, Reset input latches it OFF, both off holds state",
    syntaxes:[],
    params:[
      ["Components","2 NOR gates cross-coupled (4 torches, 2 blocks) — or 2 repeaters back-to-back",""],
      ["Delay","2 redstone ticks to settle",""],
      ["Invalid state","S=1, R=1","Both inputs high is undefined — avoid in practice."]
    ],
    truthTable:{
      label:"RS Latch Truth Table",
      columns:["Set (S)","Reset (R)","Output (Q)","Output (/Q)"],
      rows:[
        [0,0,"Hold","Hold"],
        [1,0,1,0],
        [0,1,0,1],
        [1,1,"X","X"]
      ]
    },
    notes:"The RS latch is the fundamental memory element in redstone. It retains its state after both inputs return to 0.\n\n<strong>Torch build:</strong> Two blocks, each with a torch. Block A's torch output feeds into block B. Block B's torch output feeds into block A. S input powers block B (forcing its torch off → Q=1). R input powers block A (forcing its torch off → Q=0).\n\n<strong>Repeater build:</strong> Two repeaters facing opposite directions in a line. Both powered simultaneously creates a loop that holds state. Less compact but easier to understand visually.\n\n<strong>Invalid state:</strong> Setting both S and R high simultaneously is undefined — the output oscillates or settles unpredictably when one input is released."
  },

  {
    id:"gate-t-flip-flop", name:"T Flip-Flop", alias:"toggle flip-flop",
    groups:["gates"],
    tags:[],
    summary:"Toggles output state on each rising edge of input; divides clock frequency by 2",
    syntaxes:[],
    params:[
      ["Components","RS latch + edge detector (observer or torch/repeater pulse shortener)",""],
      ["Delay","2–4 redstone ticks depending on build",""],
      ["Use cases","binary counter stages, alternating output, frequency division",""]
    ],
    truthTable:{
      label:"T Flip-Flop Behavior",
      columns:["Clock Pulse #","Output Q"],
      rows:[[0,0],[1,1],[2,0],[3,1],[4,0],[5,1]]
    },
    notes:"The T flip-flop is the building block of binary counters. Chain N T flip-flops to count up to 2^N states.\n\n<strong>Observer build:</strong> Observer detects input rising edge → short pulse → RS latch alternates state each pulse. Compact and reliable.\n\n<strong>Clock divider:</strong> A T flip-flop driven by a clock outputs a signal at half the clock frequency. Two in series = quarter frequency, and so on."
  },

  {
    id:"gate-d-latch", name:"D Latch", alias:"data latch, transparent latch",
    groups:["gates"],
    tags:[],
    summary:"Passes data input to output when enable is high; holds last value when enable goes low",
    syntaxes:[],
    params:[
      ["Inputs","D (data), E (enable)",""],
      ["Components","RS latch + AND gates on S and R paths",""],
      ["Delay","2–3 redstone ticks",""]
    ],
    truthTable:{
      label:"D Latch Truth Table",
      columns:["Enable (E)","Data (D)","Output (Q)"],
      rows:[
        [0,"X","Hold"],
        [1,0,0],
        [1,1,1]
      ]
    },
    notes:"Used in sample-and-hold circuits, address decoders for memory, and gated storage. When enable is high, output tracks data in real time. When enable goes low, output freezes at whatever D was at that moment."
  },


  // ══════════════════════════════════════════════════════════════════════════
  // GROUP: timing
  // ══════════════════════════════════════════════════════════════════════════

  {
    id:"timing-ticks", name:"Game Ticks & Redstone Ticks", alias:"GT, RT, tick rate",
    groups:["timing"],
    tags:[],
    summary:"A game tick is 1/20 second; a redstone tick is 2 game ticks — all redstone delays are measured in redstone ticks",
    syntaxes:[],
    params:[
      ["Game tick (GT)","0.05 seconds at 20 TPS","The base unit of the server update loop."],
      ["Redstone tick (RT)","2 game ticks = 0.1 seconds","All redstone component delays are specified in redstone ticks."],
      ["Repeater delay","1–4 RT (2–8 GT)",""],
      ["Torch delay","1 RT (2 GT)",""],
      ["Observer pulse","1 RT (2 GT)",""],
      ["Piston travel","1 RT (2 GT) to extend or retract",""]
    ],
    truthTable:{
      label:"Delay Reference",
      columns:["Component","Delay (RT)","Delay (GT)","Delay (seconds at 20 TPS)"],
      rows:[
        ["Redstone torch","1","2","0.10"],
        ["Repeater ×1","1","2","0.10"],
        ["Repeater ×2","2","4","0.20"],
        ["Repeater ×3","3","6","0.30"],
        ["Repeater ×4","4","8","0.40"],
        ["Observer pulse","1","2","0.10"],
        ["Piston extend","1","2","0.10"],
        ["Piston retract","1","2","0.10"],
        ["Comparator","1","2","0.10"],
        ["Stone button","10","20","1.00"],
        ["Wood button","15","30","1.50"]
      ]
    },
    notes:"<strong>TPS degradation:</strong> All timing above assumes a server running at exactly 20 TPS. Lag (TPS < 20) stretches every tick proportionally — a 4-tick repeater that fires every 0.4 seconds at 20 TPS will fire every 0.8 seconds at 10 TPS. Timing-sensitive circuits can malfunction under server lag.\n\n<strong>Sub-tick operations (Java):</strong> Within a single game tick, multiple redstone updates can occur in a defined sequence. See Tick Priority for details."
  },

  {
    id:"timing-priority-java", name:"Tick Priority — Java Edition", alias:"scheduled tick, tile tick",
    groups:["timing"],
    tags:[],
    summary:"Java Edition uses a sorted scheduled-tick queue; components update in priority order within a single game tick",
    syntaxes:[],
    params:[
      ["Scheduled tick","tile tick system","Components (dust, torches, repeaters, comparators, pistons) schedule future updates via the tile tick queue rather than updating immediately."],
      ["Priority value","integer, lower = higher priority","When two updates are scheduled for the same game tick, the one with the lower priority integer fires first."],
      ["Redstone dust priority","−1 (highest)","Dust updates before torches and repeaters in the same tick."],
      ["Torch priority","1",""],
      ["Repeater priority","1","Same as torch; scheduled at a fixed number of ticks ahead based on delay setting."],
      ["Comparator priority","1",""],
      ["Piston priority","−1 (block event)","Pistons use the block event queue, not the tile tick queue — they fire after all tile ticks in a tick are resolved."]
    ],
    truthTable:{
      label:"Java Update Order Within One Game Tick",
      columns:["Phase","What Runs"],
      rows:[
        ["1","Tile tick queue (priority −1): redstone dust propagation"],
        ["2","Tile tick queue (priority 0): misc"],
        ["3","Tile tick queue (priority 1): torches, repeaters, comparators"],
        ["4","Block events: piston arm movement, door state"],
        ["5","Entity ticks"],
        ["6","Tile entity ticks (chests, hoppers, furnaces)"]
      ]
    },
    notes:"<strong>Practical consequence:</strong> Dust updates before torches in the same tick. This means a torch that should turn off due to a dust signal will read the updated dust state before it fires — no extra delay. However, a torch that fires first (due to priority) will update dust in the next eligible priority slot.\n\n<strong>Instant repeater (Java):</strong> A 1-tick repeater and a torch in a feedback loop can create a pulse that propagates within a single game tick, faster than the nominal 2 GT minimum. This is because the tile tick queue resolves multiple rounds per game tick if new entries are added while processing.\n\n<strong>0-tick pulses (Java):</strong> Certain circuits generate signals that last 0 game ticks — they are set and unset within the same tile tick processing pass. These can move pistons or trigger observers without the signal being visible to a repeater."
  },

  {
    id:"timing-priority-bedrock", name:"Tick Priority — Bedrock Edition", alias:"block event, actor tick",
    groups:["timing"],
    tags:[],
    summary:"Bedrock Edition uses a block event queue without strict priority ordering; update order within a tick is position-dependent and less predictable",
    syntaxes:[],
    params:[
      ["Update system","block event queue","Bedrock does not have a tile tick priority system equivalent to Java's. Redstone components are updated via block events scheduled into a queue."],
      ["Ordering","chunk position / load order","Events in the same tick are generally processed in chunk order (by chunk coordinates), then by sub-chunk position. This is deterministic within a session but not guaranteed across versions."],
      ["Quasi-connectivity","absent","Bedrock does not implement QC — pistons only activate when directly powered."],
      ["0-tick pulses","absent","Sub-tick pulse manipulation available in Java does not exist in Bedrock."],
      ["Piston timing","1 RT extend, 1 RT retract","Same nominal timing as Java, but the block event ordering can cause sticky pistons to drop blocks in edge cases that Java handles correctly."]
    ],
    truthTable:{
      label:"Bedrock vs Java Feature Comparison",
      columns:["Feature","Java","Bedrock"],
      rows:[
        ["Tile tick priority queue","Yes","No"],
        ["Quasi-connectivity","Yes","No"],
        ["0-tick pistons","Yes (some)","No"],
        ["Dust connectivity default","Dot/cross","All 4 sides"],
        ["Update order","Fixed (N/S/W/E/D/U)","Position-based"],
        ["Observer timing","Synchronous","Block event order"],
        ["Repeater delay accuracy","Exact","Generally exact, lag-sensitive"],
        ["Instant repeater","Possible","Not possible"],
        ["Burnout (torches)","Yes (>8 flips/60GT)","No"]
      ]
    },
    notes:"<strong>Designing for both platforms:</strong> If a contraption must work on both Java and Bedrock, avoid: quasi-connectivity, 0-tick pulses, update order dependencies, torch burnout assumptions, and Java-specific dust dot/cross behavior. Stick to simple repeater/comparator logic, observer-based pulse detection, and direct power paths.\n\n<strong>Bedrock-specific behavior:</strong> In Bedrock, redstone updates during entity ticks rather than in a separate priority queue. This means entity-related events (mobs stepping on plates, item pickup) interact with redstone within the same tick phase rather than being deferred."
  },

  {
    id:"timing-clocks", name:"Clock Circuits", alias:"redstone clock, oscillator",
    groups:["timing"],
    tags:[],
    summary:"Circuits that produce a repeating ON/OFF signal; period is determined by component delays in the loop",
    syntaxes:[],
    params:[
      ["Torch clock","2 torches in a loop","Period: 2 RT (4 GT). Fastest stable clock. Prone to burnout on Java if the loop is disrupted."],
      ["Repeater clock","repeaters in a loop","Period: sum of all repeater delays × 2 (each repeater fires once per half-cycle). Easily adjustable."],
      ["Observer clock","2 observers facing each other","Period: 2 RT (4 GT). Does not burn out. Works on both platforms."],
      ["Hopper clock","two hoppers transferring items back and forth","Period determined by item count and transfer rate. 1 item = 8 GT half-period; N items = N×8 GT half-period. Very long periods possible."],
      ["Comparator clock","comparator feedback loop","Produces a 2 RT clock. Less common but compact."]
    ],
    truthTable:{
      label:"Clock Period Reference",
      columns:["Clock Type","Min Period (RT)","Min Period (GT)","Adjustable"],
      rows:[
        ["2-torch loop","2","4","No"],
        ["5-repeater loop (×1 each)","10","20","Yes"],
        ["Observer pair","2","4","No"],
        ["Hopper (1 item each)","16","32","Yes (item count)"],
        ["Comparator loop","2","4","No"]
      ]
    },
    notes:"<strong>Torch burnout (Java):</strong> A 2-torch clock that is disrupted (input changed, chunk reloaded) can cause the torches to burn out if they flip more than 8 times in 60 game ticks. Observer clocks are immune to this.\n\n<strong>Hopper clock use case:</strong> Hopper clocks are ideal for very long intervals (seconds to minutes) because the period scales with item count. A full stack (64 items) per hopper yields a half-period of 64 × 8 GT = 512 GT = 25.6 seconds.\n\n<strong>Gated clocks:</strong> Any clock can be gated (started/stopped) by inserting a mechanism that breaks the feedback loop — a piston blocking a dust path, a repeater being locked, or a hopper being locked."
  }

];

// Strip stubs before registration: empty groups[] or id ending in '2'
SECTIONS.register({
  id:            'redstone',
  label:         'Redstone Reference',
  badge:         'Minecraft · Redstone & Circuit Reference',
  commandPrefix: '',
  accent: {
    '--blue':      '#ff4444',
    '--blue-dim':  '#7a1010',
    '--blue-glow': 'rgba(255,68,68,0.13)'
  },
  filters: [
    { key:'all',        label:'All'        },
    { key:'components', label:'Components' },
    { key:'mechanics',  label:'Mechanics'  },
    { key:'gates',      label:'Gates'      },
    { key:'timing',     label:'Timing'     }
  ],
  groupOrder: ['components','mechanics','gates','timing'],
  groupMeta: {
    components: '⬡ Components',
    mechanics:  '⬡ Mechanics',
    gates:      '⬡ Logic Gates',
    timing:     '⬡ Timing'
  },
  commands: _RS_RAW.filter(c => c.groups.length > 0 && !c.id.endsWith('2'))
});
