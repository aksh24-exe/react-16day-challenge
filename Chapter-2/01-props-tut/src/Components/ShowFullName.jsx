import Greeting from './Greeting'

function ShowFullName({firstName, lastName}) {
  return (
    <>
      {firstName} {lastName}
    </>
  );
}

export default ShowFullName