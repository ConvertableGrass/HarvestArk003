import { CraftableItem } from '../types/game';

export const craftableItems: CraftableItem[] = [
  // 🛠️ Tier 1: Basic Tools & Consumables (Level 1–5)
  {
    id: 'wooden-hoe',
    name: 'Wooden Hoe',
    tier: 1,
    requiredLevel: 1,
    category: 'tool',
    materials: { 'Wood': 3 },
    description: 'Basic farming tool for tilling soil',
    effect: 'Increases farming efficiency by 10%'
  },
  {
    id: 'stone-axe',
    name: 'Stone Axe',
    tier: 1,
    requiredLevel: 1,
    category: 'tool',
    materials: { 'Wood': 2, 'Claystone': 3 },
    description: 'Used for harvesting trees efficiently',
    effect: 'Faster tree harvesting'
  },
  {
    id: 'rusty-pickaxe',
    name: 'Rusty Pickaxe',
    tier: 1,
    requiredLevel: 2,
    category: 'tool',
    materials: { 'Wood': 2, 'Iron': 3 },
    description: 'First mining tool for basic ores',
    effect: 'Allows basic mining operations'
  },
  {
    id: 'simple-bandage',
    name: 'Simple Bandage',
    tier: 1,
    requiredLevel: 2,
    category: 'consumable',
    materials: { 'Lettuce': 2, 'Lavender': 1 },
    description: 'Basic healing item',
    effect: 'Restores 25 Health'
  },
  {
    id: 'crude-torch',
    name: 'Crude Torch',
    tier: 1,
    requiredLevel: 1,
    category: 'tool',
    materials: { 'Wood': 1, 'Coal': 1 },
    description: 'Provides light in dark areas',
    effect: 'Illuminates surroundings'
  },
  {
    id: 'campfire',
    name: 'Campfire',
    tier: 1,
    requiredLevel: 3,
    category: 'upgrade',
    materials: { 'Wood': 4, 'Claystone': 2 },
    description: 'Used to cook raw food',
    effect: 'Enables food cooking'
  },
  {
    id: 'cooked-beans',
    name: 'Cooked Beans',
    tier: 1,
    requiredLevel: 3,
    category: 'consumable',
    materials: { 'Green Bean': 3, 'Saltrock': 1 },
    description: 'Nutritious cooked meal',
    effect: 'Restores 40 Health and Energy'
  },
  {
    id: 'tomato-stew',
    name: 'Tomato Stew',
    tier: 1,
    requiredLevel: 4,
    category: 'consumable',
    materials: { 'Tomato': 2, 'Onion': 1, 'Claystone': 1 },
    description: 'Hearty vegetable stew',
    effect: 'Restores 60 Health, +10% farming speed for 1 hour'
  },
  {
    id: 'wooden-crate',
    name: 'Wooden Crate',
    tier: 1,
    requiredLevel: 2,
    category: 'upgrade',
    materials: { 'Wood': 5 },
    description: 'Storage item for organizing resources',
    effect: '+5 inventory slots'
  },
  {
    id: 'basic-fertilizer',
    name: 'Basic Fertilizer',
    tier: 1,
    requiredLevel: 5,
    category: 'consumable',
    materials: { 'Mushroom': 2, 'Saltrock': 1 },
    description: 'Improves crop growth',
    effect: 'Reduces crop growth time by 20%'
  },

  // 🧰 Tier 2: Early Gear & Upgrades (Level 6–10)
  {
    id: 'copper-scythe',
    name: 'Copper Scythe',
    tier: 2,
    requiredLevel: 6,
    category: 'tool',
    materials: { 'Copper': 4, 'Wood': 2 },
    description: 'Better harvesting speed for crops',
    effect: 'Increases harvest speed by 25%'
  },
  {
    id: 'iron-hammer',
    name: 'Iron Hammer',
    tier: 2,
    requiredLevel: 7,
    category: 'tool',
    materials: { 'Iron': 5, 'Wood': 2 },
    description: 'Used for building upgrades',
    effect: 'Enables construction projects'
  },
  {
    id: 'farmers-satchel',
    name: "Farmer's Satchel",
    tier: 2,
    requiredLevel: 6,
    category: 'upgrade',
    materials: { 'Lettuce': 4, 'Wood': 3 },
    description: 'Extra inventory slots for farming',
    effect: '+8 inventory slots'
  },
  {
    id: 'preserved-rations',
    name: 'Preserved Rations',
    tier: 2,
    requiredLevel: 8,
    category: 'consumable',
    materials: { 'Carrot': 3, 'Saltrock': 2, 'Claystone': 1 },
    description: 'Long-lasting food supply',
    effect: 'Restores 80 Health, lasts longer'
  },
  {
    id: 'simple-juice',
    name: 'Simple Juice',
    tier: 2,
    requiredLevel: 7,
    category: 'consumable',
    materials: { 'Strawberry': 2, 'Blueberry': 2 },
    description: 'Refreshing fruit beverage',
    effect: 'Restores 50 Health, +15% energy regen for 2 hours'
  },
  {
    id: 'bug-repellant-spray',
    name: 'Bug Repellant Spray',
    tier: 2,
    requiredLevel: 8,
    category: 'consumable',
    materials: { 'Garlic': 1, 'Lavender': 2 },
    description: 'Protects crops from pests',
    effect: 'Prevents crop damage for 24 hours'
  },
  {
    id: 'basic-solar-still',
    name: 'Basic Solar Still',
    tier: 2,
    requiredLevel: 9,
    category: 'upgrade',
    materials: { 'Iron': 3, 'Quartz': 4 },
    description: 'Collects clean water automatically',
    effect: 'Generates water over time'
  },
  {
    id: 'leather-gloves',
    name: 'Leather Gloves',
    tier: 2,
    requiredLevel: 6,
    category: 'armor',
    materials: { 'Green Bean': 4, 'Wood': 1 },
    description: 'Basic hand protection',
    effect: '+5 Defense, prevents minor injuries'
  },
  {
    id: 'clay-brick',
    name: 'Clay Brick',
    tier: 2,
    requiredLevel: 7,
    category: 'upgrade',
    materials: { 'Claystone': 3, 'Coal': 1 },
    description: 'Building material for structures',
    effect: 'Used in construction projects'
  },
  {
    id: 'charcoal-block',
    name: 'Charcoal Block',
    tier: 2,
    requiredLevel: 8,
    category: 'upgrade',
    materials: { 'Coal': 4, 'Wood': 2 },
    description: 'Efficient fuel source',
    effect: 'Burns longer than regular coal'
  },

  // 🛡️ Tier 3: Common Armor & Weapons (Level 11–15)
  {
    id: 'bronze-sword',
    name: 'Bronze Sword',
    tier: 3,
    requiredLevel: 11,
    category: 'weapon',
    materials: { 'Tin': 3, 'Copper': 4 },
    description: 'Reliable melee weapon',
    effect: '+25 Combat Power'
  },
  {
    id: 'iron-chestplate',
    name: 'Iron Chestplate',
    tier: 3,
    requiredLevel: 12,
    category: 'armor',
    materials: { 'Iron': 6, 'Lettuce': 3 },
    description: 'Solid body protection',
    effect: '+30 Defense, +20 Health'
  },
  {
    id: 'spiked-trap',
    name: 'Spiked Trap',
    tier: 3,
    requiredLevel: 13,
    category: 'weapon',
    materials: { 'Wood': 3, 'Thornbloom': 2 },
    description: 'Defensive trap for enemies',
    effect: 'Damages enemies that step on it'
  },
  {
    id: 'obsidian-knife',
    name: 'Obsidian Knife',
    tier: 3,
    requiredLevel: 14,
    category: 'weapon',
    materials: { 'Obsidian': 3, 'Lettuce': 2 },
    description: 'Sharp volcanic glass blade',
    effect: '+20 Combat Power, high critical chance'
  },
  {
    id: 'lavender-tonic',
    name: 'Lavender Tonic',
    tier: 3,
    requiredLevel: 11,
    category: 'consumable',
    materials: { 'Lavender': 3, 'Blueberry': 2 },
    description: 'Calms debuffs and restores peace',
    effect: 'Removes negative effects, +100 Health'
  },
  {
    id: 'reinforced-boots',
    name: 'Reinforced Boots',
    tier: 3,
    requiredLevel: 12,
    category: 'armor',
    materials: { 'Lettuce': 4, 'Iron': 3 },
    description: 'Sturdy footwear for rough terrain',
    effect: '+15 Defense, immunity to terrain damage'
  },
  {
    id: 'mushroom-powder',
    name: 'Mushroom Powder',
    tier: 3,
    requiredLevel: 13,
    category: 'consumable',
    materials: { 'Mushroom': 5 },
    description: 'Ground spores used in advanced potions',
    effect: 'Crafting ingredient for higher tier items'
  },
  {
    id: 'smoked-veggies',
    name: 'Smoked Veggies',
    tier: 3,
    requiredLevel: 14,
    category: 'consumable',
    materials: { 'Tomato': 2, 'Onion': 2, 'Saltrock': 1, 'Coal': 1 },
    description: 'Preserved vegetables with rich flavor',
    effect: 'Restores 120 Health, +20% all skills for 3 hours'
  },
  {
    id: 'battery-pack',
    name: 'Battery Pack',
    tier: 3,
    requiredLevel: 15,
    category: 'upgrade',
    materials: { 'Copper': 4, 'Magnetite': 2 },
    description: 'Stores electrical energy',
    effect: 'Powers electrical equipment'
  },
  {
    id: 'water-barrel',
    name: 'Water Barrel',
    tier: 3,
    requiredLevel: 11,
    category: 'upgrade',
    materials: { 'Claystone': 5, 'Wood': 4 },
    description: 'Large water storage container',
    effect: 'Stores water for dry periods'
  },

  // 🔧 Tier 4: Industrial Items & Gear (Level 16–20)
  {
    id: 'cobalt-drill',
    name: 'Cobalt Drill',
    tier: 4,
    requiredLevel: 16,
    category: 'tool',
    materials: { 'Cobalt': 4, 'Iron': 3, 'Magnetite': 2 },
    description: 'High-efficiency mining tool',
    effect: 'Increases mining speed by 50%, mines harder materials'
  },
  {
    id: 'magnetic-generator',
    name: 'Magnetic Generator',
    tier: 4,
    requiredLevel: 17,
    category: 'upgrade',
    materials: { 'Magnetite': 5, 'Copper': 4, 'Iron': 3 },
    description: 'Generates power from magnetic fields',
    effect: 'Provides continuous power to equipment'
  },
  {
    id: 'glass-panel',
    name: 'Glass Panel',
    tier: 4,
    requiredLevel: 16,
    category: 'upgrade',
    materials: { 'Quartz': 6, 'Coal': 2 },
    description: 'Clear panels for windows and tech',
    effect: 'Used in advanced construction'
  },
  {
    id: 'silver-band',
    name: 'Silver Band',
    tier: 4,
    requiredLevel: 18,
    category: 'upgrade',
    materials: { 'Silver': 3 },
    description: 'Jewelry or mystical crafting component',
    effect: 'Enhances magical properties of items'
  },
  {
    id: 'compressed-food-ration',
    name: 'Compressed Food Ration',
    tier: 4,
    requiredLevel: 17,
    category: 'consumable',
    materials: { 'Lettuce': 4, 'Tomato': 3, 'Claystone': 2 },
    description: 'Compact, nutritious meal',
    effect: 'Restores 150 Health, lightweight'
  },
  {
    id: 'metal-shield',
    name: 'Metal Shield',
    tier: 4,
    requiredLevel: 18,
    category: 'armor',
    materials: { 'Nickel': 5, 'Lettuce': 3 },
    description: 'Sturdy defensive equipment',
    effect: '+50 Defense, blocks projectiles'
  },
  {
    id: 'insulated-boots',
    name: 'Insulated Boots',
    tier: 4,
    requiredLevel: 19,
    category: 'armor',
    materials: { 'Frostbud': 3, 'Lettuce': 4 },
    description: 'Protection against extreme temperatures',
    effect: '+25 Defense, immunity to temperature effects'
  },
  {
    id: 'steam-engine-core',
    name: 'Steam Engine Core',
    tier: 4,
    requiredLevel: 19,
    category: 'upgrade',
    materials: { 'Coal': 6, 'Copper': 4, 'Iron': 5 },
    description: 'Mechanical power generation',
    effect: 'Powers heavy machinery'
  },
  {
    id: 'sprinkler-unit',
    name: 'Sprinkler Unit',
    tier: 4,
    requiredLevel: 20,
    category: 'upgrade',
    materials: { 'Iron': 4, 'Magnetite': 3, 'Quartz': 2 },
    description: 'Automated crop watering system',
    effect: 'Automatically waters nearby crops'
  },
  {
    id: 'refined-fuel-cell',
    name: 'Refined Fuel Cell',
    tier: 4,
    requiredLevel: 20,
    category: 'upgrade',
    materials: { 'Sulfur': 3, 'Silver': 2, 'Coal': 4 },
    description: 'Advanced energy storage',
    effect: 'High-capacity power source'
  },

  // 🧪 Tier 5: Tech & Elixirs (Level 21–25)
  {
    id: 'cryo-pack',
    name: 'Cryo Pack',
    tier: 5,
    requiredLevel: 21,
    category: 'consumable',
    materials: { 'Crysolite': 3, 'Frostbud': 2, 'Iron': 3 },
    description: 'Emergency cooling system',
    effect: 'Immunity to heat damage for 1 hour'
  },
  {
    id: 'night-vision-brew',
    name: 'Night Vision Brew',
    tier: 5,
    requiredLevel: 22,
    category: 'consumable',
    materials: { 'Glowleaf': 2, 'Duskwheat': 3 },
    description: 'Enhances vision in darkness',
    effect: 'See clearly in dark areas for 2 hours'
  },
  {
    id: 'advanced-crop-booster',
    name: 'Advanced Crop Booster',
    tier: 5,
    requiredLevel: 23,
    category: 'consumable',
    materials: { 'Whispergrass': 2, 'Mushroom': 4 },
    description: 'Significantly enhances crop growth',
    effect: 'Reduces crop growth time by 50%'
  },
  {
    id: 'solar-sensor-panel',
    name: 'Solar Sensor Panel',
    tier: 5,
    requiredLevel: 22,
    category: 'upgrade',
    materials: { 'Copper': 5, 'Quartz': 4, 'Magnetite': 3 },
    description: 'Advanced solar energy collection',
    effect: 'Generates power from sunlight'
  },
  {
    id: 'sterile-medical-kit',
    name: 'Sterile Medical Kit',
    tier: 5,
    requiredLevel: 24,
    category: 'consumable',
    materials: { 'Lavender': 4, 'Lettuce': 3, 'Silver': 2 },
    description: 'Professional medical supplies',
    effect: 'Restores 200 Health, cures diseases'
  },
  {
    id: 'silver-plated-blade',
    name: 'Silver-Plated Blade',
    tier: 5,
    requiredLevel: 23,
    category: 'weapon',
    materials: { 'Silver': 4, 'Iron': 5 },
    description: 'Elegant and deadly weapon',
    effect: '+60 Combat Power, extra damage vs. supernatural'
  },
  {
    id: 'jetpack-frame',
    name: 'Jetpack Frame',
    tier: 5,
    requiredLevel: 25,
    category: 'upgrade',
    materials: { 'Titanium': 3, 'Gravmelon': 2 },
    description: 'Personal flight device framework',
    effect: 'Enables short-distance flight'
  },
  {
    id: 'hardened-armor-plating',
    name: 'Hardened Armor Plating',
    tier: 5,
    requiredLevel: 24,
    category: 'armor',
    materials: { 'Titanium': 4, 'Zenthorn': 2 },
    description: 'Ultra-tough protective plating',
    effect: '+80 Defense, +40 Health'
  },
  {
    id: 'biofiber-rope',
    name: 'Biofiber Rope',
    tier: 5,
    requiredLevel: 21,
    category: 'tool',
    materials: { 'Vetra Vine': 4, 'Duskwheat': 2 },
    description: 'Strong organic rope',
    effect: 'Enables climbing and construction'
  },
  {
    id: 'stormpepper-hot-sauce',
    name: 'Stormpepper Hot Sauce',
    tier: 5,
    requiredLevel: 25,
    category: 'consumable',
    materials: { 'Stormpepper': 3, 'Saltrock': 2 },
    description: 'Extremely spicy condiment',
    effect: '+50% combat damage for 30 minutes'
  },

  // 🔮 Tier 6: Mystical & High-Tech (Level 26–35)
  {
    id: 'invisibility-cloak-lining',
    name: 'Invisibility Cloak Lining',
    tier: 6,
    requiredLevel: 26,
    category: 'armor',
    materials: { 'Whispergrass': 3, 'Voidmint': 2, 'Silkcorn': 4 },
    description: 'Mystical concealment fabric',
    effect: 'Temporary invisibility ability'
  },
  {
    id: 'anti-gravity-boots',
    name: 'Anti-Gravity Boots',
    tier: 6,
    requiredLevel: 28,
    category: 'armor',
    materials: { 'Aetherium': 2, 'Titanium': 4, 'Driftleaf': 3 },
    description: 'Defies gravitational forces',
    effect: 'Walk on walls and ceilings'
  },
  {
    id: 'warp-beacon',
    name: 'Warp Beacon',
    tier: 6,
    requiredLevel: 30,
    category: 'upgrade',
    materials: { 'Voidite': 3, 'Nova Core': 1, 'Quartz': 5 },
    description: 'Enables instant travel between locations',
    effect: 'Fast travel to discovered areas'
  },
  {
    id: 'pulse-grenade',
    name: 'Pulse Grenade',
    tier: 6,
    requiredLevel: 27,
    category: 'weapon',
    materials: { 'Pulsepod': 2, 'Iron': 3 },
    description: 'Energy-based explosive device',
    effect: '+100 Combat Power, area damage'
  },
  {
    id: 'advanced-drill-arm',
    name: 'Advanced Drill Arm',
    tier: 6,
    requiredLevel: 29,
    category: 'tool',
    materials: { 'Silver': 6, 'Obsidian': 4, 'Magnetite': 5 },
    description: 'Mechanical mining enhancement',
    effect: 'Mines multiple blocks simultaneously'
  },
  {
    id: 'cryonettle-injector',
    name: 'Cryonettle Injector',
    tier: 6,
    requiredLevel: 31,
    category: 'consumable',
    materials: { 'Cryonettle': 2, 'Silver': 3 },
    description: 'Advanced medical injection system',
    effect: 'Instant full health restoration'
  },
  {
    id: 'stealth-field-emitter',
    name: 'Stealth Field Emitter',
    tier: 6,
    requiredLevel: 32,
    category: 'upgrade',
    materials: { 'Vanta Ore': 3, 'Nullpod': 2 },
    description: 'Creates concealment field',
    effect: 'Makes nearby area invisible'
  },
  {
    id: 'radiant-core-pack',
    name: 'Radiant Core Pack',
    tier: 6,
    requiredLevel: 30,
    category: 'upgrade',
    materials: { 'Haloberry': 2, 'Silver': 4, 'Gravmelon': 1 },
    description: 'Luminous energy storage system',
    effect: 'Powers advanced equipment indefinitely'
  },
  {
    id: 'thermal-cloak',
    name: 'Thermal Cloak',
    tier: 6,
    requiredLevel: 33,
    category: 'armor',
    materials: { 'Ashvine': 3, 'Titanium': 3, 'Frostbud': 4 },
    description: 'Regulates body temperature',
    effect: 'Immunity to all temperature extremes'
  },
  {
    id: 'mycorrhizal-enhancer',
    name: 'Mycorrhizal Enhancer',
    tier: 6,
    requiredLevel: 35,
    category: 'upgrade',
    materials: { 'Mycorrhizal Bloom': 1, 'Mushroom': 6 },
    description: 'Boosts nearby plant growth networks',
    effect: 'All nearby crops grow 75% faster'
  },

  // 🧬 Tier 7: Legendary & Endgame (Level 36–50)
  {
    id: 'quantum-blade',
    name: 'Quantum Blade',
    tier: 7,
    requiredLevel: 36,
    category: 'weapon',
    materials: { 'Etherbean': 2, 'Stardrop': 1, 'Nova Core': 1 },
    description: 'Weapon that exists in multiple dimensions',
    effect: '+200 Combat Power, ignores armor'
  },
  {
    id: 'void-reactor',
    name: 'Void Reactor',
    tier: 7,
    requiredLevel: 38,
    category: 'upgrade',
    materials: { 'Voidite': 4, 'Aetherium': 3, 'Silver': 6, 'Quartz': 8 },
    description: 'Harnesses energy from the void',
    effect: 'Unlimited power generation'
  },
  {
    id: 'energy-infused-shield',
    name: 'Energy-Infused Shield',
    tier: 7,
    requiredLevel: 40,
    category: 'armor',
    materials: { 'Shardvine': 3, 'Magnetite': 6, 'Silver': 5 },
    description: 'Shield powered by pure energy',
    effect: '+150 Defense, reflects energy attacks'
  },
  {
    id: 'teleportation-token',
    name: 'Teleportation Token',
    tier: 7,
    requiredLevel: 37,
    category: 'upgrade',
    materials: { 'Lazurite': 2, 'Starpetal': 3, 'Etherbean': 1 },
    description: 'Enables instant teleportation',
    effect: 'Teleport anywhere instantly'
  },
  {
    id: 'time-laced-armor-set',
    name: 'Time-Laced Armor Set',
    tier: 7,
    requiredLevel: 42,
    category: 'armor',
    materials: { 'Aethergrain': 4, 'Vanta Ore': 3, 'Titanium': 6 },
    description: 'Armor that manipulates time flow',
    effect: '+200 Defense, slows time during combat'
  },
  {
    id: 'bio-dome-unit',
    name: 'Bio-Dome Unit',
    tier: 7,
    requiredLevel: 39,
    category: 'upgrade',
    materials: { 'Quartz': 10, 'Obsidian': 6, 'Crysolite': 4, 'Nova Core': 1 },
    description: 'Self-contained ecosystem',
    effect: 'Creates perfect growing environment'
  },
  {
    id: 'lunatuber-lantern',
    name: 'Lunatuber Lantern',
    tier: 7,
    requiredLevel: 41,
    category: 'tool',
    materials: { 'Lunatuber': 2, 'Glowleaf': 4, 'Quartz': 6 },
    description: 'Lantern powered by lunar energy',
    effect: 'Illuminates vast areas, enhances night crops'
  },
  {
    id: 'celestara-relic',
    name: 'Celestara Relic',
    tier: 7,
    requiredLevel: 45,
    category: 'upgrade',
    materials: { 'Celestara': 1, 'Voidite': 3 },
    description: 'Artifact of immense power',
    effect: 'Grants divine abilities'
  },
  {
    id: 'atmos-stabilizer',
    name: 'Atmos Stabilizer',
    tier: 7,
    requiredLevel: 43,
    category: 'upgrade',
    materials: { 'Skyleaf': 4, 'Ashvine': 3, 'Iron': 8 },
    description: 'Controls atmospheric conditions',
    effect: 'Perfect weather for all crops'
  },
  {
    id: 'aether-synthesizer',
    name: 'Aether Synthesizer',
    tier: 7,
    requiredLevel: 44,
    category: 'upgrade',
    materials: { 'Aetherium': 5, 'Nova Core': 2 },
    description: 'Converts energy into food',
    effect: 'Generates food from pure energy'
  },
  {
    id: 'interstellar-grapple',
    name: 'Interstellar Grapple',
    tier: 7,
    requiredLevel: 46,
    category: 'tool',
    materials: { 'Crysberry': 3, 'Titanium': 5, 'Magnetite': 6 },
    description: 'Grappling hook for space exploration',
    effect: 'Traverse between planets'
  },
  {
    id: 'nova-pulse-cannon',
    name: 'Nova Pulse Cannon',
    tier: 7,
    requiredLevel: 47,
    category: 'weapon',
    materials: { 'Stormpepper': 4, 'Nova Core': 2, 'Voidite': 3 },
    description: 'Devastating stellar weapon',
    effect: '+500 Combat Power, destroys multiple enemies'
  },
  {
    id: 'graviton-seed-planter',
    name: 'Graviton Seed Planter',
    tier: 7,
    requiredLevel: 48,
    category: 'tool',
    materials: { 'Driftleaf': 4, 'Whispergrass': 3, 'Iron': 6 },
    description: 'Plants seeds using gravitational manipulation',
    effect: 'Plants entire fields instantly'
  },
  {
    id: 'stardrop-engine-core',
    name: 'Stardrop Engine Core',
    tier: 7,
    requiredLevel: 49,
    category: 'upgrade',
    materials: { 'Stardrop': 2, 'Magnetite': 8, 'Silver': 10 },
    description: 'Engine powered by condensed starlight',
    effect: 'Powers interstellar travel'
  },
  {
    id: 'final-harvest-totem',
    name: 'Final Harvest Totem',
    tier: 7,
    requiredLevel: 50,
    category: 'upgrade',
    materials: { 'Celestara': 1, 'Aetherium': 5, 'Stardrop': 1, 'Nova Core': 2 },
    description: 'Ultimate farming enhancement totem',
    effect: 'Maximizes yield and growth of all nearby crops'
  }
];