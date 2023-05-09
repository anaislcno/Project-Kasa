import AboutImg from '../../assets/about-img.png'
import '../AboutBanner/AboutBanner.scss'

function AboutBanner() {
  return (
    <article className='banner'>
    <img src={AboutImg} alt='Homescape' className='banner__img' />
    </article>
  )
}

export default AboutBanner