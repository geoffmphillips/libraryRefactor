var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },
   printPlaylists: function() {
     for (var pList in this.playlists) {
       console.log(`${this.playlists[pList]['id']}: ${this.playlists[pList]['name']} - ${this.playlists[pList]['tracks'].length} tracks`);
     }
   },
   printTracks: function() {
     for (var tList in this.tracks){
       console.log(`${this.tracks[tList]['id']}: ${this.tracks[tList]['name']} by ${this.tracks[tList]['artist']} (${this.tracks[tList]['album']})`);
     }

   },

   printPlaylist: function (playlistId) {
     var pTracks = this.playlists[playlistId].tracks;
     var output = `${playlistId}: ${this.playlists[playlistId]['name']} - ${this.playlists[playlistId]['tracks'].length} tracks\n`
     for (var i = 0; i < pTracks.length; i++){
       for (var track in this.tracks){
         if (pTracks[i] === track){
           output += `${track}: ${this.tracks[track]['name']} by ${this.tracks[track]['artist']} (${this.tracks[track]['album']})\n`
         }
       }
     }
     console.log(output);
   },

   addTrackToPlaylist: function(trackId, playlistId) {
     var output = "";
     var tArray = [];
     var pArray = [];



     for (var t in this.tracks) {
       tArray.push(t);
     }
     for (var p in this.playlists) {
       pArray.push(p);
     }

     if ((tArray.indexOf(trackId) < 0) || (pArray.indexOf(playlistId)) < 0){
       return "track or playlist doesn't exist";
     }
     if (this.playlists[playlistId].tracks.indexOf(trackId) >= 0) {
       return "track is already on playlist";
     }
     this.playlists[playlistId].tracks.push(trackId);
       return `Congratulations! ${trackId} is added to ${playlistId}. Here's your new track list [${this.playlists[playlistId].tracks}]`;
   },

   uid: function() {
     return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
   },

   addTrack: function (name, artist, album) {
     var newTrackId = this.uid();
     this.tracks[newTrackId] = {
       id: newTrackId,
       name: name,
       artist: artist,
       album: album
     };
   },

   addPlaylist: function (name) {
     var newPlaylistId = this.uid();
     this.playlists[newPlaylistId] = {
       id: newPlaylistId,
       name: name
     };
   },

   // STRETCH:
   // given a query string string, prints a list of tracks
   // where the name, artist or album contains the query string (case insensitive)
   // tip: use "string".search("tri")
   // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

   printSearchResults: function(query) {

   }

};

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

// var printPlaylists = function () {
//   for (var pList in library.playlists){
//     console.log(`${library.playlists[pList]['id']}: ${library.playlists[pList]['name']} - ${library.playlists[pList]['tracks'].length} tracks`);
//   }
// };


// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
//
// var printTracks = function () {
//   for (var tList in library.tracks){
//     console.log(`${library.tracks[tList]['id']}: ${library.tracks[tList]['name']} by ${library.tracks[tList]['artist']} (${library.tracks[tList]['album']})`);
//   }
//
// };


// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

// var printPlaylist = function (playlistId) {
//   var pTracks = library.playlists[playlistId].tracks;
//   var output = `${playlistId}: ${library.playlists[playlistId]['name']} - ${library.playlists[playlistId]['tracks'].length} tracks\n`
//   for (var i = 0; i < pTracks.length; i++){
//     for (var track in library.tracks){
//       if (pTracks[i] === track){
//         output += `${track}: ${library.tracks[track]['name']} by ${library.tracks[track]['artist']} (${library.tracks[track]['album']})\n`
//       }
//     }
//   }
//   console.log(output);
// };


// adds an existing track to an existing playlist
// var addTrackToPlaylist = function (trackId, playlistId) {
//   var output = "";
//   var tArray = [];
//   var pArray = [];
//
//   for (var t in library.tracks) {
//     tArray.push(t);
//   }
//   for (var p in library.playlists) {
//     pArray.push(p);
//   }
//   if ((tArray.indexOf(trackId) < 0) || (pArray.indexOf(playlistId)) < 0){
//     return "track or playlist doesn't exist";
//   }
//   if (library.playlists[playlistId].tracks.indexOf(trackId) >= 0) {
//     return "track is already on playlist";
//   }
//   library.playlists[playlistId].tracks.push(trackId);
//   return `Congratulations! ${trackId} is added to ${playlistId}. Here's your new track list [${library.playlists[playlistId].tracks}]`;
// };
//

// generates a unique id
// (use this for addTrack and addPlaylist)
// var uid = function() {
//   return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
// };


// adds a track to the library
// var addTrack = function (name, artist, album) {
//   var newTrackId = uid();
//   library.tracks[newTrackId] = {
//     id: newTrackId,
//     name: name,
//     artist: artist,
//     album: album
//   };
// };


// adds a playlist to the library
// var addPlaylist = function (name) {
//   var newPlaylistId = uid();
//   library.playlists[newPlaylistId] = {
//     id: newPlaylistId,
//     name: name
//   };
// };


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

// var printSearchResults = function(query) {
//
// };

//
// printPlaylists();
// printTracks();
// printPlaylist("p01");
// console.log(addTrackToPlaylist("t03","p01"));
// addTrack("This is a Song Name", "First Last", "This is an album");
// addPlaylist("This is a new playlist");
// library.printPlaylists();
// library.printTracks();

console.log(library.addTrackToPlaylist("t03", "p01"));
console.log(library.addTrackToPlaylist("t04", "p02"));
