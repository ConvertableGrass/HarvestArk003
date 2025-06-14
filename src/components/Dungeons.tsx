import React, { useState } from 'react';
import { Player, Region } from '../types/game';
import { regions } from '../data/regions';
import { Swords, MapPin, Crown, Skull, Timer, Coins, Zap } from 'lucide-react';

interface DungeonsProps {
  player: Player;
  addToInventory: (itemId: string, amount: number) => void;
  addExperience: (skill: keyof Player['experience'], amount: number) => void;
  addClaimCores: (amount: number) => void;
}

export const Dungeons: React.FC<DungeonsProps> = ({
  player,
  addToInventory,
  addExperience,
  addClaimCores
}) => {
  const [raiding, setRaiding] = useState<string>('');

  // Get all explored regions that have dungeons available
  const availableDungeons = regions.filter(region => 
    player.unlockedRegions.includes(region.id)
  );

  const raidDungeon = async (regionId: string, difficulty: 'normal' | 'hard' | 'nightmare') => {
    const region = regions.find(r => r.id === regionId);
    if (!region || raiding) return;

    setRaiding(`${regionId}-${difficulty}`);

    // Simulate raid time based on difficulty
    const raidTime = difficulty === 'normal' ? 8000 : difficulty === 'hard' ? 12000 : 18000;
    const difficultyMultiplier = difficulty === 'normal' ? 1 : difficulty === 'hard' ? 2 : 3.5;

    setTimeout(() => {
      // Dungeon rewards: rare materials, processed goods, and special items
      const baseRewards = region.tier * 2;
      const finalRewards = Math.floor(baseRewards * difficultyMultiplier);
      
      // Rare and legendary resources (not mineable)
      const rareResources = ['Aetherium', 'Nova Core', 'Voidite', 'Celestara', 'Stardrop'];
      const processedGoods = ['Refined Crystal', 'Enchanted Essence', 'Mystic Powder', 'Ancient Relic'];
      const specialItems = ['Dungeon Key', 'Power Core', 'Magic Scroll', 'Artifact Fragment'];
      
      // Higher chance for rare/special items on harder difficulties
      const rareChance = difficulty === 'normal' ? 0.3 : difficulty === 'hard' ? 0.6 : 0.8;
      const specialChance = difficulty === 'normal' ? 0.1 : difficulty === 'hard' ? 0.25 : 0.5;
      
      for (let i = 0; i < finalRewards; i++) {
        if (Math.random() < specialChance) {
          // Special dungeon-only items
          const specialItem = specialItems[Math.floor(Math.random() * specialItems.length)];
          addToInventory(specialItem, 1);
        } else if (Math.random() < rareChance) {
          // Rare materials that can't be mined
          const rareResource = rareResources[Math.floor(Math.random() * rareResources.length)];
          addToInventory(rareResource, Math.floor(Math.random() * 2) + 1);
        } else {
          // Processed goods
          const processedGood = processedGoods[Math.floor(Math.random() * processedGoods.length)];
          addToInventory(processedGood, Math.floor(Math.random() * 3) + 1);
        }
      }

      // Always give some common materials as bonus loot
      const commonMaterials = region.resources;
      const bonusAmount = Math.floor(Math.random() * 2) + 1;
      const bonusMaterial = commonMaterials[Math.floor(Math.random() * commonMaterials.length)];
      addToInventory(bonusMaterial, bonusAmount);

      // Experience and Claim Cores based on difficulty
      addExperience('combat', difficulty === 'normal' ? 30 : difficulty === 'hard' ? 60 : 120);
      addClaimCores(Math.floor(region.tier * 15 * difficultyMultiplier));
      
      setRaiding('');
    }, raidTime);
  };

  const getDifficultyColor = (difficulty: 'normal' | 'hard' | 'nightmare') => {
    switch (difficulty) {
      case 'normal': return 'text-green-400 border-green-500';
      case 'hard': return 'text-orange-400 border-orange-500';
      case 'nightmare': return 'text-red-400 border-red-500';
    }
  };

  const getDifficultyIcon = (difficulty: 'normal' | 'hard' | 'nightmare') => {
    switch (difficulty) {
      case 'normal': return <Swords className="w-4 h-4" />;
      case 'hard': return <Crown className="w-4 h-4" />;
      case 'nightmare': return <Skull className="w-4 h-4" />;
    }
  };

  const getDifficultyRewards = (region: Region, difficulty: 'normal' | 'hard' | 'nightmare') => {
    const baseRewards = region.tier * 2;
    const multiplier = difficulty === 'normal' ? 1 : difficulty === 'hard' ? 2 : 3.5;
    return Math.floor(baseRewards * multiplier);
  };

  const getDifficultyTime = (difficulty: 'normal' | 'hard' | 'nightmare') => {
    switch (difficulty) {
      case 'normal': return '8s';
      case 'hard': return '12s';
      case 'nightmare': return '18s';
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
        <Swords className="w-6 h-6 text-red-400" />
        Dungeon Raids
      </h2>

      {availableDungeons.length === 0 ? (
        <div className="bg-gray-900/50 rounded-lg p-8 border border-red-500/30 text-center">
          <div className="text-red-400 mb-4">🏰</div>
          <h3 className="text-xl font-semibold text-white mb-2">No Dungeons Available</h3>
          <p className="text-gray-400">Explore regions first to unlock their dungeons.</p>
          <p className="text-sm text-gray-500 mt-2">Visit the Exploration tab to discover new areas!</p>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Dungeon Info */}
          <div className="bg-gray-900/50 rounded-lg p-4 border border-red-500/30">
            <h3 className="text-lg font-semibold text-red-400 mb-2 flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Dungeon Raid System
            </h3>
            <p className="text-gray-300 text-sm mb-3">
              Challenge dangerous dungeons for rare artifacts, processed materials, and legendary resources 
              that cannot be obtained through mining. Each difficulty offers increasingly valuable rewards.
            </p>
            <div className="grid grid-cols-3 gap-4 text-xs">
              <div className="flex items-center gap-2 text-green-400">
                <Swords className="w-3 h-3" />
                <span>Normal: Processed goods, some rare items</span>
              </div>
              <div className="flex items-center gap-2 text-orange-400">
                <Crown className="w-3 h-3" />
                <span>Hard: More rare materials, special artifacts</span>
              </div>
              <div className="flex items-center gap-2 text-red-400">
                <Skull className="w-3 h-3" />
                <span>Nightmare: Legendary items, unique treasures</span>
              </div>
            </div>
          </div>

          {/* Available Dungeons */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {availableDungeons.map(region => (
              <div 
                key={region.id}
                className="bg-gray-900/50 rounded-lg p-6 border border-red-500/30"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{region.emoji}</span>
                  <div>
                    <h4 className="font-semibold text-white">{region.name} Dungeon</h4>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-gray-400">Tier {region.tier}</span>
                      <MapPin className="w-3 h-3 text-blue-400" />
                      <span className="text-blue-400">Explored</span>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="text-sm text-gray-300">Dungeon Rewards: </span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    <span className="text-xs bg-purple-600/30 text-purple-300 px-2 py-1 rounded">
                      Rare Artifacts
                    </span>
                    <span className="text-xs bg-blue-600/30 text-blue-300 px-2 py-1 rounded">
                      Processed Goods
                    </span>
                    <span className="text-xs bg-yellow-600/30 text-yellow-300 px-2 py-1 rounded">
                      Legendary Materials
                    </span>
                    <span className="text-xs bg-red-600/30 text-red-300 px-2 py-1 rounded">
                      Special Items
                    </span>
                  </div>
                </div>

                {/* Difficulty Options */}
                <div className="space-y-2">
                  {(['normal', 'hard', 'nightmare'] as const).map(difficulty => {
                    const isRaiding = raiding === `${region.id}-${difficulty}`;
                    const rewards = getDifficultyRewards(region, difficulty);
                    const time = getDifficultyTime(difficulty);
                    
                    return (
                      <button
                        key={difficulty}
                        onClick={() => !raiding && raidDungeon(region.id, difficulty)}
                        disabled={raiding !== ''}
                        className={`
                          w-full p-3 rounded-lg border transition-all text-left
                          ${isRaiding 
                            ? `${getDifficultyColor(difficulty)} bg-opacity-20 animate-pulse` 
                            : raiding
                              ? 'border-gray-600 bg-gray-800/30 opacity-50 cursor-not-allowed'
                              : `border-gray-600 bg-gray-800/50 hover:${getDifficultyColor(difficulty).replace('text-', 'border-').replace('border-', 'border-')} hover:bg-opacity-10`
                          }
                        `}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className={getDifficultyColor(difficulty)}>
                              {getDifficultyIcon(difficulty)}
                            </div>
                            <div>
                              <div className={`font-semibold capitalize ${getDifficultyColor(difficulty)}`}>
                                {difficulty}
                              </div>
                              <div className="text-xs text-gray-400 flex items-center gap-3">
                                <span className="flex items-center gap-1">
                                  <Timer className="w-3 h-3" />
                                  {time}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Coins className="w-3 h-3" />
                                  ~{rewards} treasures
                                </span>
                              </div>
                            </div>
                          </div>
                          
                          {isRaiding ? (
                            <div className="text-xs text-red-400 font-semibold">
                              Raiding...
                            </div>
                          ) : raiding ? (
                            <div className="text-xs text-gray-500">
                              Busy
                            </div>
                          ) : (
                            <div className="text-xs text-gray-400">
                              Click to Raid
                            </div>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};