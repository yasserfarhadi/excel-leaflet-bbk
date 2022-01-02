import { useEffect, useMemo, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ChangeView,
} from 'react-leaflet';
import Control from './Control';

const defaultCenter = [35.6892, 51.389]; //tehran

function Map() {
  const map = useRef();
  const store = useSelector((store) => store);
  const dispatch = useDispatch();

  useEffect(() => {
    if (store.data && map) {
      let lat = 0;
      let long = 0;
      store.data.forEach((mark) => {
        lat += Number(mark.lat);
        long += Number(mark.long);
      });
      map.current.flyTo(
        [lat / store.data.length, long / store.data.length],
        12
      );
    }
  }, [store.data]);

  const marksData = useMemo(() => {
    return (
      store.data &&
      store.data.map((mark) => {
        return (
          <Marker key={mark.lable} position={[mark.lat, mark.long]}>
            <Popup>{mark.lable}</Popup>
          </Marker>
        );
      })
    );
  }, [store.data]);

  return (
    <div>
      <MapContainer
        center={defaultCenter}
        zoom={6}
        scrollWheelZoom={true}
        whenCreated={(mapInstance) => (map.current = mapInstance)}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {store.showMarks && marksData}
        <Control dispatch={dispatch} />
      </MapContainer>
    </div>
  );
}

export default Map;
