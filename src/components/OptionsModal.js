import React from 'react'

import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => {
  
})

const OptionsModal = ({open, handleClose}) => {
    return (
        <div>
            <Modal
            aria-labelledby='transition-modal-title'
            aria-describedby='transition-modal-description'
            className="modal-paper"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
            >
            <Fade in={open}>
              <div className="modal-paper">
                <h2 id='transition-modal-title'> modal</h2>
                <p id='transition-modal-description'>
                  Imported Modal
                </p>
              </div>
            </Fade>
          </Modal>
        </div>
    )
}

export default OptionsModal
