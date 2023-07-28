import { Row, Col } from 'react-bootstrap';
import './PanelScores.scss'

const PanelScores = ({ countCorrect, countError }) => {
    return (
        <Row className='panel-scores'>
            <Col className='panel-scores__col'>
                <h3 className='panel-scores__title'>Aciertos: {countCorrect} </h3>
                <h3 className='panel-scores__title'>Errores: {countError} </h3>
            </Col>
        </Row>
    )
}

export default PanelScores