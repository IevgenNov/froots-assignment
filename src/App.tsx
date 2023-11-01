import { Admin, Resource } from 'react-admin';
import { dataProvider } from './dataProvider';
import { AlbumList } from './pages/albums/AlbumList';
import { Route } from 'react-router-dom';
import { Album } from './pages/album/Album';

export const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="albums" list={AlbumList}>
      <Route path="/:id/photos" element={<Album />} />
    </Resource>
    <Resource name="users" recordRepresentation="name" />
  </Admin>
);
