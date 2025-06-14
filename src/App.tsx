import React, { useState } from 'react';
import { LoginPage } from './components/LoginPage';
import { GameHeader } from './components/GameHeader';
import { Farm } from './components/Farm';
import { Exploration } from './components/Exploration';
import { Mining } from './components/Mining';
import { Dungeons } from './components/Dungeons';
import { Crafting } from './components/Crafting';
import { Store } from './components/Store';
import { useGameState } from './hooks/useGameState';
import { Sprout, Compass, Pickaxe, Swords, Wrench, ShoppingCart } from 'lucide-react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState<'farm' | 'exploration' | 'mining' | 'dungeons' | 'crafting' | 'store'>('farm');
  
  const {
    player,
    addToInventory,
    removeFromInventory,
    addClaimCores,
    spendClaimCores,
    addExperience,
    updateFarmPlot,
    unlockRegion
  } = useGameState();

  const handleLogin = (username: string) => {
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />;
  }

  const tabs = [
    { id: 'farm', name: 'Farm', icon: Sprout, color: 'text-green-400' },
    { id: 'exploration', name: 'Exploration', icon: Compass, color: 'text-blue-400' },
    { id: 'mining', name: 'Mining', icon: Pickaxe, color: 'text-orange-400' },
    { id: 'dungeons', name: 'Dungeons', icon: Swords, color: 'text-red-400' },
    { id: 'crafting', name: 'Crafting', icon: Wrench, color: 'text-purple-400' },
    { id: 'store', name: 'Inventory & Shop', icon: ShoppingCart, color: 'text-yellow-400' }
  ] as const;

  return (
    <div className="min-h-screen bg-black text-white">
      <GameHeader player={player} />
      
      {/* Navigation Tabs */}
      <div className="bg-gray-900 border-b border-gray-700">
        <div className="max-w-7xl mx-auto">
          <div className="flex overflow-x-auto">
            {tabs.map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`
                    flex items-center gap-2 px-6 py-4 border-b-2 transition-all whitespace-nowrap
                    ${activeTab === tab.id 
                      ? `border-current ${tab.color} bg-gray-800/50` 
                      : 'border-transparent text-gray-400 hover:text-gray-300'
                    }
                  `}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-semibold">{tab.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto">
        {activeTab === 'farm' && (
          <Farm
            player={player}
            updateFarmPlot={updateFarmPlot}
            addToInventory={addToInventory}
            addExperience={addExperience}
            addClaimCores={addClaimCores}
          />
        )}
        
        {activeTab === 'exploration' && (
          <Exploration
            player={player}
            unlockRegion={unlockRegion}
            addExperience={addExperience}
            addClaimCores={addClaimCores}
          />
        )}
        
        {activeTab === 'mining' && (
          <Mining
            player={player}
            addToInventory={addToInventory}
            addExperience={addExperience}
            addClaimCores={addClaimCores}
          />
        )}
        
        {activeTab === 'dungeons' && (
          <Dungeons
            player={player}
            addToInventory={addToInventory}
            addExperience={addExperience}
            addClaimCores={addClaimCores}
          />
        )}
        
        {activeTab === 'crafting' && (
          <Crafting
            player={player}
            addToInventory={addToInventory}
            removeFromInventory={removeFromInventory}
            addExperience={addExperience}
            addClaimCores={addClaimCores}
          />
        )}
        
        {activeTab === 'store' && (
          <Store
            player={player}
            spendClaimCores={spendClaimCores}
            addToInventory={addToInventory}
          />
        )}
      </div>
    </div>
  );
}

export default App;