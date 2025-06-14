import { Resource } from '../types/game';

export const resources: Resource[] = [
  // Basic Resources
  { id: 'Wood', name: 'Wood', tier: 1, emoji: '🪵', description: 'Basic building material' },
  { id: 'Coal', name: 'Coal', tier: 1, emoji: '⚫', description: 'Fuel for crafting' },
  { id: 'Claystone', name: 'Claystone', tier: 1, emoji: '🧱', description: 'Clay-rich stone' },
  { id: 'Iron', name: 'Iron', tier: 1, emoji: '⚙️', description: 'Common metal ore' },
  { id: 'Copper', name: 'Copper', tier: 1, emoji: '🟠', description: 'Conductive metal' },
  { id: 'Quartz', name: 'Quartz', tier: 1, emoji: '💎', description: 'Clear crystal' },
  { id: 'Amberstone', name: 'Amberstone', tier: 1, emoji: '🟨', description: 'Fossilized resin' },
  { id: 'Saltrock', name: 'Saltrock', tier: 1, emoji: '🧂', description: 'Mineral salt deposit' },
  { id: 'Tin', name: 'Tin', tier: 1, emoji: '⚪', description: 'Soft metal for alloys' },

  // Intermediate Resources
  { id: 'Silver', name: 'Silver', tier: 2, emoji: '⚡', description: 'Precious conductive metal' },
  { id: 'Nickel', name: 'Nickel', tier: 2, emoji: '🔘', description: 'Corrosion-resistant metal' },
  { id: 'Magnetite', name: 'Magnetite', tier: 2, emoji: '🧲', description: 'Magnetic iron ore' },
  { id: 'Obsidian', name: 'Obsidian', tier: 2, emoji: '⚫', description: 'Volcanic glass' },
  { id: 'Mushrooms', name: 'Mushrooms', tier: 2, emoji: '🍄', description: 'Edible fungi' },
  { id: 'Sulfur', name: 'Sulfur', tier: 3, emoji: '🟡', description: 'Reactive chemical element' },
  { id: 'Crysolite', name: 'Crysolite', tier: 3, emoji: '❄️', description: 'Ice-cold crystal' },
  { id: 'Cobalt', name: 'Cobalt', tier: 3, emoji: '🔵', description: 'Hard magnetic metal' },
  { id: 'Frostbud', name: 'Frostbud', tier: 3, emoji: '🌨️', description: 'Cold-resistant flower' },
  { id: 'Duskwheat', name: 'Duskwheat', tier: 3, emoji: '🌾', description: 'Twilight grain' },
  { id: 'Blightbulb', name: 'Blightbulb', tier: 3, emoji: '☠️', description: 'Toxic plant bulb' },

  // Advanced Resources
  { id: 'Titanium', name: 'Titanium', tier: 4, emoji: '🤖', description: 'Ultra-strong metal' },
  { id: 'Vanta Ore', name: 'Vanta Ore', tier: 4, emoji: '⚫', description: 'Light-absorbing mineral' },
  { id: 'Lazurite', name: 'Lazurite', tier: 4, emoji: '💙', description: 'Deep blue gem' },
  { id: 'Crysberry', name: 'Crysberry', tier: 4, emoji: '💎', description: 'Crystalline fruit' },
  { id: 'Starpetal', name: 'Starpetal', tier: 4, emoji: '⭐', description: 'Stellar flower' },
  { id: 'Gravmelon', name: 'Gravmelon', tier: 4, emoji: '🍈', description: 'Gravity-defying fruit' },

  // Legendary Resources
  { id: 'Aetherium', name: 'Aetherium', tier: 5, emoji: '🌟', description: 'Reality-bending element' },
  { id: 'Nova Core', name: 'Nova Core', tier: 5, emoji: '💥', description: 'Stellar energy core' },
  { id: 'Voidite', name: 'Voidite', tier: 5, emoji: '🕳️', description: 'Void-touched mineral' },
  { id: 'Etherbean', name: 'Etherbean', tier: 5, emoji: '✨', description: 'Ethereal legume' },
  { id: 'Celestara', name: 'Celestara', tier: 6, emoji: '🌌', description: 'Divine fruit' },
  { id: 'Stardrop', name: 'Stardrop', tier: 7, emoji: '🌠', description: 'Condensed starlight' }
];