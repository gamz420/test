import { useTranslation } from 'react-i18next';
import { i18n } from '../../../main/lang';

export function text(tId, tValue) {
  return i18n.t(tId, tValue);
}
