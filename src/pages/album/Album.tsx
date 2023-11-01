import { Show, ReferenceManyField } from 'react-admin';
import Photos from './photos/Photos';
import { Grid } from '@mui/material';

export const Album = () => (
  <Show>
    <Grid item xs={6}></Grid>
    <ReferenceManyField reference="photos" target="albumId">
      <Photos />
    </ReferenceManyField>
  </Show>
);
