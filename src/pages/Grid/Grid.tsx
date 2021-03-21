import './Grid.css';

const Grid = () => {
  return (
    <div className='grid-container'>
      <div className='grid-item item1'>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum
      </div>
      <div className='grid-item'>2</div>
      <div className='grid-item nested'>
        <div>test</div>
        <div>test</div>
        <div>test</div>
      </div>
      <div className='grid-item'>4</div>
      <div className='grid-item'>5</div>
      <div className='grid-item'>6</div>
    </div>
  );
};

export default Grid;
