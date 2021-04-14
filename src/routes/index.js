import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Serviço1 from '../../src/components/Serviço1';
import Serviço2 from '../../src/components/Serviço2';
import Serviço3 from '../../src/components/Serviço3';
import Serviço4 from '../../src/components/Serviço4';
import Serviço5 from '../../src/components/Serviço5';
import Serviço6 from '../../src/components/Serviço6';


export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Serviço1" exact component={Serviço1} />
      <Route path="/Serviço2" exact component={Serviço2} />
      <Route path="/Serviço3" exact component={Serviço3} />
      <Route path="/Serviço4" exact component={Serviço4} />
      <Route path="/Serviço5" exact component={Serviço5} />
      <Route path="/Serviço6" exact component={Serviço6} />
    </Switch>
  );
}
