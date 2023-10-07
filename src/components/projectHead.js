import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function projectHead(props) {
    const { title, imgurl } = props;
     
    return (
        <Box
        sx={{
            display: 'flex',
            flexDirection: 'row',
            minWidth: '100vw',
            height: '50vh',
            backgroundColor: 'darkblue',
            padding: 0,
            margin: 0,
        }}
        >
            <Box
            sx={{
            flex: 0.1,
            // height: '90%',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'green',
            padding: 0,
            margin: 0,
            justifyContent: 'end'
            }}
        ></Box>
        <Box
            sx={{
            flex: 1,
            // height: '90%',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'yellow',
            padding: 0,
            margin: 0,
            justifyContent: 'end'
            }}
        >
            <Typography
                variant="h1"
                sx={{
                    color: 'black', 
                    fontSize: '400%',
                    fontFamily: 'sans-serif',
                    fontWeight: 800,
                    pl: '2vw',
                    pb: '2vw'
                }}
            >{title}
            </Typography>
        </Box>
        <Box
            sx={{
            flex: 1,
            // height: '90%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'end'
            // backgroundColor: 'red',
            }}
        >
            <Box
                sx={{
                    position: 'relative',
                    backgroundColor: 'grey.800',
                    color: '#fff',
                    height: '45vh',
                    width: '100%',
                    backgroundSize: 'cover',
                    backgroundPosition: 'bottom',
                    backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
                }}
            ></Box>
        </Box>
        <Box
            sx={{
            flex: 0.1,
            backgroundColor: 'green',
            }}
        ></Box>
        </Box>
    );
//   return (
    // <Box
    //   sx={{
    //     position: 'relative',
    //     backgroundColor: 'grey.800',
    //     color: '#fff',
    //     mb: 4,
    //     backgroundSize: 'cover',
    //     backgroundRepeat: 'no-repeat',
    //     backgroundPosition: 'center',
    //     // backgroundImage: `url(${post.image})`,
    //     backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
    //   }}
    // >
//       {/* Increase the priority of the hero background image */}
//       {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />}
//       <Box
//         sx={{
//           position: 'absolute',
//           top: 0,
//           bottom: 0,
//           right: 0,
//           left: 0,
//           backgroundColor: 'rgba(0,0,0,.3)',
//         }}
//       />
//       <Grid container>
//         <Grid item md={6}>
//           <Box
//             sx={{
//               position: 'relative',
//               p: { xs: 3, md: 6 },
//               pr: { md: 0 },
//             }}
//           >
//             <Typography component="h1" variant="h3" color="inherit" gutterBottom>
//               {post.title}
//             </Typography>
//             <Typography variant="h5" color="inherit" paragraph>
//               {post.description}
//             </Typography>
//             <Link variant="subtitle1" href="#">
//               {post.linkText}
//             </Link>
//           </Box>
//         </Grid>
//       </Grid>
//     </Box>
//   );
}

// MainFeaturedPost.propTypes = {
//   post: PropTypes.shape({
//     description: PropTypes.string.isRequired,
//     image: PropTypes.string.isRequired,
//     imageText: PropTypes.string.isRequired,
//     linkText: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//   }).isRequired,
// };

// export default projectHead;