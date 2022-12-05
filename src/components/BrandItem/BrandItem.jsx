import { Link } from "react-router-dom"
import SportsWLogo from './../../assets/spwr-logo.svg'

const BrandItem = () => {
  return (
    <Link to={'/'} className='navbar-brand'>
        <img src={SportsWLogo} alt="SportsWear Logo" width={150}/>
    </Link>
  )
}

export default BrandItem