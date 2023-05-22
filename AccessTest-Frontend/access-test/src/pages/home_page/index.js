import Navbar from '../../components/navbar'
import Content from '../../components/home_content'
import Footer from '../../components/footer';
const Homepage=()=>{
    return(
        <div>
          <Navbar activePage="home"/>
          <Content/>
          <Footer/>
        </div>
    )
}
export default Homepage;