USE top_songsDB;

-- SELECT * FROM top5000;

-- SELECT * FROM top_albums;


SELECT top5000.artist, top_albums.year, song, album FROM  
top_albums INNER JOIN top5000 
ON (top_albums.artist = top5000.artist AND top_albums.year = top5000.year)
WHERE top5000.artist = "Queen"
ORDER BY top5000.artist;
