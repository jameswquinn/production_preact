import { h } from 'preact';
import { render } from 'preact';
import { Router } from 'wouter';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import './styles/main.scss';

const App = () => (
  <div>
    <Header />
    <Router>
      <main>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route component={NotFound} />
      </main>
    </Router>
  </div>
);

render(<App />, document.body);
