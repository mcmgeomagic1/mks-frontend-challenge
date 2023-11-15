
export interface EnvConfig extends Window {
    serviceUrlLocal: string
    serviceUrlDev: string
    serviceUrlPrd: string
}

export const appConfig = ((window as any).globalConfig as EnvConfig) || {
    serviceUrlLocal: process.env.REACT_APP_URL_API,
    serviceUrlDev: process.env.REACT_APP_URL_API,
    serviceUrlPrd: process.env.REACT_APP_URL_API,
}
