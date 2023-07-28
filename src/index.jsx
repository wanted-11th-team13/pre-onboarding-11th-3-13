import ReactDOM from 'react-dom/client';
import App from './app/App.jsx';
import { GithubProvider } from './context/GithubContext.jsx';
import ErrorBoundary from './utils/ErrorBoundary.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <ErrorBoundary>
      <GithubProvider>
        <App />
      </GithubProvider>
    </ErrorBoundary>
  </>
);
