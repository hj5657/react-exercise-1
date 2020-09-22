import React, { Component } from 'react';
import './App.scss';
import imgURL from './assets/avatar.jpg';
import PropTypes from 'prop-types';
const Picture = () => <img src={imgURL} className="picture" alt="myPicture" />;
const Title = () => {
  return (
    <div>
      <h1>HELLO,</h1>
      <h2>MY NAME IS KAMIL 24YO AND THIS IS MY RESUME/CV</h2>
    </div>
  );
};
const Intruction = () => {
  return (
    <div style={{ padding: 10 }}>
      <h3 style={{ paddingBottom: 10 }}>ABOUT ME</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus,
        non, dolorem, cumque distinctio magni quam expedita velit laborum sunt
        amet facere tempora ut fuga aliquam ad asperiores voluptatem dolorum!
        Quasi.
      </p>
    </div>
  );
};
const EduItem = (props) => {
  return (
    <div className="eduitem">
      <div className="eduleft">
        <font style={{ fontWeight: 'bolder' }}>{props.time}</font>
      </div>
      <div className="eduright">
        <p style={{ fontWeight: 'bolder' }}>{props.boldline}</p>
        <p>{props.nextline}</p>
      </div>
    </div>
  );
};
EduItem.propTypes = {
  time: PropTypes.string,
  boldline: PropTypes.string,
  nextline: PropTypes.string,
};
const EduList = () => {
  return (
    <ul>
      <li>
        <EduItem
          time="1990"
          boldline="I was born in Katowice"
          nextline="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente,
        exercitationem, totam, dolores iste dolore est aut modi."
        />
      </li>
      <li>
        <EduItem
          time="2005"
          boldline="Secondary school specializing in artistic"
          nextline="Eos, explicabo, nam, tenetur et ab eius deserunt aspernatur ipsum ducimus quibusdam quis voluptatibus."
        />
      </li>
      <li>
        <EduItem
          time="2009"
          boldline="First level graduation in Graphic Design"
          nextline="Aspernatur, mollitia, quos maxime eius suscipit sed beatae ducimus quaerat quibusdam perferendis? lusto, quibusdam asperiores unde
          repel lat."
        />
      </li>
      <li>
        <EduItem
          time="2012"
          boldline="Second level graduation in Graphic Design"
          nextline="Ducimus, aliquam tempore autem itaque et accusantium!"
        />
      </li>
    </ul>
  );
};
class App extends Component {
  render() {
    return (
      <main className="app">
        <div className="head">
          <Picture />
          <Title />
          <hr style={{ color: '#ededed' }} />
        </div>
        <Intruction />
        <h3 style={{ padding: 10 }}>EDUCATION</h3>
        <EduList />
      </main>
    );
  }
}

export default App;
