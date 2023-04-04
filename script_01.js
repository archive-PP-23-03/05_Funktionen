"use strict";

/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken

// Funktionsaufruf (call)
// test();

// Funktionsrumpf (body) | callee
// Funktionsdeklaration
function test()
{
    console.log("Hallo Daniel!");
}

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

// ausgabeNamen();

function ausgabeNamen()
{
    // what happens in VEGAS ...
    let firstName = "Evtim";
    console.log("Hallo " + firstName +"!");
}

// console.log(firstName);  // Fehler: Scope!

/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN

// ausgabeNamenParam("Evtim"); // call + Argument(e)
// ausgabeNamenParam("Alexander");
// ausgabeNamenParam("Joe");
// Argumente sind Daten für Parameter

function ausgabeNamenParam(firstName) // Fkt mit Parameter
{
    console.log("Hallo " + firstName +"!");
}

/***** Funktionen 02c *****/
// 2c. Mehrere Parameter

ausgabeNamenParams("Joe","Kaeser");
ausgabeNamenParams(prompt("Vornamen?: "),prompt("Nachnamen?: "));

function ausgabeNamenParams(firstName, familyName) // Fkt mit Parameter
{
    console.log("Hallo " + firstName + " " + familyName + "!");
}



