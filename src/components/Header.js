export default function Header({ logo }){
    return(
        <header>
            <h1 style={{ textAlign: "center" }}>Test React APP</h1>
            <img src={logo} alt="Test React APP" style={{ height: "100px" }} />
        </header>
    )
}