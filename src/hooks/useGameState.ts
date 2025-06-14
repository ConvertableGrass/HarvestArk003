import { useState, useEffect } from 'react';
import { Player, FarmPlot } from '../types/game';

const initialPlayer: Player = {
  claimCores: 100,
  levels: {
    farming: 1,
    exploration: 1,
    mining: 1,
    combat: 1,
    crafting: 1
  },
  experience: {
    farming: 0,
    exploration: 0,
    mining: 0,
    combat: 0,
    crafting: 0
  },
  inventory: {
    'Wood': 10,
    'Coal': 5,
    'Iron': 3,
    'Tomato': 0,
    'Green Bean': 0,
    'Carrot': 0
  },
  unlockedRegions: [],
  farmPlots: Array.from({ length: 9 }, (_, i) => ({
    id: `plot-${i}`,
    crop: null,
    plantedAt: null,
    wateredAt: null,
    litAt: null,
    harvestReady: false
  })),
  ownedUpgrades: []
};

export const useGameState = () => {
  const [player, setPlayer] = useState<Player>(() => {
    const saved = localStorage.getItem('harvest-ark-save');
    return saved ? JSON.parse(saved) : initialPlayer;
  });

  useEffect(() => {
    localStorage.setItem('harvest-ark-save', JSON.stringify(player));
  }, [player]);

  const updatePlayer = (updates: Partial<Player>) => {
    setPlayer(prev => ({ ...prev, ...updates }));
  };

  const addToInventory = (itemId: string, amount: number) => {
    setPlayer(prev => ({
      ...prev,
      inventory: {
        ...prev.inventory,
        [itemId]: (prev.inventory[itemId] || 0) + amount
      }
    }));
  };

  const removeFromInventory = (itemId: string, amount: number) => {
    setPlayer(prev => ({
      ...prev,
      inventory: {
        ...prev.inventory,
        [itemId]: Math.max(0, (prev.inventory[itemId] || 0) - amount)
      }
    }));
  };

  const addClaimCores = (amount: number) => {
    setPlayer(prev => ({ ...prev, claimCores: prev.claimCores + amount }));
  };

  const spendClaimCores = (amount: number) => {
    setPlayer(prev => ({ 
      ...prev, 
      claimCores: Math.max(0, prev.claimCores - amount) 
    }));
  };

  const addExperience = (skill: keyof Player['experience'], amount: number) => {
    setPlayer(prev => {
      const newExp = prev.experience[skill] + amount;
      const newLevel = Math.floor(newExp / 100) + 1;
      
      return {
        ...prev,
        experience: { ...prev.experience, [skill]: newExp },
        levels: { ...prev.levels, [skill]: Math.max(prev.levels[skill], newLevel) }
      };
    });
  };

  const updateFarmPlot = (plotId: string, updates: Partial<FarmPlot>) => {
    setPlayer(prev => ({
      ...prev,
      farmPlots: prev.farmPlots.map(plot =>
        plot.id === plotId ? { ...plot, ...updates } : plot
      )
    }));
  };

  const unlockRegion = (regionId: string) => {
    setPlayer(prev => ({
      ...prev,
      unlockedRegions: [...prev.unlockedRegions, regionId]
    }));
  };

  return {
    player,
    updatePlayer,
    addToInventory,
    removeFromInventory,
    addClaimCores,
    spendClaimCores,
    addExperience,
    updateFarmPlot,
    unlockRegion
  };
};