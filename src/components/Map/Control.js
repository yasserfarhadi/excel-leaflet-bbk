import { useMapEvents } from 'react-leaflet';
import { actions } from '../../redux';

function Control({ dispatch }) {
  const mapEvents = useMapEvents({
    zoomend: () => {
      if (mapEvents.getZoom() === 13) {
        dispatch(actions.showHideMarks(true));
      }
      if (mapEvents.getZoom() === 12) {
        dispatch(actions.showHideMarks(false));
      }
    },
  });

  return null;
}

export default Control;
