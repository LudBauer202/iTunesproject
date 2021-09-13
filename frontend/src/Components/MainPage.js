import { Component, React } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class DisplaySearch extends Component {
constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.state = {Content: '', MediaType: 'all', SearchQuery: '', Favourites: [], FavRemove: ''};
    
}

//Makes a http request to backend server with body (including the media type and search query)
//and sends back JSON data results
    handleSubmit() {
        let SearchObject = {"MediaType": this.state.MediaType, "SearchQuery": this.state.SearchQuery};
        
        fetch("/Data", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(SearchObject)})
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    Content: result
                });
            },
            (error) => {
                console.log(error);
                this.setState({
                    Content: 'error'
                });
            }
        )
        
    }

//When delete button is clicked, item in array is removed
    handleDelete(index) {
        let CopyArrFav = this.state.Favourites;
        CopyArrFav.splice(index, 1);
        this.setState({Favourites: CopyArrFav});
    }

    render() {

        const COPYCONTENTS = this.state.Content.results;
        const COPYFAVS = this.state.Favourites;
        let resultCount = this.state.Content.resultCount;
 //Tests to see if there was error with fetch request
        if (this.state.Content === 'error') {
            return <div>Error 404</div>;
//If Content variable is empty the search page is shown
        } else if (this.state.Content === '') {
            return (
            <Container>
                <Row>
                    <Col>
                    <div className="HomeSearch">
                        <h1 className="HeaderLogo">iTunes</h1>
                        {/*Sets SearchQuery variable to onChange value of the input box
                        Search button runs the function that does the fetch request */}
                        <input placeholder="Search any iTunes product" onChange={(e) => this.setState({SearchQuery: e.target.value})}></input>
                        <button className="btnSearch" onClick={() => this.handleSubmit()}>Search</button>
                        <form>
                            <select onChange={(e) => {this.setState({MediaType: e.target.value})}}>
                                <option value="all">All</option>
                                <option value="movie">Movie</option>
                                <option value="podcast">Podcast</option>
                                <option value="music">Music</option>
                                <option value="musicVideo">Music Video</option>
                                <option value="audiobook">Audio Book</option>
                                <option value="shortFilm">Short Film</option>
                                <option value="tvShow">TV Show</option>
                                <option value="software">Software</option>
                                <option value="ebook">E-book</option>
                                <option value="all">All</option>
                            </select>
                        </form>
                    </div>
                    </Col>
                    </Row>
                    <h1 id="FavHeader">Favourites</h1>
                    <Row>
                        {/*Maps the COPYFAV array with the images that was favorited. Creates button that then calls the delete function*/} 
                        {COPYFAVS.map((COPYFAV, index) => {
                            return (
                                <Col>
                                    <img key={index} src={COPYFAV} alt="favImg"/>
                                    <button className="BackButton" onClick={() => {this.handleDelete(index)}}>X</button>
                                </Col>
                                )
                            })}
                    </Row>
            </Container>
            )
        } else if (resultCount === 0) {
            return (
            <div>
                {/*Resets Content and other variables to go back through the if statements to go back to home page */}
                <button className="BackButton" onClick={() => this.setState({Content: '', MediaType: 'all', SearchQuery: ''})}>Back</button>
                <h1 className="NoResult">No results found</h1>
            </div>
            )
        } else
        return (
            <div>
                <button className="BackButton" onClick={() => this.setState({Content: '',MediaType: 'all',SearchQuery: ''})}>Back</button>
                <h3 id="Results">Results: {resultCount}</h3>
                <Container fluid>
                    {/*Maps through copy of returned JSON content from api and display the different attributes */}
                        {COPYCONTENTS.map((COPYCONTENT, index) =>{
                        return (
                            <Row className="Track">
                                <Col>
                                    <div key={index}>
                                    <img src={COPYCONTENT.artworkUrl100} width='100' alt="sourceImage"/>
                                    <h2>{COPYCONTENT.artistName}</h2>
                                    <h3>{COPYCONTENT.trackName}</h3>
                                    <h5>{COPYCONTENT.primaryGenreName}</h5>
                                    <p>{COPYCONTENT.shortDescription}</p>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="FavButton">
                                        {/*Inserts artwork(Image) in an array to then display as favourite in home search page*/}
                                        <button onClick={() => {
                                       this.setState({ Favourites: [...this.state.Favourites, COPYCONTENT.artworkUrl100] })
                                       }}>Favorite</button>
                                    </div>
                                </Col>
                                </Row>
                            )})}
                </Container>
            </div>
        )
    }
}

export default DisplaySearch;