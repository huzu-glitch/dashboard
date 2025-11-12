import UserProfileCard from './components/UserProfileCard';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <Toaster />
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />

        <main className="flex-1 p-4 overflow-auto flex justify-center items-center">
          <UserProfileCard />
        </main>
      </div>
    </div>
  )
}

export default App
