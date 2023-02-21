import { Button, ClickAwayListener, Grow, MenuItem, MenuList, Paper, Popper } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useRef, useState } from "react";
import { db } from "../../Static Data/theme";

export default function HoverMenu({name,menuItems,logos}){
    const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleOff = () => {
    setOpen((false));
  };
  const handleOn = () => {
    setOpen((true));
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
    return <div>
    <Button
      ref={anchorRef}
      sx={{
            cursor: "pointer",
            "&:hover": {
              bgcolor: db,
            },
            color: "white",
            // padding: "10px",
            borderRadius: "3px",
          }}
      // id="composition-button"
      aria-controls={open ? 'composition-menu' : undefined}
      aria-expanded={open ? 'true' : undefined}
      aria-haspopup="true"
      onMouseOver={handleOn}
      onMouseLeave={()=>{
        setOpen(false)
      }}
    >
      {name}
    </Button>
    <Popper
      open={open}
      anchorEl={anchorRef.current}
      role={undefined}
      placement="bottom-start"
      onMouseOver={handleOn}
      onMouseLeave={handleOff}
      transition
      disablePortal
    >
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          style={{
            transformOrigin:
              placement === 'bottom-start' ? 'left top' : 'left bottom',
          }}
        >
          <Paper width={"fit-content"}>
            <ClickAwayListener onClickAway={handleClose}>
              <MenuList
                autoFocusItem={open}
                id="composition-menu"
                aria-labelledby="composition-button"
                onKeyDown={handleListKeyDown}
              >
              <Box display={"grid"} gridTemplateColumns={["repeat(2,1fr)"]}>
                {menuItems.map((el,i)=>{
                    return <MenuItem key={i} onClick={handleClose}>{el}</MenuItem>
                })}
              </Box>
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  </div>
}