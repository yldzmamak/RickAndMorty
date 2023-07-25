export enum StatusTypes {
  success = "success",
  error = "error"
}

export const pathNames = {
  authentication: {
    login: "/login"
  },
  episodesPage: "/panel/episodes",
  loginPage: "/login",
} as const;