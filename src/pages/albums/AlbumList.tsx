import {
  Datagrid,
  List,
  ReferenceField,
  ReferenceInput,
  FunctionField,
} from 'react-admin';
import { Link } from 'react-router-dom';
import { IAlbum } from '../../types/album';

export const AlbumList = () => (
  <List
    actions={false}
    filters={[
      <ReferenceInput
        key="userId"
        source="userId"
        label="User"
        reference="users"
        name="name"
        alwaysOn
      />,
    ]}
  >
    <Datagrid bulkActionButtons={false}>
      <ReferenceField source="userId" reference="users" />
      <FunctionField
        label="Title"
        render={({ title, id }: IAlbum) => (
          <Link to={`/albums/${id}/photos`}>{title}</Link>
        )}
      />
      ;
    </Datagrid>
  </List>
);
