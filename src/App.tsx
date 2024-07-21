import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookListPage from './pages/BookListPage';
import BookDetailPage from './pages/BookDetailPage';
import AddBookPage from './pages/AddBookPage';
import EditBookPage from './pages/EditBookPage';
import { ToastProvider } from './components/common/Toast/ToastManager';

const App = () => {

  return (
    <ToastProvider>
      <Router>
        <Routes>
          <Route path="/" element={<BookListPage />} />
          <Route path="/book/:id" element={<BookDetailPage />} />
          <Route path="/add-book" element={<AddBookPage />} />
          <Route path="/edit-book/:id" element={<EditBookPage />} />
        </Routes>
      </Router>
    </ToastProvider>
  );
};

export default App;

