export enum LocalStorageKey {
  Theme = 'theme',
}

export enum Theme {
  Light = 'light',
  Dark = 'dark',
}

export enum Tab {
  Account = 'account',
  Preferences = 'preferences', // theme and language
}

export enum RoutePath {
  Detail = ':id',
  SubDetail = ':subId',
  New = 'new',
  Tab = ':tab/:action?',
  Status = ':status',
}

export enum PracticeStatus {
  Settings = 'settings',
  Start = 'start',
}
