import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import useStyles from './styles'
export default function TitlebarImageList() {
    const classes=useStyles()
  return (
    <ImageList sx={{ width: '70%', height: 450 }} className={classes.parent} >
     
      {itemData.map((item) => (
        <ImageListItem key={item.img} className={classes.child} >
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://images.pexels.com/photos/7061393/pexels-photo-7061393.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Accomodations',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Tour',
  },
  {
    img: 'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Fitness',
  },
  {
    img: 'https://images.pexels.com/photos/3764568/pexels-photo-3764568.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Massage',
    author: '@nolanissac',
    cols: 2,
  },
  {
    img: 'https://images.pexels.com/photos/122244/pexels-photo-122244.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'swimming',
    author: '@hjrc33',
    cols: 2,
  },
  {
    img: 'https://images.pexels.com/photos/4724380/pexels-photo-4724380.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'gastronomia italiana',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.pexels.com/photos/1194408/pexels-photo-1194408.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Reading',
  },

  {
    img: 'https://images.pexels.com/photos/1907228/pexels-photo-1907228.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'chinese food',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.pexels.com/photos/358010/pexels-photo-358010.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Entertainment',
  },
  {
    img: 'https://images.pexels.com/photos/7991139/pexels-photo-7991139.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'cinema',
    cols: 2,
  },
];
