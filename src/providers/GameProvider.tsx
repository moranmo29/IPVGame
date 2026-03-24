import React, { createContext, useReducer, type ReactNode } from 'react';
import type { GameState, GameAction, LevelId, LevelState } from '../types';

// ─── Initial Level States ──────────────────────────────────
function createLevelState(id: LevelId, unlocked: boolean, objectives: string[]): LevelState {
  return {
    id,
    unlocked,
    completed: false,
    progress: 0,
    objectives: Object.fromEntries(objectives.map(o => [o, false])),
  };
}

const initialState: GameState = {
  currentLevel: 1,
  levels: {
    1: createLevelState(1, true, ['matchIPv4', 'exploreIPv6']),
    2: createLevelState(2, true, ['findSubnet']),
    3: createLevelState(3, true, ['setGateway', 'deliverPacket']),
    4: createLevelState(4, true, ['observeNAT']),
    5: createLevelState(5, true, ['inspectResidential', 'inspectDatacenter']),
    6: createLevelState(6, true, ['toggleVPN']),
  },
  chaosEnabled: false,
  chaosAnomalies: [],
  totalScore: 0,
};

// ─── Reducer ───────────────────────────────────────────────
function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'SET_LEVEL': {
      const level = state.levels[action.payload];
      if (!level.unlocked) return state;
      return { ...state, currentLevel: action.payload };
    }

    case 'COMPLETE_OBJECTIVE': {
      const { level, objectiveId } = action.payload;
      const levelState = state.levels[level];
      if (!levelState || levelState.objectives[objectiveId]) return state;

      const updatedObjectives = { ...levelState.objectives, [objectiveId]: true };
      const completedCount = Object.values(updatedObjectives).filter(Boolean).length;
      const totalCount = Object.keys(updatedObjectives).length;
      const progress = Math.round((completedCount / totalCount) * 100);
      const allDone = completedCount === totalCount;

      const updatedLevels = { ...state.levels };
      updatedLevels[level] = {
        ...levelState,
        objectives: updatedObjectives,
        progress,
        completed: allDone,
      };

      // Auto-unlock next level
      if (allDone && level < 6) {
        const nextLevel = (level + 1) as LevelId;
        updatedLevels[nextLevel] = {
          ...updatedLevels[nextLevel],
          unlocked: true,
        };
      }

      return {
        ...state,
        levels: updatedLevels,
        totalScore: allDone ? state.totalScore + (level * 100) : state.totalScore,
      };
    }

    case 'COMPLETE_LEVEL': {
      const level = state.levels[action.payload];
      if (level.completed) return state;

      const updatedLevels = { ...state.levels };
      updatedLevels[action.payload] = {
        ...level,
        completed: true,
        progress: 100,
        objectives: Object.fromEntries(
          Object.keys(level.objectives).map(k => [k, true])
        ),
      };

      if (action.payload < 6) {
        const nextLevel = (action.payload + 1) as LevelId;
        updatedLevels[nextLevel] = {
          ...updatedLevels[nextLevel],
          unlocked: true,
        };
      }

      return {
        ...state,
        levels: updatedLevels,
        totalScore: state.totalScore + (action.payload * 100),
      };
    }

    case 'UPDATE_PROGRESS': {
      const { level, progress } = action.payload;
      const updatedLevels = { ...state.levels };
      updatedLevels[level] = { ...updatedLevels[level], progress };
      return { ...state, levels: updatedLevels };
    }

    case 'ADD_SCORE':
      return { ...state, totalScore: state.totalScore + action.payload };

    case 'TOGGLE_CHAOS': {
      // Only allow chaos if all levels completed
      const allCompleted = Object.values(state.levels).every(l => l.completed);
      if (!allCompleted && !state.chaosEnabled) return state;
      return { ...state, chaosEnabled: !state.chaosEnabled };
    }

    case 'INJECT_ANOMALY':
      return {
        ...state,
        chaosAnomalies: [...state.chaosAnomalies, action.payload],
      };

    case 'RESOLVE_ANOMALY':
      return {
        ...state,
        chaosAnomalies: state.chaosAnomalies.filter(a => a.id !== action.payload),
        totalScore: state.totalScore + 50,
      };

    case 'CLEAR_ANOMALIES':
      return { ...state, chaosAnomalies: [] };

    default:
      return state;
  }
}

// ─── Context ───────────────────────────────────────────────
export interface GameContextValue {
  state: GameState;
  dispatch: React.Dispatch<GameAction>;
  // Convenience helpers
  goToLevel: (id: LevelId) => void;
  completeObjective: (level: LevelId, objectiveId: string) => void;
  isLevelUnlocked: (id: LevelId) => boolean;
  isLevelCompleted: (id: LevelId) => boolean;
  canEnableChaos: boolean;
}

export const GameContext = createContext<GameContextValue | null>(null);

export function GameProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  const value: GameContextValue = {
    state,
    dispatch,
    goToLevel: (id) => dispatch({ type: 'SET_LEVEL', payload: id }),
    completeObjective: (level, objectiveId) =>
      dispatch({ type: 'COMPLETE_OBJECTIVE', payload: { level, objectiveId } }),
    isLevelUnlocked: (id) => state.levels[id].unlocked,
    isLevelCompleted: (id) => state.levels[id].completed,
    canEnableChaos: Object.values(state.levels).every(l => l.completed),
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}
