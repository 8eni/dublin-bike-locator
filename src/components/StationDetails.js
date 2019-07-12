import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Divider from "@material-ui/core/Divider";
import DirectionsBikeIcon from "@material-ui/icons/DirectionsBike";
import LocalParkingIcon from "@material-ui/icons/LocalParking";
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';

function StationDetails(props) {
  const { classes, stationDetails, stationId } = props;
  return (
    <div>
      <ListItem button>
      
        <ListItemText
          primary={`${stationDetails.address}`}
          secondary={`${stationDetails.distance}km`}
        />
        <ListItemSecondaryAction>
        <Chip
        size="small"
        avatar={<Avatar>Km</Avatar>}
        label="Clickable Chip"
      />
          <Chip
          size="small"
          avatar={<Avatar>{stationDetails.available_bikes}</Avatar>}
          label={<DirectionsBikeIcon></DirectionsBikeIcon>}
          variant="outlined"
          color="secondary"
        />
        {/* <Chip
          avatar={<Avatar>{stationDetails.available_bike_stands}</Avatar>}
          label={<LocalParkingIcon></LocalParkingIcon>}
          variant="outlined"
          color="secondary"
        /> */}
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
    </div>
  );
}


export default StationDetails;

// function StationDetails(props) {
//   const { classes, stationDetails, stationId } = props;
//   return (
//     <TableRow key={stationDetails.number} className={stationDetails.number === stationId ? classes.currentStation : ''}>
//       <TableCell className={classes.tableCell} component="th" scope="row">{stationDetails.address}</TableCell>
//       <TableCell className={classes.tableCell} align="right">{stationDetails.available_bike_stands}</TableCell>
//       <TableCell className={classes.tableCell} align="right">{stationDetails.available_bikes}</TableCell>
//       <TableCell className={classes.tableCell} align="right">{stationDetails.distance}</TableCell>
//     </TableRow>
//   );
// }

// StationDetails.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(StationDetails);
