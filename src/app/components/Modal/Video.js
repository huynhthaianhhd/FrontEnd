import React, { memo, useRef, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/fp/get';

import PictureInPicture from 'app/components/PictureInPicture';
import Player from 'app/components/Player';
import {
  StyledModalVideo,
  StyledButtonPIP,
  StyledButtonClose,
} from './styles/StyledModalVideo';

const Video = memo(function Video(props) {
  const [isMinimize, setIsMinimize] = useState(false);
  const { visible, data, onCancel, onPlay, ...remainingProps } = props;
  let refPlayer = useRef(null);

  const onStartHandler = () => {
    const video = get('current.wrapper.childNodes[0]', refPlayer);
    if (!video) return;
    video.setAttribute('controlsList', 'nodownload');
    video.setAttribute('disablePictureInPicture', true);
  };

  const toggleIsMinimize = useCallback(() => {
    setIsMinimize(!isMinimize);
  }, [isMinimize]);

  const options = {
    config: {
      file: {
        forceDASH: true,
        forceVideo: true,
      },
    },
  };
  return (
    <StyledModalVideo
      onCancel={onCancel}
      width={1205}
      centered
      visible={visible}
      footer={false}
      {...remainingProps}
      wrapClassName="events-none"
    >
      <PictureInPicture isMinimize={isMinimize}>
        <Player
          ref={refPlayer}
          onPlay={onPlay}
          controls={true}
          url={get('url', data)}
          pip={false}
          width="1205px"
          height="678px"
          playing
          onStart={onStartHandler}
          {...(get('isStreaming', data) && options)}
        />
        <StyledButtonPIP
          type={
            !!isMinimize
              ? 'icon-picture-in-picture-out'
              : 'icon-picture-in-picture'
          }
          onClick={toggleIsMinimize}
        />
        <StyledButtonClose type={'icon-cross'} onClick={onCancel} />
      </PictureInPicture>
    </StyledModalVideo>
  );
});

Video.propTypes = {
  visible: PropTypes.bool,
  data: PropTypes.any,
  onCancel: PropTypes.func,
  onPlay: PropTypes.func,
};

export default Video;
