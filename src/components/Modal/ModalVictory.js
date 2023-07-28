import { Modal, Button, Col, Row } from 'react-bootstrap';
import './Modal.scss'
const ModalRegister = ({ user, showModalVictory, handleClose, countCorrect, countError, handleNewGame }) => {
    return (
        <>
            <Modal show={showModalVictory} onHide={handleClose} centered backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title className='modal__header__title'>Felicitaciones {user.name}!</Modal.Title>
                </Modal.Header>
                <Modal.Body className='modal__body'>
                    <Row>
                        <Col className='modal__body__title'>Resultados:</Col>
                    </Row>
                    <Row className='modal__body__scores'>
                        <Col className='modal__body__score modal__body__score--correct'>Aciertos: {countCorrect}</Col>
                        <Col className='modal__body__score modal__body__score--error'>Errores: {countError}</Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button className='modal__button' onClick={handleNewGame}>
                        Nueva partida
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalRegister