import AuthModule from '~/repository/modules/auth';
import ExtApiModule from '~/repository/modules/extApi';

interface IApiInstance {
  extApi: ExtApiModule;
  auth: AuthModule;
}

export default defineNuxtPlugin(nuxtApp => {
  const axios = useNuxtApp().$axios;
  const axiosExt = useNuxtApp().$axiosExt;

  const modules: IApiInstance = {
    extApi: new ExtApiModule(axiosExt),
    auth: new AuthModule(axios),
  };

  return {
    provide: {
      api: modules,
    },
  };
});
