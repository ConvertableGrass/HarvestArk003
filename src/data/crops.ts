import { Crop } from '../types/game';

export const crops: Crop[] = [
  // 🌱 Starter Tier (Level 1–5) – Basic Earth Crops
  {
    id: 'tomato',
    name: 'Tomato',
    tier: 'Starter',
    requiredLevel: 1,
    growthTime: 5,
    waterRequired: true,
    lightRequired: true,
    yield: { 'Tomato': 3, 'Claim Cores': 1 },
    description: 'Produces tomatoes, used in meals or base recipes'
  },
  {
    id: 'green-bean',
    name: 'Green Bean',
    tier: 'Starter',
    requiredLevel: 2,
    growthTime: 4,
    waterRequired: true,
    lightRequired: true,
    yield: { 'Green Bean': 4, 'Claim Cores': 1 },
    description: 'Yields green beans, good for early quests'
  },
  {
    id: 'carrot',
    name: 'Carrot',
    tier: 'Starter',
    requiredLevel: 3,
    growthTime: 6,
    waterRequired: true,
    lightRequired: false,
    yield: { 'Carrot': 2, 'Claim Cores': 2 },
    description: 'Root crop, light food value'
  },
  {
    id: 'turnip',
    name: 'Turnip',
    tier: 'Starter',
    requiredLevel: 4,
    growthTime: 7,
    waterRequired: true,
    lightRequired: false,
    yield: { 'Turnip': 3, 'Claim Cores': 2 },
    description: 'Used in basic stews or crafting dyes'
  },
  {
    id: 'lettuce',
    name: 'Lettuce',
    tier: 'Starter',
    requiredLevel: 5,
    growthTime: 3,
    waterRequired: true,
    lightRequired: true,
    yield: { 'Lettuce': 5, 'Claim Cores': 1 },
    description: 'Quick-growing leafy crop for salad kits'
  },

  // 🥬 Apprentice Tier (Level 6–10) – Expanded Earth Flora
  {
    id: 'corn',
    name: 'Corn',
    tier: 'Apprentice',
    requiredLevel: 6,
    growthTime: 8,
    waterRequired: true,
    lightRequired: true,
    yield: { 'Corn': 6, 'Claim Cores': 3 },
    description: 'Multi-yield crop, used in flour and animal feed'
  },
  {
    id: 'strawberry',
    name: 'Strawberry',
    tier: 'Apprentice',
    requiredLevel: 7,
    growthTime: 10,
    waterRequired: true,
    lightRequired: true,
    yield: { 'Strawberry': 4, 'Claim Cores': 4 },
    description: 'Sweet fruit, early juice base'
  },
  {
    id: 'onion',
    name: 'Onion',
    tier: 'Apprentice',
    requiredLevel: 8,
    growthTime: 9,
    waterRequired: true,
    lightRequired: false,
    yield: { 'Onion': 3, 'Claim Cores': 3 },
    description: 'Used for flavoring or tear gas crafting'
  },
  {
    id: 'bell-pepper',
    name: 'Bell Pepper',
    tier: 'Apprentice',
    requiredLevel: 9,
    growthTime: 12,
    waterRequired: true,
    lightRequired: true,
    yield: { 'Bell Pepper': 2, 'Claim Cores': 5 },
    description: 'Multiple colors; trade value'
  },
  {
    id: 'potato',
    name: 'Potato',
    tier: 'Apprentice',
    requiredLevel: 10,
    growthTime: 11,
    waterRequired: true,
    lightRequired: false,
    yield: { 'Potato': 4, 'Claim Cores': 4 },
    description: 'High starch yield, used in meals or bio-batteries'
  },

  // 🍄 Intermediate Tier (Level 11–15) – Hardier Plants & Rare Herbs
  {
    id: 'garlic',
    name: 'Garlic',
    tier: 'Intermediate',
    requiredLevel: 11,
    growthTime: 15,
    waterRequired: true,
    lightRequired: false,
    yield: { 'Garlic': 2, 'Claim Cores': 8 },
    description: 'Repels pests, used in alchemy'
  },
  {
    id: 'mushroom',
    name: 'Mushroom',
    tier: 'Intermediate',
    requiredLevel: 12,
    growthTime: 20,
    waterRequired: false,
    lightRequired: false,
    yield: { 'Mushroom': 3, 'Spores': 1, 'Claim Cores': 7 },
    description: 'Grows various fungi, requires shade plots'
  },
  {
    id: 'blueberry',
    name: 'Blueberry',
    tier: 'Intermediate',
    requiredLevel: 13,
    growthTime: 18,
    waterRequired: true,
    lightRequired: true,
    yield: { 'Blueberry': 5, 'Claim Cores': 6 },
    description: 'Used for jam and trade goods'
  },
  {
    id: 'lavender',
    name: 'Lavender',
    tier: 'Intermediate',
    requiredLevel: 14,
    growthTime: 25,
    waterRequired: true,
    lightRequired: true,
    yield: { 'Lavender': 3, 'Claim Cores': 12 },
    description: 'Sells well; used in perfume and calming tonics'
  },
  {
    id: 'sunroot',
    name: 'Sunroot',
    tier: 'Intermediate',
    requiredLevel: 15,
    growthTime: 30,
    waterRequired: true,
    lightRequired: true,
    yield: { 'Sunroot': 1, 'Claim Cores': 20 },
    description: 'Rare earth root, glows faintly in moonlight'
  },

  // 🚀 Explorer Tier (Level 16–20) – First Interstellar Plants
  {
    id: 'vetra-vine',
    name: 'Vetra Vine',
    tier: 'Explorer',
    requiredLevel: 16,
    growthTime: 35,
    waterRequired: true,
    lightRequired: true,
    yield: { 'Biofiber': 4, 'Claim Cores': 25 },
    description: 'Flexible vine that yields biofiber'
  },
  {
    id: 'glowleaf',
    name: 'Glowleaf',
    tier: 'Explorer',
    requiredLevel: 17,
    growthTime: 40,
    waterRequired: true,
    lightRequired: false,
    yield: { 'Bioluminescent Leaf': 2, 'Claim Cores': 30 },
    description: 'Emits light when fully grown; used in biotech'
  },
  {
    id: 'crysberry',
    name: 'Crysberry',
    tier: 'Explorer',
    requiredLevel: 18,
    growthTime: 45,
    waterRequired: true,
    lightRequired: true,
    yield: { 'Crystalline Sugar': 3, 'Claim Cores': 35 },
    description: 'Hard-shelled fruit, yields crystalline sugar'
  },
  {
    id: 'zenthorn',
    name: 'Zenthorn',
    tier: 'Explorer',
    requiredLevel: 19,
    growthTime: 50,
    waterRequired: false,
    lightRequired: true,
    yield: { 'Adhesive Sap': 2, 'Claim Cores': 40 },
    description: 'Spiky cactus analog, sap used in adhesives'
  },
  {
    id: 'duskwheat',
    name: 'Duskwheat',
    tier: 'Explorer',
    requiredLevel: 20,
    growthTime: 55,
    waterRequired: true,
    lightRequired: false,
    yield: { 'Space Grain': 5, 'Claim Cores': 45 },
    description: 'Grows in low-light, used for space bread'
  },

  // 🪐 Terraformer Tier (Level 21–25) – Exotic Atmosphere Survivors
  {
    id: 'thornbloom',
    name: 'Thornbloom',
    tier: 'Terraformer',
    requiredLevel: 21,
    growthTime: 60,
    waterRequired: true,
    lightRequired: true,
    yield: { 'Acid Nectar': 2, 'Claim Cores': 50 },
    description: 'Bloom yields acid nectar'
  },
  {
    id: 'skyleaf',
    name: 'Skyleaf',
    tier: 'Terraformer',
    requiredLevel: 22,
    growthTime: 65,
    waterRequired: true,
    lightRequired: true,
    yield: { 'Oxygen Leaf': 4, 'Claim Cores': 55 },
    description: 'Produces high-oxygen leaves, essential for terraforming'
  },
  {
    id: 'frostbud',
    name: 'Frostbud',
    tier: 'Terraformer',
    requiredLevel: 23,
    growthTime: 70,
    waterRequired: true,
    lightRequired: false,
    yield: { 'Cryo Extract': 3, 'Claim Cores': 60 },
    description: 'Cold-weather flower, used in cryo-potions'
  },
  {
    id: 'quillfruit',
    name: 'Quillfruit',
    tier: 'Terraformer',
    requiredLevel: 24,
    growthTime: 75,
    waterRequired: true,
    lightRequired: true,
    yield: { 'Armor Spikes': 2, 'Claim Cores': 65 },
    description: 'Produces edible spiked fruit, used in armor crafting'
  },
  {
    id: 'stormpepper',
    name: 'Stormpepper',
    tier: 'Terraformer',
    requiredLevel: 25,
    growthTime: 80,
    waterRequired: true,
    lightRequired: true,
    yield: { 'Electric Spice': 3, 'Claim Cores': 70 },
    description: 'Spicy fruit that sparks when bitten'
  },

  // 🌌 Deep Space Tier (Level 26–30) – Rare Alien Crops
  {
    id: 'nebulon',
    name: 'Nebulon',
    tier: 'Deep Space',
    requiredLevel: 26,
    growthTime: 90,
    waterRequired: false,
    lightRequired: false,
    yield: { 'Ethereal Essence': 2, 'Claim Cores': 80 },
    description: 'Ethereal plant used in high-tier trade and elixirs'
  },
  {
    id: 'zephyr-bean',
    name: 'Zephyr Bean',
    tier: 'Deep Space',
    requiredLevel: 27,
    growthTime: 95,
    waterRequired: true,
    lightRequired: false,
    yield: { 'Stimulant Bean': 4, 'Claim Cores': 85 },
    description: 'Grows fast in wind tunnels; mild stimulant'
  },
  {
    id: 'gravmelon',
    name: 'Gravmelon',
    tier: 'Deep Space',
    requiredLevel: 28,
    growthTime: 100,
    waterRequired: true,
    lightRequired: true,
    yield: { 'Gravity Core': 1, 'Claim Cores': 90 },
    description: 'Heavy fruit, used in gravity tech experiments'
  },
  {
    id: 'ashvine',
    name: 'Ashvine',
    tier: 'Deep Space',
    requiredLevel: 29,
    growthTime: 105,
    waterRequired: false,
    lightRequired: true,
    yield: { 'Thermal Fiber': 3, 'Claim Cores': 95 },
    description: 'Survives volcanic soil; used in thermal insulation'
  },
  {
    id: 'whispergrass',
    name: 'Whispergrass',
    tier: 'Deep Space',
    requiredLevel: 30,
    growthTime: 110,
    waterRequired: true,
    lightRequired: false,
    yield: { 'Resonance Fiber': 2, 'Claim Cores': 100 },
    description: 'Resonates with movement; used in cloaking tech'
  },

  // 🧬 Mutation Tier (Level 31–35) – Genetically Modified or Adaptive Seeds
  {
    id: 'silkcorn',
    name: 'Silkcorn',
    tier: 'Mutation',
    requiredLevel: 31,
    growthTime: 120,
    waterRequired: true,
    lightRequired: true,
    yield: { 'Silk Fiber': 4, 'Claim Cores': 110 },
    description: 'Fibrous hybrid for fabric crafting'
  },
  {
    id: 'blightbulb',
    name: 'Blightbulb',
    tier: 'Mutation',
    requiredLevel: 32,
    growthTime: 125,
    waterRequired: false,
    lightRequired: false,
    yield: { 'Toxic Extract': 2, 'Claim Cores': 120 },
    description: 'Used in poison crafting and dark potions'
  },
  {
    id: 'starpetal',
    name: 'Starpetal',
    tier: 'Mutation',
    requiredLevel: 33,
    growthTime: 130,
    waterRequired: true,
    lightRequired: true,
    yield: { 'Radiant Petal': 3, 'Claim Cores': 130 },
    description: 'Grows a radiant flower; needed in ritual items'
  },
  {
    id: 'driftleaf',
    name: 'Driftleaf',
    tier: 'Mutation',
    requiredLevel: 34,
    growthTime: 135,
    waterRequired: true,
    lightRequired: false,
    yield: { 'Float Membrane': 2, 'Claim Cores': 140 },
    description: 'Flakes off floaty leaves, used in aero gear'
  },
  {
    id: 'nullpod',
    name: 'Nullpod',
    tier: 'Mutation',
    requiredLevel: 35,
    growthTime: 140,
    waterRequired: false,
    lightRequired: false,
    yield: { 'Energy Absorber': 1, 'Claim Cores': 150 },
    description: 'Absorbs ambient energy, fuels low-level tech'
  },

  // 🌠 Celestial Tier (Level 36–40) – Legendary Plants from Rare Planets
  {
    id: 'haloberry',
    name: 'Haloberry',
    tier: 'Celestial',
    requiredLevel: 36,
    growthTime: 150,
    waterRequired: true,
    lightRequired: true,
    yield: { 'Optical Crystal': 2, 'Claim Cores': 160 },
    description: 'High light-refraction fruit, used in optics'
  },
  {
    id: 'cryonettle',
    name: 'Cryonettle',
    tier: 'Celestial',
    requiredLevel: 37,
    growthTime: 155,
    waterRequired: true,
    lightRequired: false,
    yield: { 'Ice Shard': 3, 'Claim Cores': 170 },
    description: 'Ice-shard leaves used in frost-based gear'
  },
  {
    id: 'sporebark',
    name: 'Sporebark',
    tier: 'Celestial',
    requiredLevel: 38,
    growthTime: 160,
    waterRequired: false,
    lightRequired: false,
    yield: { 'Fungal Bark': 2, 'Claim Cores': 180 },
    description: 'Sapling that produces tough, fungal bark'
  },
  {
    id: 'voidmint',
    name: 'Voidmint',
    tier: 'Celestial',
    requiredLevel: 39,
    growthTime: 165,
    waterRequired: true,
    lightRequired: false,
    yield: { 'Void Essence': 1, 'Claim Cores': 190 },
    description: 'Dark-leafed herb, used in high-tier medicine'
  },
  {
    id: 'lunatuber',
    name: 'Lunatuber',
    tier: 'Celestial',
    requiredLevel: 40,
    growthTime: 170,
    waterRequired: true,
    lightRequired: false,
    yield: { 'Lunar Battery': 1, 'Claim Cores': 200 },
    description: 'Glows under moonlight; used in power cells'
  },

  // 🪄 Mythic Tier (Level 41–45) – Almost Magical or Forbidden Crops
  {
    id: 'emberleaf',
    name: 'Emberleaf',
    tier: 'Mythic',
    requiredLevel: 41,
    growthTime: 180,
    waterRequired: false,
    lightRequired: true,
    yield: { 'Eternal Flame': 1, 'Claim Cores': 220 },
    description: 'Always warm; grows in ash fields'
  },
  {
    id: 'eclipsium',
    name: 'Eclipsium Root',
    tier: 'Mythic',
    requiredLevel: 42,
    growthTime: 185,
    waterRequired: true,
    lightRequired: false,
    yield: { 'Shadow Dye': 2, 'Claim Cores': 240 },
    description: 'Yields blackroot used in rare dye and potions'
  },
  {
    id: 'pulsepod',
    name: 'Pulsepod',
    tier: 'Mythic',
    requiredLevel: 43,
    growthTime: 190,
    waterRequired: true,
    lightRequired: true,
    yield: { 'Energy Pulse': 1, 'Claim Cores': 260 },
    description: 'Pulses energy when ripe, key component in reactors'
  },
  {
    id: 'mycorrhizal-bloom',
    name: 'Mycorrhizal Bloom',
    tier: 'Mythic',
    requiredLevel: 44,
    growthTime: 195,
    waterRequired: false,
    lightRequired: false,
    yield: { 'Growth Catalyst': 1, 'Claim Cores': 280 },
    description: 'Root-spread flower; boosts nearby plant growth'
  },
  {
    id: 'shardvine',
    name: 'Shardvine',
    tier: 'Mythic',
    requiredLevel: 45,
    growthTime: 200,
    waterRequired: true,
    lightRequired: true,
    yield: { 'Crystal Thorn': 2, 'Claim Cores': 300 },
    description: 'Crystal thorns, used in high-tier armor crafting'
  },

  // 💫 Ascendant Tier (Level 46–50) – God-tier, Legendary Harvests
  {
    id: 'stardrop',
    name: 'Stardrop',
    tier: 'Ascendant',
    requiredLevel: 46,
    growthTime: 240,
    waterRequired: true,
    lightRequired: true,
    yield: { 'Star Gem': 1, 'Claim Cores': 400 },
    description: 'Fruit yields rare gems'
  },
  {
    id: 'aethergrain',
    name: 'Aethergrain',
    tier: 'Ascendant',
    requiredLevel: 47,
    growthTime: 250,
    waterRequired: false,
    lightRequired: false,
    yield: { 'Legendary Grain': 2, 'Claim Cores': 450 },
    description: 'Needed for legendary rations and brews'
  },
  {
    id: 'nova-thistle',
    name: 'Nova Thistle',
    tier: 'Ascendant',
    requiredLevel: 48,
    growthTime: 260,
    waterRequired: true,
    lightRequired: true,
    yield: { 'Explosive Spore': 1, 'Claim Cores': 500 },
    description: 'Explodes into spores when touched; dangerous'
  },
  {
    id: 'etherbean',
    name: 'Etherbean',
    tier: 'Ascendant',
    requiredLevel: 49,
    growthTime: 270,
    waterRequired: true,
    lightRequired: false,
    yield: { 'Time Essence': 1, 'Claim Cores': 550 },
    description: 'Used for time-slowing tinctures'
  },
  {
    id: 'celestara',
    name: 'Celestara',
    tier: 'Ascendant',
    requiredLevel: 50,
    growthTime: 300,
    waterRequired: true,
    lightRequired: true,
    yield: { 'Divine Fruit': 1, 'Claim Cores': 1000 },
    description: 'Ultimate seed; yields fruit that grants buffs or vision'
  }
];