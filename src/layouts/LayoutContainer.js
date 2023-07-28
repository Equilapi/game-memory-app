import { Container } from 'react-bootstrap';
import GridArticles from '../sections/GridArticles'
import PanelScores from '../sections/PanelScores';
import PanelUser from '../sections/PanelUser';

const container = ({ user, articles, animated, handleClick, countCorrect, countError, previewState }) => {
  return (
    <Container className='layout-container'>
      <PanelUser user={user} />
      <PanelScores countCorrect={countCorrect} countError={countError} />
      <GridArticles articles={articles} animated={animated} handleClick={handleClick} previewState={previewState} />
    </Container>
  )
}
export default container