// ─── TOOLS SECTION DATA ───────────────────────────────────────────────────────
// Self-registering data file. Loads after core.js.
// commandPrefix: '' — tools section is not a command list.
// renderTool + renderSidebar hooks override core.js card pipeline entirely.
// All state is closure-local. No globals except _TOOLS_* prefixed data arrays.

// ─── ITEM LIST ────────────────────────────────────────────────────────────────
const _TOOLS_ITEMS = [
  'minecraft:Acacia_Boat',
'minecraft:Acacia_Boat_with_Chest',
'minecraft:Acacia_Button',
'minecraft:Acacia_Door',
'minecraft:Acacia_Fence',
'minecraft:Acacia_Fence_Gate',
'minecraft:Acacia_Hanging_Sign',
'minecraft:Acacia_Leaves',
'minecraft:Acacia_Log',
'minecraft:Acacia_Planks',
'minecraft:Acacia_Pressure_Plate',
'minecraft:Acacia_Sapling',
'minecraft:Acacia_Shelf',
'minecraft:Acacia_Sign',
'minecraft:Acacia_Slab',
'minecraft:Acacia_Stairs',
'minecraft:Acacia_Trapdoor',
'minecraft:Acacia_Wall_Hanging_Sign',
'minecraft:Acacia_Wall_Sign',
'minecraft:Acacia_Wood',
'minecraft:Activator_Rail',
'minecraft:Air',
'minecraft:Allay_Spawn_Egg',
'minecraft:Allium',
'minecraft:Amethyst_Cluster',
'minecraft:Amethyst_Shard',
'minecraft:Ancient_Debris',
'minecraft:Andesite',
'minecraft:Andesite_Slab',
'minecraft:Andesite_Stairs',
'minecraft:Andesite_Wall',
'minecraft:Angler_Pottery_Sherd',
'minecraft:Anvil',
'minecraft:Apple',
'minecraft:Archer_Pottery_Sherd',
'minecraft:Armadillo_Scute',
'minecraft:Armadillo_Spawn_Egg',
'minecraft:Armor_Stand',
'minecraft:Arms_Up_Pottery_Sherd',
'minecraft:Arrow',
'minecraft:Attached_Melon_Stem',
'minecraft:Attached_Pumpkin_Stem',
'minecraft:Axolotl_Spawn_Egg',
'minecraft:Azalea',
'minecraft:Azalea_Leaves',
'minecraft:Azure_Bluet',
'minecraft:Baked_Potato',
'minecraft:Bamboo',
'minecraft:Bamboo_Button',
'minecraft:Bamboo_Door',
'minecraft:Bamboo_Fence',
'minecraft:Bamboo_Fence_Gate',
'minecraft:Bamboo_Hanging_Sign',
'minecraft:Bamboo_Mosaic',
'minecraft:Bamboo_Mosaic_Slab',
'minecraft:Bamboo_Mosaic_Stairs',
'minecraft:Bamboo_Planks',
'minecraft:Bamboo_Pressure_Plate',
'minecraft:Bamboo_Raft',
'minecraft:Bamboo_Raft_with_Chest',
'minecraft:Bamboo_Shelf',
'minecraft:Bamboo_Shoot',
'minecraft:Bamboo_Sign',
'minecraft:Bamboo_Slab',
'minecraft:Bamboo_Stairs',
'minecraft:Bamboo_Trapdoor',
'minecraft:Bamboo_Wall_Hanging_Sign',
'minecraft:Bamboo_Wall_Sign',
'minecraft:Barrel',
'minecraft:Barrier',
'minecraft:Basalt',
'minecraft:Bat_Spawn_Egg',
'minecraft:Beacon',
'minecraft:Bedrock',
'minecraft:Bee_Nest',
'minecraft:Bee_Spawn_Egg',
'minecraft:Beehive',
'minecraft:Beetroot',
'minecraft:Beetroot_Seeds',
'minecraft:Beetroot_Soup',
'minecraft:Beetroots',
'minecraft:Bell',
'minecraft:Big_Dripleaf',
'minecraft:Big_Dripleaf_Stem',
'minecraft:Birch_Boat',
'minecraft:Birch_Boat_with_Chest',
'minecraft:Birch_Button',
'minecraft:Birch_Door',
'minecraft:Birch_Fence',
'minecraft:Birch_Fence_Gate',
'minecraft:Birch_Hanging_Sign',
'minecraft:Birch_Leaves',
'minecraft:Birch_Log',
'minecraft:Birch_Planks',
'minecraft:Birch_Pressure_Plate',
'minecraft:Birch_Sapling',
'minecraft:Birch_Shelf',
'minecraft:Birch_Sign',
'minecraft:Birch_Slab',
'minecraft:Birch_Stairs',
'minecraft:Birch_Trapdoor',
'minecraft:Birch_Wall_Hanging_Sign',
'minecraft:Birch_Wall_Sign',
'minecraft:Birch_Wood',
'minecraft:Black_Banner',
'minecraft:Black_Bed',
'minecraft:Black_Bundle',
'minecraft:Black_Candle',
'minecraft:Black_Carpet',
'minecraft:Black_Concrete',
'minecraft:Black_Concrete_Powder',
'minecraft:Black_Dye',
'minecraft:Black_Glazed_Terracotta',
'minecraft:Black_Harness',
'minecraft:Black_Shulker_Box',
'minecraft:Black_Stained_Glass',
'minecraft:Black_Stained_Glass_Pane',
'minecraft:Black_Terracotta',
'minecraft:Black_Wall_Banner',
'minecraft:Black_Wool',
'minecraft:Blackstone',
'minecraft:Blackstone_Slab',
'minecraft:Blackstone_Stairs',
'minecraft:Blackstone_Wall',
'minecraft:Blade_Pottery_Sherd',
'minecraft:Blast_Furnace',
'minecraft:Blaze_Powder',
'minecraft:Blaze_Rod',
'minecraft:Blaze_Spawn_Egg',
'minecraft:Block_of_Amethyst',
'minecraft:Block_of_Bamboo',
'minecraft:Block_of_Coal',
'minecraft:Block_of_Copper',
'minecraft:Block_of_Diamond',
'minecraft:Block_of_Emerald',
'minecraft:Block_of_Gold',
'minecraft:Block_of_Iron',
'minecraft:Block_of_Lapis_Lazuli',
'minecraft:Block_of_Netherite',
'minecraft:Block_of_Quartz',
'minecraft:Block_of_Raw_Copper',
'minecraft:Block_of_Raw_Gold',
'minecraft:Block_of_Raw_Iron',
'minecraft:Block_of_Redstone',
'minecraft:Block_of_Resin',
'minecraft:Block_of_Stripped_Bamboo',
'minecraft:Blue_Banner',
'minecraft:Blue_Bed',
'minecraft:Blue_Bundle',
'minecraft:Blue_Candle',
'minecraft:Blue_Carpet',
'minecraft:Blue_Concrete',
'minecraft:Blue_Concrete_Powder',
'minecraft:Blue_Dye',
'minecraft:Blue_Egg',
'minecraft:Blue_Glazed_Terracotta',
'minecraft:Blue_Harness',
'minecraft:Blue_Ice',
'minecraft:Blue_Orchid',
'minecraft:Blue_Shulker_Box',
'minecraft:Blue_Stained_Glass',
'minecraft:Blue_Stained_Glass_Pane',
'minecraft:Blue_Terracotta',
'minecraft:Blue_Wall_Banner',
'minecraft:Blue_Wool',
'minecraft:Bogged_Spawn_Egg',
'minecraft:Bolt_Armor_Trim',
'minecraft:Bone',
'minecraft:Bone_Block',
'minecraft:Bone_Meal',
'minecraft:Book',
'minecraft:Book_and_Quill',
'minecraft:Bookshelf',
'minecraft:Bordure_Indented_Banner_Pattern',
'minecraft:Bottle_o_Enchanting',
'minecraft:Bow',
'minecraft:Bowl',
'minecraft:Brain_Coral',
'minecraft:Brain_Coral_Block',
'minecraft:Brain_Coral_Fan',
'minecraft:Brain_Coral_Wall_Fan',
'minecraft:Bread',
'minecraft:Breeze_Rod',
'minecraft:Breeze_Spawn_Egg',
'minecraft:Brewer_Pottery_Sherd',
'minecraft:Brewing_Stand',
'minecraft:Brick',
'minecraft:Brick_Slab',
'minecraft:Brick_Stairs',
'minecraft:Brick_Wall',
'minecraft:Bricks',
'minecraft:Brown_Banner',
'minecraft:Brown_Bed',
'minecraft:Brown_Bundle',
'minecraft:Brown_Candle',
'minecraft:Brown_Carpet',
'minecraft:Brown_Concrete',
'minecraft:Brown_Concrete_Powder',
'minecraft:Brown_Dye',
'minecraft:Brown_Egg',
'minecraft:Brown_Glazed_Terracotta',
'minecraft:Brown_Harness',
'minecraft:Brown_Mushroom',
'minecraft:Brown_Mushroom_Block',
'minecraft:Brown_Shulker_Box',
'minecraft:Brown_Stained_Glass',
'minecraft:Brown_Stained_Glass_Pane',
'minecraft:Brown_Terracotta',
'minecraft:Brown_Wall_Banner',
'minecraft:Brown_Wool',
'minecraft:Brush',
'minecraft:Bubble_Column',
'minecraft:Bubble_Coral',
'minecraft:Bubble_Coral_Block',
'minecraft:Bubble_Coral_Fan',
'minecraft:Bubble_Coral_Wall_Fan',
'minecraft:Bucket',
'minecraft:Bucket_of_Axolotl',
'minecraft:Bucket_of_Cod',
'minecraft:Bucket_of_Pufferfish',
'minecraft:Bucket_of_Salmon',
'minecraft:Bucket_of_Tadpole',
'minecraft:Bucket_of_Tropical_Fish',
'minecraft:Budding_Amethyst',
'minecraft:Bundle',
'minecraft:Burn_Pottery_Sherd',
'minecraft:Bush',
'minecraft:Cactus',
'minecraft:Cactus_Flower',
'minecraft:Cake',
'minecraft:Cake_with_Black_Candle',
'minecraft:Cake_with_Blue_Candle',
'minecraft:Cake_with_Brown_Candle',
'minecraft:Cake_with_Candle',
'minecraft:Cake_with_Cyan_Candle',
'minecraft:Cake_with_Gray_Candle',
'minecraft:Cake_with_Green_Candle',
'minecraft:Cake_with_Light_Blue_Candle',
'minecraft:Cake_with_Light_Gray_Candle',
'minecraft:Cake_with_Lime_Candle',
'minecraft:Cake_with_Magenta_Candle',
'minecraft:Cake_with_Orange_Candle',
'minecraft:Cake_with_Pink_Candle',
'minecraft:Cake_with_Purple_Candle',
'minecraft:Cake_with_Red_Candle',
'minecraft:Cake_with_White_Candle',
'minecraft:Cake_with_Yellow_Candle',
'minecraft:Calcite',
'minecraft:Calibrated_Sculk_Sensor',
'minecraft:Camel_Husk_Spawn_Egg',
'minecraft:Camel_Spawn_Egg',
'minecraft:Campfire',
'minecraft:Candle',
'minecraft:Carrot',
'minecraft:Carrot_on_a_Stick',
'minecraft:Carrots',
'minecraft:Cartography_Table',
'minecraft:Carved_Pumpkin',
'minecraft:Cat_Spawn_Egg',
'minecraft:Cauldron',
'minecraft:Cave_Air',
'minecraft:Cave_Spider_Spawn_Egg',
'minecraft:Cave_Vines',
'minecraft:Cave_Vines_Plant',
'minecraft:Chain',
'minecraft:Chain_Command_Block',
'minecraft:Chainmail_Boots',
'minecraft:Chainmail_Chestplate',
'minecraft:Chainmail_Helmet',
'minecraft:Chainmail_Leggings',
'minecraft:Charcoal',
'minecraft:Cherry_Boat',
'minecraft:Cherry_Boat_with_Chest',
'minecraft:Cherry_Button',
'minecraft:Cherry_Door',
'minecraft:Cherry_Fence',
'minecraft:Cherry_Fence_Gate',
'minecraft:Cherry_Hanging_Sign',
'minecraft:Cherry_Leaves',
'minecraft:Cherry_Log',
'minecraft:Cherry_Planks',
'minecraft:Cherry_Pressure_Plate',
'minecraft:Cherry_Sapling',
'minecraft:Cherry_Shelf',
'minecraft:Cherry_Sign',
'minecraft:Cherry_Slab',
'minecraft:Cherry_Stairs',
'minecraft:Cherry_Trapdoor',
'minecraft:Cherry_Wall_Hanging_Sign',
'minecraft:Cherry_Wall_Sign',
'minecraft:Cherry_Wood',
'minecraft:Chest',
'minecraft:Chicken_Spawn_Egg',
'minecraft:Chipped_Anvil',
'minecraft:Chiseled_Bookshelf',
'minecraft:Chiseled_Copper',
'minecraft:Chiseled_Deepslate',
'minecraft:Chiseled_Nether_Bricks',
'minecraft:Chiseled_Polished_Blackstone',
'minecraft:Chiseled_Quartz_Block',
'minecraft:Chiseled_Red_Sandstone',
'minecraft:Chiseled_Resin_Bricks',
'minecraft:Chiseled_Sandstone',
'minecraft:Chiseled_Stone_Bricks',
'minecraft:Chiseled_Tuff',
'minecraft:Chiseled_Tuff_Bricks',
'minecraft:Chorus_Flower',
'minecraft:Chorus_Fruit',
'minecraft:Chorus_Plant',
'minecraft:Clay',
'minecraft:Clay_Ball',
'minecraft:Clock',
'minecraft:Closed_Eyeblossom',
'minecraft:Coal',
'minecraft:Coal_Ore',
'minecraft:Coarse_Dirt',
'minecraft:Coast_Armor_Trim',
'minecraft:Cobbled_Deepslate',
'minecraft:Cobbled_Deepslate_Slab',
'minecraft:Cobbled_Deepslate_Stairs',
'minecraft:Cobbled_Deepslate_Wall',
'minecraft:Cobblestone',
'minecraft:Cobblestone_Slab',
'minecraft:Cobblestone_Stairs',
'minecraft:Cobblestone_Wall',
'minecraft:Cobweb',
'minecraft:Cocoa',
'minecraft:Cocoa_Beans',
'minecraft:Cod_Spawn_Egg',
'minecraft:Command_Block',
'minecraft:Compass',
'minecraft:Composter',
'minecraft:Conduit',
'minecraft:Cooked_Chicken',
'minecraft:Cooked_Cod',
'minecraft:Cooked_Mutton',
'minecraft:Cooked_Porkchop',
'minecraft:Cooked_Rabbit',
'minecraft:Cooked_Salmon',
'minecraft:Cookie',
'minecraft:Copper_Axe',
'minecraft:Copper_Bars',
'minecraft:Copper_Boots',
'minecraft:Copper_Bulb',
'minecraft:Copper_Chain',
'minecraft:Copper_Chest',
'minecraft:Copper_Chestplate',
'minecraft:Copper_Door',
'minecraft:Copper_Golem_Spawn_Egg',
'minecraft:Copper_Golem_Statue',
'minecraft:Copper_Grate',
'minecraft:Copper_Helmet',
'minecraft:Copper_Hoe',
'minecraft:Copper_Horse_Armor',
'minecraft:Copper_Ingot',
'minecraft:Copper_Lantern',
'minecraft:Copper_Leggings',
'minecraft:Copper_Nautilus_Armor',
'minecraft:Copper_Nugget',
'minecraft:Copper_Ore',
'minecraft:Copper_Pickaxe',
'minecraft:Copper_Shovel',
'minecraft:Copper_Spear',
'minecraft:Copper_Sword',
'minecraft:Copper_Torch',
'minecraft:Copper_Trapdoor',
'minecraft:Copper_Wall_Torch',
'minecraft:Cornflower',
'minecraft:Cow_Spawn_Egg',
'minecraft:Cracked_Deepslate_Bricks',
'minecraft:Cracked_Deepslate_Tiles',
'minecraft:Cracked_Nether_Bricks',
'minecraft:Cracked_Polished_Blackstone_Bricks',
'minecraft:Cracked_Stone_Bricks',
'minecraft:Crafter',
'minecraft:Crafting_Table',
'minecraft:Creaking_Heart',
'minecraft:Creaking_Spawn_Egg',
'minecraft:Creeper_Charge_Banner_Pattern',
'minecraft:Creeper_Head',
'minecraft:Creeper_Spawn_Egg',
'minecraft:Creeper_Wall_Head',
'minecraft:Crimson_Button',
'minecraft:Crimson_Door',
'minecraft:Crimson_Fence',
'minecraft:Crimson_Fence_Gate',
'minecraft:Crimson_Fungus',
'minecraft:Crimson_Hanging_Sign',
'minecraft:Crimson_Hyphae',
'minecraft:Crimson_Nylium',
'minecraft:Crimson_Planks',
'minecraft:Crimson_Pressure_Plate',
'minecraft:Crimson_Roots',
'minecraft:Crimson_Shelf',
'minecraft:Crimson_Sign',
'minecraft:Crimson_Slab',
'minecraft:Crimson_Stairs',
'minecraft:Crimson_Stem',
'minecraft:Crimson_Trapdoor',
'minecraft:Crimson_Wall_Hanging_Sign',
'minecraft:Crimson_Wall_Sign',
'minecraft:Crossbow',
'minecraft:Crying_Obsidian',
'minecraft:Cut_Copper',
'minecraft:Cut_Copper_Slab',
'minecraft:Cut_Copper_Stairs',
'minecraft:Cut_Red_Sandstone',
'minecraft:Cut_Red_Sandstone_Slab',
'minecraft:Cut_Sandstone',
'minecraft:Cut_Sandstone_Slab',
'minecraft:Cyan_Banner',
'minecraft:Cyan_Bed',
'minecraft:Cyan_Bundle',
'minecraft:Cyan_Candle',
'minecraft:Cyan_Carpet',
'minecraft:Cyan_Concrete',
'minecraft:Cyan_Concrete_Powder',
'minecraft:Cyan_Dye',
'minecraft:Cyan_Glazed_Terracotta',
'minecraft:Cyan_Harness',
'minecraft:Cyan_Shulker_Box',
'minecraft:Cyan_Stained_Glass',
'minecraft:Cyan_Stained_Glass_Pane',
'minecraft:Cyan_Terracotta',
'minecraft:Cyan_Wall_Banner',
'minecraft:Cyan_Wool',
'minecraft:Damaged_Anvil',
'minecraft:Dandelion',
'minecraft:Danger_Pottery_Sherd',
'minecraft:Dark_Oak_Boat',
'minecraft:Dark_Oak_Boat_with_Chest',
'minecraft:Dark_Oak_Button',
'minecraft:Dark_Oak_Door',
'minecraft:Dark_Oak_Fence',
'minecraft:Dark_Oak_Fence_Gate',
'minecraft:Dark_Oak_Hanging_Sign',
'minecraft:Dark_Oak_Leaves',
'minecraft:Dark_Oak_Log',
'minecraft:Dark_Oak_Planks',
'minecraft:Dark_Oak_Pressure_Plate',
'minecraft:Dark_Oak_Sapling',
'minecraft:Dark_Oak_Shelf',
'minecraft:Dark_Oak_Sign',
'minecraft:Dark_Oak_Slab',
'minecraft:Dark_Oak_Stairs',
'minecraft:Dark_Oak_Trapdoor',
'minecraft:Dark_Oak_Wall_Hanging_Sign',
'minecraft:Dark_Oak_Wall_Sign',
'minecraft:Dark_Oak_Wood',
'minecraft:Dark_Prismarine',
'minecraft:Dark_Prismarine_Slab',
'minecraft:Dark_Prismarine_Stairs',
'minecraft:Daylight_Detector',
'minecraft:Dead_Brain_Coral',
'minecraft:Dead_Brain_Coral_Block',
'minecraft:Dead_Brain_Coral_Fan',
'minecraft:Dead_Brain_Coral_Wall_Fan',
'minecraft:Dead_Bubble_Coral',
'minecraft:Dead_Bubble_Coral_Block',
'minecraft:Dead_Bubble_Coral_Fan',
'minecraft:Dead_Bubble_Coral_Wall_Fan',
'minecraft:Dead_Bush',
'minecraft:Dead_Coral_Block',
'minecraft:Dead_Fire_Coral',
'minecraft:Dead_Fire_Coral_Block',
'minecraft:Dead_Fire_Coral_Fan',
'minecraft:Dead_Fire_Coral_Wall_Fan',
'minecraft:Dead_Horn_Coral',
'minecraft:Dead_Horn_Coral_Block',
'minecraft:Dead_Horn_Coral_Fan',
'minecraft:Dead_Horn_Coral_Wall_Fan',
'minecraft:Dead_Tube_Coral',
'minecraft:Dead_Tube_Coral_Block',
'minecraft:Dead_Tube_Coral_Fan',
'minecraft:Dead_Tube_Coral_Wall_Fan',
'minecraft:Debug_Stick',
'minecraft:Decorated_Pot',
'minecraft:Deepslate',
'minecraft:Deepslate_Brick_Slab',
'minecraft:Deepslate_Brick_Stairs',
'minecraft:Deepslate_Brick_Wall',
'minecraft:Deepslate_Bricks',
'minecraft:Deepslate_Coal_Ore',
'minecraft:Deepslate_Copper_Ore',
'minecraft:Deepslate_Diamond_Ore',
'minecraft:Deepslate_Emerald_Ore',
'minecraft:Deepslate_Gold_Ore',
'minecraft:Deepslate_Iron_Ore',
'minecraft:Deepslate_Lapis_Lazuli_Ore',
'minecraft:Deepslate_Redstone_Ore',
'minecraft:Deepslate_Tile_Slab',
'minecraft:Deepslate_Tile_Stairs',
'minecraft:Deepslate_Tile_Wall',
'minecraft:Deepslate_Tiles',
'minecraft:Detector_Rail',
'minecraft:Diamond',
'minecraft:Diamond_Axe',
'minecraft:Diamond_Boots',
'minecraft:Diamond_Chestplate',
'minecraft:Diamond_Helmet',
'minecraft:Diamond_Hoe',
'minecraft:Diamond_Horse_Armor',
'minecraft:Diamond_Leggings',
'minecraft:Diamond_Nautilus_Armor',
'minecraft:Diamond_Ore',
'minecraft:Diamond_Pickaxe',
'minecraft:Diamond_Shovel',
'minecraft:Diamond_Spear',
'minecraft:Diamond_Sword',
'minecraft:Diorite',
'minecraft:Diorite_Slab',
'minecraft:Diorite_Stairs',
'minecraft:Diorite_Wall',
'minecraft:Dirt',
'minecraft:Dirt_Path',
'minecraft:Disc_Fragment',
'minecraft:Dispenser',
'minecraft:Dolphin_Spawn_Egg',
'minecraft:Donkey_Spawn_Egg',
'minecraft:Dragon_Egg',
'minecraft:Dragon_Head',
'minecraft:Dragon_Wall_Head',
'minecraft:Dragons_Breath',
'minecraft:Dried_Ghast',
'minecraft:Dried_Kelp',
'minecraft:Dried_Kelp_Block',
'minecraft:Dripstone_Block',
'minecraft:Dropper',
'minecraft:Drowned_Spawn_Egg',
'minecraft:Dune_Armor_Trim',
'minecraft:Echo_Shard',
'minecraft:Egg',
'minecraft:Elder_Guardian_Spawn_Egg',
'minecraft:Elytra',
'minecraft:Emerald',
'minecraft:Emerald_Ore',
'minecraft:Empty_Map',
'minecraft:Enchanted_Book',
'minecraft:Enchanted_Golden_Apple',
'minecraft:Enchanting_Table',
'minecraft:End_Crystal',
'minecraft:End_Gateway',
'minecraft:End_Portal',
'minecraft:End_Portal_Frame',
'minecraft:End_Rod',
'minecraft:End_Stone',
'minecraft:End_Stone_Brick_Slab',
'minecraft:End_Stone_Brick_Stairs',
'minecraft:End_Stone_Brick_Wall',
'minecraft:End_Stone_Bricks',
'minecraft:Ender_Chest',
'minecraft:Ender_Dragon_Spawn_Egg',
'minecraft:Ender_Pearl',
'minecraft:Enderman_Spawn_Egg',
'minecraft:Endermite_Spawn_Egg',
'minecraft:Evoker_Spawn_Egg',
'minecraft:Explorer_Pottery_Sherd',
'minecraft:Exposed_Chiseled_Copper',
'minecraft:Exposed_Copper',
'minecraft:Exposed_Copper_Bars',
'minecraft:Exposed_Copper_Bulb',
'minecraft:Exposed_Copper_Chain',
'minecraft:Exposed_Copper_Chest',
'minecraft:Exposed_Copper_Door',
'minecraft:Exposed_Copper_Golem_Statue',
'minecraft:Exposed_Copper_Grate',
'minecraft:Exposed_Copper_Lantern',
'minecraft:Exposed_Copper_Trapdoor',
'minecraft:Exposed_Cut_Copper',
'minecraft:Exposed_Cut_Copper_Slab',
'minecraft:Exposed_Cut_Copper_Stairs',
'minecraft:Exposed_Lightning_Rod',
'minecraft:Eye_Armor_Trim',
'minecraft:Eye_of_Ender',
'minecraft:Farmland',
'minecraft:Feather',
'minecraft:Fermented_Spider_Eye',
'minecraft:Fern',
'minecraft:Field_Masoned_Banner_Pattern',
'minecraft:Fire',
'minecraft:Fire_Charge',
'minecraft:Fire_Coral',
'minecraft:Fire_Coral_Block',
'minecraft:Fire_Coral_Fan',
'minecraft:Fire_Coral_Wall_Fan',
'minecraft:Firefly_Bush',
'minecraft:Firework_Rocket',
'minecraft:Firework_Star',
'minecraft:Fishing_Rod',
'minecraft:Fletching_Table',
'minecraft:Flint',
'minecraft:Flint_and_Steel',
'minecraft:Flow_Armor_Trim',
'minecraft:Flow_Banner_Pattern',
'minecraft:Flow_Pottery_Sherd',
'minecraft:Flower_Charge_Banner_Pattern',
'minecraft:Flower_Pot',
'minecraft:Flowering_Azalea',
'minecraft:Flowering_Azalea_Leaves',
'minecraft:Fox_Spawn_Egg',
'minecraft:Friend_Pottery_Sherd',
'minecraft:Frog_Spawn_Egg',
'minecraft:Frogspawn',
'minecraft:Frosted_Ice',
'minecraft:Furnace',
'minecraft:Gear',
'minecraft:Ghast_Spawn_Egg',
'minecraft:Ghast_Tear',
'minecraft:Gilded_Blackstone',
'minecraft:Glass',
'minecraft:Glass_Bottle',
'minecraft:Glass_Pane',
'minecraft:Glistering_Melon_Slice',
'minecraft:Globe_Banner_Pattern',
'minecraft:Glow_Berries',
'minecraft:Glow_Ink_Sac',
'minecraft:Glow_Item_Frame',
'minecraft:Glow_Item_Frame',
'minecraft:Glow_Lichen',
'minecraft:Glow_Squid_Spawn_Egg',
'minecraft:Glowstone',
'minecraft:Glowstone_Dust',
'minecraft:Goat_Horn',
'minecraft:Goat_Spawn_Egg',
'minecraft:Gold_Ingot',
'minecraft:Gold_Nugget',
'minecraft:Gold_Ore',
'minecraft:Golden_Apple',
'minecraft:Golden_Axe',
'minecraft:Golden_Boots',
'minecraft:Golden_Carrot',
'minecraft:Golden_Chestplate',
'minecraft:Golden_Helmet',
'minecraft:Golden_Hoe',
'minecraft:Golden_Horse_Armor',
'minecraft:Golden_Leggings',
'minecraft:Golden_Nautilus_Armor',
'minecraft:Golden_Pickaxe',
'minecraft:Golden_Shovel',
'minecraft:Golden_Spear',
'minecraft:Golden_Sword',
'minecraft:Granite',
'minecraft:Granite_Slab',
'minecraft:Granite_Stairs',
'minecraft:Granite_Wall',
'minecraft:Grass_Block',
'minecraft:Gravel',
'minecraft:Gray_Banner',
'minecraft:Gray_Bed',
'minecraft:Gray_Bundle',
'minecraft:Gray_Candle',
'minecraft:Gray_Carpet',
'minecraft:Gray_Concrete',
'minecraft:Gray_Concrete_Powder',
'minecraft:Gray_Dye',
'minecraft:Gray_Glazed_Terracotta',
'minecraft:Gray_Harness',
'minecraft:Gray_Shulker_Box',
'minecraft:Gray_Stained_Glass',
'minecraft:Gray_Stained_Glass_Pane',
'minecraft:Gray_Terracotta',
'minecraft:Gray_Wall_Banner',
'minecraft:Gray_Wool',
'minecraft:Green_Banner',
'minecraft:Green_Bed',
'minecraft:Green_Bundle',
'minecraft:Green_Candle',
'minecraft:Green_Carpet',
'minecraft:Green_Concrete',
'minecraft:Green_Concrete_Powder',
'minecraft:Green_Dye',
'minecraft:Green_Glazed_Terracotta',
'minecraft:Green_Harness',
'minecraft:Green_Shulker_Box',
'minecraft:Green_Stained_Glass',
'minecraft:Green_Stained_Glass_Pane',
'minecraft:Green_Terracotta',
'minecraft:Green_Wall_Banner',
'minecraft:Green_Wool',
'minecraft:Grindstone',
'minecraft:Guardian_Spawn_Egg',
'minecraft:Gunpowder',
'minecraft:Guster_Banner_Pattern',
'minecraft:Guster_Pottery_Sherd',
'minecraft:Hanging_Roots',
'minecraft:Happy_Ghast_Spawn_Egg',
'minecraft:Hay_Bale',
'minecraft:Heart_of_the_Sea',
'minecraft:Heart_Pottery_Sherd',
'minecraft:Heartbreak_Pottery_Sherd',
'minecraft:Heavy_Core',
'minecraft:Heavy_Weighted_Pressure_Plate',
'minecraft:Hoglin_Spawn_Egg',
'minecraft:Honey_Block',
'minecraft:Honey_Bottle',
'minecraft:Honeycomb',
'minecraft:Honeycomb_Block',
'minecraft:Hopper',
'minecraft:Horn_Coral',
'minecraft:Horn_Coral_Block',
'minecraft:Horn_Coral_Fan',
'minecraft:Horn_Coral_Wall_Fan',
'minecraft:Horse_Saddle',
'minecraft:Horse_Spawn_Egg',
'minecraft:Host_Armor_Trim',
'minecraft:Howl_Pottery_Sherd',
'minecraft:Husk_Spawn_Egg',
'minecraft:Ice',
'minecraft:Infested_Chiseled_Stone_Bricks',
'minecraft:Infested_Cobblestone',
'minecraft:Infested_Cracked_Stone_Bricks',
'minecraft:Infested_Deepslate',
'minecraft:Infested_Mossy_Stone_Bricks',
'minecraft:Infested_Stone',
'minecraft:Infested_Stone_Bricks',
'minecraft:Ink_Sac',
'minecraft:Ink_Sac',
'minecraft:Iron_Axe',
'minecraft:Iron_Bars',
'minecraft:Iron_Boots',
'minecraft:Iron_Chestplate',
'minecraft:Iron_Door',
'minecraft:Iron_Golem_Spawn_Egg',
'minecraft:Iron_Helmet',
'minecraft:Iron_Hoe',
'minecraft:Iron_Horse_Armor',
'minecraft:Iron_Ingot',
'minecraft:Iron_Leggings',
'minecraft:Iron_Nautilus_Armor',
'minecraft:Iron_Nugget',
'minecraft:Iron_Ore',
'minecraft:Iron_Pickaxe',
'minecraft:Iron_Shovel',
'minecraft:Iron_Spear',
'minecraft:Iron_Sword',
'minecraft:Iron_Trapdoor',
'minecraft:Item_Frame',
'minecraft:Item_Frame',
'minecraft:Jack_o_Lantern',
'minecraft:Jigsaw_Block',
'minecraft:Jukebox',
'minecraft:Jungle_Boat',
'minecraft:Jungle_Boat_with_Chest',
'minecraft:Jungle_Button',
'minecraft:Jungle_Door',
'minecraft:Jungle_Fence',
'minecraft:Jungle_Fence_Gate',
'minecraft:Jungle_Hanging_Sign',
'minecraft:Jungle_Leaves',
'minecraft:Jungle_Log',
'minecraft:Jungle_Planks',
'minecraft:Jungle_Pressure_Plate',
'minecraft:Jungle_Sapling',
'minecraft:Jungle_Shelf',
'minecraft:Jungle_Sign',
'minecraft:Jungle_Slab',
'minecraft:Jungle_Stairs',
'minecraft:Jungle_Trapdoor',
'minecraft:Jungle_Wall_Hanging_Sign',
'minecraft:Jungle_Wall_Sign',
'minecraft:Jungle_Wood',
'minecraft:Kelp',
'minecraft:Kelp_Plant',
'minecraft:Knowledge_Book',
'minecraft:Ladder',
'minecraft:Lantern',
'minecraft:Lapis_Lazuli',
'minecraft:Lapis_Lazuli_Ore',
'minecraft:Large_Amethyst_Bud',
'minecraft:Large_Fern',
'minecraft:Lava',
'minecraft:Lava_Bucket',
'minecraft:Lava_Cauldron',
'minecraft:Lava_Spawner',
'minecraft:Lead',
'minecraft:Leaf_Litter',
'minecraft:Leather',
'minecraft:Leather_Boots',
'minecraft:Leather_Cap',
'minecraft:Leather_Horse_Armor',
'minecraft:Leather_Pants',
'minecraft:Leather_Tunic',
'minecraft:Lectern',
'minecraft:Lever',
'minecraft:Light_Block',
'minecraft:Light_Blue_Banner',
'minecraft:Light_Blue_Bed',
'minecraft:Light_Blue_Bundle',
'minecraft:Light_Blue_Candle',
'minecraft:Light_Blue_Carpet',
'minecraft:Light_Blue_Concrete',
'minecraft:Light_Blue_Concrete_Powder',
'minecraft:Light_Blue_Dye',
'minecraft:Light_Blue_Glazed_Terracotta',
'minecraft:Light_Blue_Harness',
'minecraft:Light_Blue_Shulker_Box',
'minecraft:Light_Blue_Stained_Glass',
'minecraft:Light_Blue_Stained_Glass_Pane',
'minecraft:Light_Blue_Terracotta',
'minecraft:Light_Blue_Wall_Banner',
'minecraft:Light_Blue_Wool',
'minecraft:Light_Gray_Banner',
'minecraft:Light_Gray_Bed',
'minecraft:Light_Gray_Bundle',
'minecraft:Light_Gray_Candle',
'minecraft:Light_Gray_Carpet',
'minecraft:Light_Gray_Concrete',
'minecraft:Light_Gray_Concrete_Powder',
'minecraft:Light_Gray_Dye',
'minecraft:Light_Gray_Glazed_Terracotta',
'minecraft:Light_Gray_Harness',
'minecraft:Light_Gray_Shulker_Box',
'minecraft:Light_Gray_Stained_Glass',
'minecraft:Light_Gray_Stained_Glass_Pane',
'minecraft:Light_Gray_Terracotta',
'minecraft:Light_Gray_Wall_Banner',
'minecraft:Light_Gray_Wool',
'minecraft:Light_Weighted_Pressure_Plate',
'minecraft:Lightning_Rod',
'minecraft:Lilac',
'minecraft:Lily_of_the_Valley',
'minecraft:Lily_Pad',
'minecraft:Lime_Banner',
'minecraft:Lime_Bed',
'minecraft:Lime_Bundle',
'minecraft:Lime_Candle',
'minecraft:Lime_Carpet',
'minecraft:Lime_Concrete',
'minecraft:Lime_Concrete_Powder',
'minecraft:Lime_Dye',
'minecraft:Lime_Glazed_Terracotta',
'minecraft:Lime_Harness',
'minecraft:Lime_Shulker_Box',
'minecraft:Lime_Stained_Glass',
'minecraft:Lime_Stained_Glass_Pane',
'minecraft:Lime_Terracotta',
'minecraft:Lime_Wall_Banner',
'minecraft:Lime_Wool',
'minecraft:Lingering_Potion',
'minecraft:Llama_Spawn_Egg',
'minecraft:Locked_chest',
'minecraft:Lodestone',
'minecraft:Loom',
'minecraft:Mace',
'minecraft:Magenta_Banner',
'minecraft:Magenta_Bed',
'minecraft:Magenta_Bundle',
'minecraft:Magenta_Candle',
'minecraft:Magenta_Carpet',
'minecraft:Magenta_Concrete',
'minecraft:Magenta_Concrete_Powder',
'minecraft:Magenta_Dye',
'minecraft:Magenta_Glazed_Terracotta',
'minecraft:Magenta_Harness',
'minecraft:Magenta_Shulker_Box',
'minecraft:Magenta_Stained_Glass',
'minecraft:Magenta_Stained_Glass_Pane',
'minecraft:Magenta_Terracotta',
'minecraft:Magenta_Wall_Banner',
'minecraft:Magenta_Wool',
'minecraft:Magma_Block',
'minecraft:Magma_Cream',
'minecraft:Magma_Cube_Spawn_Egg',
'minecraft:Mangrove_Boat',
'minecraft:Mangrove_Boat_with_Chest',
'minecraft:Mangrove_Button',
'minecraft:Mangrove_Door',
'minecraft:Mangrove_Fence',
'minecraft:Mangrove_Fence_Gate',
'minecraft:Mangrove_Hanging_Sign',
'minecraft:Mangrove_Leaves',
'minecraft:Mangrove_Log',
'minecraft:Mangrove_Planks',
'minecraft:Mangrove_Pressure_Plate',
'minecraft:Mangrove_Propagule',
'minecraft:Mangrove_Roots',
'minecraft:Mangrove_Shelf',
'minecraft:Mangrove_Sign',
'minecraft:Mangrove_Slab',
'minecraft:Mangrove_Stairs',
'minecraft:Mangrove_Trapdoor',
'minecraft:Mangrove_Wall_Hanging_Sign',
'minecraft:Mangrove_Wall_Sign',
'minecraft:Mangrove_Wood',
'minecraft:Map',
'minecraft:Medium_Amethyst_Bud',
'minecraft:Melon',
'minecraft:Melon_Seeds',
'minecraft:Melon_Slice',
'minecraft:Melon_Stem',
'minecraft:Milk_Bucket',
'minecraft:Minecart',
'minecraft:Minecart_with_Chest',
'minecraft:Minecart_with_Command_Block',
'minecraft:Minecart_with_Furnace',
'minecraft:Minecart_with_Hopper',
'minecraft:Minecart_with_TNT',
'minecraft:Miner_Pottery_Sherd',
'minecraft:Monster_Spawner',
'minecraft:Mooshroom_Spawn_Egg',
'minecraft:Moss_Block',
'minecraft:Moss_Carpet',
'minecraft:Mossy_Cobblestone',
'minecraft:Mossy_Cobblestone_Slab',
'minecraft:Mossy_Cobblestone_Stairs',
'minecraft:Mossy_Cobblestone_Wall',
'minecraft:Mossy_Stone_Brick_Slab',
'minecraft:Mossy_Stone_Brick_Stairs',
'minecraft:Mossy_Stone_Brick_Wall',
'minecraft:Mossy_Stone_Bricks',
'minecraft:Mourner_Pottery_Sherd',
'minecraft:Moving_Piston',
'minecraft:Mud',
'minecraft:Mud_Brick_Slab',
'minecraft:Mud_Brick_Stairs',
'minecraft:Mud_Brick_Wall',
'minecraft:Mud_Bricks',
'minecraft:Muddy_Mangrove_Roots',
'minecraft:Mule_Spawn_Egg',
'minecraft:Mushroom_Stem',
'minecraft:Mushroom_Stew',
'minecraft:Music_Disc_(11)',
'minecraft:Music_Disc_(13)',
'minecraft:Music_Disc_(5)',
'minecraft:Music_Disc_(blocks)',
'minecraft:Music_Disc_(cat)',
'minecraft:Music_Disc_(chirp)',
'minecraft:Music_Disc_(Creator_(Music_Box))',
'minecraft:Music_Disc_(Creator)',
'minecraft:Music_Disc_(far)',
'minecraft:Music_Disc_(Lava_Chicken)',
'minecraft:Music_Disc_(mall)',
'minecraft:Music_Disc_(mellohi)',
'minecraft:Music_Disc_(otherside)',
'minecraft:Music_Disc_(Pigstep)',
'minecraft:Music_Disc_(Precipice)',
'minecraft:Music_Disc_(Relic)',
'minecraft:Music_Disc_(stal)',
'minecraft:Music_Disc_(strad)',
'minecraft:Music_Disc_(Tears)',
'minecraft:Music_Disc_(wait)',
'minecraft:Music_Disc_(ward)',
'minecraft:Mycelium',
'minecraft:Name_Tag',
'minecraft:Nautilus_Shell',
'minecraft:Nautilus_Spawn_Egg',
'minecraft:Nether_Brick',
'minecraft:Nether_Brick_Fence',
'minecraft:Nether_Brick_Slab',
'minecraft:Nether_Brick_Stairs',
'minecraft:Nether_Brick_Wall',
'minecraft:Nether_Bricks',
'minecraft:Nether_Gold_Ore',
'minecraft:Nether_Portal',
'minecraft:Nether_Quartz',
'minecraft:Nether_Quartz_Ore',
'minecraft:Nether_Sprouts',
'minecraft:Nether_Star',
'minecraft:Nether_Wart',
'minecraft:Nether_Wart',
'minecraft:Nether_Wart_Block',
'minecraft:Netherite_Axe',
'minecraft:Netherite_Boots',
'minecraft:Netherite_Chestplate',
'minecraft:Netherite_Helmet',
'minecraft:Netherite_Hoe',
'minecraft:Netherite_Horse_Armor',
'minecraft:Netherite_Ingot',
'minecraft:Netherite_Leggings',
'minecraft:Netherite_Nautilus_Armor',
'minecraft:Netherite_Pickaxe',
'minecraft:Netherite_Scrap',
'minecraft:Netherite_Shovel',
'minecraft:Netherite_Spear',
'minecraft:Netherite_Sword',
'minecraft:Netherite_Upgrade',
'minecraft:Netherrack',
'minecraft:Note_Block',
'minecraft:Oak_Boat',
'minecraft:Oak_Boat_with_Chest',
'minecraft:Oak_Button',
'minecraft:Oak_Door',
'minecraft:Oak_Fence',
'minecraft:Oak_Fence_Gate',
'minecraft:Oak_Hanging_Sign',
'minecraft:Oak_Leaves',
'minecraft:Oak_Log',
'minecraft:Oak_Planks',
'minecraft:Oak_Pressure_Plate',
'minecraft:Oak_Sapling',
'minecraft:Oak_Shelf',
'minecraft:Oak_Sign',
'minecraft:Oak_Slab',
'minecraft:Oak_Stairs',
'minecraft:Oak_Trapdoor',
'minecraft:Oak_Wall_Hanging_Sign',
'minecraft:Oak_Wall_Sign',
'minecraft:Oak_Wood',
'minecraft:Observer',
'minecraft:Obsidian',
'minecraft:Ocelot_Spawn_Egg',
'minecraft:Ochre_Froglight',
'minecraft:Ominous_Banner',
'minecraft:Ominous_Bottle',
'minecraft:Ominous_Trial_Key',
'minecraft:Ominous_Trial_Spawner',
'minecraft:Ominous_Vault',
'minecraft:Open_Eyeblossom',
'minecraft:Orange_Banner',
'minecraft:Orange_Bed',
'minecraft:Orange_Bundle',
'minecraft:Orange_Candle',
'minecraft:Orange_Carpet',
'minecraft:Orange_Concrete',
'minecraft:Orange_Concrete_Powder',
'minecraft:Orange_Dye',
'minecraft:Orange_Glazed_Terracotta',
'minecraft:Orange_Harness',
'minecraft:Orange_Shulker_Box',
'minecraft:Orange_Stained_Glass',
'minecraft:Orange_Stained_Glass_Pane',
'minecraft:Orange_Terracotta',
'minecraft:Orange_Tulip',
'minecraft:Orange_Wall_Banner',
'minecraft:Orange_Wool',
'minecraft:Oxeye_Daisy',
'minecraft:Oxidized_Chiseled_Copper',
'minecraft:Oxidized_Copper',
'minecraft:Oxidized_Copper_Bars',
'minecraft:Oxidized_Copper_Bulb',
'minecraft:Oxidized_Copper_Chain',
'minecraft:Oxidized_Copper_Chest',
'minecraft:Oxidized_Copper_Door',
'minecraft:Oxidized_Copper_Golem_Statue',
'minecraft:Oxidized_Copper_Grate',
'minecraft:Oxidized_Copper_Lantern',
'minecraft:Oxidized_Copper_Trapdoor',
'minecraft:Oxidized_Cut_Copper',
'minecraft:Oxidized_Cut_Copper_Slab',
'minecraft:Oxidized_Cut_Copper_Stairs',
'minecraft:Oxidized_Lightning_Rod',
'minecraft:Packed_Ice',
'minecraft:Packed_Mud',
'minecraft:Painting',
'minecraft:Pale_Hanging_Moss',
'minecraft:Pale_Moss_Block',
'minecraft:Pale_Moss_Carpet',
'minecraft:Pale_Oak_Boat',
'minecraft:Pale_Oak_Boat_with_Chest',
'minecraft:Pale_Oak_Button',
'minecraft:Pale_Oak_Door',
'minecraft:Pale_Oak_Fence',
'minecraft:Pale_Oak_Fence_Gate',
'minecraft:Pale_Oak_Hanging_Sign',
'minecraft:Pale_Oak_Leaves',
'minecraft:Pale_Oak_Log',
'minecraft:Pale_Oak_Planks',
'minecraft:Pale_Oak_Pressure_Plate',
'minecraft:Pale_Oak_Sapling',
'minecraft:Pale_Oak_Shelf',
'minecraft:Pale_Oak_Sign',
'minecraft:Pale_Oak_Slab',
'minecraft:Pale_Oak_Stairs',
'minecraft:Pale_Oak_Trapdoor',
'minecraft:Pale_Oak_Wall_Hanging_Sign',
'minecraft:Pale_Oak_Wall_Sign',
'minecraft:Pale_Oak_Wood',
'minecraft:Panda_Spawn_Egg',
'minecraft:Paper',
'minecraft:Parched_Spawn_Egg',
'minecraft:Parrot_Spawn_Egg',
'minecraft:Pearlescent_Froglight',
'minecraft:Peony',
'minecraft:Petrified_Oak_Slab',
'minecraft:Phantom_Membrane',
'minecraft:Phantom_Spawn_Egg',
'minecraft:Pig_Spawn_Egg',
'minecraft:Piglin_Brute_Spawn_Egg',
'minecraft:Piglin_Head',
'minecraft:Piglin_Spawn_Egg',
'minecraft:Piglin_Wall_Head',
'minecraft:Pillager_Spawn_Egg',
'minecraft:Pink_Banner',
'minecraft:Pink_Bed',
'minecraft:Pink_Bundle',
'minecraft:Pink_Candle',
'minecraft:Pink_Carpet',
'minecraft:Pink_Concrete',
'minecraft:Pink_Concrete_Powder',
'minecraft:Pink_Dye',
'minecraft:Pink_Glazed_Terracotta',
'minecraft:Pink_Harness',
'minecraft:Pink_Petals',
'minecraft:Pink_Shulker_Box',
'minecraft:Pink_Stained_Glass',
'minecraft:Pink_Stained_Glass_Pane',
'minecraft:Pink_Terracotta',
'minecraft:Pink_Tulip',
'minecraft:Pink_Wall_Banner',
'minecraft:Pink_Wool',
'minecraft:Piston',
'minecraft:Piston_Head',
'minecraft:Pitcher_Crop',
'minecraft:Pitcher_Plant',
'minecraft:Pitcher_Pod',
'minecraft:Player_Head',
'minecraft:Player_Wall_Head',
'minecraft:Plenty_Pottery_Sherd',
'minecraft:Podzol',
'minecraft:Pointed_Dripstone',
'minecraft:Poisonous_Potato',
'minecraft:Polar_Bear_Spawn_Egg',
'minecraft:Polished_Andesite',
'minecraft:Polished_Andesite_Slab',
'minecraft:Polished_Andesite_Stairs',
'minecraft:Polished_Basalt',
'minecraft:Polished_Blackstone',
'minecraft:Polished_Blackstone_Brick_Slab',
'minecraft:Polished_Blackstone_Brick_Stairs',
'minecraft:Polished_Blackstone_Brick_Wall',
'minecraft:Polished_Blackstone_Bricks',
'minecraft:Polished_Blackstone_Button',
'minecraft:Polished_Blackstone_Pressure_Plate',
'minecraft:Polished_Blackstone_Slab',
'minecraft:Polished_Blackstone_Stairs',
'minecraft:Polished_Blackstone_Wall',
'minecraft:Polished_Deepslate',
'minecraft:Polished_Deepslate_Slab',
'minecraft:Polished_Deepslate_Stairs',
'minecraft:Polished_Deepslate_Wall',
'minecraft:Polished_Diorite',
'minecraft:Polished_Diorite_Slab',
'minecraft:Polished_Diorite_Stairs',
'minecraft:Polished_Granite',
'minecraft:Polished_Granite_Slab',
'minecraft:Polished_Granite_Stairs',
'minecraft:Polished_Tuff',
'minecraft:Polished_Tuff_Slab',
'minecraft:Polished_Tuff_Stairs',
'minecraft:Polished_Tuff_Wall',
'minecraft:Popped_Chorus_Fruit',
'minecraft:Poppy',
'minecraft:Potato',
'minecraft:Potatoes',
'minecraft:Potion',
'minecraft:Potted_Acacia_Sapling',
'minecraft:Potted_Allium',
'minecraft:Potted_Azalea',
'minecraft:Potted_Azure_Bluet',
'minecraft:Potted_Bamboo',
'minecraft:Potted_Birch_Sapling',
'minecraft:Potted_Blue_Orchid',
'minecraft:Potted_Brown_Mushroom',
'minecraft:Potted_Cactus',
'minecraft:Potted_Cherry_Sapling',
'minecraft:Potted_Closed_Eyeblossom',
'minecraft:Potted_Cornflower',
'minecraft:Potted_Crimson_Fungus',
'minecraft:Potted_Crimson_Roots',
'minecraft:Potted_Dandelion',
'minecraft:Potted_Dark_Oak_Sapling',
'minecraft:Potted_Dead_Bush',
'minecraft:Potted_Fern',
'minecraft:Potted_Flowering_Azalea',
'minecraft:Potted_Jungle_Sapling',
'minecraft:Potted_Lily_of_the_Valley',
'minecraft:Potted_Mangrove_Propagule',
'minecraft:Potted_Oak_Sapling',
'minecraft:Potted_Open_Eyeblossom',
'minecraft:Potted_Orange_Tulip',
'minecraft:Potted_Oxeye_Daisy',
'minecraft:Potted_Pale_Oak_Sapling',
'minecraft:Potted_Pink_Tulip',
'minecraft:Potted_Poppy',
'minecraft:Potted_Red_Mushroom',
'minecraft:Potted_Red_Tulip',
'minecraft:Potted_Spruce_Sapling',
'minecraft:Potted_Torchflower',
'minecraft:Potted_Warped_Fungus',
'minecraft:Potted_Warped_Roots',
'minecraft:Potted_White_Tulip',
'minecraft:Potted_Wither_Rose',
'minecraft:Powder_Snow',
'minecraft:Powder_Snow_Bucket',
'minecraft:Powder_Snow_Cauldron',
'minecraft:Powered_Rail',
'minecraft:Prismarine',
'minecraft:Prismarine_Brick_Slab',
'minecraft:Prismarine_Brick_Stairs',
'minecraft:Prismarine_Bricks',
'minecraft:Prismarine_Crystals',
'minecraft:Prismarine_Shard',
'minecraft:Prismarine_Slab',
'minecraft:Prismarine_Stairs',
'minecraft:Prismarine_Wall',
'minecraft:Prize_Pottery_Sherd',
'minecraft:Pufferfish',
'minecraft:Pufferfish_Spawn_Egg',
'minecraft:Pumpkin',
'minecraft:Pumpkin_Pie',
'minecraft:Pumpkin_Seeds',
'minecraft:Pumpkin_Stem',
'minecraft:Purple_Banner',
'minecraft:Purple_Bed',
'minecraft:Purple_Bundle',
'minecraft:Purple_Candle',
'minecraft:Purple_Carpet',
'minecraft:Purple_Concrete',
'minecraft:Purple_Concrete_Powder',
'minecraft:Purple_Dye',
'minecraft:Purple_Glazed_Terracotta',
'minecraft:Purple_Harness',
'minecraft:Purple_Shulker_Box',
'minecraft:Purple_Stained_Glass',
'minecraft:Purple_Stained_Glass_Pane',
'minecraft:Purple_Terracotta',
'minecraft:Purple_Wall_Banner',
'minecraft:Purple_Wool',
'minecraft:Purpur_Block',
'minecraft:Purpur_Pillar',
'minecraft:Purpur_Slab',
'minecraft:Purpur_Stairs',
'minecraft:Quartz_Bricks',
'minecraft:Quartz_Pillar',
'minecraft:Quartz_Slab',
'minecraft:Quartz_Stairs',
'minecraft:Rabbit_Hide',
'minecraft:Rabbit_Spawn_Egg',
'minecraft:Rabbit_Stew',
'minecraft:Rabbits_Foot',
'minecraft:Rail',
'minecraft:Raiser_Armor_Trim',
'minecraft:Ravager_Spawn_Egg',
'minecraft:Raw_Beef',
'minecraft:Raw_Chicken',
'minecraft:Raw_Cod',
'minecraft:Raw_Copper',
'minecraft:Raw_Gold',
'minecraft:Raw_Iron',
'minecraft:Raw_Mutton',
'minecraft:Raw_Porkchop',
'minecraft:Raw_Rabbit',
'minecraft:Raw_Salmon',
'minecraft:Recovery_Compass',
'minecraft:Red_Banner',
'minecraft:Red_Bed',
'minecraft:Red_Bundle',
'minecraft:Red_Candle',
'minecraft:Red_Carpet',
'minecraft:Red_Concrete',
'minecraft:Red_Concrete_Powder',
'minecraft:Red_Dye',
'minecraft:Red_Glazed_Terracotta',
'minecraft:Red_Harness',
'minecraft:Red_Mushroom',
'minecraft:Red_Mushroom_Block',
'minecraft:Red_Nether_Brick_Slab',
'minecraft:Red_Nether_Brick_Stairs',
'minecraft:Red_Nether_Brick_Wall',
'minecraft:Red_Nether_Bricks',
'minecraft:Red_Sand',
'minecraft:Red_Sandstone',
'minecraft:Red_Sandstone_Slab',
'minecraft:Red_Sandstone_Stairs',
'minecraft:Red_Sandstone_Wall',
'minecraft:Red_Shulker_Box',
'minecraft:Red_Stained_Glass',
'minecraft:Red_Stained_Glass_Pane',
'minecraft:Red_Terracotta',
'minecraft:Red_Tulip',
'minecraft:Red_Wall_Banner',
'minecraft:Red_Wool',
'minecraft:Redstone_Comparator',
'minecraft:Redstone_Dust',
'minecraft:Redstone_Lamp',
'minecraft:Redstone_Ore',
'minecraft:Redstone_Repeater',
'minecraft:Redstone_Torch',
'minecraft:Redstone_Wall_Torch',
'minecraft:Redstone_Wire',
'minecraft:Reinforced_Deepslate',
'minecraft:Repeating_Command_Block',
'minecraft:Resin_Brick',
'minecraft:Resin_Brick_Slab',
'minecraft:Resin_Brick_Stairs',
'minecraft:Resin_Brick_Wall',
'minecraft:Resin_Bricks',
'minecraft:Resin_Clump',
'minecraft:Respawn_Anchor',
'minecraft:Rib_Armor_Trim',
'minecraft:Rooted_Dirt',
'minecraft:Rose_Bush',
'minecraft:Rotten_Flesh',
'minecraft:Saddle',
'minecraft:Salmon_Spawn_Egg',
'minecraft:Sand',
'minecraft:Sandstone',
'minecraft:Sandstone_Slab',
'minecraft:Sandstone_Stairs',
'minecraft:Sandstone_Wall',
'minecraft:Scaffolding',
'minecraft:Scrape_Pottery_Sherd',
'minecraft:Sculk',
'minecraft:Sculk_Catalyst',
'minecraft:Sculk_Sensor',
'minecraft:Sculk_Shrieker',
'minecraft:Sculk_Vein',
'minecraft:Sea_Lantern',
'minecraft:Sea_Pickle',
'minecraft:Seagrass',
'minecraft:Sentry_Armor_Trim',
'minecraft:Shaper_Armor_Trim',
'minecraft:Sheaf_Pottery_Sherd',
'minecraft:Shears',
'minecraft:Sheep_Spawn_Egg',
'minecraft:Shelter_Pottery_Sherd',
'minecraft:Shield',
'minecraft:Short_Dry_Grass',
'minecraft:Short_Grass',
'minecraft:Shroomlight',
'minecraft:Shrub',
'minecraft:Shulker_Box',
'minecraft:Shulker_Shell',
'minecraft:Shulker_Spawn_Egg',
'minecraft:Silence_Armor_Trim',
'minecraft:Silverfish_Spawn_Egg',
'minecraft:Skeleton_Horse_Spawn_Egg',
'minecraft:Skeleton_Skull',
'minecraft:Skeleton_Spawn_Egg',
'minecraft:Skeleton_Wall_Skull',
'minecraft:Skull_Charge_Banner_Pattern',
'minecraft:Skull_Pottery_Sherd',
'minecraft:Slime_Block',
'minecraft:Slime_Spawn_Egg',
'minecraft:Slimeball',
'minecraft:Small_Amethyst_Bud',
'minecraft:Small_Dripleaf',
'minecraft:Smithing_Table',
'minecraft:Smoker',
'minecraft:Smooth_Basalt',
'minecraft:Smooth_Quartz_Block',
'minecraft:Smooth_Quartz_Slab',
'minecraft:Smooth_Quartz_Stairs',
'minecraft:Smooth_Red_Sandstone',
'minecraft:Smooth_Red_Sandstone_Slab',
'minecraft:Smooth_Red_Sandstone_Stairs',
'minecraft:Smooth_Sandstone',
'minecraft:Smooth_Sandstone_Slab',
'minecraft:Smooth_Sandstone_Stairs',
'minecraft:Smooth_Stone',
'minecraft:Smooth_Stone_Slab',
'minecraft:Sniffer_Egg',
'minecraft:Sniffer_Spawn_Egg',
'minecraft:Snort_Pottery_Sherd',
'minecraft:Snout_Armor_Trim',
'minecraft:Snout_Banner_Pattern',
'minecraft:Snow',
'minecraft:Snow_Block',
'minecraft:Snow_Golem_Spawn_Egg',
'minecraft:Snowball',
'minecraft:Soul_Campfire',
'minecraft:Soul_Fire',
'minecraft:Soul_Lantern',
'minecraft:Soul_Sand',
'minecraft:Soul_Soil',
'minecraft:Soul_Torch',
'minecraft:Soul_Wall_Torch',
'minecraft:Spectral_Arrow',
'minecraft:Spider_Eye',
'minecraft:Spider_Spawn_Egg',
'minecraft:Spire_Armor_Trim',
'minecraft:Splash_Potion',
'minecraft:Sponge',
'minecraft:Spore_Blossom',
'minecraft:Spruce_Boat',
'minecraft:Spruce_Boat_with_Chest',
'minecraft:Spruce_Button',
'minecraft:Spruce_Door',
'minecraft:Spruce_Fence',
'minecraft:Spruce_Fence_Gate',
'minecraft:Spruce_Hanging_Sign',
'minecraft:Spruce_Leaves',
'minecraft:Spruce_Log',
'minecraft:Spruce_Planks',
'minecraft:Spruce_Pressure_Plate',
'minecraft:Spruce_Sapling',
'minecraft:Spruce_Shelf',
'minecraft:Spruce_Sign',
'minecraft:Spruce_Slab',
'minecraft:Spruce_Stairs',
'minecraft:Spruce_Trapdoor',
'minecraft:Spruce_Wall_Hanging_Sign',
'minecraft:Spruce_Wall_Sign',
'minecraft:Spruce_Wood',
'minecraft:Spyglass',
'minecraft:Squid_Spawn_Egg',
'minecraft:Steak',
'minecraft:Stick',
'minecraft:Sticky_Piston',
'minecraft:Stone',
'minecraft:Stone_Axe',
'minecraft:Stone_Brick_Slab',
'minecraft:Stone_Brick_Stairs',
'minecraft:Stone_Brick_Wall',
'minecraft:Stone_Bricks',
'minecraft:Stone_Button',
'minecraft:Stone_Hoe',
'minecraft:Stone_Pickaxe',
'minecraft:Stone_Pressure_Plate',
'minecraft:Stone_Shovel',
'minecraft:Stone_Slab',
'minecraft:Stone_Spear',
'minecraft:Stone_Stairs',
'minecraft:Stone_Sword',
'minecraft:Stonecutter',
'minecraft:Stray_Spawn_Egg',
'minecraft:Strider_Spawn_Egg',
'minecraft:String',
'minecraft:Stripped_Acacia_Log',
'minecraft:Stripped_Acacia_Wood',
'minecraft:Stripped_Birch_Log',
'minecraft:Stripped_Birch_Wood',
'minecraft:Stripped_Cherry_Log',
'minecraft:Stripped_Cherry_Wood',
'minecraft:Stripped_Crimson_Hyphae',
'minecraft:Stripped_Crimson_Stem',
'minecraft:Stripped_Dark_Oak_Log',
'minecraft:Stripped_Dark_Oak_Wood',
'minecraft:Stripped_Jungle_Log',
'minecraft:Stripped_Jungle_Wood',
'minecraft:Stripped_Mangrove_Log',
'minecraft:Stripped_Mangrove_Wood',
'minecraft:Stripped_Oak_Log',
'minecraft:Stripped_Oak_Wood',
'minecraft:Stripped_Pale_Oak_Log',
'minecraft:Stripped_Pale_Oak_Wood',
'minecraft:Stripped_Spruce_Log',
'minecraft:Stripped_Spruce_Wood',
'minecraft:Stripped_Warped_Hyphae',
'minecraft:Stripped_Warped_Stem',
'minecraft:Structure_Block',
'minecraft:Structure_Void',
'minecraft:Studded_Boots',
'minecraft:Studded_Chestplate',
'minecraft:Studded_Helmet',
'minecraft:Studded_Leggings',
'minecraft:Sugar',
'minecraft:Sugar_Cane',
'minecraft:Sunflower',
'minecraft:Suspicious_Gravel',
'minecraft:Suspicious_Sand',
'minecraft:Suspicious_Stew',
'minecraft:Sweet_Berries',
'minecraft:Sweet_Berry_Bush',
'minecraft:Tadpole_Spawn_Egg',
'minecraft:Tall_Dry_Grass',
'minecraft:Tall_Grass',
'minecraft:Tall_Seagrass',
'minecraft:Target',
'minecraft:Terracotta',
'minecraft:Test_Block',
'minecraft:Test_Instance_Block',
'minecraft:Thing_Banner_Pattern',
'minecraft:Tide_Armor_Trim',
'minecraft:Tinted_Glass',
'minecraft:Tipped_Arrow',
'minecraft:TNT',
'minecraft:Torch',
'minecraft:Torchflower',
'minecraft:Torchflower_Crop',
'minecraft:Torchflower_Seeds',
'minecraft:Totem_of_Undying',
'minecraft:Trader_Llama_Spawn_Egg',
'minecraft:Trapped_Chest',
'minecraft:Trial_Key',
'minecraft:Trial_Spawner',
'minecraft:Trident',
'minecraft:Tripwire',
'minecraft:Tripwire_Hook',
'minecraft:Tropical_Fish',
'minecraft:Tropical_Fish_Spawn_Egg',
'minecraft:Tube_Coral',
'minecraft:Tube_Coral_Block',
'minecraft:Tube_Coral_Fan',
'minecraft:Tube_Coral_Wall_Fan',
'minecraft:Tuff',
'minecraft:Tuff_Brick_Slab',
'minecraft:Tuff_Brick_Stairs',
'minecraft:Tuff_Brick_Wall',
'minecraft:Tuff_Bricks',
'minecraft:Tuff_Slab',
'minecraft:Tuff_Stairs',
'minecraft:Tuff_Wall',
'minecraft:Turtle_Egg',
'minecraft:Turtle_Scute',
'minecraft:Turtle_Shell',
'minecraft:Turtle_Spawn_Egg',
'minecraft:Twisting_Vines',
'minecraft:Twisting_Vines_Plant',
'minecraft:Vault',
'minecraft:Verdant_Froglight',
'minecraft:Vex_Armor_Trim',
'minecraft:Vex_Spawn_Egg',
'minecraft:Villager_Spawn_Egg',
'minecraft:Vindicator_Spawn_Egg',
'minecraft:Vines',
'minecraft:Void_Air',
'minecraft:Wall_Torch',
'minecraft:Wandering_Trader_Spawn_Egg',
'minecraft:Ward_Armor_Trim',
'minecraft:Warden_Spawn_Egg',
'minecraft:Warped_Button',
'minecraft:Warped_Door',
'minecraft:Warped_Fence',
'minecraft:Warped_Fence_Gate',
'minecraft:Warped_Fungus',
'minecraft:Warped_Fungus_on_a_Stick',
'minecraft:Warped_Hanging_Sign',
'minecraft:Warped_Hyphae',
'minecraft:Warped_Nylium',
'minecraft:Warped_Planks',
'minecraft:Warped_Pressure_Plate',
'minecraft:Warped_Roots',
'minecraft:Warped_Shelf',
'minecraft:Warped_Sign',
'minecraft:Warped_Slab',
'minecraft:Warped_Stairs',
'minecraft:Warped_Stem',
'minecraft:Warped_Trapdoor',
'minecraft:Warped_Wall_Hanging_Sign',
'minecraft:Warped_Wall_Sign',
'minecraft:Warped_Wart_Block',
'minecraft:Water',
'minecraft:Water_Bucket',
'minecraft:Water_Cauldron',
'minecraft:Water_Spawner',
'minecraft:Waxed_Block_of_Copper',
'minecraft:Waxed_Chiseled_Copper',
'minecraft:Waxed_Copper_Bars',
'minecraft:Waxed_Copper_Bulb',
'minecraft:Waxed_Copper_Chain',
'minecraft:Waxed_Copper_Chest',
'minecraft:Waxed_Copper_Door',
'minecraft:Waxed_Copper_Golem_Statue',
'minecraft:Waxed_Copper_Grate',
'minecraft:Waxed_Copper_Lantern',
'minecraft:Waxed_Copper_Trapdoor',
'minecraft:Waxed_Cut_Copper',
'minecraft:Waxed_Cut_Copper_Slab',
'minecraft:Waxed_Cut_Copper_Stairs',
'minecraft:Waxed_Exposed_Chiseled_Copper',
'minecraft:Waxed_Exposed_Copper',
'minecraft:Waxed_Exposed_Copper_Bars',
'minecraft:Waxed_Exposed_Copper_Bulb',
'minecraft:Waxed_Exposed_Copper_Chain',
'minecraft:Waxed_Exposed_Copper_Chest',
'minecraft:Waxed_Exposed_Copper_Door',
'minecraft:Waxed_Exposed_Copper_Golem_Statue',
'minecraft:Waxed_Exposed_Copper_Grate',
'minecraft:Waxed_Exposed_Copper_Lantern',
'minecraft:Waxed_Exposed_Copper_Trapdoor',
'minecraft:Waxed_Exposed_Cut_Copper',
'minecraft:Waxed_Exposed_Cut_Copper_Slab',
'minecraft:Waxed_Exposed_Cut_Copper_Stairs',
'minecraft:Waxed_Exposed_Lightning_Rod',
'minecraft:Waxed_Lightning_Rod',
'minecraft:Waxed_Oxidized_Chiseled_Copper',
'minecraft:Waxed_Oxidized_Copper',
'minecraft:Waxed_Oxidized_Copper_Bars',
'minecraft:Waxed_Oxidized_Copper_Bulb',
'minecraft:Waxed_Oxidized_Copper_Chain',
'minecraft:Waxed_Oxidized_Copper_Chest',
'minecraft:Waxed_Oxidized_Copper_Door',
'minecraft:Waxed_Oxidized_Copper_Golem_Statue',
'minecraft:Waxed_Oxidized_Copper_Grate',
'minecraft:Waxed_Oxidized_Copper_Lantern',
'minecraft:Waxed_Oxidized_Copper_Trapdoor',
'minecraft:Waxed_Oxidized_Cut_Copper',
'minecraft:Waxed_Oxidized_Cut_Copper_Slab',
'minecraft:Waxed_Oxidized_Cut_Copper_Stairs',
'minecraft:Waxed_Oxidized_Lightning_Rod',
'minecraft:Waxed_Weathered_Chiseled_Copper',
'minecraft:Waxed_Weathered_Copper',
'minecraft:Waxed_Weathered_Copper_Bars',
'minecraft:Waxed_Weathered_Copper_Bulb',
'minecraft:Waxed_Weathered_Copper_Chain',
'minecraft:Waxed_Weathered_Copper_Chest',
'minecraft:Waxed_Weathered_Copper_Door',
'minecraft:Waxed_Weathered_Copper_Golem_Statue',
'minecraft:Waxed_Weathered_Copper_Grate',
'minecraft:Waxed_Weathered_Copper_Lantern',
'minecraft:Waxed_Weathered_Copper_Trapdoor',
'minecraft:Waxed_Weathered_Cut_Copper',
'minecraft:Waxed_Weathered_Cut_Copper_Slab',
'minecraft:Waxed_Weathered_Cut_Copper_Stairs',
'minecraft:Waxed_Weathered_Lightning_Rod',
'minecraft:Wayfinder_Armor_Trim',
'minecraft:Weathered_Chiseled_Copper',
'minecraft:Weathered_Copper',
'minecraft:Weathered_Copper_Bars',
'minecraft:Weathered_Copper_Bulb',
'minecraft:Weathered_Copper_Chain',
'minecraft:Weathered_Copper_Chest',
'minecraft:Weathered_Copper_Door',
'minecraft:Weathered_Copper_Golem_Statue',
'minecraft:Weathered_Copper_Grate',
'minecraft:Weathered_Copper_Lantern',
'minecraft:Weathered_Copper_Trapdoor',
'minecraft:Weathered_Cut_Copper',
'minecraft:Weathered_Cut_Copper_Slab',
'minecraft:Weathered_Cut_Copper_Stairs',
'minecraft:Weathered_Lightning_Rod',
'minecraft:Weeping_Vines',
'minecraft:Weeping_Vines_Plant',
'minecraft:Wet_Sponge',
'minecraft:Wheat',
'minecraft:Wheat_Crops',
'minecraft:Wheat_Seeds',
'minecraft:White_Banner',
'minecraft:White_Bed',
'minecraft:White_Bundle',
'minecraft:White_Candle',
'minecraft:White_Carpet',
'minecraft:White_Concrete',
'minecraft:White_Concrete_Powder',
'minecraft:White_Dye',
'minecraft:White_Glazed_Terracotta',
'minecraft:White_Harness',
'minecraft:White_Shulker_Box',
'minecraft:White_Stained_Glass',
'minecraft:White_Stained_Glass_Pane',
'minecraft:White_Terracotta',
'minecraft:White_Tulip',
'minecraft:White_Wall_Banner',
'minecraft:White_Wool',
'minecraft:Wild_Armor_Trim',
'minecraft:Wildflowers',
'minecraft:Wind_Charge',
'minecraft:Witch_Spawn_Egg',
'minecraft:Wither_Rose',
'minecraft:Wither_Skeleton_Skull',
'minecraft:Wither_Skeleton_Spawn_Egg',
'minecraft:Wither_Skeleton_Wall_Skull',
'minecraft:Wither_Spawn_Egg',
'minecraft:Wolf_Armor',
'minecraft:Wolf_Spawn_Egg',
'minecraft:Wooden_Axe',
'minecraft:Wooden_Hoe',
'minecraft:Wooden_Pickaxe',
'minecraft:Wooden_Shovel',
'minecraft:Wooden_Spear',
'minecraft:Wooden_Sword',
'minecraft:Written_Book',
'minecraft:Yellow_Banner',
'minecraft:Yellow_Bed',
'minecraft:Yellow_Bundle',
'minecraft:Yellow_Candle',
'minecraft:Yellow_Carpet',
'minecraft:Yellow_Concrete',
'minecraft:Yellow_Concrete_Powder',
'minecraft:Yellow_Dye',
'minecraft:Yellow_Glazed_Terracotta',
'minecraft:Yellow_Harness',
'minecraft:Yellow_Shulker_Box',
'minecraft:Yellow_Stained_Glass',
'minecraft:Yellow_Stained_Glass_Pane',
'minecraft:Yellow_Terracotta',
'minecraft:Yellow_Wall_Banner',
'minecraft:Yellow_Wool',
'minecraft:Zoglin_Spawn_Egg',
'minecraft:Zombie_Head',
'minecraft:Zombie_Horse_Spawn_Egg',
'minecraft:Zombie_Nautilus_Spawn_Egg',
'minecraft:Zombie_Spawn_Egg',
'minecraft:Zombie_Villager_Spawn_Egg',
'minecraft:Zombie_Wall_Head',
'minecraft:Zombified_Piglin_Spawn_Egg'
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

const EFFECT_IDS = {
  "minecraft:speed": "minecraft:speed",
  "minecraft:slowness": "minecraft:slowness",
  "minecraft:haste": "minecraft:haste",
  "minecraft:mining_fatigue": "minecraft:mining_fatigue",
  "minecraft:strength": "minecraft:strength",
  "minecraft:instant_health": "minecraft:instant_health",
  "minecraft:instant_damage": "minecraft:instant_damage",
  "minecraft:jump_boost": "minecraft:jump_boost",
  "minecraft:nausea": "minecraft:nausea",
  "minecraft:regeneration": "minecraft:regeneration",
  "minecraft:resistance": "minecraft:resistance",
  "minecraft:fire_resistance": "minecraft:fire_resistance",
  "minecraft:water_breathing": "minecraft:water_breathing",
  "minecraft:invisibility": "minecraft:invisibility",
  "minecraft:blindness": "minecraft:blindness",
  "minecraft:night_vision": "minecraft:night_vision",
  "minecraft:hunger": "minecraft:hunger",
  "minecraft:weakness": "minecraft:weakness",
  "minecraft:poison": "minecraft:poison",
  "minecraft:wither": "minecraft:wither",
  "minecraft:health_boost": "minecraft:health_boost",
  "minecraft:absorption": "minecraft:absorption",
  "minecraft:saturation": "minecraft:saturation",
};

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

    if (value != null) {
  e.value = value;
  e.dataset.defaultValue = value;
    }
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
      countIn.min = 1; countIn.max = _platform === 'java' ? 99 : 255; countIn.value = '1';
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
        ['minecraft:follow_range','Follow Range'],
        ['minecraft:knockback_resistance','Knockback Resistance'],
        ['minecraft:movement_speed','Movement Speed'],
        ['minecraft:flying_speed','Flying Speed'],
        ['minecraft:attack_damage','Attack Damage'],
        ['minecraft:attack_knockback','Attack Knockback'],
        ['minecraft:attack_speed','Attack Speed'],
        ['minecraft:armor','Armor'],
        ['minecraft:armor_toughness','Armor Toughness'],
        ['minecraft:luck','Luck'],
        ['minecraft:jump_strength','Jump Strength'],
        ['minecraft:spawn_reinforcements','Spawn Reinforcements'],
        ['minecraft:block_break_speed','Block Break Speed'],
        ['minecraft:submerged_mining_speed','Submerged Mining Speed'],
        ['minecraft:safe_fall_distance','Safe Fall Distance'],
        ['minecraft:fall_damage_multiplier','Fall Damage Multiplier'],
        ['minecraft:burning_time','Burning Time'],
        ['minecraft:explosion_knockback_resistance','Explosion Knockback Resistance'],
        ['minecraft:movement_efficiency','Movement Efficiency'],
        ['minecraft:oxygen_bonus','Oxygen Bonus'],
        ['minecraft:water_movement_efficiency','Water Movement Efficiency'],
        ['minecraft:tempt_range','Tempt Range'],
        ['minecraft:scale','Scale'],
        ['minecraft:step_height','Step Height'],
        ['minecraft:gravity','Gravity'],
        ['minecraft:block_interaction_range','Block Interaction Range'],
        ['minecraft:entity_interaction_range','Entity Interaction Range'],
        ['minecraft:mining_efficiency','Mining Efficiency']
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
          ['mainhand','mainhand'],['offhand','offhand'],
          ['head','head'],['chest','chest'],['legs','legs'],['feet','feet'],['body','body']
        ], 'mainhand');
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
      const trimmed = customName.trim();

      if (trimmed.startsWith('{') || trimmed.startsWith('[')) {
        comps.push(`custom_name='${trimmed}'`);
        } else {
        const escaped = trimmed
          .replace(/\\/g,'\\\\')
          .replace(/"/g,'\\"')
          .replace(/'/g,"\\'");

        comps.push(`custom_name={"text":"${escaped}"}`);
        }
      }
        if (loreLines.length) {
          const loreStr = loreLines.map(l => {
            const le = l.replace(/\\/g,'\\\\').replace(/"/g,'\\"').replace(/'/g,"\\'");
            return `{"text":"${le}"}`;
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
          comps.push(`minecraft:enchantments={${entries}}`);
        }
        if (storedEnchs.length) {
          const entries = storedEnchs.map(r => `"${r.enchSel.value}":${parseInt(r.lvlIn.value)||1}`).join(',');
          comps.push(`minecraft:stored_enchantments={${entries}}`);
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

              return `{id:"custom:${shortName}_${i}",type:"${r.attrSel.value}",amount:${safeAmount},operation:"${r.opSel.value}",slot:"${safeSlot}"}`; }).join(',');

            comps.push(`minecraft:attribute_modifiers=[${aStr}]`);
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

        if (rawNbt) {
          const cleaned = rawNbt
            .replace(/^\[/, '')
            .replace(/\]$/, '')
            .replace(/^\{/, '')
            .replace(/\}$/, '')
            .trim();

          if (cleaned) comps.push(cleaned);
        }

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
        const tildeChk = el('input');
        tildeChk.type = 'checkbox';
        tildeChk.className = 'tool-checkbox';
        tildeChk.checked = true;

        const coordIn = inp('number', 'tool-input short', '0');
        coordIn.step = '0.5';

        const wrap = el('div','field-row');
        const lbl  = el('div','field-label', axis);

        const tl = el('span');
        tl.textContent = '~';
        tl.style.cssText = 'font-family:var(--mono);font-size:.75rem;color:var(--text-dim);';

        wrap.appendChild(lbl);
        wrap.appendChild(tildeChk);
        wrap.appendChild(tl);
        wrap.appendChild(coordIn);

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
    let passengerBody = null;

    const passengerSection = fieldSection('Passengers', bd => {
      passengerBody = bd;
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
      let posStr = '~ ~ ~';
      const posRows = [];
      coreSection.querySelectorAll('.field-row').forEach((r,i) => {
        if (i > 0 && i < 4) posRows.push(r);
      });
      if (posRows.length === 3) {
        posStr = posRows.map(r => {
          const chk = r.querySelector('.tool-checkbox');
          const num = r.querySelector('input[type="number"]');
          if (chk && chk.checked) {
            const v = num ? num.value.trim() : '';
            return v ? `~${v}` : '~';
          }
        return num ? (num.value.trim() || '0') : '0';
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
          const safe = JSON.stringify({ text: cnVal }); cnFormatted = `'${safe.replace(/'/g, "\\'")}'`;
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
        const attributes = [];

        attributes.push(
          `{Name:"minecraft:generic.max_health",Base:${mhVal}d}`
        );

        if (attributes.length) {
          nbt.Attributes = `[${attributes.join(',')}]`;
      }
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
        const effStr = effectRows
          .filter(r => r.effSel.value)
          .map(r => {
            const id = EFFECT_IDS[r.effSel.value] ?? 1;

            const dur = Math.max(1, parseInt(r.durIn.value, 10) || 200);
            const amp = Math.max(0, Math.min(255, parseInt(r.ampIn.value, 10) || 0));

            return `{Id:${id},Duration:${dur},Amplifier:${amp}b,Ambient:${r.ambChk.checked ? 1 : 0}b,ShowParticles:${r.partChk.checked ? 1 : 0}b}`;
          })
          .join(',');

        if (effStr) {
          nbt.ActiveEffects = `[${effStr}]`;
        }
      }

      // Passengers
      const passengerOutput = collectPassengers(passengerBody);
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
      panel.querySelectorAll('input[type="text"]').forEach(i => {
      i.value = '';
    });

    panel.querySelectorAll('input[type="number"]').forEach(i => {
      i.value = '0';
    });
      panel.querySelectorAll('input[type="checkbox"]').forEach(c => c.checked = false);
      panel.querySelectorAll('textarea').forEach(t => t.value = '');
      panel.querySelectorAll('select').forEach(s => s.selectedIndex = 0);
      effectRows.length = 0;
      effectSection.querySelectorAll('.repeat-row').forEach(r => r.remove());
      passengerBody.innerHTML = '';

      if (_platform === 'bedrock') {
        passengerBody.appendChild(
          el(
            'div',
            'platform-only-note',
            'Bedrock /summon does not support NBT passengers. Use Java mode to build passenger chains.'
          )
        );
      } else {
        renderPassengerBlock(
          passengerBody,
          0,
          () => doSummonRefresh()
        );
      }
      doSummonRefresh();
    }
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
      const subContainer = el('div', 'passenger-subcontainer');
      block.appendChild(subContainer);
      renderPassengerBlock(subContainer, depth + 1, onchange);

      rmBtn.onclick = () => { container.removeChild(block); if (onchange) onchange(); };
      container.insertBefore(block, addBtn);
      if (onchange) onchange();
      if (onchange) { block.addEventListener('input',  onchange); block.addEventListener('change', onchange); }
    };
  }

  function collectPassengers(container) {
    const blocks = container.querySelectorAll(':scope > .passenger-block');
    if (!blocks.length) return '';
    const parts = Array.from(blocks).map(b => {
      const rows = b.querySelectorAll(':scope > .field-row');

      const entityInput = rows[0]
        ? rows[0].querySelector('input[type="text"]')
        : null;

      const nameInput = rows[1]
        ? rows[1].querySelector('input[type="text"]')
        : null;

      const entity = entityInput
        ? entityInput.value.trim()
        : '';

      if (!entity) return null;

      const nameIn = nameInput
        ? nameInput.value.trim()
        : '';
      const noAICB = b.querySelector(
        ':scope > .tool-checkbox-row .tool-checkbox'
      );
      const nbt = {};
      if (nameIn) nbt.CustomName = `'${JSON.stringify({"text":nameIn})}'`;
      if (noAICB && noAICB.checked) nbt.NoAI = '1b';
      // Recurse into sub-passengers
      const subContainer = b.querySelector(':scope > .passenger-subcontainer');
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