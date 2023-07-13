import ReactDOM from 'react-dom/client';
import App from './app/App.jsx';
import { GithubProvider } from './context/GithubContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <GithubProvider>
      <App />
    </GithubProvider>
  </>
);
