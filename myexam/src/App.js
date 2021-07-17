
import classess from './App.css';

import HomeLayout from './layouts/HomeLayout';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { TeacherLayout } from './layouts/TeacherLayout';


function App() {
  return (
    <div className={classess.App}>
      <Router>
        <Switch>
          <Route path="/" exact component={HomeLayout} />
          <Route path="/teacherdashboard/1" component={TeacherLayout} />

        </Switch>


      </Router>


    </div>
  );
}

export default App;
