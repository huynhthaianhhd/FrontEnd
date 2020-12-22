import React, { memo } from 'react';
import { useInjectReducer } from 'utils/reduxInjectors';
import { reducer, sliceKey } from './slice';
import useHooks from './hooks';

import Confirm from 'app/components/Modal/Confirm';

import { POPUP_TYPE } from './constants';

export const Popup = memo(() => {
  useInjectReducer({ key: sliceKey, reducer });
  const { handlers, selectors } = useHooks();
  const { handleClosePopup } = handlers;
  const { popups } = selectors;

  return (
    <>
      {popups.map(popup => {
        switch (popup.type) {
          case POPUP_TYPE.CONFIRM: {
            return (
              <Confirm
                key={popup.key}
                onCancel={handleClosePopup(popup)}
                visible
                {...popup}
              />
            );
          }

          default: {
            return null;
          }
        }
      })}
    </>
  );
});

export default Popup;
