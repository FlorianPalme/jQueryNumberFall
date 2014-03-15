# jQuery NumberFall Plugin

Erstelle einfache Zahlen-Wasserf�lle um zum Beispiel eine Kontobewegung zu visualisieren.

## Beispiele

= Link folgt =

## Beispiel-Nutzung

### HTML

```html
<div id="value1">500</div>
<div id="value2">500</div>
<div id="value3">2302</div>
<div id="value4">1050</div>
<div id="value5">88356</div>
```

### JavaScript

```javascript
$(function(){
	// Hinaufz�hlen, um 500
    $( '#value1' ).numberFall({
    	plus: 500
    });
    
    // Herunterz�hlen, um 500
    $( '#value2' ).numberFall({
    	minus: 500
    });
    
    
    // Auf 1000 z�hlen
    $( '#value3' ).numberFall({
    	minus:		1000
        , countto: 	true
    });
    
    
    // SEHR langsames hinunterz�hlen
    $( '#value4' ).numberFall({
    	minus:		1000
        , speed:	1500
    });
    
    
    // Schnelles hinunterz�hlen
    $( '#value5' ).numberFall({
    	minus:		1000
        , speed:	'fast' // Alternativ: 5
    });
});
```

## Hinweise

* Ben�tigt jQuery 1.5
* M�glicherweise mit neueren Versionen von jQuery kompatibel, jedoch ungetestet. �ber Feedbak w�rde ich mich freuen!

## Lizenz

Plugin wurde unter der [MIT License](http://bit.ly/1oJsEPq) ver�ffentlicht.