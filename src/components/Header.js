import Link from 'next/link';

const linkStyle = {
    marginRight: 15
};

const Header = () => (
    <div>
        <Link href="/day">
            <a style={linkStyle}>Today</a>
        </Link>
        <Link href="/plan">
            <a style={linkStyle}>Plan</a>
        </Link>
        <Link href="/recipes">
            <a style={linkStyle}>Recipes</a>
        </Link>
    </div>
);

export default Header;