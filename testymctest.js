const string = `
Title: Between the Chairs
Author: Rick Schubert

INT. SOOTHING ROOM
AUDREY is sitting on a couch opposite NORA (a few years older) who is placed in a comfortable big arm chair.

AUDREY
What do you want me to say?

NORA
How do you mean?

AUDREY
How should I feel about it?

NORA
This is not up to me.

AUDREY
But I wish it was.

NORA
Why?

AUDREY
Because I don't feel how I am supposed to feel.

NORA
How are you supposed to feel?

AUDREY
Remorseful! Guilty! Ashamed! I mean, I threw a fricking candy jar to the ground!

NORA
Well, apparently the guy deserved it.

AUDREY
_I_ said that he deserved it!

NORA
Did he not?

AUDREY
Yes he did! I hate how racist I sound, because believe me, I am _not_! You know me, I have been going to demos since forever, I am far from a racist - but it is just the sad fact that it is always the same kind of people that treat me like a piece of meat.

NORA
I find it very interesting that you seem to entertain the idea of having to feel a certain way. If I understand you correctly, you are saying that there is only one way to have reacted in this situation - which was not the way you picked.

AUDREY
I am confused. Don't you always say I should react calmer, do a breathing exercise and what not?

NORA
Yes, bu-

AUDREY
But what?
(beat)
Is it not enough that I do want to feel that way because I believe it would make me normal?

NORA
I'm glad you say that.

AUDREY
Because it wouldn't.

NORA
You don't have to be normal.

AUDREY
I don't even want to be.
(beat)
It doesn't matter what

INT. HERE GOES A SCENE
START
lalad
as
fda
sdf
asd
fdas
f
asdf
PING

EXT. THIS IS THE LAST SCENE

START
fadsfasdf
asdf
asdf
dsaf
asdf
sadf
PING

INT/EXT. THIS IS A NOTHER SCHENE

START
dasf
asdf
dsf
fd
sa
fsd
f
PING
`

const config = {
    "comments": {
                // symbol used for single line comment. Remove this entry if your language does not support line comments
                "lineComment": "//",
                // symbols used for start and end a block comment. Remove this entry if your language does not support block comments
                "blockComment": [ "/*", "*/" ]
    },
    // symbols used as brackets
    "brackets": [
        ["(", ")"]
    ],
    // symbols that are auto closed when typing
    "autoClosingPairs": [
        ["(", ")"],
        ["*", "*"],
        ["_", "_"],
        ["[", "]"]
    ],
    // symbols that that can be used to surround a selection
    "surroundingPairs": [
        ["*", "*"],
        ["(", ")"],
        ["\"", "\""],
        ["'", "'"],
        ["[","]"]
    ],
    "folding": {
        "markers": {
          "start": "^(?:INT\\.|EXT\\.|INT/EXT\\.) .+$",
          "end": "^\n(?=(^(?:INT\\.|EXT\\.).+$))"
        // "end": "^PING$"
        //   "end": "\n^(?:INT\\. |EXT\\. |INT\\.\/EXT\\. ).+$"
        // "start": "^NORA$",
        // "end": "^AUDREY$"
        }
      },
}


const pattern = config.folding.markers.end

console.log(string.match(new RegExp(pattern, "gm")))
