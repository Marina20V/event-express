import React from 'react';
import './ModalSignUp.module.scss';

function ModalSignUp(closeModal) {
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className ="titleCloseBtn">
                <button type="button" onClick={() => closeModal(false)}> X </button>
                </div>
                <div className="title">
                    <h1>Are u sure</h1>
                </div>
                <div className="body">
                    <p>the next page</p>
                </div>
                <div className="footer">
                    <button type="button" onClick={() => closeModal(false)} id="cancelBtn">Cancel</button>
                    <button type="button">Sign up</button>

                </div>

            </div>
        </div>
    )
}

export default ModalSignUp;
