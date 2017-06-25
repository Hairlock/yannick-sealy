import Link from 'next/link'
import Icon from './icon'

const Header = () => (
    <header>
        <Link href="/">
            <a className="logo">Home</a>
        </Link>
        <Link href="/">
            <Icon type="facebook" />
        </Link>
    </header>
)

export default Header