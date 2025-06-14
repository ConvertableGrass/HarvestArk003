import React, { useState, useEffect } from 'react';
import { Player, FarmPlot, Crop } from '../types/game';
import { crops } from '../data/crops';
import { Sprout, Droplets, Sun, Clock, HardDrive as Harvest, ChevronDown } from 'lucide-react';

interface FarmProps {
  player: Player;
  updateFarmPlot: (plotId: string, updates: Partial<FarmPlot>) => void;
  addToInventory: (itemId: string, amount: number) => void;
  addExperience: (skill: keyof Player['experience'], amount: number) => void;
  addClaimCores: (amount: number) => void;
}

export const Farm: React.FC<FarmProps> = ({ 
  player, 
  updateFarmPlot, 
  addToInventory, 
  addExperience, 
  addClaimCores 
}) => {
  const [selectedCrop, setSelectedCrop] = useState<string>('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const availableCrops = crops.filter(crop => crop.requiredLevel <= player.levels.farming);

  const plantCrop = (plotId: string, cropId: string) => {
    const crop = crops.find(c => c.id === cropId);
    if (!crop) return;

    updateFarmPlot(plotId, {
      crop: cropId,
      plantedAt: Date.now(),
      wateredAt: null,
      litAt: null,
      harvestReady: false
    });

    addExperience('farming', 10);
  };

  const waterPlot = (plotId: string) => {
    updateFarmPlot(plotId, { wateredAt: Date.now() });
    addExperience('farming', 2);
  };

  const lightPlot = (plotId: string) => {
    updateFarmPlot(plotId, { litAt: Date.now() });
    addExperience('farming', 2);
  };

  const harvestPlot = (plotId: string) => {
    const plot = player.farmPlots.find(p => p.id === plotId);
    const crop = crops.find(c => c.id === plot?.crop);
    
    if (!plot || !crop || !plot.harvestReady) return;

    Object.entries(crop.yield).forEach(([resource, amount]) => {
      if (resource === 'Claim Cores') {
        addClaimCores(amount);
      } else {
        addToInventory(resource, amount);
      }
    });

    updateFarmPlot(plotId, {
      crop: null,
      plantedAt: null,
      wateredAt: null,
      litAt: null,
      harvestReady: false
    });

    addExperience('farming', 25);
  };

  // Check if crops are ready to harvest
  useEffect(() => {
    const interval = setInterval(() => {
      player.farmPlots.forEach(plot => {
        if (plot.crop && plot.plantedAt && !plot.harvestReady) {
          const crop = crops.find(c => c.id === plot.crop);
          if (!crop) return;

          const timeElapsed = Date.now() - plot.plantedAt;
          const requiredTime = crop.growthTime * 60 * 1000; // Convert minutes to milliseconds
          
          const hasWater = !crop.waterRequired || (plot.wateredAt && plot.wateredAt > plot.plantedAt);
          const hasLight = !crop.lightRequired || (plot.litAt && plot.litAt > plot.plantedAt);

          if (timeElapsed >= requiredTime && hasWater && hasLight) {
            updateFarmPlot(plot.id, { harvestReady: true });
          }
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [player.farmPlots, updateFarmPlot]);

  const getPlotStatus = (plot: FarmPlot) => {
    if (!plot.crop) return 'empty';
    if (plot.harvestReady) return 'ready';
    
    const crop = crops.find(c => c.id === plot.crop);
    if (!crop) return 'empty';

    const hasWater = !crop.waterRequired || (plot.wateredAt && plot.wateredAt > plot.plantedAt!);
    const hasLight = !crop.lightRequired || (plot.litAt && plot.litAt > plot.plantedAt!);

    if (!hasWater || !hasLight) return 'needs-care';
    return 'growing';
  };

  const selectedCropData = crops.find(c => c.id === selectedCrop);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
        <Sprout className="w-6 h-6 text-green-400" />
        Hydroponic Farm
      </h2>

      <div className="space-y-6">
        {/* Crop Selector Dropdown */}
        <div className="bg-gray-900/50 rounded-lg p-6 border border-green-500/30">
          <h3 className="text-lg font-semibold text-green-400 mb-4">Select Seed to Plant</h3>
          
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`
                w-full p-4 bg-gray-800/50 border rounded-lg text-left transition-all
                ${selectedCrop 
                  ? 'border-green-500 bg-green-900/20' 
                  : 'border-gray-600 hover:border-green-500/50'
                }
                flex items-center justify-between
              `}
            >
              <div className="flex items-center gap-3">
                {selectedCropData ? (
                  <>
                    <div className="text-2xl">🌱</div>
                    <div>
                      <div className="font-semibold text-white">{selectedCropData.name}</div>
                      <div className="text-sm text-gray-400">
                        Level {selectedCropData.requiredLevel} • {selectedCropData.growthTime}m growth
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="text-2xl text-gray-500">🌱</div>
                    <div>
                      <div className="font-semibold text-gray-400">Choose a seed to plant</div>
                      <div className="text-sm text-gray-500">Select from available crops</div>
                    </div>
                  </>
                )}
              </div>
              <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-gray-800 border border-gray-600 rounded-lg shadow-xl z-10 max-h-80 overflow-y-auto">
                {availableCrops.length === 0 ? (
                  <div className="p-4 text-center text-gray-400">
                    No crops available at your farming level
                  </div>
                ) : (
                  availableCrops.map(crop => (
                    <button
                      key={crop.id}
                      onClick={() => {
                        setSelectedCrop(crop.id);
                        setIsDropdownOpen(false);
                      }}
                      className={`
                        w-full p-4 text-left hover:bg-gray-700/50 transition-all border-b border-gray-700 last:border-b-0
                        ${selectedCrop === crop.id ? 'bg-green-900/30' : ''}
                      `}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="text-xl">🌱</div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-semibold text-white">{crop.name}</h4>
                            <span className="text-xs bg-green-600 text-white px-2 py-1 rounded">
                              Lv.{crop.requiredLevel}
                            </span>
                          </div>
                          <p className="text-xs text-gray-300 mt-1">{crop.description}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 text-xs text-gray-400">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{crop.growthTime}m</span>
                        </div>
                        {crop.waterRequired && (
                          <div className="flex items-center gap-1">
                            <Droplets className="w-3 h-3 text-blue-400" />
                            <span>Water</span>
                          </div>
                        )}
                        {crop.lightRequired && (
                          <div className="flex items-center gap-1">
                            <Sun className="w-3 h-3 text-yellow-400" />
                            <span>Light</span>
                          </div>
                        )}
                      </div>
                      
                      <div className="mt-2 text-xs">
                        <span className="text-green-400">Yields: </span>
                        {Object.entries(crop.yield).map(([resource, amount], index) => (
                          <span key={resource} className="text-white">
                            {index > 0 && ', '}
                            {amount}x {resource}
                          </span>
                        ))}
                      </div>
                    </button>
                  ))
                )}
              </div>
            )}
          </div>

          {/* Selected Crop Details */}
          {selectedCropData && (
            <div className="mt-4 p-4 bg-green-900/20 rounded-lg border border-green-500/30">
              <h4 className="font-semibold text-green-400 mb-2">Ready to Plant: {selectedCropData.name}</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-400">Growth Time:</span>
                  <span className="text-white ml-2">{selectedCropData.growthTime} minutes</span>
                </div>
                <div>
                  <span className="text-gray-400">Requirements:</span>
                  <div className="flex gap-2 ml-2">
                    {selectedCropData.waterRequired && <Droplets className="w-4 h-4 text-blue-400" />}
                    {selectedCropData.lightRequired && <Sun className="w-4 h-4 text-yellow-400" />}
                    {!selectedCropData.waterRequired && !selectedCropData.lightRequired && (
                      <span className="text-green-400 text-xs">None</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Farm Grid */}
        <div className="bg-gray-900/50 rounded-lg p-6 border border-green-500/30">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-green-400">Farm Plots</h3>
            {selectedCrop && (
              <div className="text-sm text-green-400 bg-green-900/30 px-3 py-1 rounded-lg border border-green-500/30">
                Ready to plant: {selectedCropData?.name}
              </div>
            )}
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            {player.farmPlots.map(plot => {
              const crop = crops.find(c => c.id === plot.crop);
              const status = getPlotStatus(plot);
              
              return (
                <div 
                  key={plot.id}
                  className={`
                    aspect-square border-2 rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer transition-all
                    ${status === 'empty' ? 'border-gray-600 bg-gray-800/50 hover:border-green-500/50' : ''}
                    ${status === 'growing' ? 'border-yellow-500 bg-yellow-900/20' : ''}
                    ${status === 'needs-care' ? 'border-red-500 bg-red-900/20' : ''}
                    ${status === 'ready' ? 'border-green-500 bg-green-900/20 animate-pulse' : ''}
                  `}
                  onClick={() => {
                    if (status === 'empty' && selectedCrop) {
                      plantCrop(plot.id, selectedCrop);
                    } else if (status === 'ready') {
                      harvestPlot(plot.id);
                    }
                  }}
                >
                  {status === 'empty' && (
                    <div className="text-gray-400 text-center">
                      <div className="text-2xl mb-1">🌱</div>
                      <div className="text-xs">
                        {selectedCrop ? 'Click to Plant' : 'Select Seed First'}
                      </div>
                    </div>
                  )}
                  
                  {crop && status !== 'empty' && (
                    <div className="text-center">
                      <div className="text-2xl mb-1">🌿</div>
                      <div className="text-xs text-white font-semibold">{crop.name}</div>
                      <div className="flex gap-1 mt-2">
                        {crop.waterRequired && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              waterPlot(plot.id);
                            }}
                            className={`p-1 rounded ${
                              plot.wateredAt && plot.wateredAt > plot.plantedAt! 
                                ? 'bg-blue-500 text-white' 
                                : 'bg-gray-600 text-gray-300 hover:bg-blue-600'
                            }`}
                          >
                            <Droplets className="w-3 h-3" />
                          </button>
                        )}
                        {crop.lightRequired && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              lightPlot(plot.id);
                            }}
                            className={`p-1 rounded ${
                              plot.litAt && plot.litAt > plot.plantedAt! 
                                ? 'bg-yellow-500 text-white' 
                                : 'bg-gray-600 text-gray-300 hover:bg-yellow-600'
                            }`}
                          >
                            <Sun className="w-3 h-3" />
                          </button>
                        )}
                      </div>
                      {status === 'ready' && (
                        <div className="mt-2 text-green-400 text-xs font-bold">
                          <Harvest className="w-4 h-4 mx-auto" />
                          Ready!
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};