import e from 'express';
import {useState} from 'react';

const ReposList: React.FC = () => {
  const [term, setTerm] = useState('');

const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  console.log(term);
}

  return (
    <>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={ e => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
    </>
  );
};

export default ReposList;
