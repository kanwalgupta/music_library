class Library {
    constructor(name, creator){
      this.name = name;
      this.creator = creator;
      this.playlists = [];
    }
  
    addPlaylist(playlist) {
      if (playlist instanceof Playlist) {
        this.playlists.push(playlist)
      }
    }
  
  }
  
  class Playlist {
    constructor(name){
      this.name = name;
      this.tracks = [];
    }
  
  addTrack(track) {
      if(track instanceof Track) {
        this.tracks.push(track);
      }
    }
  
    overallRating() {
      let sum = 0;
      this.tracks.forEach((element) => {
        sum += element.rating;
      })
      return sum / this.tracks.length
    }
  
    totalDuration() {
      let total = 0;
      this.tracks.forEach((element) => {
        total += element.length;
      })
      return total;
    }
  }
  
  class Track {
    constructor(title, rating, length){
      this.title = title;
      this.rating = rating;
      this.length = length;
    }
  }

const library = new Library("lonewolf", "ishu");
const playlist = new Playlist("workout");
const track1 = new Track("mirrors", 4, 180);
const track2 = new Track("warrior", 5, 220);



playlist.addTrack(track1);
playlist.addTrack(track2);

library.addPlaylist(playlist);

console.log("library",library);
console.log("playlist",playlist);
