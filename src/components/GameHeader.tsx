import React from 'react';
import { Player } from '../types/game';
import { Coins, Sprout, Compass, Pickaxe, Sword, Wrench } from 'lucide-react';

interface GameHeaderProps {
  player: Player;
}

export const GameHeader: React.FC<GameHeaderProps> = ({ player }) => {
  return (
    <div className="bg-black border-b border-purple-500/30 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Harvest Ark v3.0.2
          </h1>
          <div className="flex items-center gap-2 bg-purple-900/30 px-4 py-2 rounded-lg border border-purple-500/30">
            <Coins className="w-5 h-5 text-yellow-400" />
            <span className="text-yellow-400 font-bold">{player.claimCores.toLocaleString()}</span>
            <span className="text-gray-400">Claim Cores</span>
          </div>
        </div>
        
        <div className="grid grid-cols-5 gap-4">
          <div className="bg-purple-900/20 p-3 rounded-lg border border-purple-500/20">
            <div className="flex items-center gap-2 mb-1">
              <Sprout className="w-4 h-4 text-green-400" />
              <span className="text-green-400 font-semibold">Farming</span>
            </div>
            <div className="text-white font-bold">Level {player.levels.farming}</div>
            <div className="w-full bg-gray-700 rounded-full h-2 mt-1">
              <div 
                className="bg-green-400 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(player.experience.farming % 100)}%` }}
              />
            </div>
          </div>

          <div className="bg-blue-900/20 p-3 rounded-lg border border-blue-500/20">
            <div className="flex items-center gap-2 mb-1">
              <Compass className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 font-semibold">Exploration</span>
            </div>
            <div className="text-white font-bold">Level {player.levels.exploration}</div>
            <div className="w-full bg-gray-700 rounded-full h-2 mt-1">
              <div 
                className="bg-blue-400 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(player.experience.exploration % 100)}%` }}
              />
            </div>
          </div>

          <div className="bg-orange-900/20 p-3 rounded-lg border border-orange-500/20">
            <div className="flex items-center gap-2 mb-1">
              <Pickaxe className="w-4 h-4 text-orange-400" />
              <span className="text-orange-400 font-semibold">Mining</span>
            </div>
            <div className="text-white font-bold">Level {player.levels.mining}</div>
            <div className="w-full bg-gray-700 rounded-full h-2 mt-1">
              <div 
                className="bg-orange-400 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(player.experience.mining % 100)}%` }}
              />
            </div>
          </div>

          <div className="bg-red-900/20 p-3 rounded-lg border border-red-500/20">
            <div className="flex items-center gap-2 mb-1">
              <Sword className="w-4 h-4 text-red-400" />
              <span className="text-red-400 font-semibold">Combat</span>
            </div>
            <div className="text-white font-bold">Level {player.levels.combat}</div>
            <div className="w-full bg-gray-700 rounded-full h-2 mt-1">
              <div 
                className="bg-red-400 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(player.experience.combat % 100)}%` }}
              />
            </div>
          </div>

          <div className="bg-purple-900/20 p-3 rounded-lg border border-purple-500/20">
            <div className="flex items-center gap-2 mb-1">
              <Wrench className="w-4 h-4 text-purple-400" />
              <span className="text-purple-400 font-semibold">Crafting</span>
            </div>
            <div className="text-white font-bold">Level {player.levels.crafting}</div>
            <div className="w-full bg-gray-700 rounded-full h-2 mt-1">
              <div 
                className="bg-purple-400 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(player.experience.crafting % 100)}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};