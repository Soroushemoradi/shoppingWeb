import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
function SearchBar() {
    const [open, setOpen] = useState(false)
    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }
    return (
        <>
            <button type='button' className=' border border-0 btn-search rounded-5' onClick={handleClickOpen} ><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                    component: 'form',
                }}
            >
                <DialogTitle>Search</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        name="search"
                        label="search"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <button type='button' className='btn border border-0 btn-search rounded-5 mb-2 ' onClick={handleClose} >cancel</button>
                    <button type='submit' className='btn border border-0 btn-search rounded-5 ms-4 mb-2'>search</button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default SearchBar