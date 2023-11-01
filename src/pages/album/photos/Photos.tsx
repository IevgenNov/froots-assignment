import { useListContext } from 'react-admin';
import { IPhoto } from '../../../types/album';
import { Grid } from '@mui/material';

const Photos = () => {
  const { data } = useListContext<IPhoto>();
  if (!data) return null;
  return (
    <Grid container rowSpacing={1} columnSpacing={1}>
      {data.map(({ title, id, thumbnailUrl }) => {
        return (
          <Grid item key={id}>
            <img src={thumbnailUrl} alt={title} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Photos;
