import { Row } from 'react-bootstrap';
import Article from '../components/Article/Article';
import './GridArticles.scss'

const GridArticles = ({ articles, animated, handleClick, previewState }) => {

    return (
        <Row className='grid-articles'>
            {articles.map((article, i) => (
                <Article key={`${i}_${article.meta.name}`} article={article} animated={animated} handleClick={handleClick} previewState={previewState} />
            ))}
        </Row>
    )
}
export default GridArticles