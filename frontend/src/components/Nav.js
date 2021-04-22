import React, {useState} from 'react';
// import './App.css'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles({
    drw:{
        // background: ('red'),
    borderRadius: 3,
    border: 0,
    color: 'blue',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    }
})

const Nav = () => {

    const classes =useStyles()
    const [state, setState] = useState(false)
    const ToggleDrawer = (open) => (event) =>{
        setState(open)
    }
        const list = () => (
            <div onClick={ToggleDrawer(false)}>
            <List   className={classes.drw} >
                <ListItem button>USMC</ListItem>
            </List>
            </div>
        )

    return (
			<div>
				<Button className={classes.drw} onClick={ToggleDrawer(true)}>
					<MenuIcon />
				</Button>

				<Drawer anchor={'left'} open={state} onClose={ToggleDrawer(false)}>
					{list()}

					<List>
						<ListItem>
							<Button color='primary' href='/'>
								Home
							</Button>
						</ListItem>
						<ListItem>
							<Button color='primary' href='/values'>
								Values
							</Button>
						</ListItem>
						<ListItem>
							<Button color='primary' href='/fitness'>
								Fitness
							</Button>
						</ListItem>
						{/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem  button key={text}>
            <ListItemIcon >{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))} */}
					</List>
				</Drawer>
			</div>
		); 
}
        
 

            

export default Nav;