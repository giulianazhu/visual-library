// import type { Resources, Attributes, ErrorCode } from './enums'

export type Locale = 'en' | 'cn' | 'jp'
export type LabelSource = 'local' | 'server'

export interface Route {
  key: string
  url: string
  private: boolean
  menu: () => string
}

export type Routes = {
  [key: string]: Route
}

// export interface ApplicationError {
//   id: number
//   text: string
// }

// export interface ApiResponse<T> {
//   error: ApiError | null
//   data: T | null
// }

// export interface ApiError {
//   type: string
//   status: number
//   data: ErrorMessage | object | null
// }

// export type ErrorMessage = {
//   error: string
//   code: ErrorCode
//   message: string
//   detail: object | null
// }

export interface JsonObject {
  [key: string]: any
}

export interface KeyValue {
  [key: string]: string | number | boolean
}
