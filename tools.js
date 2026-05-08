// ─── TOOLS SECTION DATA ───────────────────────────────────────────────────────
// Self-registering data file. Loads after core.js.
// commandPrefix: '' — tools section is not a command list.
// renderTool + renderSidebar hooks override core.js card pipeline entirely.
// All state is closure-local. No globals except _TOOLS_* prefixed data arrays.

// ─── ITEM LIST ────────────────────────────────────────────────────────────────
const _TOOLS_ITEMS = [
  // Tools
  'minecraft:wooden_pickaxe','minecraft:stone_pickaxe','minecraft:iron_pickaxe',
  'minecraft:golden_pickaxe','minecraft:diamond_pickaxe','minecraft:netherite_pickaxe',
  'minecraft:wooden_shovel','minecraft:stone_shovel','minecraft:iron_shovel',
  'minecraft:golden_shovel','minecraft:diamond_shovel','minecraft:netherite_shovel',
  'minecraft:wooden_axe','minecraft:stone_axe','minecraft:iron_axe',
  'minecraft:golden_axe','minecraft:diamond_axe','minecraft:netherite_axe',
  'minecraft:wooden_hoe','minecraft:stone_hoe','minecraft:iron_hoe',
  'minecraft:golden_hoe','minecraft:diamond_hoe','minecraft:netherite_hoe',
  'minecraft:fishing_rod','minecraft:flint_and_steel','minecraft:shears',
  'minecraft:brush','minecraft:carrot_on_a_stick','minecraft:warped_fungus_on_a_stick',
  // Weapons
  'minecraft:wooden_sword','minecraft:stone_sword','minecraft:iron_sword',
  'minecraft:golden_sword','minecraft:diamond_sword','minecraft:netherite_sword',
  'minecraft:bow','minecraft:crossbow','minecraft:trident','minecraft:mace',
  // Armor
  'minecraft:leather_helmet','minecraft:leather_chestplate','minecraft:leather_leggings','minecraft:leather_boots',
  'minecraft:chainmail_helmet','minecraft:chainmail_chestplate','minecraft:chainmail_leggings','minecraft:chainmail_boots',
  'minecraft:iron_helmet','minecraft:iron_chestplate','minecraft:iron_leggings','minecraft:iron_boots',
  'minecraft:golden_helmet','minecraft:golden_chestplate','minecraft:golden_leggings','minecraft:golden_boots',
  'minecraft:diamond_helmet','minecraft:diamond_chestplate','minecraft:diamond_leggings','minecraft:diamond_boots',
  'minecraft:netherite_helmet','minecraft:netherite_chestplate','minecraft:netherite_leggings','minecraft:netherite_boots',
  'minecraft:turtle_helmet','minecraft:elytra','minecraft:shield',
  // Food
  'minecraft:apple','minecraft:golden_apple','minecraft:enchanted_golden_apple',
  'minecraft:bread','minecraft:cooked_beef','minecraft:cooked_porkchop',
  'minecraft:cooked_chicken','minecraft:cooked_mutton','minecraft:cooked_rabbit',
  'minecraft:cooked_salmon','minecraft:cooked_cod','minecraft:baked_potato',
  'minecraft:mushroom_stew','minecraft:rabbit_stew','minecraft:beetroot_soup',
  'minecraft:suspicious_stew','minecraft:pumpkin_pie','minecraft:cake',
  'minecraft:cookie','minecraft:melon_slice','minecraft:dried_kelp',
  'minecraft:honey_bottle','minecraft:chorus_fruit','minecraft:glow_berries',
  // Blocks
  'minecraft:stone','minecraft:cobblestone','minecraft:deepslate','minecraft:cobbled_deepslate',
  'minecraft:granite','minecraft:diorite','minecraft:andesite',
  'minecraft:dirt','minecraft:grass_block','minecraft:podzol','minecraft:mycelium',
  'minecraft:sand','minecraft:red_sand','minecraft:gravel',
  'minecraft:oak_log','minecraft:birch_log','minecraft:spruce_log','minecraft:jungle_log',
  'minecraft:acacia_log','minecraft:dark_oak_log','minecraft:mangrove_log',
  'minecraft:cherry_log','minecraft:bamboo_block','minecraft:crimson_stem','minecraft:warped_stem',
  'minecraft:oak_planks','minecraft:birch_planks','minecraft:spruce_planks','minecraft:jungle_planks',
  'minecraft:acacia_planks','minecraft:dark_oak_planks','minecraft:mangrove_planks','minecraft:cherry_planks',
  'minecraft:glass','minecraft:tinted_glass','minecraft:glass_pane',
  'minecraft:iron_block','minecraft:gold_block','minecraft:diamond_block',
  'minecraft:emerald_block','minecraft:netherite_block','minecraft:copper_block','minecraft:amethyst_block',
  'minecraft:obsidian','minecraft:crying_obsidian','minecraft:bedrock',
  'minecraft:tnt','minecraft:sponge','minecraft:wet_sponge',
  'minecraft:chest','minecraft:trapped_chest','minecraft:ender_chest','minecraft:shulker_box',
  'minecraft:crafting_table','minecraft:furnace','minecraft:blast_furnace','minecraft:smoker',
  'minecraft:anvil','minecraft:grindstone','minecraft:smithing_table','minecraft:stonecutter',
  'minecraft:enchanting_table','minecraft:bookshelf','minecraft:chiseled_bookshelf',
  'minecraft:beacon','minecraft:conduit','minecraft:bell','minecraft:lodestone',
  // Special / misc
  'minecraft:written_book','minecraft:writable_book','minecraft:book','minecraft:knowledge_book',
  'minecraft:map','minecraft:filled_map','minecraft:compass','minecraft:recovery_compass',
  'minecraft:clock','minecraft:spyglass','minecraft:name_tag','minecraft:lead',
  'minecraft:saddle','minecraft:armor_stand','minecraft:item_frame','minecraft:glow_item_frame',
  'minecraft:painting','minecraft:flower_pot','minecraft:cauldron',
  'minecraft:potion','minecraft:splash_potion','minecraft:lingering_potion','minecraft:tipped_arrow',
  'minecraft:firework_rocket','minecraft:firework_star',
  'minecraft:totem_of_undying','minecraft:nether_star','minecraft:heart_of_the_sea','minecraft:nautilus_shell',
  'minecraft:dragon_egg','minecraft:dragon_breath','minecraft:end_crystal',
  'minecraft:diamond','minecraft:emerald','minecraft:amethyst_shard','minecraft:quartz',
  'minecraft:coal','minecraft:charcoal','minecraft:iron_ingot','minecraft:gold_ingot',
  'minecraft:copper_ingot','minecraft:netherite_ingot','minecraft:netherite_scrap',
  'minecraft:redstone','minecraft:glowstone_dust','minecraft:blaze_powder','minecraft:ender_pearl',
  'minecraft:eye_of_ender','minecraft:blaze_rod','minecraft:ghast_tear','minecraft:magma_cream',
  'minecraft:slime_ball','minecraft:prismarine_shard','minecraft:prismarine_crystals',
  'minecraft:shulker_shell','minecraft:phantom_membrane','minecraft:rabbit_hide','minecraft:leather',
  'minecraft:string','minecraft:feather','minecraft:arrow','minecraft:spectral_arrow',
  'minecraft:bone','minecraft:bone_meal','minecraft:ink_sac','minecraft:glow_ink_sac',
  'minecraft:gunpowder','minecraft:flint','minecraft:paper','minecraft:sugar',
  'minecraft:egg','minecraft:snowball','minecraft:bucket','minecraft:water_bucket',
  'minecraft:lava_bucket','minecraft:milk_bucket','minecraft:powder_snow_bucket',
  'minecraft:spawn_egg','minecraft:music_disc_13','minecraft:music_disc_cat',
  'minecraft:structure_block','minecraft:command_block','minecraft:chain_command_block','minecraft:repeating_command_block',
  'minecraft:jigsaw','minecraft:barrier','minecraft:light','minecraft:debug_stick',
  'minecraft:bundle'
];

// ─── ENTITY LIST ─────────────────────────────────────────────────────────────
const _TOOLS_ENTITIES = [
  // Hostile
  'minecraft:zombie','minecraft:skeleton','minecraft:creeper','minecraft:spider',
  'minecraft:cave_spider','minecraft:enderman','minecraft:witch','minecraft:slime',
  'minecraft:magma_cube','minecraft:blaze','minecraft:ghast','minecraft:zombie_piglin',
  'minecraft:piglin','minecraft:piglin_brute','minecraft:hoglin','minecraft:zoglin',
  'minecraft:drowned','minecraft:husk','minecraft:stray','minecraft:phantom',
  'minecraft:wither_skeleton','minecraft:silverfish','minecraft:endermite',
  'minecraft:shulker','minecraft:guardian','minecraft:elder_guardian',
  'minecraft:evoker','minecraft:vex','minecraft:vindicator','minecraft:ravager',
  'minecraft:pillager','minecraft:illusioner',
  'minecraft:warden','minecraft:sculk_shrieker',
  'minecraft:breeze','minecraft:bogged',
  // Passive
  'minecraft:cow','minecraft:pig','minecraft:sheep','minecraft:chicken',
  'minecraft:rabbit','minecraft:horse','minecraft:donkey','minecraft:mule',
  'minecraft:llama','minecraft:trader_llama','minecraft:wolf','minecraft:cat',
  'minecraft:ocelot','minecraft:parrot','minecraft:bat','minecraft:bee',
  'minecraft:fox','minecraft:panda','minecraft:polar_bear','minecraft:turtle',
  'minecraft:cod','minecraft:salmon','minecraft:tropical_fish','minecraft:pufferfish',
  'minecraft:squid','minecraft:glow_squid','minecraft:axolotl',
  'minecraft:mooshroom','minecraft:strider','minecraft:goat','minecraft:frog',
  'minecraft:tadpole','minecraft:allay','minecraft:camel','minecraft:sniffer',
  'minecraft:armadillo',
  // Neutral
  'minecraft:iron_golem','minecraft:snow_golem','minecraft:villager','minecraft:wandering_trader',
  'minecraft:zombie_villager',
  // Bosses
  'minecraft:ender_dragon','minecraft:wither',
  // Projectiles / Vehicles
  'minecraft:arrow','minecraft:spectral_arrow','minecraft:trident','minecraft:fireball',
  'minecraft:small_fireball','minecraft:dragon_fireball','minecraft:wither_skull',
  'minecraft:ender_pearl','minecraft:egg','minecraft:snowball','minecraft:fishing_bobber',
  'minecraft:boat','minecraft:chest_boat','minecraft:minecart','minecraft:chest_minecart',
  'minecraft:hopper_minecart','minecraft:furnace_minecart','minecraft:tnt_minecart',
  // Other
  'minecraft:armor_stand','minecraft:item_frame','minecraft:glow_item_frame',
  'minecraft:painting','minecraft:end_crystal','minecraft:item',
  'minecraft:experience_orb','minecraft:falling_block','minecraft:area_effect_cloud',
  'minecraft:interaction','minecraft:display','minecraft:text_display',
  'minecraft:block_display','minecraft:item_display'
];

// ─── ENCHANTMENT LIST ─────────────────────────────────────────────────────────
const _TOOLS_ENCHANTS = [
  { id:'minecraft:sharpness',         label:'Sharpness',           bedrockId:9,  maxLevel:5,  slots:['mainhand','sword','axe'] },
  { id:'minecraft:smite',             label:'Smite',               bedrockId:11, maxLevel:5,  slots:['mainhand','sword','axe'] },
  { id:'minecraft:bane_of_arthropods',label:'Bane of Arthropods',  bedrockId:12, maxLevel:5,  slots:['mainhand','sword','axe'] },
  { id:'minecraft:knockback',         label:'Knockback',           bedrockId:13, maxLevel:2,  slots:['mainhand','sword'] },
  { id:'minecraft:fire_aspect',       label:'Fire Aspect',         bedrockId:14, maxLevel:2,  slots:['mainhand','sword'] },
  { id:'minecraft:looting',           label:'Looting',             bedrockId:15, maxLevel:3,  slots:['mainhand','sword'] },
  { id:'minecraft:sweeping_edge',     label:'Sweeping Edge',       bedrockId:22, maxLevel:3,  slots:['mainhand','sword'], javaOnly:true },
  { id:'minecraft:efficiency',        label:'Efficiency',          bedrockId:15, maxLevel:5,  slots:['mainhand','pickaxe','shovel','axe','hoe','shears'] },
  { id:'minecraft:silk_touch',        label:'Silk Touch',          bedrockId:16, maxLevel:1,  slots:['mainhand','pickaxe','shovel','axe','hoe','shears'] },
  { id:'minecraft:unbreaking',        label:'Unbreaking',          bedrockId:17, maxLevel:3,  slots:['any'] },
  { id:'minecraft:fortune',           label:'Fortune',             bedrockId:18, maxLevel:3,  slots:['mainhand','pickaxe','shovel','axe','hoe'] },
  { id:'minecraft:power',             label:'Power',               bedrockId:19, maxLevel:5,  slots:['mainhand','bow'] },
  { id:'minecraft:punch',             label:'Punch',               bedrockId:20, maxLevel:2,  slots:['mainhand','bow'] },
  { id:'minecraft:flame',             label:'Flame',               bedrockId:21, maxLevel:1,  slots:['mainhand','bow'] },
  { id:'minecraft:infinity',          label:'Infinity',            bedrockId:22, maxLevel:1,  slots:['mainhand','bow'] },
  { id:'minecraft:luck_of_the_sea',   label:'Luck of the Sea',     bedrockId:23, maxLevel:3,  slots:['mainhand','fishing_rod'] },
  { id:'minecraft:lure',              label:'Lure',                bedrockId:24, maxLevel:3,  slots:['mainhand','fishing_rod'] },
  { id:'minecraft:loyalty',           label:'Loyalty',             bedrockId:25, maxLevel:3,  slots:['mainhand','trident'] },
  { id:'minecraft:impaling',          label:'Impaling',            bedrockId:29, maxLevel:5,  slots:['mainhand','trident'] },
  { id:'minecraft:riptide',           label:'Riptide',             bedrockId:26, maxLevel:3,  slots:['mainhand','trident'] },
  { id:'minecraft:channeling',        label:'Channeling',          bedrockId:27, maxLevel:1,  slots:['mainhand','trident'] },
  { id:'minecraft:multishot',         label:'Multishot',           bedrockId:33, maxLevel:1,  slots:['mainhand','crossbow'] },
  { id:'minecraft:quick_charge',      label:'Quick Charge',        bedrockId:35, maxLevel:3,  slots:['mainhand','crossbow'] },
  { id:'minecraft:piercing',          label:'Piercing',            bedrockId:34, maxLevel:4,  slots:['mainhand','crossbow'] },
  { id:'minecraft:density',           label:'Density',             bedrockId:36, maxLevel:5,  slots:['mainhand','mace'], javaOnly:true },
  { id:'minecraft:breach',            label:'Breach',              bedrockId:37, maxLevel:4,  slots:['mainhand','mace'], javaOnly:true },
  { id:'minecraft:wind_burst',        label:'Wind Burst',          bedrockId:38, maxLevel:3,  slots:['mainhand','mace'], javaOnly:true },
  { id:'minecraft:protection',        label:'Protection',          bedrockId:0,  maxLevel:4,  slots:['armor','head','chest','legs','feet'] },
  { id:'minecraft:fire_protection',   label:'Fire Protection',     bedrockId:1,  maxLevel:4,  slots:['armor','head','chest','legs','feet'] },
  { id:'minecraft:feather_falling',   label:'Feather Falling',     bedrockId:2,  maxLevel:4,  slots:['feet'] },
  { id:'minecraft:blast_protection',  label:'Blast Protection',    bedrockId:3,  maxLevel:4,  slots:['armor','head','chest','legs','feet'] },
  { id:'minecraft:projectile_protection',label:'Projectile Protection',bedrockId:4,maxLevel:4,slots:['armor','head','chest','legs','feet'] },
  { id:'minecraft:respiration',       label:'Respiration',         bedrockId:6,  maxLevel:3,  slots:['head'] },
  { id:'minecraft:aqua_affinity',     label:'Aqua Affinity',       bedrockId:7,  maxLevel:1,  slots:['head'] },
  { id:'minecraft:thorns',            label:'Thorns',              bedrockId:5,  maxLevel:3,  slots:['armor','head','chest','legs','feet'] },
  { id:'minecraft:depth_strider',     label:'Depth Strider',       bedrockId:8,  maxLevel:3,  slots:['feet'] },
  { id:'minecraft:frost_walker',      label:'Frost Walker',        bedrockId:25, maxLevel:2,  slots:['feet'], javaOnly:true },
  { id:'minecraft:binding_curse',     label:'Curse of Binding',    bedrockId:27, maxLevel:1,  slots:['any'], javaOnly:true },
  { id:'minecraft:soul_speed',        label:'Soul Speed',          bedrockId:32, maxLevel:3,  slots:['feet'] },
  { id:'minecraft:swift_sneak',       label:'Swift Sneak',         bedrockId:0,  maxLevel:3,  slots:['legs'], javaOnly:true },
  { id:'minecraft:mending',           label:'Mending',             bedrockId:26, maxLevel:1,  slots:['any'] },
  { id:'minecraft:vanishing_curse',   label:'Curse of Vanishing',  bedrockId:28, maxLevel:1,  slots:['any'] }
];

// ─── EFFECT LIST ──────────────────────────────────────────────────────────────
const _TOOLS_EFFECTS = [
  { id:'minecraft:speed',              label:'Speed',              bedrockId:1  },
  { id:'minecraft:slowness',           label:'Slowness',           bedrockId:2  },
  { id:'minecraft:haste',              label:'Haste',              bedrockId:3  },
  { id:'minecraft:mining_fatigue',     label:'Mining Fatigue',     bedrockId:4  },
  { id:'minecraft:strength',           label:'Strength',           bedrockId:5  },
  { id:'minecraft:instant_health',     label:'Instant Health',     bedrockId:6  },
  { id:'minecraft:instant_damage',     label:'Instant Damage',     bedrockId:7  },
  { id:'minecraft:jump_boost',         label:'Jump Boost',         bedrockId:8  },
  { id:'minecraft:nausea',             label:'Nausea',             bedrockId:9  },
  { id:'minecraft:regeneration',       label:'Regeneration',       bedrockId:10 },
  { id:'minecraft:resistance',         label:'Resistance',         bedrockId:11 },
  { id:'minecraft:fire_resistance',    label:'Fire Resistance',    bedrockId:12 },
  { id:'minecraft:water_breathing',    label:'Water Breathing',    bedrockId:13 },
  { id:'minecraft:invisibility',       label:'Invisibility',       bedrockId:14 },
  { id:'minecraft:blindness',          label:'Blindness',          bedrockId:15 },
  { id:'minecraft:night_vision',       label:'Night Vision',       bedrockId:16 },
  { id:'minecraft:hunger',             label:'Hunger',             bedrockId:17 },
  { id:'minecraft:weakness',           label:'Weakness',           bedrockId:18 },
  { id:'minecraft:poison',             label:'Poison',             bedrockId:19 },
  { id:'minecraft:wither',             label:'Wither',             bedrockId:20 },
  { id:'minecraft:health_boost',       label:'Health Boost',       bedrockId:21 },
  { id:'minecraft:absorption',         label:'Absorption',         bedrockId:22 },
  { id:'minecraft:saturation',         label:'Saturation',         bedrockId:23 },
  { id:'minecraft:glowing',            label:'Glowing',            bedrockId:24 },
  { id:'minecraft:levitation',         label:'Levitation',         bedrockId:25 },
  { id:'minecraft:luck',               label:'Luck',               bedrockId:26 },
  { id:'minecraft:unluck',             label:'Unluck',             bedrockId:27 },
  { id:'minecraft:slow_falling',       label:'Slow Falling',       bedrockId:28 },
  { id:'minecraft:conduit_power',      label:'Conduit Power',      bedrockId:29 },
  { id:'minecraft:dolphins_grace',     label:"Dolphin's Grace",    bedrockId:30 },
  { id:'minecraft:bad_omen',           label:'Bad Omen',           bedrockId:31 },
  { id:'minecraft:hero_of_the_village',label:'Hero of the Village',bedrockId:32 },
  { id:'minecraft:darkness',           label:'Darkness',           bedrockId:33 },
  { id:'minecraft:trial_omen',         label:'Trial Omen',         bedrockId:34 },
  { id:'minecraft:raid_omen',          label:'Raid Omen',          bedrockId:35 },
  { id:'minecraft:wind_charged',       label:'Wind Charged',       bedrockId:36 },
  { id:'minecraft:weaving',            label:'Weaving',            bedrockId:37 },
  { id:'minecraft:oozing',             label:'Oozing',             bedrockId:38 },
  { id:'minecraft:infested',           label:'Infested',           bedrockId:39 }
];

// ─── GAMERULES ────────────────────────────────────────────────────────────────
const _TOOLS_GAMERULES_BEDROCK = [
  { rule:'announceAdvancements',    type:'bool',  default:'true'  },
  { rule:'commandBlocksEnabled',    type:'bool',  default:'true'  },
  { rule:'commandBlockOutput',      type:'bool',  default:'true'  },
  { rule:'doDaylightCycle',         type:'bool',  default:'true'  },
  { rule:'doEntityDrops',           type:'bool',  default:'true'  },
  { rule:'doFireTick',              type:'bool',  default:'true'  },
  { rule:'doImmediateRespawn',      type:'bool',  default:'false' },
  { rule:'doInsomnia',              type:'bool',  default:'true'  },
  { rule:'doLimitedCrafting',       type:'bool',  default:'false' },
  { rule:'doMobLoot',               type:'bool',  default:'true'  },
  { rule:'doMobSpawning',           type:'bool',  default:'true'  },
  { rule:'doTileDrops',             type:'bool',  default:'true'  },
  { rule:'doWeatherCycle',          type:'bool',  default:'true'  },
  { rule:'drowningDamage',          type:'bool',  default:'true'  },
  { rule:'fallDamage',              type:'bool',  default:'true'  },
  { rule:'fireDamage',              type:'bool',  default:'true'  },
  { rule:'freezeDamage',            type:'bool',  default:'true'  },
  { rule:'functionCommandLimit',    type:'int',   default:'10000' },
  { rule:'keepInventory',           type:'bool',  default:'false' },
  { rule:'maxCommandChainLength',   type:'int',   default:'65536' },
  { rule:'mobGriefing',             type:'bool',  default:'true'  },
  { rule:'naturalRegeneration',     type:'bool',  default:'true'  },
  { rule:'playersSleepingPercentage',type:'int',  default:'100'   },
  { rule:'pvp',                     type:'bool',  default:'true'  },
  { rule:'randomTickSpeed',         type:'int',   default:'1'     },
  { rule:'respawnBlocksExplode',    type:'bool',  default:'true'  },
  { rule:'sendCommandFeedback',     type:'bool',  default:'true'  },
  { rule:'showCoordinates',         type:'bool',  default:'false' },
  { rule:'showDeathMessages',       type:'bool',  default:'true'  },
  { rule:'showTags',                type:'bool',  default:'true'  },
  { rule:'spawnRadius',             type:'int',   default:'10'    },
  { rule:'tntExplodes',             type:'bool',  default:'true'  }
];

const _TOOLS_GAMERULES_JAVA = [
  { rule:'announceAdvancements',    type:'bool',  default:'true'  },
  { rule:'blockExplosionDropDecay', type:'bool',  default:'true'  },
  { rule:'commandBlockOutput',      type:'bool',  default:'true'  },
  { rule:'commandModificationBlockLimit',type:'int',default:'32768'},
  { rule:'disableElytraMovementCheck',type:'bool',default:'false' },
  { rule:'disableRaids',            type:'bool',  default:'false' },
  { rule:'doDaylightCycle',         type:'bool',  default:'true'  },
  { rule:'doEntityDrops',           type:'bool',  default:'true'  },
  { rule:'doFireTick',              type:'bool',  default:'true'  },
  { rule:'doImmediateRespawn',      type:'bool',  default:'false' },
  { rule:'doInsomnia',              type:'bool',  default:'true'  },
  { rule:'doLimitedCrafting',       type:'bool',  default:'false' },
  { rule:'doMobLoot',               type:'bool',  default:'true'  },
  { rule:'doMobSpawning',           type:'bool',  default:'true'  },
  { rule:'doPatrolSpawning',        type:'bool',  default:'true'  },
  { rule:'doTileDrops',             type:'bool',  default:'true'  },
  { rule:'doTraderSpawning',        type:'bool',  default:'true'  },
  { rule:'doVinesSpread',           type:'bool',  default:'true'  },
  { rule:'doWeatherCycle',          type:'bool',  default:'true'  },
  { rule:'doWardenSpawning',        type:'bool',  default:'true'  },
  { rule:'drowningDamage',          type:'bool',  default:'true'  },
  { rule:'enderPearlsVanishOnDeath',type:'bool',  default:'true'  },
  { rule:'fallDamage',              type:'bool',  default:'true'  },
  { rule:'fireDamage',              type:'bool',  default:'true'  },
  { rule:'forgiveDeadPlayers',      type:'bool',  default:'true'  },
  { rule:'freezeDamage',            type:'bool',  default:'true'  },
  { rule:'globalSoundEvents',       type:'bool',  default:'true'  },
  { rule:'keepInventory',           type:'bool',  default:'false' },
  { rule:'lavaSourceConversion',    type:'bool',  default:'false' },
  { rule:'logAdminCommands',        type:'bool',  default:'true'  },
  { rule:'maxCommandChainLength',   type:'int',   default:'65536' },
  { rule:'maxEntityCramming',       type:'int',   default:'24'    },
  { rule:'mobExplosionDropDecay',   type:'bool',  default:'true'  },
  { rule:'mobGriefing',             type:'bool',  default:'true'  },
  { rule:'naturalRegeneration',     type:'bool',  default:'true'  },
  { rule:'playersSleepingPercentage',type:'int',  default:'100'   },
  { rule:'projectilesCanBreakBlocks',type:'bool', default:'true'  },
  { rule:'pvp',                     type:'bool',  default:'true'  },
  { rule:'randomTickSpeed',         type:'int',   default:'3'     },
  { rule:'reducedDebugInfo',        type:'bool',  default:'false' },
  { rule:'sendCommandFeedback',     type:'bool',  default:'true'  },
  { rule:'showDeathMessages',       type:'bool',  default:'true'  },
  { rule:'snowAccumulationHeight',  type:'int',   default:'1'     },
  { rule:'spawnRadius',             type:'int',   default:'10'    },
  { rule:'spectatorsGenerateChunks',type:'bool',  default:'true'  },
  { rule:'tntExplosionDropDecay',   type:'bool',  default:'false' },
  { rule:'universalAnger',          type:'bool',  default:'false' },
  { rule:'waterSourceConversion',   type:'bool',  default:'true'  }
];

// ─── CURATED COMMAND SCHEMAS ──────────────────────────────────────────────────
const _TOOLS_CMDS = [
  {
    id:'gamemode', label:'/gamemode', platform:'both',
    syntax:{
      java:   '<s>gamemode</s> <r>&lt;gamemode&gt;</r> <o>[target]</o>',
      bedrock:'<s>gamemode</s> <r>&lt;gamemode&gt;</r> <o>[player]</o>'
    },
    params:[
      { key:'gamemode', label:'Game Mode', type:'enum', required:true,
        values:['survival','creative','adventure','spectator'],
        bedrockValues:['survival','creative','adventure','spectator'] },
      { key:'target', label:'Target', type:'target', required:false, placeholder:'@s' }
    ]
  },
  {
    id:'difficulty', label:'/difficulty', platform:'both',
    syntax:{
      java:   '<s>difficulty</s> <r>&lt;difficulty&gt;</r>',
      bedrock:'<s>difficulty</s> <r>&lt;difficulty&gt;</r>'
    },
    params:[
      { key:'difficulty', label:'Difficulty', type:'enum', required:true,
        values:['peaceful','easy','normal','hard'],
        bedrockValues:['peaceful','easy','normal','hard'] }
    ]
  },
  {
    id:'gamerule', label:'/gamerule', platform:'both',
    syntax:{
      java:   '<s>gamerule</s> <r>&lt;rule&gt;</r> <o>[value]</o>',
      bedrock:'<s>gamerule</s> <r>&lt;rule&gt;</r> <o>[value]</o>'
    },
    params:[
      { key:'rule',  label:'Rule',  type:'gamerule', required:true  },
      { key:'value', label:'Value', type:'string',   required:false, placeholder:'true / 1' }
    ]
  },
  {
    id:'time', label:'/time', platform:'both',
    syntax:{
      java:   '<s>time</s> <l>set|add|query</l> <r>&lt;value&gt;</r>',
      bedrock:'<s>time</s> <l>set|add|query</l> <r>&lt;value&gt;</r>'
    },
    params:[
      { key:'action', label:'Action', type:'enum', required:true,
        values:['set','add','query'],
        bedrockValues:['set','add','query'] },
      { key:'value', label:'Value / Time of Day', type:'string', required:false,
        placeholder:'day / night / noon / 0' }
    ]
  },
  {
    id:'weather', label:'/weather', platform:'both',
    syntax:{
      java:   '<s>weather</s> <l>clear|rain|thunder</l> <o>[duration]</o>',
      bedrock:'<s>weather</s> <l>clear|rain|thunder</l> <o>[duration]</o>'
    },
    params:[
      { key:'type', label:'Type', type:'enum', required:true,
        values:['clear','rain','thunder'],
        bedrockValues:['clear','rain','thunder'] },
      { key:'duration', label:'Duration (ticks)', type:'int', required:false, placeholder:'6000' }
    ]
  },
  {
    id:'effect_give', label:'/effect give', platform:'both',
    syntax:{
      java:   '<s>effect</s> <l>give</l> <r>&lt;target&gt;</r> <r>&lt;effect&gt;</r> <o>[duration]</o> <o>[amplifier]</o> <o>[hideParticles]</o>',
      bedrock:'<s>effect</s> <l>give</l> <r>&lt;player&gt;</r> <r>&lt;effect&gt;</r> <o>[seconds]</o> <o>[amplifier]</o> <o>[hideParticles]</o>'
    },
    params:[
      { key:'target',       label:'Target',          type:'target',  required:true,  placeholder:'@a' },
      { key:'effect',       label:'Effect',          type:'effect',  required:true  },
      { key:'duration',     label:'Duration (ticks/s)',type:'int',   required:false, placeholder:'200' },
      { key:'amplifier',    label:'Amplifier (0–255)',type:'int',    required:false, placeholder:'0' },
      { key:'hideParticles',label:'Hide Particles',  type:'bool',    required:false }
    ]
  },
  {
    id:'effect_clear', label:'/effect clear', platform:'both',
    syntax:{
      java:   '<s>effect</s> <l>clear</l> <r>&lt;target&gt;</r> <o>[effect]</o>',
      bedrock:'<s>effect</s> <l>clear</l> <r>&lt;player&gt;</r> <o>[effect]</o>'
    },
    params:[
      { key:'target', label:'Target', type:'target', required:true,  placeholder:'@s' },
      { key:'effect', label:'Effect', type:'effect', required:false }
    ]
  },
  {
    id:'enchant', label:'/enchant', platform:'both',
    syntax:{
      java:   '<s>enchant</s> <r>&lt;target&gt;</r> <r>&lt;enchantment&gt;</r> <o>[level]</o>',
      bedrock:'<s>enchant</s> <r>&lt;player&gt;</r> <r>&lt;enchantmentId&gt;</r> <o>[level]</o>'
    },
    params:[
      { key:'target',      label:'Target',      type:'target',      required:true, placeholder:'@s' },
      { key:'enchantment', label:'Enchantment',  type:'enchantment', required:true },
      { key:'level',       label:'Level',        type:'int',         required:false, placeholder:'1' }
    ]
  },
  {
    id:'tp', label:'/tp', platform:'both',
    syntax:{
      java:   '<s>tp</s> <r>&lt;target&gt;</r> <r>&lt;destination|x y z&gt;</r>',
      bedrock:'<s>tp</s> <r>&lt;target&gt;</r> <r>&lt;destination|x y z&gt;</r>'
    },
    params:[
      { key:'target', label:'Target', type:'target', required:true,  placeholder:'@s' },
      { key:'destTarget', label:'Destination Target', type:'target', required:false, placeholder:'@p' },
      { key:'x',  label:'X', type:'coord', required:false, placeholder:'~' },
      { key:'y',  label:'Y', type:'coord', required:false, placeholder:'~' },
      { key:'z',  label:'Z', type:'coord', required:false, placeholder:'~' }
    ]
  },
  {
    id:'kill', label:'/kill', platform:'both',
    syntax:{
      java:   '<s>kill</s> <o>[target]</o>',
      bedrock:'<s>kill</s> <o>[target]</o>'
    },
    params:[
      { key:'target', label:'Target', type:'target', required:false, placeholder:'@e' }
    ]
  },
  {
    id:'spawnpoint', label:'/spawnpoint', platform:'both',
    syntax:{
      java:   '<s>spawnpoint</s> <o>[player]</o> <o>[x y z]</o> <o>[angle]</o>',
      bedrock:'<s>spawnpoint</s> <o>[player]</o> <o>[x y z]</o>'
    },
    params:[
      { key:'player', label:'Player', type:'target', required:false, placeholder:'@s' },
      { key:'x', label:'X', type:'coord', required:false, placeholder:'~' },
      { key:'y', label:'Y', type:'coord', required:false, placeholder:'~' },
      { key:'z', label:'Z', type:'coord', required:false, placeholder:'~' },
      { key:'angle', label:'Angle (Java only)', type:'float', required:false, placeholder:'0.0', javaOnly:true }
    ]
  },
  {
    id:'setworldspawn', label:'/setworldspawn', platform:'both',
    syntax:{
      java:   '<s>setworldspawn</s> <o>[x y z]</o> <o>[angle]</o>',
      bedrock:'<s>setworldspawn</s> <o>[x y z]</o>'
    },
    params:[
      { key:'x', label:'X', type:'coord', required:false, placeholder:'~' },
      { key:'y', label:'Y', type:'coord', required:false, placeholder:'~' },
      { key:'z', label:'Z', type:'coord', required:false, placeholder:'~' },
      { key:'angle', label:'Angle (Java only)', type:'float', required:false, placeholder:'0.0', javaOnly:true }
    ]
  },
  {
    id:'fill', label:'/fill', platform:'both',
    syntax:{
      java:   '<s>fill</s> <r>&lt;from x y z&gt;</r> <r>&lt;to x y z&gt;</r> <r>&lt;block&gt;</r> <o>[mode]</o>',
      bedrock:'<s>fill</s> <r>&lt;from x y z&gt;</r> <r>&lt;to x y z&gt;</r> <r>&lt;block&gt;</r> <o>[mode]</o>'
    },
    params:[
      { key:'x1', label:'From X', type:'coord', required:true,  placeholder:'~' },
      { key:'y1', label:'From Y', type:'coord', required:true,  placeholder:'~' },
      { key:'z1', label:'From Z', type:'coord', required:true,  placeholder:'~' },
      { key:'x2', label:'To X',   type:'coord', required:true,  placeholder:'~' },
      { key:'y2', label:'To Y',   type:'coord', required:true,  placeholder:'~' },
      { key:'z2', label:'To Z',   type:'coord', required:true,  placeholder:'~' },
      { key:'block', label:'Block', type:'block', required:true, placeholder:'minecraft:stone' },
      { key:'mode', label:'Mode', type:'enum', required:false,
        values:['destroy','hollow','keep','outline','replace'],
        bedrockValues:['destroy','hollow','keep','outline','replace'] }
    ]
  },
  {
    id:'setblock', label:'/setblock', platform:'both',
    syntax:{
      java:   '<s>setblock</s> <r>&lt;x y z&gt;</r> <r>&lt;block&gt;</r> <o>[mode]</o>',
      bedrock:'<s>setblock</s> <r>&lt;x y z&gt;</r> <r>&lt;block&gt;</r> <o>[mode]</o>'
    },
    params:[
      { key:'x', label:'X', type:'coord', required:true, placeholder:'~' },
      { key:'y', label:'Y', type:'coord', required:true, placeholder:'~' },
      { key:'z', label:'Z', type:'coord', required:true, placeholder:'~' },
      { key:'block', label:'Block', type:'block', required:true, placeholder:'minecraft:stone' },
      { key:'mode', label:'Mode', type:'enum', required:false,
        values:['destroy','keep','replace'],
        bedrockValues:['destroy','keep','replace'] }
    ]
  },
  {
    id:'clone', label:'/clone', platform:'both',
    syntax:{
      java:   '<s>clone</s> <r>&lt;begin x y z&gt;</r> <r>&lt;end x y z&gt;</r> <r>&lt;dest x y z&gt;</r> <o>[maskMode]</o> <o>[cloneMode]</o>',
      bedrock:'<s>clone</s> <r>&lt;begin x y z&gt;</r> <r>&lt;end x y z&gt;</r> <r>&lt;dest x y z&gt;</r> <o>[maskMode]</o> <o>[cloneMode]</o>'
    },
    params:[
      { key:'bx', label:'Begin X', type:'coord', required:true, placeholder:'~' },
      { key:'by', label:'Begin Y', type:'coord', required:true, placeholder:'~' },
      { key:'bz', label:'Begin Z', type:'coord', required:true, placeholder:'~' },
      { key:'ex', label:'End X',   type:'coord', required:true, placeholder:'~' },
      { key:'ey', label:'End Y',   type:'coord', required:true, placeholder:'~' },
      { key:'ez', label:'End Z',   type:'coord', required:true, placeholder:'~' },
      { key:'dx', label:'Dest X',  type:'coord', required:true, placeholder:'~' },
      { key:'dy', label:'Dest Y',  type:'coord', required:true, placeholder:'~' },
      { key:'dz', label:'Dest Z',  type:'coord', required:true, placeholder:'~' },
      { key:'maskMode',  label:'Mask Mode',  type:'enum', required:false,
        values:['replace','masked','filtered'],
        bedrockValues:['replace','masked','filtered'] },
      { key:'cloneMode', label:'Clone Mode', type:'enum', required:false,
        values:['normal','force','move'],
        bedrockValues:['normal','force','move'] }
    ]
  },
  {
    id:'scoreboard_objectives_add', label:'/scoreboard objectives add', platform:'both',
    syntax:{
      java:   '<s>scoreboard</s> <l>objectives add</l> <r>&lt;name&gt;</r> <r>&lt;criteria&gt;</r> <o>[displayName]</o>',
      bedrock:'<s>scoreboard</s> <l>objectives add</l> <r>&lt;name&gt;</r> <l>dummy</l> <o>[displayName]</o>'
    },
    params:[
      { key:'name',        label:'Objective Name', type:'string', required:true,  placeholder:'kills' },
      { key:'criteria',    label:'Criteria (Java)', type:'string', required:false, placeholder:'playerKillCount', javaOnly:true },
      { key:'displayName', label:'Display Name',   type:'string', required:false, placeholder:'Kill Count' }
    ]
  },
  {
    id:'scoreboard_players_set', label:'/scoreboard players set', platform:'both',
    syntax:{
      java:   '<s>scoreboard</s> <l>players set</l> <r>&lt;target&gt;</r> <r>&lt;objective&gt;</r> <r>&lt;score&gt;</r>',
      bedrock:'<s>scoreboard</s> <l>players set</l> <r>&lt;player&gt;</r> <r>&lt;objective&gt;</r> <r>&lt;score&gt;</r>'
    },
    params:[
      { key:'target',    label:'Target',    type:'target', required:true, placeholder:'@s' },
      { key:'objective', label:'Objective', type:'string', required:true, placeholder:'kills' },
      { key:'score',     label:'Score',     type:'int',    required:true, placeholder:'0' }
    ]
  },
  {
    id:'tag', label:'/tag', platform:'both',
    syntax:{
      java:   '<s>tag</s> <r>&lt;target&gt;</r> <l>add|remove|list</l> <o>[name]</o>',
      bedrock:'<s>tag</s> <r>&lt;target&gt;</r> <l>add|remove|list</l> <o>[name]</o>'
    },
    params:[
      { key:'target', label:'Target',    type:'target', required:true },
      { key:'action', label:'Action',    type:'enum',   required:true,
        values:['add','remove','list'],
        bedrockValues:['add','remove','list'] },
      { key:'name',   label:'Tag Name',  type:'string', required:false, placeholder:'myTag' }
    ]
  },
  {
    id:'title', label:'/title', platform:'both',
    syntax:{
      java:   '<s>title</s> <r>&lt;target&gt;</r> <l>title|subtitle|actionbar|clear|reset|times</l> <o>[text]</o>',
      bedrock:'<s>title</s> <r>&lt;player&gt;</r> <l>title|subtitle|actionbar|clear|reset|times</l> <o>[text]</o>'
    },
    params:[
      { key:'target', label:'Target',          type:'target', required:true, placeholder:'@a' },
      { key:'action', label:'Action',          type:'enum',   required:true,
        values:['title','subtitle','actionbar','clear','reset','times'],
        bedrockValues:['title','subtitle','actionbar','clear','reset','times'] },
      { key:'text',   label:'Text / Times',    type:'string', required:false,
        placeholder:'"Hello World" or 10 70 20' }
    ]
  },
  {
    id:'playsound', label:'/playsound', platform:'both',
    syntax:{
      java:   '<s>playsound</s> <r>&lt;sound&gt;</r> <r>&lt;source&gt;</r> <r>&lt;target&gt;</r> <o>[x y z]</o> <o>[volume]</o> <o>[pitch]</o> <o>[minVolume]</o>',
      bedrock:'<s>playsound</s> <r>&lt;sound&gt;</r> <o>[player]</o> <o>[x y z]</o> <o>[volume]</o> <o>[pitch]</o> <o>[minVolume]</o>'
    },
    params:[
      { key:'sound',     label:'Sound ID',         type:'string', required:true,  placeholder:'minecraft:entity.player.levelup' },
      { key:'source',    label:'Source (Java)',     type:'enum',   required:false, javaOnly:true,
        values:['master','music','record','weather','block','hostile','neutral','player','ambient','voice'],
        bedrockValues:[] },
      { key:'target',    label:'Target',            type:'target', required:true,  placeholder:'@a' },
      { key:'x',         label:'X',                 type:'coord',  required:false, placeholder:'~' },
      { key:'y',         label:'Y',                 type:'coord',  required:false, placeholder:'~' },
      { key:'z',         label:'Z',                 type:'coord',  required:false, placeholder:'~' },
      { key:'volume',    label:'Volume',            type:'float',  required:false, placeholder:'1.0' },
      { key:'pitch',     label:'Pitch',             type:'float',  required:false, placeholder:'1.0' },
      { key:'minVolume', label:'Min Volume',        type:'float',  required:false, placeholder:'0.0' }
    ]
  },
  {
    id:'clear', label:'/clear', platform:'both',
    syntax:{
      java:   '<s>clear</s> <o>[target]</o> <o>[item]</o> <o>[count]</o>',
      bedrock:'<s>clear</s> <o>[player]</o> <o>[item]</o> <o>[data]</o> <o>[count]</o>'
    },
    params:[
      { key:'target', label:'Target',          type:'target', required:false, placeholder:'@s' },
      { key:'item',   label:'Item ID',         type:'item',   required:false, placeholder:'minecraft:diamond' },
      { key:'data',   label:'Data (Bedrock)',   type:'int',    required:false, placeholder:'0', bedrockOnly:true },
      { key:'count',  label:'Count',           type:'int',    required:false, placeholder:'1' }
    ]
  },
  {
    id:'xp', label:'/xp / experience', platform:'both',
    syntax:{
      java:   '<s>experience</s> <l>add|set|query</l> <r>&lt;target&gt;</r> <r>&lt;amount&gt;</r> <o>[points|levels]</o>',
      bedrock:'<s>xp</s> <r>&lt;amount[L]&gt;</r> <o>[player]</o>'
    },
    params:[
      { key:'action', label:'Action (Java)',   type:'enum',   required:false, javaOnly:true,
        values:['add','set','query'],
        bedrockValues:[] },
      { key:'target', label:'Target',          type:'target', required:true,  placeholder:'@s' },
      { key:'amount', label:'Amount',          type:'int',    required:true,  placeholder:'10' },
      { key:'type',   label:'Points or Levels (Java)', type:'enum', required:false, javaOnly:true,
        values:['points','levels'],
        bedrockValues:[] },
      { key:'levels', label:'Use Levels? (Bedrock — append L)', type:'bool', required:false, bedrockOnly:true }
    ]
  },
  {
    id:'function', label:'/function', platform:'both',
    syntax:{
      java:   '<s>function</s> <r>&lt;name&gt;</r>',
      bedrock:'<s>function</s> <r>&lt;name&gt;</r>'
    },
    params:[
      { key:'name', label:'Function Name', type:'string', required:true, placeholder:'my_pack:reset' }
    ]
  },
  {
    id:'execute', label:'/execute', platform:'both',
    syntax:{
      java:   '<s>execute</s> <sub>[as|at|if|unless|positioned|rotated|facing|in|anchored|store]</sub> ... <l>run</l> <r>&lt;command&gt;</r>',
      bedrock:'<s>execute</s> <sub>[as|at|if|unless|positioned|rotated|facing|in|anchored|store]</sub> ... <l>run</l> <r>&lt;command&gt;</r>'
    },
    params:[], // execute is special — handled entirely by renderExecuteBuilder()
    special:'execute'
  },
  {
    id:'particle', label:'/particle', platform:'java',
    syntax:{
      java:   '<s>particle</s> <r>&lt;name&gt;</r> <o>[x y z]</o> <o>[dx dy dz]</o> <o>[speed]</o> <o>[count]</o>',
      bedrock:''
    },
    params:[
      { key:'name',  label:'Particle Name', type:'string', required:true, placeholder:'minecraft:dust' },
      { key:'x',     label:'X',             type:'coord',  required:false, placeholder:'~' },
      { key:'y',     label:'Y',             type:'coord',  required:false, placeholder:'~' },
      { key:'z',     label:'Z',             type:'coord',  required:false, placeholder:'~' },
      { key:'dx',    label:'Delta X',       type:'float',  required:false, placeholder:'0.0' },
      { key:'dy',    label:'Delta Y',       type:'float',  required:false, placeholder:'0.0' },
      { key:'dz',    label:'Delta Z',       type:'float',  required:false, placeholder:'0.0' },
      { key:'speed', label:'Speed',         type:'float',  required:false, placeholder:'1.0' },
      { key:'count', label:'Count',         type:'int',    required:false, placeholder:'1' }
    ]
  },
  {
    id:'damage', label:'/damage', platform:'java',
    syntax:{
      java:   '<s>damage</s> <r>&lt;target&gt;</r> <r>&lt;amount&gt;</r> <o>[type]</o>',
      bedrock:''
    },
    params:[
      { key:'target', label:'Target', type:'target', required:true,  placeholder:'@s' },
      { key:'amount', label:'Amount', type:'int',    required:true,  placeholder:'1' },
      { key:'type',   label:'Damage Type', type:'string', required:false, placeholder:'minecraft:generic' }
    ]
  }
];

// ─── PRIVATE TOOLS SCOPE ─────────────────────────────────────────────────────
// All state, rendering, and logic is private. No globals written here except
// the _TOOLS_* data arrays above and SECTIONS.register() call at the bottom.
(function () {

  // ── Closure state ──────────────────────────────────────────────────────────
  let _activeTool = 'give';   // 'give' | 'summon' | 'cmd'
  let _platform   = 'bedrock'; // 'bedrock' | 'java'

  // Unique ID counter for repeatable row inputs so labels wire up correctly.
  let _uid = 0;
  function uid() { return 'ti' + (++_uid); }

  // ── DOM helpers ────────────────────────────────────────────────────────────
  function el(tag, cls, text) {
    const e = document.createElement(tag);
    if (cls)  e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }

  function inp(type, cls, placeholder, value) {
    const e = document.createElement('input');
    e.type = type;
    if (cls)         e.className = cls;
    if (placeholder) e.placeholder = placeholder;
    if (value != null) e.value = value;
    return e;
  }

  function sel(cls, options, selectedValue) {
    const s = document.createElement('select');
    s.className = cls;
    options.forEach(([val, lbl]) => {
      const o = document.createElement('option');
      o.value = val;
      o.textContent = lbl;
      if (val === selectedValue) o.selected = true;
      s.appendChild(o);
    });
    return s;
  }

  function fieldSection(titleText, body, collapsed) {
    const wrap  = el('div', 'field-section' + (collapsed ? ' collapsed' : ''));
    const title = el('div', 'field-section-title');
    title.innerHTML = `${titleText} <span class="field-chevron">▼</span>`;
    title.onclick = () => wrap.classList.toggle('collapsed');
    wrap.appendChild(title);
    const bd = el('div', 'field-section-body');
    body(bd);
    wrap.appendChild(bd);
    return wrap;
  }

  function fieldRow(labelText, inputEl, required) {
    const row  = el('div', 'field-row');
    const lbl  = el('div', 'field-label' + (required ? ' required' : ''), labelText);
    row.appendChild(lbl);
    row.appendChild(inputEl);
    return row;
  }

  function checkRow(labelText, chkEl) {
    const row = el('div', 'tool-checkbox-row');
    row.appendChild(chkEl);
    const lbl = el('div', 'field-label', labelText);
    row.appendChild(lbl);
    return row;
  }

  function autocompleteInput(cls, list, placeholder, onchange) {
    const wrapper  = el('div');
    wrapper.style.cssText = 'position:relative;flex:1;min-width:120px;';
    const input    = inp('text', cls, placeholder);
    input.style.width = '100%';
    const dropdown = el('div');
    dropdown.style.cssText = 'position:absolute;top:100%;left:0;right:0;background:var(--bg2);border:1px solid var(--border2);z-index:50;max-height:180px;overflow-y:auto;display:none;';

    let items = [];

    function showDropdown(term) {
      dropdown.innerHTML = '';
      const t = term.toLowerCase();
      const matches = list.filter(s => s.toLowerCase().includes(t)).slice(0, 30);
      if (!matches.length) { dropdown.style.display = 'none'; return; }
      matches.forEach(s => {
        const row = el('div', 'cmd-picker-item', s);
        row.onmousedown = e => {
          e.preventDefault();
          input.value = s;
          dropdown.style.display = 'none';
          if (onchange) onchange(s);
        };
        dropdown.appendChild(row);
      });
      dropdown.style.display = 'block';
    }

    input.addEventListener('input', () => showDropdown(input.value));
    input.addEventListener('focus', () => showDropdown(input.value));
    input.addEventListener('blur',  () => setTimeout(() => { dropdown.style.display = 'none'; }, 150));
    if (onchange) input.addEventListener('change', () => onchange(input.value));

    wrapper.appendChild(input);
    wrapper.appendChild(dropdown);
    return { wrapper, input };
  }

  // ── Output block ──────────────────────────────────────────────────────────
  function makeOutputBlock(getLiveOutput) {
    const section = el('div', 'tool-output-section');
    const header  = el('div', 'tool-output-header');
    const hLabel  = el('span', '', 'Output');
    const actions = el('div', 'tool-output-actions');
    const copyBtn = el('button', 'tool-btn', 'Copy');
    const resetBtn= el('button', 'tool-btn', 'Reset');
    actions.appendChild(copyBtn);
    actions.appendChild(resetBtn);
    header.appendChild(hLabel);
    header.appendChild(actions);

    const block = el('div', 'tool-output-block empty', '— fill in the fields above —');

    copyBtn.onclick = () => {
      const text = block.textContent;
      if (!text || block.classList.contains('empty')) return;
      navigator.clipboard.writeText(text).then(() => {
        copyBtn.classList.add('copy-success');
        copyBtn.textContent = 'Copied';
        setTimeout(() => { copyBtn.classList.remove('copy-success'); copyBtn.textContent = 'Copy'; }, 1500);
      });
    };

    section.appendChild(header);
    section.appendChild(block);

    function refresh() {
      const out = getLiveOutput();
      if (out) {
        block.textContent = out;
        block.classList.remove('empty');
      } else {
        block.textContent = '— fill in the fields above —';
        block.classList.add('empty');
      }
    }

    return { section, block, refresh, resetBtn };
  }

  // ── Platform toggle ────────────────────────────────────────────────────────
  function makePlatformToggle(onChange) {
    const wrap = el('div', 'tool-platform-toggle');
    const bed  = el('button', 'pill' + (_platform === 'bedrock' ? ' active' : ''), 'Bedrock');
    const jav  = el('button', 'pill' + (_platform === 'java'    ? ' active' : ''), 'Java');
    bed.onclick = () => {
      if (_platform === 'bedrock') return;
      _platform = 'bedrock';
      bed.classList.add('active'); jav.classList.remove('active');
      onChange();
    };
    jav.onclick = () => {
      if (_platform === 'java') return;
      _platform = 'java';
      jav.classList.add('active'); bed.classList.remove('active');
      onChange();
    };
    wrap.appendChild(bed);
    wrap.appendChild(jav);
    return wrap;
  }

  // ── Sidebar renderer ──────────────────────────────────────────────────────
  function renderSidebar(aside) {
    aside.querySelectorAll('.snav-group, .ilink').forEach(e => e.remove());

    const tools = [
      { id:'give',   label:'/give Builder'    },
      { id:'summon', label:'/summon Builder'  },
      { id:'cmd',    label:'Command Builder'  }
    ];

    tools.forEach(t => {
      const a = el('div', 'ilink' + (_activeTool === t.id ? ' active' : ''), t.label);
      a.onclick = () => {
        _activeTool = t.id;
        aside.querySelectorAll('.ilink').forEach(l => l.classList.remove('active'));
        a.classList.add('active');
        const main = document.getElementById('main');
        renderTool(main);
      };
      aside.appendChild(a);
    });
  }

  // ─────────────────────────────────────────────────────────────────────────
  // /give BUILDER
  // ─────────────────────────────────────────────────────────────────────────
  function renderGiveTool(main) {
    // State held in closures over DOM inputs — no module state.
    // Output is assembled on demand by reading current input values.

    const panel = el('div', 'tool-panel');

    // Header
    const header = el('div', 'tool-header');
    const title  = el('div', 'tool-title', '/give Builder');
    header.appendChild(title);
    header.appendChild(makePlatformToggle(() => renderTool(main)));
    panel.appendChild(header);

    const body = el('div', 'tool-body');

    // ── Core fields ──────────────────────────────────────────────────────
    let coreRefs;
    const coreSection = fieldSection('Core', bd => {
      // Target
      const targetIn = inp('text', 'tool-input', '@p');
      bd.appendChild(fieldRow('Target *', targetIn, true));

      // Item autocomplete
      const itemAC = autocompleteInput('tool-input', _TOOLS_ITEMS, 'minecraft:diamond_sword');
      bd.appendChild(fieldRow('Item ID *', itemAC.wrapper, true));

      // Count
      const countIn = inp('number', 'tool-input short', '1');
      countIn.min = 1; countIn.max = _platform === 'java' ? 2304 : 255; countIn.value = '1';
      bd.appendChild(fieldRow('Count', countIn, false));

      // Data (Bedrock only)
      const dataIn = inp('number', 'tool-input short', '0');
      dataIn.min = 0; dataIn.value = '0';
      const dataRow = fieldRow('Data Value (Bedrock)', dataIn, false);
      dataRow.style.display = _platform === 'bedrock' ? '' : 'none';
      bd.appendChild(dataRow);

      coreRefs = { targetIn, itemIn: itemAC.input, countIn, dataIn, dataRow };
    });
    body.appendChild(coreSection);

    // ── Identity fields ───────────────────────────────────────────────────
    const identitySection = fieldSection('Display / Identity', bd => {
      const nameIn  = inp('text', 'tool-input', _platform === 'java' ? '{"text":"My Item"}' : 'My Item');
      bd.appendChild(fieldRow('Custom Name', nameIn, false));

      const loreIn  = document.createElement('textarea');
      loreIn.className = 'tool-input'; loreIn.placeholder = 'Line 1\nLine 2';
      loreIn.rows = 3;
      bd.appendChild(fieldRow('Lore (one line = one entry)', loreIn, false));

      const cmdModelIn = inp('number', 'tool-input short', '0');
      const cmdModelRow = fieldRow('Custom Model Data', cmdModelIn, false);
      bd.appendChild(cmdModelRow);

      const rarityRow = fieldRow('Rarity', sel('tool-input medium', [
        ['','(none)'],['common','common'],['uncommon','uncommon'],['rare','rare'],['epic','epic']
      ], ''), false);
      bd.appendChild(rarityRow);

      const hideTooltipChk = el('input'); hideTooltipChk.type = 'checkbox'; hideTooltipChk.className = 'tool-checkbox';
      bd.appendChild(checkRow('hide_tooltip (Java)', hideTooltipChk));
      const hideAddlChk = el('input'); hideAddlChk.type = 'checkbox'; hideAddlChk.className = 'tool-checkbox';
      bd.appendChild(checkRow('hide_additional_tooltip (Java)', hideAddlChk));

      return { nameIn, loreIn, cmdModelIn, cmdModelRow, rarityRow,
               raritySelect: rarityRow.querySelector('select'), hideTooltipChk, hideAddlChk };
    }, true);
    body.appendChild(identitySection);

    // ── Durability ─────────────────────────────────────────────────────────
    const durSection = fieldSection('Durability', bd => {
      const damageIn = inp('number', 'tool-input short', '0');
      damageIn.min = 0; damageIn.value = '0';
      bd.appendChild(fieldRow('Damage (0 = undamaged)', damageIn, false));

      const unbrkChk = el('input'); unbrkChk.type = 'checkbox'; unbrkChk.className = 'tool-checkbox';
      bd.appendChild(checkRow('Unbreakable', unbrkChk));

      const maxSizeIn = inp('number', 'tool-input short', '64');
      maxSizeIn.min = 1; maxSizeIn.max = 99;
      const maxSizeRow = fieldRow('Max Stack Size (Java)', maxSizeIn, false);
      bd.appendChild(maxSizeRow);

      return { damageIn, unbrkChk, maxSizeIn, maxSizeRow };
    }, true);
    body.appendChild(durSection);

    // ── Enchantments ──────────────────────────────────────────────────────
    const enchRows = [];
    const enchSection = fieldSection('Enchantments', bd => {
      const repeatBlock = el('div', 'repeat-block');
      const addBtn = el('button', 'repeat-add', '+ Add Enchantment');

      function addEnchRow() {
        const row    = el('div', 'repeat-row');
        const enchSel = sel('tool-input medium',
          [['','(none)']].concat(_TOOLS_ENCHANTS.map(e => [e.id, e.label])), '');
        const lvlIn  = inp('number', 'tool-input short', '1');
        lvlIn.min = 1; lvlIn.max = 255; lvlIn.value = '1';
        const rmBtn  = el('button', 'repeat-remove', '✕');
        const stored = el('input'); stored.type = 'checkbox'; stored.className = 'tool-checkbox';
        const storedLabel = el('span'); storedLabel.style.cssText = 'font-family:var(--mono);font-size:.65rem;color:var(--text-dim)'; storedLabel.textContent = 'Book/Stored';
        row.appendChild(enchSel); row.appendChild(lvlIn); row.appendChild(stored); row.appendChild(storedLabel); row.appendChild(rmBtn);
        const obj = { row, enchSel, lvlIn, stored };
        enchRows.push(obj);
        rmBtn.onclick = () => { repeatBlock.removeChild(row); enchRows.splice(enchRows.indexOf(obj), 1); };
        repeatBlock.insertBefore(row, addBtn);
      }

      addBtn.onclick = addEnchRow;
      repeatBlock.appendChild(addBtn);
      bd.appendChild(repeatBlock);
    }, true);
    body.appendChild(enchSection);

    // ── Attribute Modifiers ───────────────────────────────────────────────
    const attrRows = [];
    const attrSection = fieldSection('Attribute Modifiers', bd => {
      const repeatBlock = el('div', 'repeat-block');
      const addBtn = el('button', 'repeat-add', '+ Add Modifier');

      const attrList = [
        ['minecraft:max_health','Max Health'],
        ['minecraft:attack_damage','Attack Damage'],
        ['minecraft:attack_speed','Attack Speed'],
        ['minecraft:armor','Armor'],
        ['minecraft:armor_toughness','Armor Toughness'],
        ['minecraft:knockback_resistance','Knockback Resistance'],
        ['minecraft:movement_speed','Movement Speed'],
        ['minecraft:luck','Luck'],
        ['minecraft:max_absorption','Max Absorption'],
        ['minecraft:block_break_speed','Block Break Speed (Java)'],
        ['minecraft:mining_efficiency','Mining Efficiency (Java)']
      ];

      function addAttrRow() {
        const row      = el('div', 'repeat-row');
        const attrSel  = sel('tool-input medium', [['','(attribute)']].concat(attrList), '');
        const amountIn = inp('number', 'tool-input short', '0');
        amountIn.step = '0.01';
        const opSel    = sel('tool-input medium', [
          ['add_value','add_value'],
          ['add_multiplied_base','add_mult_base'],
          ['add_multiplied_total','add_mult_total']
        ], 'add_value');
        const slotSel  = sel('tool-input medium', [
          ['any','any'],['mainhand','mainhand'],['offhand','offhand'],
          ['head','head'],['chest','chest'],['legs','legs'],['feet','feet'],['body','body']
        ], 'any');
        const rmBtn = el('button', 'repeat-remove', '✕');
        row.appendChild(attrSel); row.appendChild(amountIn); row.appendChild(opSel); row.appendChild(slotSel); row.appendChild(rmBtn);
        const obj = { row, attrSel, amountIn, opSel, slotSel };
        attrRows.push(obj);
        rmBtn.onclick = () => { repeatBlock.removeChild(row); attrRows.splice(attrRows.indexOf(obj), 1); };
        repeatBlock.insertBefore(row, addBtn);
      }

      addBtn.onclick = addAttrRow;
      repeatBlock.appendChild(addBtn);
      bd.appendChild(repeatBlock);
      const attrNote = el('div','platform-only-note',
        'Attribute Modifiers via /give NBT are Java-only (1.20.5+ component format). Bedrock does not support item attribute modifiers through /give.');
      attrNote.style.display = _platform === 'bedrock' ? '' : 'none';
      bd.appendChild(attrNote);
    }, true);
    body.appendChild(attrSection);

    // ── Block Entity / Raw NBT ────────────────────────────────────────────
    const rawSection = fieldSection('Raw NBT / Block Entity Data', bd => {
      const rawNbtIn = document.createElement('textarea');
      rawNbtIn.className = 'tool-input';
      rawNbtIn.placeholder = '{BlockEntityTag:{...}}';
      rawNbtIn.rows = 3;
      bd.appendChild(rawNbtIn);
      const note = el('div', 'tool-note', 'Appended verbatim to NBT output. No validation. Java: block_entity_data component. Bedrock: BlockEntityTag key inside NBT.');
      bd.appendChild(note);
      return { rawNbtIn };
    }, true);
    body.appendChild(rawSection);

    // ── Fireworks ─────────────────────────────────────────────────────────
    const fwRows = [];
    const fwSection = fieldSection('Fireworks', bd => {
      const flightIn = inp('number', 'tool-input short', '1');
      flightIn.min = 0; flightIn.max = 255; flightIn.value = '1';

      const repeatBlock = el('div', 'repeat-block');
      const addBtn = el('button', 'repeat-add', '+ Add Explosion');

      function addFwRow() {
        const row = el('div', 'repeat-row');
        const shapeSel = sel('tool-input medium',[
          ['small_ball','Small Ball'],['large_ball','Large Ball'],
          ['star','Star'],['creeper','Creeper'],['burst','Burst']
        ],'small_ball');
        const colorsIn    = inp('text', 'tool-input medium', '16711680,65280');
        const fadeIn      = inp('text', 'tool-input medium', '');
        const trailChk    = el('input'); trailChk.type='checkbox'; trailChk.className='tool-checkbox';
        const twinkleChk  = el('input'); twinkleChk.type='checkbox'; twinkleChk.className='tool-checkbox';
        const rmBtn       = el('button', 'repeat-remove', '✕');
        const tl = el('span'); tl.textContent = 'Trail'; tl.style.cssText='font-family:var(--mono);font-size:.65rem;color:var(--text-dim);margin-right:6px;';
        const tk = el('span'); tk.textContent = 'Twinkle'; tk.style.cssText='font-family:var(--mono);font-size:.65rem;color:var(--text-dim);margin-right:6px;';
        row.appendChild(shapeSel); row.appendChild(colorsIn); row.appendChild(fadeIn);
        row.appendChild(trailChk); row.appendChild(tl);
        row.appendChild(twinkleChk); row.appendChild(tk);
        row.appendChild(rmBtn);
        const obj = { row, shapeSel, colorsIn, fadeIn, trailChk, twinkleChk };
        fwRows.push(obj);
        rmBtn.onclick = () => { repeatBlock.removeChild(row); fwRows.splice(fwRows.indexOf(obj), 1); };
        repeatBlock.insertBefore(row, addBtn);
      }

      addBtn.onclick = addFwRow;
      repeatBlock.appendChild(addBtn);
      bd.appendChild(fieldRow('Flight Duration', flightIn, false));
      bd.appendChild(repeatBlock);
      return { flightIn };
    }, true);
    body.appendChild(fwSection);

    // ── Output ────────────────────────────────────────────────────────────
    // Read all inputs live and assemble command string.
    function assembleGive() {
      // Read core field values from hoisted closure refs
      const target  = coreRefs.targetIn.value.trim();
      const item    = coreRefs.itemIn.value.trim();
      const count   = parseInt(coreRefs.countIn.value) || 1;
      const data    = parseInt(coreRefs.dataIn.value)  || 0;

      if (!target || !item) return '';

      // Identity rows
      const idRows = identitySection.querySelectorAll('.field-row, .tool-checkbox-row');
      const customName    = idRows[0] ? (idRows[0].querySelector('input') || {value:''}).value.trim() : '';
      const loreTA        = identitySection.querySelector('textarea');
      const loreLines     = loreTA ? loreTA.value.split('\n').filter(l => l.trim()) : [];
      const cmdModel      = idRows[2] ? (idRows[2].querySelector('input') || {value:''}).value.trim() : '';
      const raritySelect  = identitySection.querySelector('select');
      const rarity        = raritySelect ? raritySelect.value : '';
      const hideTooltipCB = identitySection.querySelectorAll('.tool-checkbox')[0];
      const hideAddlCB    = identitySection.querySelectorAll('.tool-checkbox')[1];
      const hideTooltip   = hideTooltipCB ? hideTooltipCB.checked : false;
      const hideAddl      = hideAddlCB ? hideAddlCB.checked : false;

      // Durability
      const durRows = durSection.querySelectorAll('.field-row, .tool-checkbox-row');
      const damage    = durRows[0] ? parseInt((durRows[0].querySelector('input') || {value:'0'}).value) || 0 : 0;
      const unbrkCB   = durSection.querySelector('.tool-checkbox');
      const unbreakable = unbrkCB ? unbrkCB.checked : false;
      const maxSizeIn = durSection.querySelectorAll('.field-row')[1];
      const maxSize   = maxSizeIn ? parseInt((maxSizeIn.querySelector('input') || {value:''}).value) || 0 : 0;

      // Fireworks flight
      const fwFlightIn = fwSection.querySelector('input[type="number"]');
      const fwFlight = fwFlightIn ? parseInt(fwFlightIn.value) || 1 : 1;

      // Raw NBT
      const rawNbtTA = rawSection.querySelector('textarea');
      const rawNbt   = rawNbtTA ? rawNbtTA.value.trim() : '';

      if (_platform === 'java') {
        // ── Java: /give <target> <item>[components] <count>
        const comps = [];

        if (customName) {
          const escaped = customName.replace(/\\/g,'\\\\').replace(/"/g,'\\"').replace(/'/g,"\\'");
          comps.push(`custom_name='{"text":"${escaped}"}'`);
        }
        if (loreLines.length) {
          const loreStr = loreLines.map(l => {
            const le = l.replace(/\\/g,'\\\\').replace(/"/g,'\\"').replace(/'/g,"\\'");
            return `'{"text":"${le}"}'`;
          }).join(',');
          comps.push(`lore=[${loreStr}]`);
        }
        if (cmdModel) comps.push(`custom_model_data=${cmdModel}`);
        if (rarity)   comps.push(`rarity="${rarity}"`);
        if (hideTooltip) comps.push('hide_tooltip={}');
        if (hideAddl)    comps.push('hide_additional_tooltip={}');
        if (damage > 0)  comps.push(`damage=${damage}`);
        if (unbreakable) comps.push('unbreakable={}');
        if (maxSize > 0 && maxSize !== 64) comps.push(`max_stack_size=${maxSize}`);

        // Enchantments
        const normalEnchs = enchRows.filter(r => r.enchSel.value && !r.stored.checked);
        const storedEnchs = enchRows.filter(r => r.enchSel.value && r.stored.checked);
        if (normalEnchs.length) {
          const entries = normalEnchs.map(r => `"${r.enchSel.value}":${parseInt(r.lvlIn.value)||1}`).join(',');
          comps.push(`enchantments={levels:{${entries}}}`);
        }
        if (storedEnchs.length) {
          const entries = storedEnchs.map(r => `"${r.enchSel.value}":${parseInt(r.lvlIn.value)||1}`).join(',');
          comps.push(`stored_enchantments={levels:{${entries}}}`);
        }

        // Attribute modifiers
        if (attrRows.length) {
  const validAttrs = attrRows.filter(r => r.attrSel.value);

  if (validAttrs.length) {
    const aStr = validAttrs.map((r, i) => {
      const shortName = r.attrSel.value
        .replace('minecraft:', '')
        .replace(/[^a-z0-9_]/g, '_'); // FIX: full sanitization

      const amount = Number(r.amountIn.value);
      const safeAmount = Number.isFinite(amount) ? amount : 0;

      const slot = r.slotSel.value;
      const validSlots = new Set([
        "mainhand","offhand","head","chest","legs","feet","body"
      ]);

      const safeSlot = validSlots.has(slot) ? slot : "mainhand";

      return `{
id:"custom:${shortName}_${i}",
attribute:"${r.attrSel.value}", 
amount:${safeAmount},
operation:"${r.opSel.value}",
slot:"${safeSlot}"
}`;
    }).join(',');

    comps.push(`attribute_modifiers=[${aStr}]`);
  }
        }

        // Fireworks
        if (fwRows.length) {
          const expStr = fwRows.map(r => {
            const parts = [];
            parts.push(`shape:"${r.shapeSel.value}"`);
            const cols = r.colorsIn.value.trim();
            if (cols) parts.push(`colors:[${cols}]`);
            const fade = r.fadeIn.value.trim();
            if (fade) parts.push(`fade_colors:[${fade}]`);
            if (r.trailChk.checked)   parts.push('has_trail:true');
            if (r.twinkleChk.checked) parts.push('has_twinkle:true');
            return `{${parts.join(',')}}`;
          }).join(',');
          comps.push(`fireworks={flight_duration:${fwFlight},explosions:[${expStr}]}`);
        }

        if (rawNbt) comps.push(rawNbt.replace(/^\{|\}$/g,''));

        const compStr = comps.length ? `[${comps.join(',')}]` : '';
        const countStr = count !== 1 ? ` ${count}` : '';
        return `/give ${target} ${item}${compStr}${countStr}`;

      } else {
        // ── Bedrock: /give <target> <item> <count> <data> {nbt}
        const nbt = {};

        if (customName || loreLines.length) {
          nbt.display = {};
          if (customName) nbt.display.Name = `"${customName.replace(/"/g,'\\"')}"`;
          if (loreLines.length) nbt.display.Lore = `[${loreLines.map(l => `"${l.replace(/"/g,'\\"')}"`).join(',')}]`;
        }
        if (damage > 0)  nbt.Damage = damage;
        if (unbreakable) nbt.Unbreakable = '1b';

        // Enchantments
        const normalEnchs = enchRows.filter(r => r.enchSel.value && !r.stored.checked);
        const storedEnchs = enchRows.filter(r => r.enchSel.value && r.stored.checked);
        const normalEnchsBedrock = normalEnchs.filter(r => {
          const eo = _TOOLS_ENCHANTS.find(e => e.id === r.enchSel.value);
          return eo && !eo.javaOnly;
        });
        const storedEnchsBedrock = storedEnchs.filter(r => {
          const eo = _TOOLS_ENCHANTS.find(e => e.id === r.enchSel.value);
          return eo && !eo.javaOnly;
        });
        if (normalEnchsBedrock.length) {
          nbt.ench = `[${normalEnchsBedrock.map(r => {
            const eo = _TOOLS_ENCHANTS.find(e => e.id === r.enchSel.value);
            return `{id:${eo ? eo.bedrockId : 0}s,lvl:${parseInt(r.lvlIn.value)||1}s}`;
          }).join(',')}]`;
        }
        if (storedEnchsBedrock.length) {
          nbt.StoredEnchantments = `[${storedEnchsBedrock.map(r => {
            const eo = _TOOLS_ENCHANTS.find(e => e.id === r.enchSel.value);
            return `{id:${eo ? eo.bedrockId : 0}s,lvl:${parseInt(r.lvlIn.value)||1}s}`;
          }).join(',')}]`;
        }

        // Fireworks
        if (fwRows.length) {
          const expStr = fwRows.map(r => {
            const shapeMap = { small_ball:0, large_ball:1, star:2, creeper:3, burst:4 };
            const parts = [`Type:${shapeMap[r.shapeSel.value]||0}b`];
            const cols = r.colorsIn.value.trim();
            if (cols) parts.push(`Colors:[I;${cols}]`);
            const fade = r.fadeIn.value.trim();
            if (fade) parts.push(`FadeColors:[I;${fade}]`);
            if (r.trailChk.checked)   parts.push('Trail:1b');
            if (r.twinkleChk.checked) parts.push('Flicker:1b');
            return `{${parts.join(',')}}`;
          }).join(',');
          nbt.Fireworks = `{Flight:${fwFlight}b,Explosions:[${expStr}]}`;
        }

        if (rawNbt) {
          // Merge raw NBT keys into the nbt object output string by appending
          const rawInner = rawNbt.replace(/^\{|\}$/g, '').trim();
          if (rawInner) nbt._raw = rawInner;
        }

        // Build NBT string
        const nbtParts = [];
        for (const [k, v] of Object.entries(nbt)) {
          if (k === '_raw') continue;
          if (typeof v === 'object') {
            // display sub-object
            const sub = Object.entries(v).map(([sk, sv]) => `${sk}:${sv}`).join(',');
            nbtParts.push(`${k}:{${sub}}`);
          } else {
            nbtParts.push(`${k}:${v}`);
          }
        }
        if (nbt._raw) nbtParts.push(nbt._raw);

        const nbtStr   = nbtParts.length ? ` {${nbtParts.join(',')}}` : '';
        const dataStr  = data !== 0 || nbtStr ? ` ${data}` : '';
        const countFmt = (count !== 1 || dataStr) ? ` ${count}` : '';
        return `/give ${target} ${item}${countFmt}${dataStr}${nbtStr}`;
      }
    }

    const { section: outSection, block: outBlock, resetBtn } = makeOutputBlock(assembleGive);

    function doRefresh() {
      const out = assembleGive();
      if (out) { outBlock.textContent = out; outBlock.classList.remove('empty'); }
      else      { outBlock.textContent = '— fill in the fields above —'; outBlock.classList.add('empty'); }
    }

    resetBtn.onclick = () => {
      panel.querySelectorAll('input[type="text"],input[type="number"]').forEach(i => { if (i.dataset.defaultValue != null) { i.value = i.dataset.defaultValue; } else { i.value = ''; }});
      panel.querySelectorAll('input[type="checkbox"]').forEach(c => c.checked = false);
      panel.querySelectorAll('textarea').forEach(t => t.value = '');
      panel.querySelectorAll('select').forEach(s => s.selectedIndex = 0);
      enchRows.length = 0;
      attrRows.length = 0;
      fwRows.length = 0;
      enchSection.querySelectorAll('.repeat-row').forEach(r => r.remove());
      attrSection.querySelectorAll('.repeat-row').forEach(r => r.remove());
      fwSection.querySelectorAll('.repeat-row').forEach(r => r.remove());
      doRefresh();
    };

    panel.addEventListener('input',  doRefresh);
    panel.addEventListener('change', doRefresh);

    body.appendChild(outSection);
    panel.appendChild(body);

    main.querySelectorAll('.group').forEach(e => e.remove());
    const noRes = document.getElementById('no-results');
    if (noRes) noRes.style.display = 'none';
    main.appendChild(panel);
  }

  // ─────────────────────────────────────────────────────────────────────────
  // /summon BUILDER
  // ─────────────────────────────────────────────────────────────────────────
  function renderSummonTool(main) {
    const panel = el('div', 'tool-panel');

    const header = el('div', 'tool-header');
    header.appendChild(el('div', 'tool-title', '/summon Builder'));
    header.appendChild(makePlatformToggle(() => renderTool(main)));
    panel.appendChild(header);

    const body = el('div', 'tool-body');

    // ── Core ──────────────────────────────────────────────────────────────
    const entityAC = autocompleteInput('tool-input', _TOOLS_ENTITIES, 'minecraft:zombie');

    const coreSection = fieldSection('Core', bd => {
      bd.appendChild(fieldRow('Entity ID *', entityAC.wrapper, true));

      const pos = ['X','Y','Z'].map(axis => {
        const tildeChk = el('input'); tildeChk.type='checkbox'; tildeChk.className='tool-checkbox'; tildeChk.checked = true;
        const coordIn  = inp('number', 'tool-input short', '0');
        coordIn.step   = '0.5';
        const wrap = el('div','field-row');
        const lbl  = el('div','field-label', axis);
        const tl   = el('span'); tl.textContent='~'; tl.style.cssText='font-family:var(--mono);font-size:.75rem;color:var(--text-dim);';
        wrap.appendChild(lbl); wrap.appendChild(tildeChk); wrap.appendChild(tl); wrap.appendChild(coordIn);
        bd.appendChild(wrap);
        return { tildeChk, coordIn };
      });

      const eventIn   = inp('text', 'tool-input', 'minecraft:entity_born');
      const eventRow  = fieldRow('Spawn Event (Bedrock)', eventIn, false);
      bd.appendChild(eventRow);
      const nameTagIn = inp('text', 'tool-input', '');
      const nameTagRow= fieldRow('Name Tag (Bedrock)', nameTagIn, false);
      bd.appendChild(nameTagRow);

      return { pos, eventIn, eventRow, nameTagIn, nameTagRow };
    });
    body.appendChild(coreSection);

    // ── Identity / Display ────────────────────────────────────────────────
    const identSection = fieldSection('Identity / Display', bd => {
      const cnIn  = inp('text', 'tool-input', 'My Entity Name');
      bd.appendChild(fieldRow('CustomName', cnIn, false));
      const cnNote = el('div','tool-note','Plain text is auto-wrapped as a text component. For advanced formatting enter raw JSON: {"text":"Name","bold":true}');
      bd.appendChild(cnNote);
      const cnvChk = el('input'); cnvChk.type='checkbox'; cnvChk.className='tool-checkbox';
      bd.appendChild(checkRow('CustomNameVisible', cnvChk));

      // Tags (Java only)
      const tagRows = [];
      const tagBlock = el('div','repeat-block');
      const tagAddBtn = el('button','repeat-add','+ Add Tag (Java)');
      tagAddBtn.onclick = () => {
        const r = el('div','repeat-row');
        const ti = inp('text','tool-input medium','mytag');
        const rm = el('button','repeat-remove','✕');
        const obj = { r, ti };
        tagRows.push(obj);
        rm.onclick = () => { tagBlock.removeChild(r); tagRows.splice(tagRows.indexOf(obj),1); };
        r.appendChild(ti); r.appendChild(rm);
        tagBlock.insertBefore(r, tagAddBtn);
      };
      tagBlock.appendChild(tagAddBtn);
      bd.appendChild(tagBlock);

      return { cnIn, cnvChk, tagRows, tagBlock };
    }, true);
    body.appendChild(identSection);

    // ── Health / Combat ───────────────────────────────────────────────────
    const healthSection = fieldSection('Health / Combat', bd => {
      const healthIn = inp('number','tool-input short','20'); healthIn.step='0.5';
      bd.appendChild(fieldRow('Health', healthIn, false));
      const maxHlthIn = inp('number','tool-input short','20'); maxHlthIn.step='0.5';
      bd.appendChild(fieldRow('Max Health', maxHlthIn, false));
      const invulnChk = el('input'); invulnChk.type='checkbox'; invulnChk.className='tool-checkbox';
      bd.appendChild(checkRow('Invulnerable', invulnChk));
      const persistChk= el('input'); persistChk.type='checkbox'; persistChk.className='tool-checkbox';
      bd.appendChild(checkRow('PersistenceRequired / Persistence', persistChk));
      const fireIn = inp('number','tool-input short','0');
      bd.appendChild(fieldRow('Fire Ticks (neg = immune)', fireIn, false));
      const absorbIn = inp('number','tool-input short','0'); absorbIn.step='0.5';
      const absorbRow = fieldRow('AbsorptionAmount (Java)', absorbIn, false);
      bd.appendChild(absorbRow);
      return { healthIn, maxHlthIn, invulnChk, persistChk, fireIn, absorbIn, absorbRow };
    }, true);
    body.appendChild(healthSection);

    // ── AI / Behavior ─────────────────────────────────────────────────────
    const aiSection = fieldSection('AI / Behavior', bd => {
      const noAIChk      = el('input'); noAIChk.type='checkbox'; noAIChk.className='tool-checkbox';
      bd.appendChild(checkRow('NoAI', noAIChk));
      const silentChk    = el('input'); silentChk.type='checkbox'; silentChk.className='tool-checkbox';
      bd.appendChild(checkRow('Silent', silentChk));
      const noGravChk    = el('input'); noGravChk.type='checkbox'; noGravChk.className='tool-checkbox';
      bd.appendChild(checkRow('NoGravity', noGravChk));
      const pickupChk    = el('input'); pickupChk.type='checkbox'; pickupChk.className='tool-checkbox';
      bd.appendChild(checkRow('CanPickUpLoot', pickupChk));
      const glowChk      = el('input'); glowChk.type='checkbox'; glowChk.className='tool-checkbox';
      bd.appendChild(checkRow('Glowing (Java)', glowChk));
      const visFireChk   = el('input'); visFireChk.type='checkbox'; visFireChk.className='tool-checkbox';
      bd.appendChild(checkRow('HasVisualFire (Java)', visFireChk));
      const ageIn = inp('number','tool-input short','0');
      bd.appendChild(fieldRow('Age (ticks; neg=baby/nodespawn)', ageIn, false));
      return { noAIChk, silentChk, noGravChk, pickupChk, glowChk, visFireChk, ageIn };
    }, true);
    body.appendChild(aiSection);

    // ── Effects ───────────────────────────────────────────────────────────
    const effectRows = [];
    const effectSection = fieldSection('Active Effects', bd => {
      const repeatBlock = el('div','repeat-block');
      const addBtn = el('button','repeat-add','+ Add Effect');
      addBtn.onclick = () => {
        const row       = el('div','repeat-row');
        const effSel    = sel('tool-input medium', [['','(none)']].concat(_TOOLS_EFFECTS.map(e=>[e.id,e.label])), '');
        const durIn     = inp('number','tool-input short','200');
        const ampIn     = inp('number','tool-input short','0'); ampIn.min=0; ampIn.max=255;
        const ambChk    = el('input'); ambChk.type='checkbox'; ambChk.className='tool-checkbox';
        const partChk   = el('input'); partChk.type='checkbox'; partChk.className='tool-checkbox'; partChk.checked=true;
        const ambLbl    = el('span'); ambLbl.textContent='Ambient'; ambLbl.style.cssText='font-family:var(--mono);font-size:.63rem;color:var(--text-dim);';
        const partLbl   = el('span'); partLbl.textContent='Particles'; partLbl.style.cssText='font-family:var(--mono);font-size:.63rem;color:var(--text-dim);';
        const rmBtn     = el('button','repeat-remove','✕');
        row.appendChild(effSel); row.appendChild(durIn); row.appendChild(ampIn);
        row.appendChild(ambChk); row.appendChild(ambLbl);
        row.appendChild(partChk); row.appendChild(partLbl);
        row.appendChild(rmBtn);
        const obj = { row, effSel, durIn, ampIn, ambChk, partChk };
        effectRows.push(obj);
        rmBtn.onclick = () => { repeatBlock.removeChild(row); effectRows.splice(effectRows.indexOf(obj),1); };
        repeatBlock.insertBefore(row, addBtn);
      };
      repeatBlock.appendChild(addBtn);
      bd.appendChild(repeatBlock);
    }, true);
    body.appendChild(effectSection);

    // ── Passengers (Java only) ────────────────────────────────────────────
    const passengerSection = fieldSection('Passengers', bd => {
      if (_platform === 'bedrock') {
        bd.appendChild(el('div','platform-only-note','Bedrock /summon does not support NBT passengers. Use Java mode to build passenger chains.'));
        return;
      }
      renderPassengerBlock(bd, 0, () => doSummonRefresh());
    }, true);
    body.appendChild(passengerSection);

    // ── Extra NBT ─────────────────────────────────────────────────────────
    const extraSection = fieldSection('Extra / Raw NBT', bd => {
      const extraTA = document.createElement('textarea');
      extraTA.className='tool-input'; extraTA.rows=3;
      extraTA.placeholder='Key:"Value",AnotherKey:1b';
      bd.appendChild(extraTA);
      bd.appendChild(el('div','tool-note','Appended verbatim as additional NBT keys. No braces. No validation.'));
      return { extraTA };
    }, true);
    body.appendChild(extraSection);

    // ── Output ────────────────────────────────────────────────────────────
    function assembleSummon() {
      const entity = entityAC.input.value.trim();
      if (!entity) return '';

      // Position
      const posFields = coreSection.querySelectorAll('.field-row');
      let posStr = '~ ~ ~';
      const posRows = [];
      coreSection.querySelectorAll('.field-row').forEach((r,i) => {
        if (i > 0 && i < 4) posRows.push(r);
      });
      if (posRows.length === 3) {
        posStr = posRows.map(r => {
          const chk = r.querySelector('.tool-checkbox');
          const num = r.querySelector('input[type="number"]');
          return (chk && chk.checked) ? '~' : (num ? num.value : '~');
        }).join(' ');
      }

      const eventIn   = coreSection.querySelectorAll('.field-row')[4];
      const nameTagIn = coreSection.querySelectorAll('.field-row')[5];

      if (_platform === 'bedrock') {
        const event   = eventIn   ? (eventIn.querySelector('input')   || {value:''}).value.trim() : '';
        const nameTag = nameTagIn ? (nameTagIn.querySelector('input') || {value:''}).value.trim() : '';
        const eventPart   = event   ? ` ${event}`   : '';
        const nameTagPart = nameTag ? ` ${nameTag}` : '';
        return `/summon ${entity} ${posStr}${eventPart}${nameTagPart}`;
      }

      // Java: build NBT
      const nbt = {};

      // Identity
      const cnIn = identSection.querySelector('input[type="text"]');
      if (cnIn && cnIn.value.trim()) {
        const cnVal = cnIn.value.trim();
        let cnFormatted;
        try {
          JSON.parse(cnVal);
          cnFormatted = `'${cnVal}'`;
        } catch {
          cnFormatted = `'{"text":"${cnVal.replace(/\\/g,'\\\\').replace(/"/g,'\\"').replace(/'/g,"\\'")}"}'`;
        }
        nbt.CustomName = cnFormatted;
      }
      const cnvCB = identSection.querySelector('.tool-checkbox');
      if (cnvCB && cnvCB.checked) nbt.CustomNameVisible = '1b';

      // Tags
      const tagInputs = identSection.querySelectorAll('.repeat-row input[type="text"]');
      if (tagInputs.length) {
        const tags = Array.from(tagInputs).map(t => `"${t.value.trim()}"`).filter(t => t !== '""');
        if (tags.length) nbt.Tags = `[${tags.join(',')}]`;
      }

      // Health
      const healthRows = healthSection.querySelectorAll('.field-row,.tool-checkbox-row');
      const healthIn  = healthSection.querySelectorAll('.field-row')[0];
      const maxHlthIn = healthSection.querySelectorAll('.field-row')[1];
      const hVal = healthIn  ? parseFloat((healthIn.querySelector('input')||{value:''}).value)  : 0;
      const mhVal= maxHlthIn ? parseFloat((maxHlthIn.querySelector('input')||{value:''}).value) : 0;
      const fireIn = healthSection.querySelectorAll('.field-row')[2];
      const fVal  = fireIn ? parseInt((fireIn.querySelector('input')||{value:'0'}).value)||0 : 0;
      const absRow = healthSection.querySelectorAll('.field-row')[3];
      const aVal  = absRow ? parseFloat((absRow.querySelector('input')||{value:'0'}).value)||0 : 0;
      const checkboxes = healthSection.querySelectorAll('.tool-checkbox');
      const invulnCB  = checkboxes[0];
      const persistCB = checkboxes[1];

      if (hVal > 0 && hVal !== 20)  nbt.Health = `${hVal}f`;
      if (mhVal > 0 && mhVal !== 20) {
        nbt.Attributes = `[{id:"minecraft:max_health",Base:${mhVal}d}]`;
      }
      if (invulnCB && invulnCB.checked)  nbt.Invulnerable = '1b';
      if (persistCB && persistCB.checked) nbt.PersistenceRequired = '1b';
      if (fVal !== 0)  nbt.Fire = `${fVal}s`;
      if (aVal > 0)    nbt.AbsorptionAmount = `${aVal}f`;

      // AI
      const aiCheckboxes = aiSection.querySelectorAll('.tool-checkbox');
      const aiFields  = ['NoAI','Silent','NoGravity','CanPickUpLoot','Glowing','HasVisualFire'];
      aiCheckboxes.forEach((cb, i) => { if (cb.checked && aiFields[i]) nbt[aiFields[i]] = '1b'; });
      const ageRow = aiSection.querySelectorAll('.field-row')[0];
      const ageVal = ageRow ? parseInt((ageRow.querySelector('input')||{value:'0'}).value)||0 : 0;
      if (ageVal !== 0) nbt.Age = `${ageVal}s`;

      // Effects
      if (effectRows.length) {
        const effStr = effectRows.filter(r => r.effSel.value).map(r => {
          return `{id:"${r.effSel.value}",duration:${parseInt(r.durIn.value)||200},amplifier:${parseInt(r.ampIn.value)||0},ambient:${r.ambChk.checked},show_particles:${r.partChk.checked}}`;
        }).join(',');
        if (effStr) nbt.active_effects = `[${effStr}]`;
      }

      // Passengers
      const passengerOutput = collectPassengers(passengerSection);
      if (passengerOutput) nbt.Passengers = passengerOutput;

      // Extra NBT
      const extraTA = extraSection.querySelector('textarea');
      const extraVal = extraTA ? extraTA.value.trim() : '';

      const nbtParts = Object.entries(nbt).map(([k,v]) => `${k}:${v}`);
      if (extraVal) nbtParts.push(extraVal);
      const nbtStr = nbtParts.length ? ` {${nbtParts.join(',')}}` : '';

      return `/summon ${entity} ${posStr}${nbtStr}`;
    }

    const { section: outSection } = makeOutputBlock(assembleSummon);
    const outBlock = outSection.querySelector('.tool-output-block');
    const resetBtn = outSection.querySelector('.tool-btn:nth-child(2)');

    function doSummonRefresh() {
      const out = assembleSummon();
      if (out) { outBlock.textContent = out; outBlock.classList.remove('empty'); }
      else     { outBlock.textContent = '— fill in the fields above —'; outBlock.classList.add('empty'); }
    }

    resetBtn.onclick = () => {
      panel.querySelectorAll('input[type="text"],input[type="number"]').forEach(i => i.value = i.placeholder||'');
      panel.querySelectorAll('input[type="checkbox"]').forEach(c => c.checked = false);
      panel.querySelectorAll('textarea').forEach(t => t.value = '');
      panel.querySelectorAll('select').forEach(s => s.selectedIndex = 0);
      effectRows.length = 0;
      effectSection.querySelectorAll('.repeat-row').forEach(r => r.remove());
      passengerSection.querySelectorAll('.passenger-block').forEach(r => r.remove());
    };

    panel.addEventListener('input',  doSummonRefresh);
    panel.addEventListener('change', doSummonRefresh);

    body.appendChild(outSection);
    panel.appendChild(body);

    main.querySelectorAll('.group').forEach(e => e.remove());
    const noRes = document.getElementById('no-results');
    if (noRes) noRes.style.display = 'none';
    main.appendChild(panel);
  }

  // ── Passenger recursion helpers ────────────────────────────────────────
  function renderPassengerBlock(container, depth, onchange) {
    // Each call renders a passenger form at `depth` inside `container`
    const addBtn = el('button', 'repeat-add', `+ Add Passenger (depth ${depth + 1})`);
    container.appendChild(addBtn);

    addBtn.onclick = () => {
      const block = el('div', 'passenger-block');
      const phdr  = el('div', 'passenger-header');
      phdr.innerHTML = `Passenger — depth ${depth + 1}`;
      const rmBtn = el('button', 'passenger-remove', '✕ Remove');
      phdr.appendChild(rmBtn);
      block.appendChild(phdr);

      // Entity ID for this passenger
      const pEntityAC = autocompleteInput('tool-input', _TOOLS_ENTITIES, 'minecraft:skeleton');
      block.appendChild(fieldRow('Entity ID', pEntityAC.wrapper, true));

      // CustomName
      const pNameIn = inp('text', 'tool-input', '');
      block.appendChild(fieldRow('CustomName', pNameIn, false));

      // NoAI
      const pNoAIChk = el('input'); pNoAIChk.type='checkbox'; pNoAIChk.className='tool-checkbox';
      block.appendChild(checkRow('NoAI', pNoAIChk));

      // Recursive sub-passengers
      const subContainer = el('div');
      block.appendChild(subContainer);
      renderPassengerBlock(subContainer, depth + 1, onchange);

      rmBtn.onclick = () => { container.removeChild(block); if (onchange) onchange(); };
      container.insertBefore(block, addBtn);
      if (onchange) { block.addEventListener('input',  onchange); block.addEventListener('change', onchange); }
    };
  }

  function collectPassengers(container) {
    const blocks = container.querySelectorAll(':scope > .passenger-block');
    if (!blocks.length) return '';
    const parts = Array.from(blocks).map(b => {
      const entityInput = b.querySelector('input[type="text"]');
      const entity = entityInput ? entityInput.value.trim() : '';
      if (!entity) return null;
      const nameInputs = b.querySelectorAll('input[type="text"]');
      const nameIn = nameInputs[1] ? nameInputs[1].value.trim() : '';
      const noAICB = b.querySelector('.tool-checkbox');
      const nbt = {};
      if (nameIn) nbt.CustomName = `'${JSON.stringify({"text":nameIn})}'`;
      if (noAICB && noAICB.checked) nbt.NoAI = '1b';
      // Recurse into sub-passengers
      const subContainer = b.querySelector(':scope > div:last-of-type');
      if (subContainer) {
        const subPass = collectPassengers(subContainer);
        if (subPass) nbt.Passengers = subPass;
      }
      const nbtParts = Object.entries(nbt).map(([k,v]) => `${k}:${v}`);
      const nbtStr = nbtParts.length ? `,${nbtParts.join(',')}` : '';
      return `{id:"${entity}"${nbtStr}}`;
    }).filter(Boolean);
    return parts.length ? `[${parts.join(',')}]` : '';
  }

  // ─────────────────────────────────────────────────────────────────────────
  // COMMAND BUILDER
  // ─────────────────────────────────────────────────────────────────────────
  function renderCmdTool(main) {
    const panel = el('div', 'tool-panel');

    const header = el('div', 'tool-header');
    header.appendChild(el('div', 'tool-title', 'Command Builder'));
    header.appendChild(makePlatformToggle(() => renderTool(main)));
    panel.appendChild(header);

    const body = el('div', 'tool-body');

    // ── Command picker list ──────────────────────────────────────────────
    const searchIn = inp('text', 'cmd-search', 'Search commands…');
    body.appendChild(searchIn);

    const pickerList = el('div', 'cmd-picker-list');
    body.appendChild(pickerList);

    // Form area (below the list)
    const formArea = el('div');
    body.appendChild(formArea);

    let selectedCmd  = null;
    let fieldInputs  = {};    // keyed by param.key

    function filteredCmds(term) {
      const t = term.toLowerCase();
      return _TOOLS_CMDS.filter(c => {
        if (_platform === 'java'    && c.platform === 'bedrock') return false;
        if (_platform === 'bedrock' && c.platform === 'java')    return false;
        return !t || c.label.toLowerCase().includes(t) || c.id.toLowerCase().includes(t);
      });
    }

    function rebuildPicker() {
      pickerList.innerHTML = '';
      filteredCmds(searchIn.value).forEach(cmd => {
        const item = el('div', 'cmd-picker-item', cmd.label);
        if (selectedCmd && selectedCmd.id === cmd.id) item.classList.add('active');
        item.onclick = () => {
          pickerList.querySelectorAll('.cmd-picker-item').forEach(i => i.classList.remove('active'));
          item.classList.add('active');
          selectedCmd = cmd;
          buildForm(cmd);
        };
        pickerList.appendChild(item);
      });
    }

    function buildForm(cmd) {
      formArea.innerHTML = '';
      fieldInputs = {};

      if (!cmd) return;

      // Syntax display
      const syntaxRaw = _platform === 'java' ? cmd.syntax.java : cmd.syntax.bedrock;
      if (syntaxRaw) {
        const synBlock = el('div','sblock');
        synBlock.innerHTML = renderSyntax(syntaxRaw);
        formArea.appendChild(synBlock);
      }

      // Special: execute builder
      if (cmd.special === 'execute') {
        renderExecuteBuilder(formArea, doRefresh);
        return;
      }

      const paramsToShow = cmd.params.filter(p => {
        if (_platform === 'java'    && p.bedrockOnly) return false;
        if (_platform === 'bedrock' && p.javaOnly)    return false;
        return true;
      });

      if (!paramsToShow.length) {
        formArea.appendChild(el('div','tool-note','No configurable parameters for this command.'));
      }

      paramsToShow.forEach(p => {
        let inputEl;
        if (p.type === 'bool') {
          inputEl = el('input'); inputEl.type='checkbox'; inputEl.className='tool-checkbox';
          const row = el('div','tool-checkbox-row');
          row.appendChild(inputEl);
          row.appendChild(el('div','field-label', p.label + (p.required ? ' *':'')));
          formArea.appendChild(row);
        } else if (p.type === 'enum') {
          const vals = (_platform === 'bedrock' && p.bedrockValues && p.bedrockValues.length)
            ? p.bedrockValues : p.values;
          inputEl = sel('tool-input', [['','(select)']].concat(vals.map(v=>[v,v])), '');
          formArea.appendChild(fieldRow(p.label + (p.required ? ' *':''), inputEl, p.required));
        } else if (p.type === 'effect') {
          inputEl = sel('tool-input', [['','(select effect)']].concat(_TOOLS_EFFECTS.map(e=>[e.id,e.label])), '');
          formArea.appendChild(fieldRow(p.label + (p.required ? ' *':''), inputEl, p.required));
        } else if (p.type === 'enchantment') {
          if (_platform === 'bedrock') {
            // Bedrock uses numeric IDs for /enchant
            inputEl = sel('tool-input', [['','(select enchantment)']].concat(_TOOLS_ENCHANTS.map(e=>[String(e.bedrockId),e.label])), '');
          } else {
            inputEl = sel('tool-input', [['','(select enchantment)']].concat(_TOOLS_ENCHANTS.map(e=>[e.id,e.label])), '');
          }
          formArea.appendChild(fieldRow(p.label + (p.required ? ' *':''), inputEl, p.required));
        } else if (p.type === 'gamerule') {
          const rules = _platform === 'java' ? _TOOLS_GAMERULES_JAVA : _TOOLS_GAMERULES_BEDROCK;
          inputEl = sel('tool-input', [['','(select rule)']].concat(rules.map(r=>[r.rule,`${r.rule} [${r.type}, default:${r.default}]`])), '');
          formArea.appendChild(fieldRow(p.label + (p.required ? ' *':''), inputEl, p.required));
        } else if (p.type === 'item' || p.type === 'block') {
          const ac = autocompleteInput('tool-input', _TOOLS_ITEMS, p.placeholder || 'minecraft:stone');
          inputEl = ac.input;
          formArea.appendChild(fieldRow(p.label + (p.required ? ' *':''), ac.wrapper, p.required));
        } else if (p.type === 'json') {
          inputEl = document.createElement('textarea');
          inputEl.className = 'tool-input'; inputEl.rows = 3;
          inputEl.placeholder = p.placeholder || '{"text":"..."}';
          formArea.appendChild(fieldRow(p.label + (p.required ? ' *':''), inputEl, p.required));
        } else if (p.type === 'coord') {
          inputEl = inp('text','tool-input short', p.placeholder || '~');
          formArea.appendChild(fieldRow(p.label + (p.required ? ' *':''), inputEl, p.required));
        } else if (p.type === 'float') {
          inputEl = inp('number','tool-input short', p.placeholder);
          inputEl.step = '0.01';
          formArea.appendChild(fieldRow(p.label + (p.required ? ' *':''), inputEl, p.required));
        } else if (p.type === 'int') {
          inputEl = inp('number','tool-input short', p.placeholder || '0');
          formArea.appendChild(fieldRow(p.label + (p.required ? ' *':''), inputEl, p.required));
        } else {
          // target, string, default text
          inputEl = inp('text','tool-input', p.placeholder || '');
          formArea.appendChild(fieldRow(p.label + (p.required ? ' *':''), inputEl, p.required));
        }
        if (inputEl) fieldInputs[p.key] = inputEl;
      });

      formArea.appendChild(outSection);
      doRefresh();
    }

    // ── Execute builder ────────────────────────────────────────────────────
    const executeSteps = [];  // { stepEl, actionSel, fieldsContainer }

    function renderExecuteBuilder(container, onChange) {
      container.innerHTML = '';
      executeSteps.length = 0;

      const stepsContainer = el('div','repeat-block');
      container.appendChild(stepsContainer);

      function addStep(isRun) {
        const stepEl = el('div','repeat-row');
        stepEl.style.flexWrap = 'wrap';
        stepEl.style.gap = '6px';

        const actions = isRun
          ? [['run','run']]
          : [
              ['as','as'],['at','at'],
              ['if_entity','if entity'],['if_block','if block'],['if_blocks','if blocks'],
              ['unless_entity','unless entity'],['unless_block','unless block'],
              ['positioned','positioned'],['rotated','rotated'],
              ['facing_entity','facing entity'],['facing','facing'],
              ['in','in'],['anchored','anchored'],
              ['store_result','store result'],['store_success','store success']
            ];

        const actionSel = isRun
          ? el('div')
          : sel('tool-input medium', actions, 'as');

        if (isRun) {
          actionSel.className = 'field-label';
          actionSel.textContent = 'run';
        }

        const fieldsContainer = el('div');
        fieldsContainer.style.cssText='display:flex;gap:6px;flex-wrap:wrap;align-items:center;';

        const obj = { stepEl, actionSel, fieldsContainer, isRun };
        executeSteps.push(obj);

        function rebuildFields() {
          fieldsContainer.innerHTML = '';
          const action = isRun ? 'run' : actionSel.value;
          if (action === 'run') {
            const runIn = inp('text','tool-input','say hello');
            runIn.style.minWidth='200px';
            fieldsContainer.appendChild(runIn);
            obj.runIn = runIn;
          } else if (['as','at'].includes(action)) {
            const tIn = inp('text','tool-input short','@a');
            tIn.placeholder = '@a';
            fieldsContainer.appendChild(el('span','field-label','selector'));
            fieldsContainer.appendChild(tIn);
            obj.tIn = tIn;
          } else if (['if_entity','unless_entity'].includes(action)) {
            const tIn = inp('text','tool-input short','@p[tag=X]');
            fieldsContainer.appendChild(el('span','field-label','selector'));
            fieldsContainer.appendChild(tIn);
            obj.tIn = tIn;
          } else if (['if_block','unless_block'].includes(action)) {
            const xIn = inp('text','tool-input short','~'); const yIn = inp('text','tool-input short','~'); const zIn = inp('text','tool-input short','~');
            const blkIn = inp('text','tool-input medium','minecraft:stone');
            fieldsContainer.appendChild(el('span','field-label','x')); fieldsContainer.appendChild(xIn);
            fieldsContainer.appendChild(el('span','field-label','y')); fieldsContainer.appendChild(yIn);
            fieldsContainer.appendChild(el('span','field-label','z')); fieldsContainer.appendChild(zIn);
            fieldsContainer.appendChild(el('span','field-label','block')); fieldsContainer.appendChild(blkIn);
            obj.xIn=xIn; obj.yIn=yIn; obj.zIn=zIn; obj.blkIn=blkIn;
          } else if (['if_blocks','unless_blocks'].includes(action)) {
            const inputs = {};
            ['bx','by','bz','ex','ey','ez','dx','dy','dz'].forEach(k => {
              inputs[k] = inp('text','tool-input short','~');
              fieldsContainer.appendChild(el('span','field-label',k)); fieldsContainer.appendChild(inputs[k]);
            });
            const modeSel = sel('tool-input medium',[['all','all'],['masked','masked']],'all');
            fieldsContainer.appendChild(el('span','field-label','mode')); fieldsContainer.appendChild(modeSel);
            obj.blockInputs = inputs; obj.modeSel = modeSel;
          } else if (['positioned'].includes(action)) {
            const xIn = inp('text','tool-input short','~'); const yIn = inp('text','tool-input short','~'); const zIn = inp('text','tool-input short','~');
            fieldsContainer.appendChild(el('span','field-label','x')); fieldsContainer.appendChild(xIn);
            fieldsContainer.appendChild(el('span','field-label','y')); fieldsContainer.appendChild(yIn);
            fieldsContainer.appendChild(el('span','field-label','z')); fieldsContainer.appendChild(zIn);
            obj.xIn=xIn; obj.yIn=yIn; obj.zIn=zIn;
          } else if (['facing'].includes(action)) {
            const xIn = inp('text','tool-input short','~'); const yIn = inp('text','tool-input short','~'); const zIn = inp('text','tool-input short','~');
            fieldsContainer.appendChild(el('span','field-label','x')); fieldsContainer.appendChild(xIn);
            fieldsContainer.appendChild(el('span','field-label','y')); fieldsContainer.appendChild(yIn);
            fieldsContainer.appendChild(el('span','field-label','z')); fieldsContainer.appendChild(zIn);
            obj.xIn=xIn; obj.yIn=yIn; obj.zIn=zIn;
          } else if (['facing_entity'].includes(action)) {
            const tIn = inp('text','tool-input short','@p');
            const feetEyesSel = sel('tool-input medium',[['feet','feet'],['eyes','eyes']],'feet');
            fieldsContainer.appendChild(el('span','field-label','entity')); fieldsContainer.appendChild(tIn);
            fieldsContainer.appendChild(el('span','field-label','anchor')); fieldsContainer.appendChild(feetEyesSel);
            obj.tIn=tIn; obj.feetEyesSel=feetEyesSel;
          } else if (['in'].includes(action)) {
            const dimIn = inp('text','tool-input medium','minecraft:overworld');
            fieldsContainer.appendChild(el('span','field-label','dimension')); fieldsContainer.appendChild(dimIn);
            obj.dimIn=dimIn;
          } else if (['anchored'].includes(action)) {
            const anchorSel = sel('tool-input medium',[['eyes','eyes'],['feet','feet']],'eyes');
            fieldsContainer.appendChild(el('span','field-label','anchor')); fieldsContainer.appendChild(anchorSel);
            obj.anchorSel=anchorSel;
          } else if (['rotated'].includes(action)) {
            const yawIn = inp('text','tool-input short','0'); const pitchIn = inp('text','tool-input short','0');
            fieldsContainer.appendChild(el('span','field-label','yaw')); fieldsContainer.appendChild(yawIn);
            fieldsContainer.appendChild(el('span','field-label','pitch')); fieldsContainer.appendChild(pitchIn);
            obj.yawIn=yawIn; obj.pitchIn=pitchIn;
          } else if (['store_result','store_success'].includes(action)) {
            const storeTypeSel = sel('tool-input medium',[['score','score'],['entity','entity'],['block','block'],['bossbar','bossbar'],['storage','storage']],'score');
            fieldsContainer.appendChild(el('span','field-label','store in')); fieldsContainer.appendChild(storeTypeSel);
            // For score: target + objective
            const scoreTarget = inp('text','tool-input short','@s');
            const scoreObj    = inp('text','tool-input short','myobj');
            fieldsContainer.appendChild(el('span','field-label','target')); fieldsContainer.appendChild(scoreTarget);
            fieldsContainer.appendChild(el('span','field-label','obj'));    fieldsContainer.appendChild(scoreObj);
            obj.storeTypeSel=storeTypeSel; obj.scoreTarget=scoreTarget; obj.scoreObj=scoreObj;
          }
          if (onChange) { fieldsContainer.addEventListener('input', onChange); fieldsContainer.addEventListener('change', onChange); }
        }

        rebuildFields();
        if (!isRun) actionSel.addEventListener('change', () => { rebuildFields(); if (onChange) onChange(); });

        const rmBtn = isRun ? null : el('button','repeat-remove','✕');
        stepEl.appendChild(actionSel);
        stepEl.appendChild(fieldsContainer);
        if (rmBtn) {
          rmBtn.onclick = () => {
            stepsContainer.removeChild(stepEl);
            executeSteps.splice(executeSteps.indexOf(obj), 1);
            if (onChange) onChange();
          };
          stepEl.appendChild(rmBtn);
        }

        return stepEl;
      }

      // Initial: one "as" step + "run" step
      const asStep  = addStep(false);
      const runStep = addStep(true);
      stepsContainer.appendChild(asStep);
      stepsContainer.appendChild(runStep);

      const addStepBtn = el('button','repeat-add','+ Add Step');
      addStepBtn.onclick = () => {
        const newStep = addStep(false);
        // Insert before run step
        stepsContainer.insertBefore(newStep, runStep);
        if (onChange) onChange();
      };
      container.appendChild(addStepBtn);
      container.appendChild(stepsContainer);
    }

    function assembleExecute() {
      const tokens = [];
      for (const obj of executeSteps) {
        const action = obj.isRun ? 'run' : obj.actionSel.value;
        if (action === 'run') {
          tokens.push('run');
          tokens.push((obj.runIn ? obj.runIn.value.trim() : '') || 'say hello');
          break; // run is always last
        } else if (['as','at'].includes(action)) {
          tokens.push(action); tokens.push(obj.tIn ? obj.tIn.value.trim() || '@a' : '@a');
        } else if (['if_entity','unless_entity'].includes(action)) {
          const sub = action.startsWith('if') ? 'if' : 'unless';
          tokens.push(sub); tokens.push('entity'); tokens.push(obj.tIn ? obj.tIn.value.trim() || '@p' : '@p');
        } else if (['if_block','unless_block'].includes(action)) {
          const sub = action.startsWith('if') ? 'if' : 'unless';
          tokens.push(sub); tokens.push('block');
          tokens.push(obj.xIn ? obj.xIn.value.trim()||'~' : '~');
          tokens.push(obj.yIn ? obj.yIn.value.trim()||'~' : '~');
          tokens.push(obj.zIn ? obj.zIn.value.trim()||'~' : '~');
          tokens.push(obj.blkIn ? obj.blkIn.value.trim()||'minecraft:stone' : 'minecraft:stone');
        } else if (['if_blocks','unless_blocks'].includes(action)) {
          const sub = action.startsWith('if') ? 'if' : 'unless';
          tokens.push(sub); tokens.push('blocks');
          if (obj.blockInputs) {
            ['bx','by','bz','ex','ey','ez','dx','dy','dz'].forEach(k => tokens.push((obj.blockInputs[k]||{value:'~'}).value.trim()||'~'));
          }
          tokens.push(obj.modeSel ? obj.modeSel.value : 'all');
        } else if (action === 'positioned') {
          tokens.push('positioned');
          tokens.push(obj.xIn ? obj.xIn.value.trim()||'~' : '~');
          tokens.push(obj.yIn ? obj.yIn.value.trim()||'~' : '~');
          tokens.push(obj.zIn ? obj.zIn.value.trim()||'~' : '~');
        } else if (action === 'facing') {
          tokens.push('facing');
          tokens.push(obj.xIn ? obj.xIn.value.trim()||'~' : '~');
          tokens.push(obj.yIn ? obj.yIn.value.trim()||'~' : '~');
          tokens.push(obj.zIn ? obj.zIn.value.trim()||'~' : '~');
        } else if (action === 'facing_entity') {
          tokens.push('facing entity');
          tokens.push(obj.tIn ? obj.tIn.value.trim()||'@p' : '@p');
          tokens.push(obj.feetEyesSel ? obj.feetEyesSel.value : 'feet');
        } else if (action === 'in') {
          tokens.push('in');
          tokens.push(obj.dimIn ? obj.dimIn.value.trim()||'minecraft:overworld' : 'minecraft:overworld');
        } else if (action === 'anchored') {
          tokens.push('anchored');
          tokens.push(obj.anchorSel ? obj.anchorSel.value : 'eyes');
        } else if (action === 'rotated') {
          tokens.push('rotated');
          tokens.push(obj.yawIn ? obj.yawIn.value.trim()||'0' : '0');
          tokens.push(obj.pitchIn ? obj.pitchIn.value.trim()||'0' : '0');
        } else if (['store_result','store_success'].includes(action)) {
          const sub = action === 'store_result' ? 'result' : 'success';
          tokens.push('store'); tokens.push(sub); tokens.push('score');
          tokens.push(obj.scoreTarget ? obj.scoreTarget.value.trim()||'@s' : '@s');
          tokens.push(obj.scoreObj    ? obj.scoreObj.value.trim()||'myobj' : 'myobj');
        }
      }
      return tokens.length ? `/execute ${tokens.join(' ')}` : '';
    }

    // ── Command output assembly (non-execute) ─────────────────────────────
    function assembleCmd() {
      if (!selectedCmd) return '';
      if (selectedCmd.special === 'execute') return assembleExecute();

      const paramsToShow = selectedCmd.params.filter(p => {
        if (_platform === 'java'    && p.bedrockOnly) return false;
        if (_platform === 'bedrock' && p.javaOnly)    return false;
        return true;
      });

      const prefix = selectedCmd.id.includes('_')
        ? '/' + selectedCmd.id.replace(/_([a-z])/g, ' $1') + ' '
        : '/' + selectedCmd.id + ' ';

      const parts = paramsToShow.map(p => {
        const inputEl = fieldInputs[p.key];
        if (!inputEl) return null;
        let val;
        if (p.type === 'bool') {
          val = inputEl.checked ? 'true' : null;
          if (!p.required && !inputEl.checked) return null;
          val = inputEl.checked ? 'true' : 'false';
        } else if (p.type === 'enum' || p.type === 'effect' || p.type === 'enchantment' || p.type === 'gamerule') {
          val = inputEl.value;
          if (!val) return p.required ? null : null;
        } else {
          val = typeof inputEl.value === 'string' ? inputEl.value.trim() : '';
          if (!val) return p.required ? null : null;
        }
        return val;
      });

      // If any required param is missing, still output best effort
      const tokens = parts.filter(p => p != null);
      return prefix.trimEnd() + (tokens.length ? ' ' + tokens.join(' ') : '');
    }

    // ── Output block ──────────────────────────────────────────────────────
    const outSection = el('div','tool-output-section');
    const outHeader  = el('div','tool-output-header');
    const outLabel   = el('span','','Output');
    const outActions = el('div','tool-output-actions');
    const copyBtn    = el('button','tool-btn','Copy');
    const resetBtn2  = el('button','tool-btn','Reset');
    outActions.appendChild(copyBtn); outActions.appendChild(resetBtn2);
    outHeader.appendChild(outLabel); outHeader.appendChild(outActions);
    const outBlock = el('div','tool-output-block empty','— select a command and fill in the fields —');
    outSection.appendChild(outHeader); outSection.appendChild(outBlock);

    copyBtn.onclick = () => {
      if (outBlock.classList.contains('empty')) return;
      navigator.clipboard.writeText(outBlock.textContent).then(() => {
        copyBtn.classList.add('copy-success'); copyBtn.textContent = 'Copied';
        setTimeout(() => { copyBtn.classList.remove('copy-success'); copyBtn.textContent = 'Copy'; }, 1500);
      });
    };
    resetBtn2.onclick = () => {
      formArea.querySelectorAll('input[type="text"],input[type="number"]').forEach(i => i.value = i.placeholder||'');
      formArea.querySelectorAll('input[type="checkbox"]').forEach(c => c.checked = false);
      formArea.querySelectorAll('textarea').forEach(t => t.value = '');
      formArea.querySelectorAll('select').forEach(s => s.selectedIndex = 0);
      doRefresh();
    };

    body.appendChild(outSection);

    function doRefresh() {
      const out = assembleCmd();
      if (out) { outBlock.textContent = out; outBlock.classList.remove('empty'); }
      else     { outBlock.textContent = '— select a command and fill in the fields —'; outBlock.classList.add('empty'); }
    }

    searchIn.addEventListener('input', () => { rebuildPicker(); doRefresh(); });
    formArea.addEventListener('input',  doRefresh);
    formArea.addEventListener('change', doRefresh);

    // Initial render
    rebuildPicker();

    panel.appendChild(body);

    main.querySelectorAll('.group').forEach(e => e.remove());
    const noRes = document.getElementById('no-results');
    if (noRes) noRes.style.display = 'none';
    main.appendChild(panel);
  }

  // ─────────────────────────────────────────────────────────────────────────
  // RENDER DISPATCHER
  // ─────────────────────────────────────────────────────────────────────────
  function renderTool(main) {
    main.querySelectorAll('.group').forEach(e => e.remove());
    // Remove any existing tool panel
    const existing = main.querySelector('.tool-panel');
    if (existing) existing.remove();
    const noRes = document.getElementById('no-results');
    if (noRes) noRes.style.display = 'none';

    if      (_activeTool === 'give')   renderGiveTool(main);
    else if (_activeTool === 'summon') renderSummonTool(main);
    else if (_activeTool === 'cmd')    renderCmdTool(main);
  }

  // ─────────────────────────────────────────────────────────────────────────
  // REGISTER
  // ─────────────────────────────────────────────────────────────────────────
  SECTIONS.register({
    id:            'tools',
    label:         'Toolbox',
    badge:         'Minecraft · Toolbox & Utilities',
    commandPrefix: '',
    accent: {
      '--blue':      '#cc66ff',
      '--blue-dim':  '#5c1a8a',
      '--blue-glow': 'rgba(204,102,255,0.13)'
    },
    filters:    [],
    groupOrder: [],
    groupMeta:  {},
    commands:   [],
    renderTool:    renderTool,
    renderSidebar: renderSidebar
  });

})();
