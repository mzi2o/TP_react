// import image from '../imag.jpeg'

function Headr(){
    return(
        <div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            {/* <img src={image} alt='img'/> */}
            <img src={require("../imag.jpeg")} alt="kk" />
            <img src= {require("../imag.jpeg")} alt="mm"/>
            <img src={"https://en.wikipedia.org/wiki/Nada_%28singer%29#/media/File:Nada_Malanima.JPG"} alt="nada"/>
        </div>
    )
}
export default Headr;