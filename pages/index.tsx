import type { NextPage } from 'next';
import Link from 'next/link';
import Menu from '../src/Menu';

const Home: NextPage = () => {
    return (
        <div>
            <Menu />
            <div style={{ padding: '2rem' }}>
                <Link href="/edit/index.md">Edit Index</Link>
            </div>
        </div>
    );
};

export default Home;
