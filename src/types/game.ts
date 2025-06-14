export interface Player {
  claimCores: number;
  levels: {
    farming: number;
    exploration: number;
    mining: number;
    combat: number;
    crafting: number;
  };
  experience: {
    farming: number;
    exploration: number;
    mining: number;
    combat: number;
    crafting: number;
  };
  inventory: { [key: string]: number };
  unlockedRegions: string[];
  farmPlots: FarmPlot[];
  ownedUpgrades: string[];
}

export interface FarmPlot {
  id: string;
  crop: string | null;
  plantedAt: number | null;
  wateredAt: number | null;
  litAt: number | null;
  harvestReady: boolean;
}

export interface Crop {
  id: string;
  name: string;
  tier: string;
  requiredLevel: number;
  growthTime: number; // in minutes
  waterRequired: boolean;
  lightRequired: boolean;
  yield: { [resource: string]: number };
  description: string;
}

export interface Region {
  id: string;
  name: string;
  tier: number;
  requiredLevel: number;
  emoji: string;
  explored: boolean;
  resources: string[];
  dungeonUnlocked: boolean;
}

export interface Resource {
  id: string;
  name: string;
  tier: number;
  emoji: string;
  description: string;
}

export interface CraftableItem {
  id: string;
  name: string;
  tier: number;
  requiredLevel: number;
  category: 'tool' | 'weapon' | 'armor' | 'upgrade' | 'consumable';
  materials: { [resource: string]: number };
  description: string;
  effect?: string;
}

export interface StoreItem {
  id: string;
  name: string;
  type: 'seed' | 'upgrade';
  price: number;
  tier: string;
  requiredLevel: number;
  description: string;
  effect?: string;
}