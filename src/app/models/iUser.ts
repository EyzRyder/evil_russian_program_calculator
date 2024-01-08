export interface IUser {
  name: string
  maxPushUps: number
  curWeek: 1 | 2
  workoutProgramList: TWorkoutProgrameData[]
}

export interface TWeek {
  percent: number
  minutes: number
}

export interface TWorkoutProgrameData {
  day: number
  quantity: number
  percent: number
  minutes: number
}
