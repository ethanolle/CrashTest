import './Main.css';

const Main = () => {
  const pages: Array<string> = ['Grid', 'Responsive'];
  return (
    <div className='buttonContainer'>
      {pages.map((i) => {
        return <button className='button '>{i}</button>;
      })}
    </div>
  );
};

export default Main;
