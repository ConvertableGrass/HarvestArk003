import React, { useState } from 'react';
import { Player, Region } from '../types/game';
import { regions } from '../data/regions';
import { resources } from '../data/resources';
import { Pickaxe, Hand, Zap, Bot, Wrench, Shield, Clock, TrendingUp } from 'lucide-react';

interface MiningProps {
  player: Player;
  addToInventory: (itemId: string, amount: number) => void;
  addExperience: (skill: keyof Player['experience'], amount: number) => void;
  addClaimCores: (amount: number) => void;
}

export const Mining: React.FC<MiningProps> = ({
  player,
  addToInventory,
  addExperience,
  addClaimCores
}) => {
  const [mining, setMining] = useState<string>('');
  const [selectedLoadout, setSelectedLoadout] = useState<'basic' | 'advanced' | 'automated'>('basic');

  const unlockedRegions = regions.filter(r => player.unlockedRegions.includes(r.id));

  const miningLoadouts = [
    {
      id: 'basic',
      name: 'Basic Hand Tools',
      icon: <Hand className="w-5 h-5" />,
      description: 'Simple hand tools for basic resource extraction',
      yieldMultiplier: 1,
      speedMultiplier: 1,
      rareChance: 0.05,
      energyCost: 'Low',
      unlockLevel: 1,
      equipment: [
        { name: 'Hand Pick', icon: '⛏️', slot: 'Primary Tool' },
        { name: 'Collection Bag', icon: '🎒', slot: 'Storage' },
        { name: 'Work Gloves', icon: '🧤', slot: 'Protection' }
      ]
    },
    {
      id: 'advanced',
      name: 'Powered Equipment',
      icon: <Pickaxe className="w-5 h-5" />,
      description: 'Mechanized tools with enhanced extraction capabilities',
      yieldMultiplier: 1.8,
      speedMultiplier: 1.5,
      rareChance: 0.15,
      energyCost: 'Medium',
      unlockLevel: 5,
      equipment: [
        { name: 'Plasma Drill', icon: '🔥', slot: 'Primary Tool' },
        { name: 'Ore Scanner', icon: '📡', slot: 'Scanner' },
        { name: 'Reinforced Suit', icon: '🛡️', slot: 'Protection' },
        { name: 'Auto-Sorter', icon: '⚙️', slot: 'Storage' }
      ]
    },
    {
      id: 'automated',
      name: 'Drone Swarm',
      icon: <Bot className="w-5 h-5" />,
      description: 'Autonomous mining drones with AI-assisted resource detection',
      yieldMultiplier: 3.2,
      speedMultiplier: 2.5,
      rareChance: 0.35,
      energyCost: 'High',
      unlockLevel: 10,
      equipment: [
        { name: 'Mining Drones', icon: '🤖', slot: 'Primary Tool' },
        { name: 'AI Controller', icon: '🧠', slot: 'Control Unit' },
        { name: 'Quantum Scanner', icon: '🔬', slot: 'Scanner' },
        { name: 'Teleporter Hub', icon: '🌀', slot: 'Storage' },
        { name: 'Shield Generator', icon: '🛡️', slot: 'Protection' }
      ]
    }
  ];

  const currentLoadout = miningLoadouts.find(l => l.id === selectedLoadout)!;

  const mineRegion = async (regionId: string) => {
    const region = regions.find(r => r.id === regionId);
    if (!region || mining) return;

    setMining(regionId);

    const baseMiningTime = 5000;
    const miningTime = Math.floor(baseMiningTime / currentLoadout.speedMultiplier);

    setTimeout(() => {
      // Only give raw materials that can actually be mined from this region
      const availableResources = region.resources;
      const baseNumResources = Math.floor(Math.random() * 2) + 1;
      const numResources = Math.floor(baseNumResources * currentLoadout.yieldMultiplier);
      
      for (let i = 0; i < numResources; i++) {
        // Always give region-specific raw materials
        const randomResource = availableResources[Math.floor(Math.random() * availableResources.length)];
        const baseAmount = Math.floor(Math.random() * 3) + 1;
        const finalAmount = Math.floor(baseAmount * currentLoadout.yieldMultiplier);
        addToInventory(randomResource, finalAmount);
      }

      // Small chance for bonus raw materials with better equipment
      if (Math.random() < currentLoadout.rareChance) {
        const bonusResource = availableResources[Math.floor(Math.random() * availableResources.length)];
        const bonusAmount = Math.floor(Math.random() * 2) + 1;
        addToInventory(bonusResource, bonusAmount);
      }

      const baseExp = 15;
      const finalExp = Math.floor(baseExp * currentLoadout.yieldMultiplier);
      addExperience('mining', finalExp);
      
      const baseCores = region.tier * 3;
      const finalCores = Math.floor(baseCores * currentLoadout.yieldMultiplier);
      addClaimCores(finalCores);
      
      setMining('');
    }, miningTime);
  };

  const canUseLoadout = (loadout: typeof miningLoadouts[0]) => {
    return player.levels.mining >= loadout.unlockLevel;
  };

  const getLoadoutStatusColor = (loadout: typeof miningLoadouts[0]) => {
    if (!canUseLoadout(loadout)) return 'border-gray-600 bg-gray-800/30 opacity-50';
    if (selectedLoadout === loadout.id) return 'border-orange-500 bg-orange-900/30';
    return 'border-gray-600 bg-gray-800/50 hover:border-orange-500/50';
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
        <Pickaxe className="w-6 h-6 text-orange-400" />
        Mining Operations
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Mining Equipment Loadout */}
        <div className="bg-gray-900/50 rounded-lg p-6 border border-orange-500/30">
          <h3 className="text-lg font-semibold text-orange-400 mb-4 flex items-center gap-2">
            <Wrench className="w-5 h-5" />
            Equipment Loadout
          </h3>
          
          <div className="space-y-4">
            {miningLoadouts.map(loadout => {
              const canUse = canUseLoadout(loadout);
              const isSelected = selectedLoadout === loadout.id;
              
              return (
                <div key={loadout.id} className="space-y-3">
                  <button
                    onClick={() => canUse && setSelectedLoadout(loadout.id as any)}
                    disabled={!canUse}
                    className={`
                      w-full p-4 rounded-lg border transition-all text-left
                      ${getLoadoutStatusColor(loadout)}
                    `}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`${canUse ? 'text-orange-400' : 'text-gray-500'}`}>
                        {loadout.icon}
                      </div>
                      <div className="flex-1">
                        <div className={`font-semibold ${canUse ? 'text-white' : 'text-gray-500'}`}>
                          {loadout.name}
                        </div>
                        <div className="text-xs text-gray-400">
                          {canUse ? `Level ${loadout.unlockLevel}` : `Requires Level ${loadout.unlockLevel}`}
                        </div>
                      </div>
                      {isSelected && canUse && (
                        <div className="text-xs bg-orange-600 text-white px-2 py-1 rounded">
                          ACTIVE
                        </div>
                      )}
                    </div>
                    
                    <p className="text-xs text-gray-300 mb-3">{loadout.description}</p>
                    
                    {canUse && (
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="flex items-center gap-1 text-green-400">
                          <TrendingUp className="w-3 h-3" />
                          <span>{loadout.yieldMultiplier}x Yield</span>
                        </div>
                        <div className="flex items-center gap-1 text-blue-400">
                          <Clock className="w-3 h-3" />
                          <span>{loadout.speedMultiplier}x Speed</span>
                        </div>
                        <div className="flex items-center gap-1 text-purple-400">
                          <Zap className="w-3 h-3" />
                          <span>{(loadout.rareChance * 100).toFixed(0)}% Bonus</span>
                        </div>
                        <div className="flex items-center gap-1 text-yellow-400">
                          <Shield className="w-3 h-3" />
                          <span>{loadout.energyCost} Energy</span>
                        </div>
                      </div>
                    )}
                  </button>

                  {/* Equipment Details for Selected Loadout */}
                  {isSelected && canUse && (
                    <div className="bg-orange-900/20 rounded-lg p-3 border border-orange-500/30">
                      <h4 className="text-sm font-semibold text-orange-300 mb-2">Equipped Gear:</h4>
                      <div className="space-y-1">
                        {loadout.equipment.map((item, index) => (
                          <div key={index} className="flex items-center justify-between text-xs">
                            <div className="flex items-center gap-2">
                              <span>{item.icon}</span>
                              <span className="text-white">{item.name}</span>
                            </div>
                            <span className="text-gray-400">{item.slot}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Available Mining Sites */}
        <div className="lg:col-span-3">
          <div className="bg-gray-900/50 rounded-lg p-6 border border-orange-500/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-orange-400">Available Mining Sites</h3>
              <div className="text-sm bg-orange-900/30 px-3 py-1 rounded-lg border border-orange-500/30">
                <span className="text-orange-300">Active Loadout: </span>
                <span className="text-white font-semibold">{currentLoadout.name}</span>
              </div>
            </div>
            
            {/* Mining Info */}
            <div className="bg-orange-900/20 rounded-lg p-3 mb-4 border border-orange-500/30">
              <p className="text-sm text-orange-300">
                <strong>Mining Operations:</strong> Extract raw materials and ores from explored regions. 
                For rare artifacts and processed goods, challenge the dungeons in these areas.
              </p>
            </div>
            
            {unlockedRegions.length === 0 ? (
              <div className="text-center py-8">
                <div className="text-gray-400 mb-2">No regions unlocked yet</div>
                <div className="text-sm text-gray-500">Explore regions first to unlock mining sites</div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {unlockedRegions.map(region => {
                  const isMining = mining === region.id;
                  
                  return (
                    <div 
                      key={region.id}
                      className={`
                        p-4 rounded-lg border transition-all cursor-pointer
                        ${isMining 
                          ? 'border-orange-500 bg-orange-900/20 animate-pulse' 
                          : 'border-gray-600 bg-gray-800/50 hover:border-orange-500/50'
                        }
                      `}
                      onClick={() => !isMining && mineRegion(region.id)}
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xl">{region.emoji}</span>
                        <div>
                          <h4 className="font-semibold text-white">{region.name}</h4>
                          <span className="text-xs text-gray-400">Tier {region.tier} Mining Site</span>
                        </div>
                      </div>

                      <div className="mb-3">
                        <span className="text-sm text-gray-300">Raw Materials:</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {region.resources.map(resourceName => {
                            const resource = resources.find(r => r.id === resourceName);
                            return (
                              <span 
                                key={resourceName}
                                className="text-xs bg-orange-600/30 text-orange-300 px-2 py-1 rounded flex items-center gap-1"
                              >
                                {resource?.emoji} {resourceName}
                              </span>
                            );
                          })}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 text-xs text-gray-400">
                          <span className="flex items-center gap-1">
                            <TrendingUp className="w-3 h-3" />
                            {currentLoadout.yieldMultiplier}x yield
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {Math.floor(5000 / currentLoadout.speedMultiplier / 1000)}s
                          </span>
                        </div>
                        
                        {isMining ? (
                          <div className="text-xs text-orange-400 font-semibold">
                            Mining...
                          </div>
                        ) : (
                          <div className="text-xs text-orange-400 font-semibold">
                            Click to Mine
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};