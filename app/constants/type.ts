// HOMEPAGE TYPES

export type ViewsStatsFormatted = {
  uniqueViewsCount: number;
  viewsTotalCount: number;
  viewsByActualWeek: number;
  viewsByActualMonth: number;
  viewsByActualYear: number;
  viewsByLastYear: number;
  viewsByLastLastYear: number;
};

// CONSOLE TYPES

export type Idea = {
  idea: string
}


// type NewsInfo = {
//   description: any
//   // functionTest: () => void
// }

// type HelpInfo = {
//   description: string | React.ReactNode
// }

// type Command = {
//   commandName: string
//   commandShortcuts: string
//   args: string
//   options: string
//   newsInfos: NewsInfo
//   helpInfos: HelpInfo
//   rankNeeded: number
//   functionName: (
//     args: string[],
//     // options: number[],
//     printOnConsole: (component: React.ReactNode) => void
//   ) => void
// }
