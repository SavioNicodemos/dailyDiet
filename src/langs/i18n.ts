import * as Localization from 'expo-localization';
import en from "./translations/en.json";
import ptBR from "./translations/pt-BR.json";
import { I18n } from 'i18n-js';

const i18n = new I18n();

i18n.store(en);
i18n.store(ptBR);

i18n.enableFallback = true;

i18n.defaultLocale = 'en';
i18n.locale = Localization.locale;

export { i18n };
