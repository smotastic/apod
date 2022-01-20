import { Box, BoxProps} from '@mui/material'
import { GetServerSideProps } from 'next';
import { apod, ApodDetails } from '../data/apod';
import ApodCard from '../components/apod/ApodCard';


function Item(props: BoxProps) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 1,
        m: 1,
        ...sx,
      }}
      {...other}
    />
  );
}

type HomeProps = {
  data: ApodDetails[]
}

export default function Home({ data }: HomeProps) {


  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
        {data.map(apod => {
          return <Item key={apod.title}><ApodCard data={apod} /></Item>;
        })}
      </Box>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  // const res = await fetch('/api/data/apod/find');
  const res = await apod.find();
  return {
    props: {
      data: res
    }
  }
}