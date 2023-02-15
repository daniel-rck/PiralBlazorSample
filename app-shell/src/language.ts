import { LocaleConfig, setupLocalizer } from 'piral-translate';
import { translations } from './translation.codegen';

export function setupLocalizable(language: string){  
  const config: LocaleConfig = {
    language,
    messages: {
      [language]: translations[language],
    },
  }
  console.log(`setupLocalizer(${language})`);
  return setupLocalizer(config)
}
