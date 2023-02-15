import { createBreadcrumbsApi } from 'piral-breadcrumbs';
import { createDashboardApi } from 'piral-dashboard';
import { createMenuApi } from 'piral-menu';
import { createModalsApi } from 'piral-modals';
import { createNotificationsApi } from 'piral-notifications';
import { createLocaleApi } from 'piral-translate';
import { setupLocalizable } from './language';
import { PiralPlugin } from 'piral-core';
import { createBlazorApi } from 'piral-blazor';

export function getPlugins(language: string) : Array<PiralPlugin> {
  return [
    createMenuApi(),
    createNotificationsApi(),
    createModalsApi(),
    createDashboardApi({
      defaultPreferences: {
        initialColumns: 2,
        initialRows: 2
      }
    }),
    createLocaleApi(setupLocalizable(language)),
    createBreadcrumbsApi(),
    createBlazorApi({ 
      initialLanguage: language,      
      onLanguageChange: (inform) => {
        console.log(`onLanguageChange('${language}')`)
      }
    })
  ]
};
