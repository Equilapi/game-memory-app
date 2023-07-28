import { Col, Card, Image } from 'react-bootstrap';
import './Article.scss';


const Article = ({ article, animated, handleClick, previewState }) => {
    return (
        <Col className='article' onClick={() => (!article.flip && !animated) && handleClick(article)}>
            <Card className={`article__card ${article.flip && 'article__flip' || previewState && 'article__flip'}`}>
                <div className='article__front'>
                    ?
                </div>
                <div className='article__back'>
                    <Image src={article.fields.image.url} rounded className='article__photo' />
                </div>
            </Card>
        </Col>
    )
}
export default Article