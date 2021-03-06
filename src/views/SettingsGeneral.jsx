import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { SInputNumber, SSelect, SInput } from '@/components';
import { MAP_LANG, MAP_THEMES } from '@/utils/constants';
import { updateTheme, updateLang, updateZoom, updateCustomCSS } from '@/store/slices/settings';

function SettingsLayout() {
  const { t } = useTranslation(); // i18n support
  const dispatch = useDispatch();

  // datas
  const theme = useSelector((state) => state.settings.theme);
  const lang = useSelector((state) => state.settings.lang);
  const zoom = useSelector((state) => state.settings.zoom);
  const customCSS = useSelector((state) => state.settings.customCSS);

  return (
    <div className='settings-general'>
      <div className='settings-row settings-theme'>
        <span className='settings-title'>{t('Theme')}</span>
        <SSelect value={theme} onChange={(val) => dispatch(updateTheme(val))} map={MAP_THEMES} />
      </div>
      <div className='settings-row'>
        <span className='settings-title'>{t('Language')}</span>
        <SSelect value={lang} onChange={(val) => dispatch(updateLang(val))} map={MAP_LANG} />
      </div>
      <div className='settings-row'>
        <span className='settings-title'>{t('UI Scale')}</span>
        <SInputNumber
          value={zoom}
          onChange={(val) => dispatch(updateZoom(val))}
          min={0.5}
          max={4}
          step={0.25}
          accuracy={2}
        />
      </div>
      <div className='settings-row settings-font'>
        <span className='settings-title'>{t('Custom CSS')}</span>
        <SInput value={customCSS} onChange={(val) => dispatch(updateCustomCSS(val))} />
      </div>
    </div>
  );
}

export default memo(SettingsLayout);
