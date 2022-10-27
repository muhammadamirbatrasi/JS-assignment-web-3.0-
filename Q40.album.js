function make_album(artistName, albumTitle, totalTracks){
    let albums = {
        albumTitle,
        artistName,
        totalTracks: totalTracks ? totalTracks : "NOT AVAILABLE!"
    }
    return console.log(albums);
}

make_album("Alan Walker", "Faded");
make_album("Atif Aslam", "Dil Diyan Gallan");
make_album("Farhan Saeed", "Naam-e-wafa", 2);
