'use client'
import withAuth from '@/app/utils/withAuth';

interface HomePageProps {
  // Define the props for your home page
}

const HomePage: React.FC<HomePageProps> = (props) => {
  return (
    <main>
        <h2>Home Page</h2>
    </main>
  );
};

export default withAuth(HomePage);
