import useActions from 'hooks/useActions';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { makeSelectPopups } from './selectors';
import { actions } from './slice';

export const useHooks = () => {
  const popups = useSelector(makeSelectPopups);
  const { closePopup } = useActions({ closePopup: actions.closePopup }, [
    actions,
  ]);

  const handleClosePopup = useCallback(popup => () => closePopup(popup), [
    closePopup,
  ]);

  return {
    handlers: { handleClosePopup },
    selectors: { popups },
  };
};

export default useHooks;
