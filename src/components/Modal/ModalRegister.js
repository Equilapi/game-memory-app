import { Modal, Button, Form } from 'react-bootstrap';
import './Modal.scss'

const ModalRegister = ({ handleSubmit, showModal, handleClose, handleChange}) => {
    return (
        <>
            <Modal show={showModal} onHide={handleClose} backdrop="static"
                keyboard={false} aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title className='modal__header__title'>Ingresa tu nombre</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" autoComplete='off' name="name" onChange={handleChange} required/>
                        </Form.Group>
                        <Button onClick={handleClose} type='submit' className='modal__button modal__button--right'>
                            Jugar
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ModalRegister