import { BrowserRouter, Route, Switch } from 'react-router-dom';
import StorePicker from './StorePicker';
import App from './App';
import NotFound from './NotFound';

const Router = () => (
  <BrowserRouter>
    <Switch>
      {/* URL is exactly equaled to / so that the page will be rendered to StorePicker component. */}
      <Route exact path="/" component={StorePicker} />
      <Route path="/stores/:storeId" component={App} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
