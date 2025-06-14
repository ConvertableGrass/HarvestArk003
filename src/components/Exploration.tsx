import React, { useState } from 'react';
import { Player, Region } from '../types/game';
import { regions } from '../data/regions';
import { Compass, MapPin, Lock, CheckCircle, Swords } from 'lucide-react';

interface ExplorationProps {
  player: Player;
  unlockRegion: (regionId: string) => void;
  addExperience: (skill: keyof Player['experience'], amount: number) => void;
  addClaimCores: (amount: number) => void;
}

export const Exploration: React.FC<ExplorationProps> = ({
  player,
  unlockRegion,
  addExperience,
  addClaimCores
}) => {
  const [exploring, setExploring] = useState<string>('');

  const exploreRegion = async (regionId: string) => {
    const region = regions.find(r => r.id === regionId);
    if (!region || exploring || region.requiredLevel > player.levels.exploration) return;

    setExploring(regionId);
    
    // Simulate exploration time
    setTimeout(() => {
      unlockRegion(regionId);
      addExperience('exploration', 50);
      addClaimCores(region.tier * 10);
      setExploring('');
    }, 3000);
  };

  const groupedRegions = regions.reduce((acc, region) => {
    if (!acc[region.tier]) acc[region.tier] = [];
    acc[region.tier].push(region);
    return acc;
  }, {} as Record<number, Region[]>);

  const getTierName = (tier: number) => {
    const names = {
      1: '🏕️ Local Wilderness',
      2: '⛰️ Mountains & Subterranean',
      3: '🔥 Harsh Environments',
      4: '🪐 Off-World Biomes',
      5: '🌌 Deep Space Environs',
      6: '🧬 Forbidden Realms',
      7: '✨ Endgame Zones'
    };
    return names[tier as keyof typeof names] || `Tier ${tier}`;
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
        <Compass className="w-6 h-6 text-blue-400" />
        Exploration
      </h2>

      <div className="space-y-6">
        {Object.entries(groupedRegions).map(([tier, tierRegions]) => (
          <div key={tier} className="bg-gray-900/50 rounded-lg p-6 border border-blue-500/30">
            <h3 className="text-lg font-semibold text-blue-400 mb-4">
              {getTierName(parseInt(tier))}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {tierRegions.map(region => {
                const isUnlocked = player.unlockedRegions.includes(region.id);
                const canExplore = region.requiredLevel <= player.levels.exploration;
                const isExploring = exploring === region.id;
                
                return (
                  <div 
                    key={region.id}
                    className={`
                      p-4 rounded-lg border transition-all cursor-pointer
                      ${isUnlocked 
                        ? 'border-green-500 bg-green-900/20' 
                        : canExplore 
                          ? 'border-blue-500 bg-blue-900/20 hover:bg-blue-900/30' 
                          : 'border-gray-600 bg-gray-800/30 cursor-not-allowed'
                      }
                      ${isExploring ? 'animate-pulse' : ''}
                    `}
                    onClick={() => !isUnlocked && canExplore && !isExploring && exploreRegion(region.id)}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{region.emoji}</span>
                        <div>
                          <h4 className="font-semibold text-white">{region.name}</h4>
                          <span className="text-xs text-gray-400">Level {region.requiredLevel}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-1">
                        {isUnlocked && <CheckCircle className="w-5 h-5 text-green-400" />}
                        {!canExplore && <Lock className="w-5 h-5 text-gray-500" />}
                        {isUnlocked && (
                          <Swords className="w-4 h-4 text-red-400 ml-1" title="Dungeon Available" />
                        )}
                      </div>
                    </div>

                    <div className="mb-3">
                      <span className="text-sm text-gray-300">Resources: </span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {region.resources.map(resource => (
                          <span 
                            key={resource}
                            className="text-xs bg-purple-600/30 text-purple-300 px-2 py-1 rounded"
                          >
                            {resource}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-xs text-gray-400">
                        Tier {region.tier}
                      </div>
                      
                      {isExploring && (
                        <div className="text-xs text-blue-400 font-semibold">
                          Exploring...
                        </div>
                      )}
                      
                      {!isUnlocked && canExplore && !isExploring && (
                        <div className="text-xs text-blue-400 font-semibold">
                          Click to Explore
                        </div>
                      )}
                      
                      {isUnlocked && (
                        <div className="text-xs text-green-400 font-semibold">
                          Explored
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};