import { Region } from '../types/game';

export const regions: Region[] = [
  // Tier 1: Local Wilderness (Levels 1–5)
  {
    id: 'greenwood-forest',
    name: 'Greenwood Forest',
    tier: 1,
    requiredLevel: 1,
    emoji: '🌲',
    explored: false,
    resources: ['Wood', 'Coal', 'Claystone'],
    dungeonUnlocked: false
  },
  {
    id: 'stone-hollow',
    name: 'Stone Hollow',
    tier: 1,
    requiredLevel: 2,
    emoji: '🪨',
    explored: false,
    resources: ['Iron', 'Copper', 'Quartz'],
    dungeonUnlocked: false
  },
  {
    id: 'riverbed-crags',
    name: 'Riverbed Crags',
    tier: 1,
    requiredLevel: 3,
    emoji: '🏔️',
    explored: false,
    resources: ['Claystone', 'Amberstone', 'Saltrock'],
    dungeonUnlocked: false
  },
  {
    id: 'abandoned-camp-mine',
    name: 'Abandoned Camp Mine',
    tier: 1,
    requiredLevel: 4,
    emoji: '⛏️',
    explored: false,
    resources: ['Iron', 'Coal', 'Tin'],
    dungeonUnlocked: false
  },
  {
    id: 'windblown-fields',
    name: 'Windblown Fields',
    tier: 1,
    requiredLevel: 5,
    emoji: '🌾',
    explored: false,
    resources: ['Coal', 'Copper', 'Wood'],
    dungeonUnlocked: false
  },

  // Tier 2: Mountains & Subterranean (Levels 6–10)
  {
    id: 'mossrock-cavern',
    name: 'Mossrock Cavern',
    tier: 2,
    requiredLevel: 6,
    emoji: '🕳️',
    explored: false,
    resources: ['Quartz', 'Saltrock', 'Mushrooms'],
    dungeonUnlocked: false
  },
  {
    id: 'cragspine-ridge',
    name: 'Cragspine Ridge',
    tier: 2,
    requiredLevel: 7,
    emoji: '⛰️',
    explored: false,
    resources: ['Iron', 'Silver', 'Tin'],
    dungeonUnlocked: false
  },
  {
    id: 'deepwell-shaft',
    name: 'Deepwell Shaft',
    tier: 2,
    requiredLevel: 8,
    emoji: '🕳️',
    explored: false,
    resources: ['Coal', 'Nickel', 'Copper'],
    dungeonUnlocked: false
  },
  {
    id: 'sunken-fault',
    name: 'Sunken Fault',
    tier: 2,
    requiredLevel: 9,
    emoji: '🌋',
    explored: false,
    resources: ['Amberstone', 'Obsidian', 'Iron'],
    dungeonUnlocked: false
  },
  {
    id: 'glimmer-tunnels',
    name: 'Glimmer Tunnels',
    tier: 2,
    requiredLevel: 10,
    emoji: '✨',
    explored: false,
    resources: ['Silver', 'Quartz', 'Magnetite'],
    dungeonUnlocked: false
  },

  // Tier 3: Harsh Environments (Levels 11–15)
  {
    id: 'ashcliff-forge',
    name: 'Ashcliff Forge',
    tier: 3,
    requiredLevel: 11,
    emoji: '🌋',
    explored: false,
    resources: ['Obsidian', 'Sulfur', 'Iron'],
    dungeonUnlocked: false
  },
  {
    id: 'scorch-flats',
    name: 'Scorch Flats',
    tier: 3,
    requiredLevel: 12,
    emoji: '🏜️',
    explored: false,
    resources: ['Tin', 'Coal', 'Quartz'],
    dungeonUnlocked: false
  },
  {
    id: 'frozen-barrens',
    name: 'Frozen Barrens',
    tier: 3,
    requiredLevel: 13,
    emoji: '🧊',
    explored: false,
    resources: ['Crysolite', 'Cobalt', 'Frostbud'],
    dungeonUnlocked: false
  },
  {
    id: 'thunder-basin',
    name: 'Thunder Basin',
    tier: 3,
    requiredLevel: 14,
    emoji: '⚡',
    explored: false,
    resources: ['Magnetite', 'Silver', 'Duskwheat'],
    dungeonUnlocked: false
  },
  {
    id: 'bitterroot-cave',
    name: 'Bitterroot Cave',
    tier: 3,
    requiredLevel: 15,
    emoji: '☠️',
    explored: false,
    resources: ['Sulfur', 'Blightbulb', 'Quartz'],
    dungeonUnlocked: false
  }
];