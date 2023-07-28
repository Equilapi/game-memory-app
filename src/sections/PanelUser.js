import { Row, Col } from 'react-bootstrap';
import './PanelUser.scss'

const PanelUser = ({ user }) => {
    const { name } = user
    return (
        <Row className='panel-user'>
            <Col>
                <h1 className='panel-user__title'>Hola {name}, vamos a jugar!</h1>
            </Col>
        </Row>
    )
}
export default PanelUser