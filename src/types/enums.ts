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

export enum UserTab {
  Account = 'account',
  Profile = 'profile',
  Settings = 'settings',
}

export enum SortBy {
  Random = 'random',
  ActiveFirst = 'active',
  ActiveLast = 'inactive',
}

export enum TestId {
  InfoIcon = 'info-icon',
  AddIcon = 'add-icon',
  EditPenIcon = 'edit-pen-icon',
  EditNoteIcon = 'edit-note-icon',
  DeleteIcon = 'delete-icon',
  LoadIcon = 'load-icon',
  ExportIcon = 'export-icon',
  CloseIcon = 'close-icon',
  LogoutIcon = 'logout-icon',
}
