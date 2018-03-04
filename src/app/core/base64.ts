export class Base64 {
  getCharacters(){
    return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  }

    encode(str)
    {
        var characters = this.getCharacters();
        var result     = '';

        var i = 0;
        do {
            var a = str.charCodeAt(i++);
            var b = str.charCodeAt(i++);
            var c = str.charCodeAt(i++);

            a = a ? a : 0;
            b = b ? b : 0;
            c = c ? c : 0;

            var b1 = ( a >> 2 ) & 0x3F;
            var b2 = ( ( a & 0x3 ) << 4 ) | ( ( b >> 4 ) & 0xF );
            var b3 = ( ( b & 0xF ) << 2 ) | ( ( c >> 6 ) & 0x3 );
            var b4 = c & 0x3F;

            if( ! b ) {
                b3 = b4 = 64;
            } else if( ! c ) {
                b4 = 64;
            }

            result += characters.charAt( b1 ) + characters.charAt( b2 ) + characters.charAt( b3 ) + characters.charAt( b4 );

        } while ( i < str.length );

        return result;
    }

    decode(str)
    {
        var characters = this.getCharacters();
        var result     = '';

        var i = 0;
        do {
            var b1 = characters.indexOf( str.charAt(i++) );
            var b2 = characters.indexOf( str.charAt(i++) );
            var b3 = characters.indexOf( str.charAt(i++) );
            var b4 = characters.indexOf( str.charAt(i++) );

            var a = ( ( b1 & 0x3F ) << 2 ) | ( ( b2 >> 4 ) & 0x3 );
            var b = ( ( b2 & 0xF  ) << 4 ) | ( ( b3 >> 2 ) & 0xF );
            var c = ( ( b3 & 0x3  ) << 6 ) | ( b4 & 0x3F );

            result += String.fromCharCode(a) + (b?String.fromCharCode(b):'') + (c?String.fromCharCode(c):'');

        } while( i < str.length );

        return result;
    }
}
