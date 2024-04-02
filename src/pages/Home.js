import mainBanner from '../images/marketing main page banner.png';

function Home() {
  return (
    <div>
      <img src={mainBanner} alt="Main Banner" className="banner-image"/>
      <h1>Esileht</h1>
    </div>
  )
}

export default Home;
