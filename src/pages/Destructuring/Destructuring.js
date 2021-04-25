import "./Destructuring.css";

const Destructuring = () => {
  // Array Destructuring
  const number = [1, 2, 3, 4, 5, 6];

  const sumAndMultiply = (a, b) => {
    return [a + b, a * b, a / b];
  };

  const [sum, multiply, division = "No Division"] = sumAndMultiply(5, 5);
  // End of Array Destructuring.

  // Object Destructuring
  const Ethan = {
    name: "Ethan",
    surName: "Sayagh",
    age: "20",
    address: {
      city: "TelAviv",
      street: "Borochove",
    },
  };

  const {
    name: prenom,
    surName: nom,
    address: { city },
  } = Ethan;

  const { city: ville } = Ethan.address;

  return (
    <div className='DestructuringContainer'>
      <h1 className='exampleOfArray'>
        {sum},{multiply},{division}
      </h1>
      <h1 className='exampleOfObject'>
        {prenom},{nom},{city},{ville}
      </h1>
    </div>
  );
};

export default Destructuring;
