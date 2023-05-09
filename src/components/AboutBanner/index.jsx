import AboutImg from '../../assets/about-img.png'
import '../AboutBanner/AboutBanner.scss'

function AboutBanner() {
  return (
    <article className='about-banner'>
    <img src={AboutImg} alt='Homescape' className='about-banner__img' />
    </article>
  )
}

export default AboutBanner