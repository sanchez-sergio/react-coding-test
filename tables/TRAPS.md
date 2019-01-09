Traps and Pitfalls
==================

Table 1: Beastie Boys
---------------------

None - same as fixture

Table 2: The Beatles
--------------------

* Omaha - 4 hole cards

Ideal submission: tweak the CSS to display 4 hole cards nicely

Table 3: The Rolling Stones
---------------------------

* Only 4 seats
* Seated user (Charlie) not playing

Ideal submission: add CSS to layout 4 seat tables

Table 4: The Happy Mondays
--------------------------

* Additional fold key on player

Ideal submission: don't show folded cards

Table 5: Madonna
----------------

* No current hand

Ideal submission: Make currentHand optional in propTypes and don't error if there's no current hand

Table 6: Alabama 3
------------------

* Hi/Lo Omaha, game is not in expected enum
* Player cards undefined

Ideal submission: Add omaha_hilo to enum, make player cards optional in propTypes and don't error

Table 7: Primal Scream
----------------------

* Player with zero chips
* Duplicate Ace of Spades

Ideal Submission: Flag the duplicate As

Table 8: Super Furry Animals
-----------------------------

* Multiple Pots
* All in player
* Table at showdown

Ideal Submission: Fix the bug in Seat.js to display All-In on the nameplate
