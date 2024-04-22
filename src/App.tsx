import {
  SingleEliminationBracket,
  Match,
  // SVGViewer 
} from '@g-loot/react-tournament-brackets';
// import { useWindowSize } from "@uidotdev/usehooks";

// const WhiteTheme = createTheme({
//   textColor: { main: '#000000', highlighted: '#07090D', dark: '#3E414D' },
//   matchBackground: { wonColor: '#daebf9', lostColor: '#96c6da' },
//   score: {
//     background: { wonColor: '#87b2c4', lostColor: '#87b2c4' },
//     text: { highlightedWonColor: '#7BF59D', highlightedLostColor: '#FB7E94' },
//   },
//   border: {
//     color: '#CED1F2',
//     highlightedColor: '#da96c6',
//   },
//   roundHeader: { backgroundColor: '#87b2c4', fontColor: '#fff' },
//   connectorColor: '#CED1F2',
//   connectorColorHighlight: '#da96c6',
//   svgBackground: '#FAFAFA',
// });

const TOP16 = {
  WALMART: "Walmart Door Greeters",
  FORFUN: "For Fun",
  EHTEAM: "Eh-Team",
  DOT: "dot Stats",
  POWER: "PowermodeGG",
  GOOFY: "Goofy Goobers",
  FELLAS: "5Fellas",
  MCS: "MCS Gaming",
  FLUFFY: "Fluffy Aimers",
  FLANK: "Big Flank",
  EVIL: "Evil Space Wizards",
  WILL: "Will To Win",
  GUYS: "Five Guys",
  RWS: "8RWS",
  MICH: "Michigan Lakers",
  STRIFE: "Strife"
} as const;

const matches = [
  {
    "id": "f1",
    "name": "",
    "nextMatchId": null, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
    "tournamentRoundText": "Final", // Text for Round Header
    "startTime": "2200 EST",
    "state": "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
    "participants": [
      {
        "id": "f1a", // Unique identifier of any kind
        "resultText": "", // Any string works
        "isWinner": false,
        "status": "NO_PARTY", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
        "name": "??"
      },
      {
        "id": "f1b",
        "resultText": "",
        "isWinner": false,
        "status": "NO_PARTY", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
        "name": "??"
      }
    ]
  },
  {
    "id": "sf1",
    "name": "",
    "nextMatchId": "f1", // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
    "tournamentRoundText": "Semifinal", // Text for Round Header
    "startTime": "1910 EST",
    "state": "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
    "participants": [
      {
        "id": "sf1a", // Unique identifier of any kind
        "resultText": "1", // Any string works
        "isWinner": false,
        "status": "PLAYED", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
        "name": TOP16.WALMART
      },
      {
        "id": "sf1b",
        "resultText": "0",
        "isWinner": false,
        "status": "PLAYED", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
        "name": TOP16.FORFUN
      }
    ]
  },
  {
    "id": "sf2",
    "name": "",
    "nextMatchId": "f1", // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
    "tournamentRoundText": "Semifinal", // Text for Round Header
    "startTime": "1910 EST",
    "state": "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
    "participants": [
      {
        "id": "sf2a", // Unique identifier of any kind
        "resultText": "1", // Any string works
        "isWinner": false,
        "status": "PLAYED", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
        "name": TOP16.FLUFFY
      },
      {
        "id": "sf2b",
        "resultText": "0",
        "isWinner": false,
        "status": "NO_PARTY", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
        "name": TOP16.WILL
      }
    ]
  },
  {
    "id": "qf1",
    "name": "",
    "nextMatchId": "sf2", // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
    "tournamentRoundText": "Quarterfinals", // Text for Round Header
    "startTime": "1600 EST",
    "state": "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
    "participants": [
      {
        "id": "qf1a", // Unique identifier of any kind
        "resultText": "0", // Any string works
        "isWinner": false,
        "status": "PLAYED", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
        "name": TOP16.DOT
      },
      {
        "id": "qf1b",
        "resultText": "2",
        "isWinner": true,
        "status": "PLAYED", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
        "name": TOP16.FLUFFY
      }
    ]
  },
  {
    "id": "qf2",
    "name": "",
    "nextMatchId": "sf1", // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
    "tournamentRoundText": "Quarterfinals", // Text for Round Header
    "startTime": "1600 EST",
    "state": "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
    "participants": [
      {
        "id": "qf2a", // Unique identifier of any kind
        "resultText": "2", // Any string works
        "isWinner": true,
        "status": "PLAYED", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
        "name": TOP16.WALMART
      },
      {
        "id": "qf2b",
        "resultText": "1",
        "isWinner": false,
        "status": "PLAYED", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
        "name": TOP16.EHTEAM
      }
    ]
  },
  {
    "id": "qf3",
    "name": "",
    "nextMatchId": "sf1", // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
    "tournamentRoundText": "Quarterfinals", // Text for Round Header
    "startTime": "1600 EST",
    "state": "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
    "participants": [
      {
        "id": "qf3a", // Unique identifier of any kind
        "resultText": "2", // Any string works
        "isWinner": true,
        "status": "PLAYED", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
        "name": TOP16.FORFUN
      },
      {
        "id": "qf3b",
        "resultText": "1",
        "isWinner": false,
        "status": "PLAYED", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
        "name": TOP16.STRIFE
      }
    ]
  },
  {
    "id": 'qf4',
    "name": "",
    "nextMatchId": "sf2", // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
    "tournamentRoundText": "Quarterfinals", // Text for Round Header
    "startTime": "1600 EST",
    "state": "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
    "participants": [
      {
        "id": "qf4a", // Unique identifier of any kind
        "resultText": "2", // Any string works
        "isWinner": true,
        "status": "PLAYED", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
        "name": TOP16.WILL
      },
      {
        "id": "qf4b",
        "resultText": "0",
        "isWinner": false,
        "status": "PLAYED", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
        "name": TOP16.RWS
      }
    ]
  },
  {
    "id": '16r1',
    "name": "",
    "nextMatchId": "qf2", // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
    "tournamentRoundText": "of 16", // Text for Round Header
    "startTime": "1000 EST",
    "state": "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
    "participants": [
      {
        "id": "16r1a", // Unique identifier of any kind
        "resultText": "2", // Any string works
        "isWinner": true,
        "status": "PLAYED", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
        "name": TOP16.WALMART
      },
      {
        "id": "16r1b",
        "resultText": "1",
        "isWinner": false,
        "status": "PLAYED", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
        "name": TOP16.POWER
      }
    ]
  },
  {
    "id": '16r2',
    "name": "",
    "nextMatchId": "qf3", // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
    "tournamentRoundText": "of 16", // Text for Round Header
    "startTime": "1000 EST",
    "state": "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
    "participants": [
      {
        "id": "16r2a", // Unique identifier of any kind
        "resultText": "2", // Any string works
        "isWinner": true,
        "status": "PLAYED", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
        "name": TOP16.FORFUN
      },
      {
        "id": "16r2b",
        "resultText": "0",
        "isWinner": false,
        "status": "PLAYED", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
        "name": TOP16.GOOFY
      }
    ]
  },
  {
    "id": '16r3',
    "name": "",
    "nextMatchId": "qf2", // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
    "tournamentRoundText": "of 16", // Text for Round Header
    "startTime": "1000 EST",
    "state": "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
    "participants": [
      {
        "id": "16r3a", // Unique identifier of any kind
        "resultText": "2", // Any string works
        "isWinner": true,
        "status": "PLAYED", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
        "name": TOP16.EHTEAM
      },
      {
        "id": "16r3b",
        "resultText": "1",
        "isWinner": false,
        "status": "PLAYED", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
        "name": TOP16.FELLAS
      }
    ]
  },
  {
    "id": '16r4',
    "name": "",
    "nextMatchId": "qf1", // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
    "tournamentRoundText": "of 16", // Text for Round Header
    "startTime": "1000 EST",
    "state": "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
    "participants": [
      {
        "id": "16r4a", // Unique identifier of any kind
        "resultText": "2", // Any string works
        "isWinner": true,
        "status": "PLAYED", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
        "name": TOP16.DOT
      },
      {
        "id": "16r4b",
        "resultText": "1",
        "isWinner": false,
        "status": "PLAYED", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
        "name": TOP16.MCS
      }
    ]
  },
  {
    "id": '16r5',
    "name": "",
    "nextMatchId": "qf1", // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
    "tournamentRoundText": "of 16", // Text for Round Header
    "startTime": "1300 EST",
    "state": "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
    "participants": [
      {
        "id": "16r5a", // Unique identifier of any kind
        "resultText": "2", // Any string works
        "isWinner": true,
        "status": "PLAYED", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
        "name": TOP16.FLUFFY
      },
      {
        "id": "16r5b",
        "resultText": "0",
        "isWinner": false,
        "status": "PLAYED", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
        "name": TOP16.FLANK
      }
    ]
  },
  {
    "id": '16r6',
    "name": "",
    "nextMatchId": "qf4", // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
    "tournamentRoundText": "of 16", // Text for Round Header
    "startTime": "1300 EST",
    "state": "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
    "participants": [
      {
        "id": "16r6a", // Unique identifier of any kind
        "resultText": "0", // Any string works
        "isWinner": false,
        "status": "PLAYED", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
        "name": TOP16.EVIL
      },
      {
        "id": "16r6b",
        "resultText": "2",
        "isWinner": true,
        "status": "PLAYED", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
        "name": TOP16.WILL
      }
    ]
  },
  {
    "id": '16r7',
    "name": "",
    "nextMatchId": "qf4", // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
    "tournamentRoundText": "of 16", // Text for Round Header
    "startTime": "1300 EST",
    "state": "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
    "participants": [
      {
        "id": "16r7a", // Unique identifier of any kind
        "resultText": "1", // Any string works
        "isWinner": false,
        "status": "PLAYED", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
        "name": TOP16.GUYS
      },
      {
        "id": "16r7b",
        "resultText": "2",
        "isWinner": true,
        "status": "PLAYED", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
        "name": TOP16.RWS
      }
    ]
  },
  {
    "id": '16r8',
    "name": "",
    "nextMatchId": "qf3", // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
    "tournamentRoundText": "of 16", // Text for Round Header
    "startTime": "1300 EST",
    "state": "DONE", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
    "participants": [
      {
        "id": "16r8a", // Unique identifier of any kind
        "resultText": "0", // Any string works
        "isWinner": false,
        "status": "NO_PARTY", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
        "name": TOP16.MICH
      },
      {
        "id": "16r8b",
        "resultText": "2",
        "isWinner": true,
        "status": "NO_PARTY", // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY'
        "name": TOP16.STRIFE
      }
    ]
  },
]

const App = () => {
  // const { width, height } = useWindowSize();
  return (
    <SingleEliminationBracket
      matches={matches}
      matchComponent={Match}
    />
  );
};

export default App
