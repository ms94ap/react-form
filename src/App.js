import React from 'react';
import SubmitForm from './components/SubmitForm'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return(
    <main className="container">
      <section className="row mt-5">
        <article className="col-md-6 offset-md-3">
          <SubmitForm/>
        </article>
      </section>
    </main>
  )
}

export default App;
