const testAPI = require('../server');
let expect = require('chai').expect;
let APIResponse = testAPI();

describe('API JSON data', function () {
     it('Test to see if JSON matches', function() {
         
         let expected = {
             "resultCount":1,
             "results": [
            {"wrapperType":"track", "kind":"feature-movie", "collectionId":1489212607, "trackId":991372004, "artistName":"Pierre Coffin & Kyle Balda", "collectionName":"Illumination Apresenta Coleçao 10 Filmes", "trackName":"Minions", "collectionCensoredName":"Illumination Apresenta Coleçao 10 Filmes", "trackCensoredName":"Minions", "collectionArtistId":345353262, "collectionArtistViewUrl":"https://itunes.apple.com/us/artist/universal-studios-home-entertainment/345353262?uo=4", "collectionViewUrl":"https://itunes.apple.com/us/movie/minions/id991372004?uo=4", "trackViewUrl":"https://itunes.apple.com/us/movie/minions/id991372004?uo=4", 
            "previewUrl":"https://video-ssl.itunes.apple.com/itunes-assets/Video122/v4/ef/47/d7/ef47d72c-794e-8d53-9b41-be0bb8662965/mzvf_7739573073633456124.640x458.h264lc.U.p.m4v", "artworkUrl30":"https://is3-ssl.mzstatic.com/image/thumb/Video113/v4/f9/d3/d5/f9d3d599-18fa-3b68-f533-0e775cbe7fc5/source/30x30bb.jpg", "artworkUrl60":"https://is3-ssl.mzstatic.com/image/thumb/Video113/v4/f9/d3/d5/f9d3d599-18fa-3b68-f533-0e775cbe7fc5/source/60x60bb.jpg", "artworkUrl100":"https://is3-ssl.mzstatic.com/image/thumb/Video113/v4/f9/d3/d5/f9d3d599-18fa-3b68-f533-0e775cbe7fc5/source/100x100bb.jpg", "collectionPrice":14.99, "trackPrice":14.99, "trackRentalPrice":3.99, "collectionHdPrice":14.99, "trackHdPrice":14.99, "trackHdRentalPrice":3.99, "releaseDate":"2015-07-10T07:00:00Z", "collectionExplicitness":"notExplicit", "trackExplicitness":"notExplicit", "discCount":1, "discNumber":1, "trackCount":10, "trackNumber":6, "trackTimeMillis":5463128, "country":"USA", "currency":"USD", "primaryGenreName":"Kids & Family", "contentAdvisoryRating":"PG", "shortDescription":"From the moment audiences first experienced them in Illumination Entertainment’s Despicable Me, we", 
            "longDescription":"Since the dawn of time, Minions have served (and accidentally eliminated) history's most despicable villains. After their latest explosive mistake leaves them without an evil leader, the Minions fall into a deep depression. With the tribe on the brink of collapse, three unlikely heroes—Kevin, Stuart, and Bob—embark on a journey to find a new big boss. When their quest leads them to their next potential master, Scarlet Overkill (Academy Award® winner Sandra Bullock), our three heroes must face their biggest challenge yet: saving all of Minionkind…from annihilation!", "hasITunesExtras":true}]
            }
             expect(APIResponse).to.equal(expected)
    })
 });