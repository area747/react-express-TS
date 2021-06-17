import e from 'express';
import path from 'path';

const app = e();
app.use( '/', e.static( path.join( __dirname, '..', '..', 'client', 'build' ) ) );
app.use( e.json() );
app.use( e.urlencoded( { extended: true } ) )

app.get( '/', function ( req, res, next ) {
    res.sendFile( path.join( __dirname, '..', '..', 'client/build/index.html' ) );
} );
//app.use(e.static(root));

app.listen( 7000 );
