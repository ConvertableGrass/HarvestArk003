import React, { useState } from 'react';
import { Player, CraftableItem } from '../types/game';
import { craftableItems } from '../data/craftableItems';
import { resources } from '../data/resources';
import { Wrench, Hammer, Zap, Shield, Sword, Package, Clock, CheckCircle, X, Plus } from 'lucide-react';

interface CraftingProps {
  player: Player;
  addToInventory: (itemId: string, amount: number) => void;
  removeFromInventory: (itemId: string, amount: number) => void;
  addExperience: (skill: keyof Player['experience'], amount: number) => void;
  addClaimCores: (amount: number) => void;
}

export const Crafting: React.FC<CraftingProps> = ({
  player,
  addToInventory,
  removeFromInventory,
  addExperience,
  addClaimCores
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'tool' | 'weapon' | 'armor' | 'upgrade' | 'consumable'>('all');
  const [selectedTier, setSelectedTier] = useState<number | 'all'>('all');
  const [crafting, setCrafting] = useState<string>('');

  const categories = [
    { id: 'all', name: 'All Items', icon: Package, color: 'text-gray-400' },
    { id: 'tool', name: 'Tools', icon: Hammer, color: 'text-orange-400' },
    { id: 'weapon', name: 'Weapons', icon: Sword, color: 'text-red-400' },
    { id: 'armor', name: 'Armor', icon: Shield, color: 'text-blue-400' },
    { id: 'upgrade', name: 'Upgrades', icon: Zap, color: 'text-purple-400' },
    { id: 'consumable', name: 'Consumables', icon: Plus, color: 'text-green-400' }
  ] as const;

  // Get all available tiers
  const availableTiers = [...new Set(craftableItems.map(item => item.tier))].sort((a, b) => a - b);

  const filteredItems = craftableItems.filter(item => {
    const categoryMatch = selectedCategory === 'all' || item.category === selectedCategory;
    const tierMatch = selectedTier === 'all' || item.tier === selectedTier;
    const levelMatch = item.requiredLevel <= player.levels.crafting;
    return categoryMatch && tierMatch && levelMatch;
  });

  const canCraftItem = (item: CraftableItem) => {
    return Object.entries(item.materials).every(([materialId, requiredAmount]) => {
      const playerAmount = player.inventory[materialId] || 0;
      return playerAmount >= requiredAmount;
    });
  };

  const craftItem = async (item: CraftableItem) => {
    if (!canCraftItem(item) || crafting) return;

    setCrafting(item.id);

    // Simulate crafting time based on tier
    const craftingTime = item.tier * 1500 + 2000; // 2-12.5 seconds based on tier

    setTimeout(() => {
      // Remove materials from inventory
      Object.entries(item.materials).forEach(([materialId, amount]) => {
        removeFromInventory(materialId, amount);
      });

      // Add crafted item to inventory
      addToInventory(item.name, 1);

      // Give experience and claim cores
      const expGain = item.tier * 20 + 30;
      const coreGain = item.tier * 8 + 15;
      
      addExperience('crafting', expGain);
      addClaimCores(coreGain);

      setCrafting('');
    }, craftingTime);
  };

  const getCategoryIcon = (category: string) => {
    const cat = categories.find(c => c.id === category);
    return cat ? cat.icon : Package;
  };

  const getCategoryColor = (category: string) => {
    const cat = categories.find(c => c.id === category);
    return cat ? cat.color : 'text-gray-400';
  };

  const getTierColor = (tier: number) => {
    const colors = [
      'text-gray-400 border-gray-500',
      'text-green-400 border-green-500',
      'text-blue-400 border-blue-500',
      'text-purple-400 border-purple-500',
      'text-orange-400 border-orange-500',
      'text-red-400 border-red-500',
      'text-yellow-400 border-yellow-500',
      'text-cyan-400 border-cyan-500'
    ];
    return colors[tier - 1] || colors[0];
  };

  const getTierName = (tier: number) => {
    const names = {
      1: 'Basic',
      2: 'Common', 
      3: 'Uncommon',
      4: 'Rare',
      5: 'Epic',
      6: 'Legendary',
      7: 'Mythic'
    };
    return names[tier as keyof typeof names] || `Tier ${tier}`;
  };

  const getResourceInfo = (resourceId: string) => {
    const resource = resources.find(r => r.id === resourceId);
    return resource || { id: resourceId, name: resourceId, emoji: '📦', tier: 0, description: 'Unknown resource' };
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
        <Wrench className="w-6 h-6 text-purple-400" />
        Crafting Workshop
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Filters Sidebar */}
        <div className="bg-gray-900/50 rounded-lg p-6 border border-purple-500/30">
          <h3 className="text-lg font-semibold text-purple-400 mb-4">Filters</h3>
          
          {/* Category Filter */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-300 mb-3">Category</h4>
            <div className="space-y-2">
              {categories.map(category => {
                const Icon = category.icon;
                const itemCount = category.id === 'all' 
                  ? craftableItems.filter(item => item.requiredLevel <= player.levels.crafting).length
                  : craftableItems.filter(item => item.category === category.id && item.requiredLevel <= player.levels.crafting).length;
                
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id as any)}
                    className={`
                      w-full p-3 rounded-lg border transition-all flex items-center gap-3
                      ${selectedCategory === category.id 
                        ? `${category.color.replace('text-', 'border-').replace('400', '500')} bg-opacity-20` 
                        : 'border-gray-600 bg-gray-800/50 hover:border-purple-500/50'
                      }
                    `}
                  >
                    <Icon className={`w-4 h-4 ${selectedCategory === category.id ? category.color : 'text-gray-400'}`} />
                    <div className="flex-1 text-left">
                      <div className={`text-sm font-semibold ${selectedCategory === category.id ? 'text-white' : 'text-gray-300'}`}>
                        {category.name}
                      </div>
                      <div className="text-xs text-gray-400">
                        {itemCount} available
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tier Filter */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-300 mb-3">Tier</h4>
            <div className="space-y-2">
              <button
                onClick={() => setSelectedTier('all')}
                className={`
                  w-full p-2 rounded-lg border transition-all text-left text-sm
                  ${selectedTier === 'all' 
                    ? 'border-purple-500 bg-purple-900/20 text-white' 
                    : 'border-gray-600 bg-gray-800/50 text-gray-300 hover:border-purple-500/50'
                  }
                `}
              >
                All Tiers ({craftableItems.filter(item => item.requiredLevel <= player.levels.crafting).length})
              </button>
              {availableTiers.map(tier => {
                const tierItems = craftableItems.filter(item => item.tier === tier && item.requiredLevel <= player.levels.crafting);
                return (
                  <button
                    key={tier}
                    onClick={() => setSelectedTier(tier)}
                    className={`
                      w-full p-2 rounded-lg border transition-all text-left text-sm
                      ${selectedTier === tier 
                        ? `${getTierColor(tier)} bg-opacity-20 text-white` 
                        : 'border-gray-600 bg-gray-800/50 text-gray-300 hover:border-purple-500/50'
                      }
                    `}
                  >
                    {getTierName(tier)} ({tierItems.length})
                  </button>
                );
              })}
            </div>
          </div>

          {/* Crafting Level Info */}
          <div className="p-4 bg-purple-900/20 rounded-lg border border-purple-500/30">
            <h4 className="text-sm font-semibold text-purple-400 mb-2">Crafting Level</h4>
            <div className="text-2xl font-bold text-white mb-1">Level {player.levels.crafting}</div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className="bg-purple-400 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(player.experience.crafting % 100)}%` }}
              />
            </div>
            <div className="text-xs text-gray-400 mt-1">
              {player.experience.crafting % 100}/100 XP
            </div>
          </div>
        </div>

        {/* Craftable Items */}
        <div className="lg:col-span-3">
          <div className="bg-gray-900/50 rounded-lg p-6 border border-purple-500/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-purple-400">
                {selectedCategory === 'all' ? 'All Craftable Items' : categories.find(c => c.id === selectedCategory)?.name}
                {selectedTier !== 'all' && ` - ${getTierName(selectedTier as number)}`}
              </h3>
              <div className="text-sm text-gray-400">
                {filteredItems.length} items available
              </div>
            </div>

            {/* Crafting Info */}
            <div className="bg-purple-900/20 rounded-lg p-3 mb-4 border border-purple-500/30">
              <p className="text-sm text-purple-300">
                <strong>Crafting System:</strong> Create tools, weapons, armor, and consumables using materials 
                gathered from farming, mining, and dungeon raids. Higher tier items require rare materials and advanced crafting levels.
              </p>
            </div>

            {filteredItems.length === 0 ? (
              <div className="text-center py-8">
                <div className="text-gray-400 mb-2">No craftable items available</div>
                <div className="text-sm text-gray-500">
                  {selectedCategory === 'all' 
                    ? 'Increase your crafting level to unlock more recipes'
                    : `No ${selectedCategory} recipes available at your current level`
                  }
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 max-h-[800px] overflow-y-auto">
                {filteredItems.map(item => {
                  const canCraft = canCraftItem(item);
                  const isCrafting = crafting === item.id;
                  const Icon = getCategoryIcon(item.category);
                  
                  return (
                    <div 
                      key={item.id}
                      className={`
                        p-4 rounded-lg border transition-all cursor-pointer
                        ${isCrafting 
                          ? 'border-purple-500 bg-purple-900/20 animate-pulse' 
                          : canCraft
                            ? 'border-gray-600 bg-gray-800/50 hover:border-purple-500/50'
                            : 'border-gray-700 bg-gray-800/30 opacity-75'
                        }
                      `}
                      onClick={() => canCraft && !isCrafting && craftItem(item)}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <Icon className={`w-5 h-5 ${getCategoryColor(item.category)}`} />
                        <div className="flex-1">
                          <h4 className="font-semibold text-white text-sm">{item.name}</h4>
                          <div className="flex gap-2 mt-1">
                            <span className={`text-xs px-2 py-1 rounded border ${getTierColor(item.tier)}`}>
                              {getTierName(item.tier)}
                            </span>
                            <span className="text-xs bg-gray-600 text-white px-2 py-1 rounded">
                              Lv.{item.requiredLevel}
                            </span>
                          </div>
                        </div>
                        {canCraft && (
                          <CheckCircle className="w-4 h-4 text-green-400" />
                        )}
                        {!canCraft && (
                          <X className="w-4 h-4 text-red-400" />
                        )}
                      </div>

                      <p className="text-xs text-gray-300 mb-3">{item.description}</p>

                      {item.effect && (
                        <div className="mb-3 p-2 bg-blue-900/20 rounded border border-blue-500/30">
                          <span className="text-xs text-blue-400 font-semibold">Effect: </span>
                          <span className="text-xs text-blue-300">{item.effect}</span>
                        </div>
                      )}

                      {/* Materials Required */}
                      <div className="mb-3">
                        <span className="text-xs text-gray-300 font-semibold">Materials:</span>
                        <div className="grid grid-cols-1 gap-1 mt-1">
                          {Object.entries(item.materials).map(([materialId, requiredAmount]) => {
                            const resource = getResourceInfo(materialId);
                            const playerAmount = player.inventory[materialId] || 0;
                            const hasEnough = playerAmount >= requiredAmount;
                            
                            return (
                              <div 
                                key={materialId}
                                className={`
                                  flex items-center gap-2 p-1 rounded text-xs
                                  ${hasEnough ? 'bg-green-900/20' : 'bg-red-900/20'}
                                `}
                              >
                                <span className="text-sm">{resource.emoji}</span>
                                <div className="flex-1">
                                  <span className={hasEnough ? 'text-green-300' : 'text-red-300'}>
                                    {resource.name}: {playerAmount}/{requiredAmount}
                                  </span>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Crafting Time & Rewards */}
                      <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{Math.floor((item.tier * 1500 + 2000) / 1000)}s</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>+{item.tier * 20 + 30} XP</span>
                          <span>+{item.tier * 8 + 15} Cores</span>
                        </div>
                      </div>

                      {/* Action Button */}
                      <div className="text-center">
                        {isCrafting ? (
                          <div className="text-purple-400 font-semibold text-xs">
                            Crafting...
                          </div>
                        ) : canCraft ? (
                          <div className="text-purple-400 font-semibold text-xs">
                            Click to Craft
                          </div>
                        ) : (
                          <div className="text-red-400 font-semibold text-xs">
                            Missing Materials
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