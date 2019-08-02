import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MyLocationIcon from '@material-ui/icons/MyLocation';

const useStyles = makeStyles(theme => ({
	root: {
		display: 'block',
		width: '15px',
		height: '15px',
		borderRadius: '50%',
		cursor: 'pointer',
		boxShadow: '0 0 0 rgba(100, 255, 218, 0.4)',
		animation: 'pulse 2s infinite',
		'& svg': {
			margin: '-4px',
			color: theme.primary
		},
		'&hover': {
			animation: 'none'
		}
	}
}));

const CurrentLocation = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}><MyLocationIcon color="secondary"/></div>
	)
}

export default CurrentLocation;