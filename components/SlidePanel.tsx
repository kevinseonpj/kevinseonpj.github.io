import Flicking from '@egjs/react-flicking';
import '@egjs/react-flicking/dist/flicking.css';

const SlidePanel = (): JSX.Element => (
  <Flicking
    align="prev"
    circular={true}
    // onMoveEnd={e => {
    //   console.log(e);
    // }}>
  >
    <div className="flex items-center justify-center mb-14 panel">1</div>
    <div className="flex items-center justify-center mb-14 panel">2</div>
    <div className="flex items-center justify-center mb-14 panel">3</div>
  </Flicking>
);
export default SlidePanel;
