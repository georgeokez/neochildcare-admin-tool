import {Box,Avatar,Card,CardContent,Grid,Typography} from '@material-ui/core';
import { green, red } from '@material-ui/core/colors';
  
  
const DashbaordCard = (props) => { 
  return (
    <Card {...props}>
      <CardContent>
        <Grid 
        container 
        spacing={3} 
        sx={{ justifyContent: 'space-between' }}>
          <Grid item>
            <Typography 
            color="textSecondary" 
            gutterBottom 
            variant="h6">
              {props.message}
            </Typography>
            <Typography 
             color="textPrimary" 
             variant="h2">
              {props.numbers}
            </Typography>
          </Grid>
          <Grid item
               sx={{ paddingLeft: '0 !important'}} 
          >
            <Avatar
              sx={{
                backgroundColor: props.color,
                height: 56,
                width: 56
              }}
            >
              {props.icon}
            </Avatar>
          </Grid>
        </Grid>
        <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          pt: 2
        }}
      >
        {props.arrowType}
        <Typography
          variant="body2"
          sx={{
            color: props.percentColor,
            mr: 1
          }}
        >
          {props.percentage}%
        </Typography>
        <Typography
          color="textSecondary"
          variant="caption"
        >
          Since last month
        </Typography>
      </Box>
      </CardContent>
    </Card>
  );
        
}
  export default DashbaordCard;
  