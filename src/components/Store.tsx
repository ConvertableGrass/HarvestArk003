import React, { useState } from 'react';
import { Player } from '../types/game';
import { crops } from '../data/crops';
import { resources } from '../data/resources';
import { Sprout, Wrench, ChevronDown, Package, ShoppingCart, Gem, Search } from 'lucide-react';

interface StoreProps {
  player: Player;
  spendClaimCores: (amount: number) => void;
  addToInventory: (itemId: string, amount: number) => void;
}

export const Store: React.FC<StoreProps> = ({ 
  player, 
  spendClaimCores, 
  addToInventory
}) => {
  const [activeView, setActiveView] = useState<'bag' | 'shop' | 'nfts'>('bag');
  const [storeTab, setStoreTab] = useState<'seeds' | 'upgrades'>('seeds');
  const [selectedTier, setSelectedTier] = useState<string>('all');
  const [isTierDropdownOpen, setIsTierDropdownOpen] = useState(false);

  const seedPrices = {
    'Starter': 10,
    'Apprentice': 25,
    'Intermediate': 50,
    'Explorer': 100,
    'Terraformer': 200,
    'Deep Space': 400,
    'Mutation': 800,
    'Celestial': 1600,
    'Mythic': 3200,
    'Ascendant': 6400
  };

  // Show all seeds, but filter by selected tier
  const availableSeeds = crops.filter(crop => {
    const tierCheck = selectedTier === 'all' || crop.tier === selectedTier;
    return tierCheck;
  });

  // Get unique tiers from all crops
  const availableTiers = [...new Set(crops.map(crop => crop.tier))];

  const upgrades = [
    {
      id: 'irrigation-system',
      name: '🚰 Irrigation System',
      description: 'Automatically waters nearby crops every morning',
      price: 500,
      tier: 'Farm',
      requiredLevel: 5
    },
    {
      id: 'expanded-plots',
      name: '📐 Expanded Plot Grid',
      description: 'Unlocks additional rows of farmable land',
      price: 750,
      tier: 'Farm',
      requiredLevel: 8
    },
    {
      id: 'greenhouse',
      name: '🏠 Greenhouse Module',
      description: 'Allows crops to grow out of season and boosts rare seed growth',
      price: 1200,
      tier: 'Farm',
      requiredLevel: 12
    },
    {
      id: 'climbing-gear',
      name: '🧗 Climbing Gear',
      description: 'Enables access to vertical zones and mountain biomes',
      price: 300,
      tier: 'Exploration',
      requiredLevel: 6
    },
    {
      id: 'thermal-suit',
      name: '🔥 Thermal Suit Lining',
      description: 'Reduces damage from heat zones like volcanoes',
      price: 800,
      tier: 'Exploration',
      requiredLevel: 11
    },
    {
      id: 'reinforced-pickaxe',
      name: '⛏️ Reinforced Pickaxe Head',
      description: 'Allows mining of harder materials like Obsidian and Titanium',
      price: 400,
      tier: 'Mining',
      requiredLevel: 8
    }
  ];

  // Mock NFT data
  const nftCollections = [
    {
      id: 'legendary-seeds',
      name: 'Legendary Seed Collection',
      description: 'Ultra-rare seeds with unique properties and enhanced yields',
      items: [
        {
          id: 'genesis-seed',
          name: 'Genesis Seed #001',
          rarity: 'Mythic',
          price: 2.5,
          currency: 'ETH',
          image: '🌟',
          description: 'The first seed ever created in the Harvest Ark universe'
        },
        {
          id: 'quantum-bloom',
          name: 'Quantum Bloom #042',
          rarity: 'Legendary',
          price: 1.2,
          currency: 'ETH',
          image: '⚛️',
          description: 'Exists in multiple dimensions simultaneously'
        }
      ]
    },
    {
      id: 'cosmic-tools',
      name: 'Cosmic Tool Collection',
      description: 'Powerful tools forged from stardust and cosmic energy',
      items: [
        {
          id: 'stellar-pickaxe',
          name: 'Stellar Pickaxe #007',
          rarity: 'Epic',
          price: 0.8,
          currency: 'ETH',
          image: '⭐',
          description: 'Mines through any material with stellar efficiency'
        }
      ]
    }
  ];

  const purchaseSeed = (cropId: string) => {
    const crop = crops.find(c => c.id === cropId);
    if (!crop) return;

    const price = seedPrices[crop.tier as keyof typeof seedPrices];
    if (player.claimCores >= price) {
      spendClaimCores(price);
      addToInventory(`${crop.name} Seed`, 1);
    }
  };

  const purchaseUpgrade = (upgradeId: string) => {
    const upgrade = upgrades.find(u => u.id === upgradeId);
    if (!upgrade || player.ownedUpgrades.includes(upgradeId)) return;

    if (player.claimCores >= upgrade.price) {
      spendClaimCores(upgrade.price);
      // Note: Would need to add upgrade to player state in real implementation
    }
  };

  const getTierIcon = (tier: string) => {
    const icons = {
      'Starter': '🌱',
      'Apprentice': '🥬',
      'Intermediate': '🍄',
      'Explorer': '🚀',
      'Terraformer': '🪐',
      'Deep Space': '🌌',
      'Mutation': '🧬',
      'Celestial': '🌠',
      'Mythic': '🪄',
      'Ascendant': '💫'
    };
    return icons[tier as keyof typeof icons] || '🌱';
  };

  const getTierColor = (tier: string) => {
    const colors = {
      'Starter': 'text-green-400 border-green-500',
      'Apprentice': 'text-blue-400 border-blue-500',
      'Intermediate': 'text-purple-400 border-purple-500',
      'Explorer': 'text-orange-400 border-orange-500',
      'Terraformer': 'text-red-400 border-red-500',
      'Deep Space': 'text-indigo-400 border-indigo-500',
      'Mutation': 'text-pink-400 border-pink-500',
      'Celestial': 'text-cyan-400 border-cyan-500',
      'Mythic': 'text-yellow-400 border-yellow-500',
      'Ascendant': 'text-white border-white'
    };
    return colors[tier as keyof typeof colors] || 'text-gray-400 border-gray-500';
  };

  const getTierDisplayName = (tier: string) => {
    if (tier === 'all') return 'All Tiers';
    return tier;
  };

  const getRarityColor = (rarity: string) => {
    const colors = {
      'Common': 'text-gray-400 border-gray-500',
      'Uncommon': 'text-green-400 border-green-500',
      'Rare': 'text-blue-400 border-blue-500',
      'Epic': 'text-purple-400 border-purple-500',
      'Legendary': 'text-orange-400 border-orange-500',
      'Mythic': 'text-red-400 border-red-500'
    };
    return colors[rarity as keyof typeof colors] || 'text-gray-400 border-gray-500';
  };

  // Inventory logic
  const inventoryItems = Object.entries(player.inventory)
    .filter(([_, amount]) => amount > 0)
    .map(([itemId, amount]) => {
      const resource = resources.find(r => r.id === itemId);
      return {
        id: itemId,
        name: resource?.name || itemId,
        amount,
        emoji: resource?.emoji || '📦',
        tier: resource?.tier || 0,
        description: resource?.description || 'Unknown item'
      };
    })
    .sort((a, b) => b.tier - a.tier || a.name.localeCompare(b.name));

  return (
    <div className="p-6">
      {/* Header with Main Toggle */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          {activeView === 'bag' ? (
            <>
              <Package className="w-6 h-6 text-purple-400" />
              Inventory Bag
            </>
          ) : activeView === 'shop' ? (
            <>
              <ShoppingCart className="w-6 h-6 text-yellow-400" />
              Item Shop
            </>
          ) : (
            <>
              <Gem className="w-6 h-6 text-cyan-400" />
              NFT Marketplace
            </>
          )}
        </h2>

        {/* Main View Toggle */}
        <div className="flex bg-gray-900/50 rounded-lg border border-gray-600 overflow-hidden">
          <button
            onClick={() => setActiveView('bag')}
            className={`
              px-6 py-3 transition-all flex items-center gap-2 font-semibold
              ${activeView === 'bag' 
                ? 'bg-purple-600 text-white' 
                : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
              }
            `}
          >
            <Package className="w-4 h-4" />
            Bag
          </button>
          <button
            onClick={() => setActiveView('shop')}
            className={`
              px-6 py-3 transition-all flex items-center gap-2 font-semibold
              ${activeView === 'shop' 
                ? 'bg-yellow-600 text-white' 
                : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
              }
            `}
          >
            <ShoppingCart className="w-4 h-4" />
            Shop
          </button>
          <button
            onClick={() => setActiveView('nfts')}
            className={`
              px-6 py-3 transition-all flex items-center gap-2 font-semibold
              ${activeView === 'nfts' 
                ? 'bg-cyan-600 text-white' 
                : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
              }
            `}
          >
            <Gem className="w-4 h-4" />
            NFTs
          </button>
        </div>
      </div>

      {/* Bag View */}
      {activeView === 'bag' && (
        <div className="bg-gray-900/50 rounded-lg p-6 border border-purple-500/30">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-purple-400">Your Resources</h3>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Search className="w-4 h-4" />
              <span>{inventoryItems.length} unique items</span>
            </div>
          </div>

          {inventoryItems.length === 0 ? (
            <div className="text-center py-8">
              <div className="text-gray-400 mb-2">Your inventory is empty</div>
              <div className="text-sm text-gray-500">Start farming or mining to collect resources</div>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {inventoryItems.map(item => (
                <div 
                  key={item.id}
                  className="bg-gray-800/50 p-4 rounded-lg border border-gray-600 hover:border-purple-500/50 transition-all group relative"
                >
                  <div className="text-center">
                    <div className="text-2xl mb-2">{item.emoji}</div>
                    <div className="font-semibold text-white text-sm mb-1">{item.name}</div>
                    <div className="text-purple-400 font-bold">{item.amount.toLocaleString()}</div>
                    <div className="text-xs text-gray-400 mt-1">Tier {item.tier}</div>
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 invisible group-hover:visible bg-black text-white text-xs rounded p-2 z-10 max-w-xs whitespace-nowrap">
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Shop View */}
      {activeView === 'shop' && (
        <>
          <div className="mb-4">
            <p className="text-gray-400 text-sm">
              Purchase seeds, upgrades, and equipment for your galactic farming operation
            </p>
          </div>

          {/* Store Tab Navigation */}
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setStoreTab('seeds')}
              className={`
                px-6 py-3 rounded-lg border transition-all flex items-center gap-2
                ${storeTab === 'seeds' 
                  ? 'border-green-500 bg-green-900/30 text-green-400' 
                  : 'border-gray-600 bg-gray-800/50 text-gray-300 hover:border-green-500/50'
                }
              `}
            >
              <Sprout className="w-4 h-4" />
              Seeds
            </button>
            <button
              onClick={() => setStoreTab('upgrades')}
              className={`
                px-6 py-3 rounded-lg border transition-all flex items-center gap-2
                ${storeTab === 'upgrades' 
                  ? 'border-purple-500 bg-purple-900/30 text-purple-400' 
                  : 'border-gray-600 bg-gray-800/50 text-gray-300 hover:border-purple-500/50'
                }
              `}
            >
              <Wrench className="w-4 h-4" />
              Upgrades
            </button>
          </div>

          {/* Seeds Tab */}
          {storeTab === 'seeds' && (
            <div className="bg-gray-900/50 rounded-lg p-6 border border-green-500/30">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-green-400">Seed Collection</h3>
                <div className="text-sm text-gray-400">
                  {availableSeeds.length} seeds available
                </div>
              </div>

              {/* Tier Filter Dropdown */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Filter by Tier:
                </label>
                <div className="relative">
                  <button
                    onClick={() => setIsTierDropdownOpen(!isTierDropdownOpen)}
                    className={`
                      w-full max-w-xs p-3 bg-gray-800/50 border rounded-lg text-left transition-all
                      ${selectedTier !== 'all' 
                        ? 'border-green-500 bg-green-900/20' 
                        : 'border-gray-600 hover:border-green-500/50'
                      }
                      flex items-center justify-between
                    `}
                  >
                    <div className="flex items-center gap-3">
                      {selectedTier !== 'all' ? (
                        <>
                          <span className="text-xl">{getTierIcon(selectedTier)}</span>
                          <div>
                            <div className="font-semibold text-white">{getTierDisplayName(selectedTier)}</div>
                            <div className="text-xs text-gray-400">
                              {availableSeeds.length} seeds in this tier
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <span className="text-xl">🌟</span>
                          <div>
                            <div className="font-semibold text-white">All Tiers</div>
                            <div className="text-xs text-gray-400">
                              Showing all available seeds
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                    <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isTierDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Dropdown Menu */}
                  {isTierDropdownOpen && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-gray-800 border border-gray-600 rounded-lg shadow-xl z-10 max-h-80 overflow-y-auto">
                      <button
                        onClick={() => {
                          setSelectedTier('all');
                          setIsTierDropdownOpen(false);
                        }}
                        className={`
                          w-full p-3 text-left hover:bg-gray-700/50 transition-all border-b border-gray-700
                          ${selectedTier === 'all' ? 'bg-green-900/30' : ''}
                        `}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-xl">🌟</span>
                          <div>
                            <div className="font-semibold text-white">All Tiers</div>
                            <div className="text-xs text-gray-400">
                              Show all {crops.length} seeds
                            </div>
                          </div>
                        </div>
                      </button>
                      
                      {availableTiers.map(tier => {
                        const tierSeeds = crops.filter(c => c.tier === tier);
                        return (
                          <button
                            key={tier}
                            onClick={() => {
                              setSelectedTier(tier);
                              setIsTierDropdownOpen(false);
                            }}
                            className={`
                              w-full p-3 text-left hover:bg-gray-700/50 transition-all border-b border-gray-700 last:border-b-0
                              ${selectedTier === tier ? 'bg-green-900/30' : ''}
                            `}
                          >
                            <div className="flex items-center gap-3">
                              <span className="text-xl">{getTierIcon(tier)}</span>
                              <div>
                                <div className="font-semibold text-white">{tier}</div>
                                <div className="text-xs text-gray-400">
                                  {tierSeeds.length} seeds • Levels {Math.min(...tierSeeds.map(s => s.requiredLevel))}-{Math.max(...tierSeeds.map(s => s.requiredLevel))}
                                </div>
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {availableSeeds.map(crop => {
                  const price = seedPrices[crop.tier as keyof typeof seedPrices];
                  const canAfford = player.claimCores >= price;
                  const canUse = crop.requiredLevel <= player.levels.farming;
                  
                  return (
                    <div 
                      key={crop.id}
                      className={`
                        bg-gray-800/50 p-4 rounded-lg border transition-all
                        ${canUse ? 'border-gray-600' : 'border-yellow-600/50 bg-yellow-900/10'}
                      `}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-lg">{getTierIcon(crop.tier)}</span>
                            <h4 className="font-semibold text-white">{crop.name} Seed</h4>
                          </div>
                          <div className="flex gap-2">
                            <span className={`text-xs px-2 py-1 rounded ${getTierColor(crop.tier).replace('text-', 'bg-').replace('border-', '').replace('500', '600')} text-white`}>
                              {crop.tier}
                            </span>
                            <span className="text-xs bg-gray-600 text-white px-2 py-1 rounded">
                              Lv.{crop.requiredLevel}
                            </span>
                            {!canUse && (
                              <span className="text-xs bg-yellow-600 text-white px-2 py-1 rounded">
                                Future
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-yellow-400 font-bold">{price.toLocaleString()}</div>
                          <div className="text-xs text-gray-400">Cores</div>
                        </div>
                      </div>
                      
                      <p className="text-xs text-gray-300 mb-3">{crop.description}</p>
                      
                      <div className="mb-3 text-xs">
                        <span className="text-green-400">Yields: </span>
                        {Object.entries(crop.yield).map(([resource, amount], index) => (
                          <span key={resource} className="text-white">
                            {index > 0 && ', '}
                            {amount}x {resource}
                          </span>
                        ))}
                      </div>

                      <div className="mb-3 text-xs text-gray-400">
                        Growth: {crop.growthTime}m • 
                        {crop.waterRequired && ' 💧 Water'}
                        {crop.lightRequired && ' ☀️ Light'}
                        {!crop.waterRequired && !crop.lightRequired && ' No requirements'}
                      </div>
                      
                      <button
                        onClick={() => canUse && purchaseSeed(crop.id)}
                        disabled={!canAfford || !canUse}
                        className={`
                          w-full py-2 px-4 rounded-lg transition-all text-sm font-semibold
                          ${canUse && canAfford 
                            ? 'bg-green-600 hover:bg-green-700 text-white' 
                            : !canUse
                              ? 'bg-yellow-600/50 text-yellow-200 cursor-not-allowed'
                              : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                          }
                        `}
                      >
                        {!canUse ? 'Level Required' : canAfford ? 'Purchase' : 'Insufficient Cores'}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Upgrades Tab */}
          {storeTab === 'upgrades' && (
            <div className="bg-gray-900/50 rounded-lg p-6 border border-purple-500/30">
              <h3 className="text-lg font-semibold text-purple-400 mb-4">Station Upgrades</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {upgrades.map(upgrade => {
                  const canAfford = player.claimCores >= upgrade.price;
                  const isOwned = player.ownedUpgrades.includes(upgrade.id);
                  const meetsLevel = player.levels.farming >= upgrade.requiredLevel; // Simplified
                  
                  return (
                    <div 
                      key={upgrade.id}
                      className={`
                        bg-gray-800/50 p-4 rounded-lg border
                        ${isOwned ? 'border-green-500' : 'border-gray-600'}
                      `}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h4 className="font-semibold text-white">{upgrade.name}</h4>
                          <div className="flex gap-2 mt-1">
                            <span className="text-xs bg-purple-600 text-white px-2 py-1 rounded">
                              {upgrade.tier}
                            </span>
                            <span className="text-xs bg-gray-600 text-white px-2 py-1 rounded">
                              Lv.{upgrade.requiredLevel}
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-yellow-400 font-bold">{upgrade.price.toLocaleString()}</div>
                          <div className="text-xs text-gray-400">Cores</div>
                        </div>
                      </div>
                      
                      <p className="text-sm text-gray-300 mb-4">{upgrade.description}</p>
                      
                      <button
                        onClick={() => purchaseUpgrade(upgrade.id)}
                        disabled={!canAfford || isOwned || !meetsLevel}
                        className={`
                          w-full py-2 px-4 rounded-lg transition-all text-sm font-semibold
                          ${isOwned 
                            ? 'bg-green-600 text-white cursor-default' 
                            : canAfford && meetsLevel
                              ? 'bg-purple-600 hover:bg-purple-700 text-white' 
                              : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                          }
                        `}
                      >
                        {isOwned ? 'Owned' : !meetsLevel ? 'Level Required' : canAfford ? 'Purchase' : 'Insufficient Cores'}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </>
      )}

      {/* NFTs View */}
      {activeView === 'nfts' && (
        <div className="space-y-6">
          <div className="bg-gray-900/50 rounded-lg p-6 border border-cyan-500/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-cyan-400">Digital Asset Marketplace</h3>
              <div className="text-sm bg-cyan-900/30 px-3 py-1 rounded-lg border border-cyan-500/30">
                <span className="text-cyan-300">Blockchain Verified</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Discover unique, blockchain-verified digital assets that provide special abilities and exclusive access to rare content.
            </p>
          </div>

          {nftCollections.map(collection => (
            <div key={collection.id} className="bg-gray-900/50 rounded-lg p-6 border border-cyan-500/30">
              <h4 className="text-lg font-semibold text-cyan-400 mb-2">{collection.name}</h4>
              <p className="text-gray-300 text-sm mb-4">{collection.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {collection.items.map(item => (
                  <div 
                    key={item.id}
                    className="bg-gray-800/50 p-4 rounded-lg border border-gray-600 hover:border-cyan-500/50 transition-all"
                  >
                    <div className="text-center mb-3">
                      <div className="text-4xl mb-2">{item.image}</div>
                      <h5 className="font-semibold text-white">{item.name}</h5>
                      <span className={`text-xs px-2 py-1 rounded ${getRarityColor(item.rarity).replace('text-', 'bg-').replace('border-', '').replace('500', '600')} text-white`}>
                        {item.rarity}
                      </span>
                    </div>
                    
                    <p className="text-xs text-gray-300 mb-4">{item.description}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-right">
                        <div className="text-cyan-400 font-bold">{item.price} {item.currency}</div>
                        <div className="text-xs text-gray-400">Current Price</div>
                      </div>
                    </div>
                    
                    <button
                      className="w-full py-2 px-4 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-all text-sm font-semibold"
                      onClick={() => {
                        // Mock purchase - would integrate with actual NFT marketplace
                        alert(`This would open your wallet to purchase ${item.name} for ${item.price} ${item.currency}`);
                      }}
                    >
                      Purchase NFT
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Coming Soon Section */}
          <div className="bg-gray-900/50 rounded-lg p-6 border border-cyan-500/30 text-center">
            <div className="text-cyan-400 mb-2">🚀</div>
            <h4 className="text-lg font-semibold text-cyan-400 mb-2">More Collections Coming Soon</h4>
            <p className="text-gray-300 text-sm">
              Stay tuned for exclusive drops including Legendary Planets, Cosmic Vehicles, and Rare Companions!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};