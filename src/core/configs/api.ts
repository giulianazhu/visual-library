// const baseUrl = import.meta.env.VITE_API_BASE_URL;
// const homepage = import.meta.env.VITE_HOMEPAGE;

const apiConfigs = () => {
  return {
    //local resources
    getLocalLabels: (lng: string) => `/locales/${lng}.json`,
  }
}

const api = apiConfigs()

export default api
