/*********************************
 * @author: Dominik Florian Palme
 * @authorwebsite: http://florian-palme.de/
 * @date: 23.02.2011
 * @version: 1.0.0
 ********************************/

 (function($){
    
    $.numberFall = function(el, options){
        // To avoid scope issues, use 'base' instead of 'this'
        // to reference this class from internal events and functions.
        var base = this;
        
        // Access to jQuery and DOM versions of element
        base.$el = $(el);
        base.el = el;
        
        // Add a reverse reference to the DOM object
        base.$el.data("numberFall", base);
        
        base.init = function(){
            base.options = $.extend({},$.numberFall.defaultOptions, options);
			base.calcOptions = [];
            
            // Put your initialization code here
			if(base.options.plus != 0) { base.plusCount(base.options.plus); }
			else if(base.options.minus != 0) { base.minusCount(base.options.minus); }
			else if(base.options.countto != false || base.options.countto == 0) { 
				if(base.options.countto > parseInt(base.$el.text())) { base.plusCount(base.options.countto - parseInt(base.$el.text())); } else { base.minusCount(parseInt(base.$el.text()) - base.options.countto); }
			}
        };
        
        // Sample Function, Uncomment to use
        // base.functionName = function(paramaters){
        // 
        // };
		
		base.plusCount = function(p){
			var toCount = p;
			var number = parseInt(base.$el.text());
			
			var speed = base.options.speed;
			
			base.calcOptions.toCount = toCount;
			base.calcOptions.number = number;
			
			switch(speed)
			{
				case 'very slow':
						speed = 1000;
					break;
					
				case 'slow':
						speed = 500;
						
				case 'medium':
						speed = 100;
					break;
					
				case 'fast':
						speed = 10;
					break;
				
				case 'very fast':
						speed = 5;
					break;
			}

			
			base.timeout = window.setInterval(base.doPlusCount, speed);
		}
		
		
		base.doPlusCount = function(e){
			base.$el.text(++base.calcOptions.number);
			
			if(--base.calcOptions.toCount == 0)
			{
				window.clearInterval(base.timeout);
			}
		}
		
		
		base.minusCount = function(p){
			var toCount = p;
			var number = parseInt(base.$el.text());
			
			var speed = base.options.speed;
			
			base.calcOptions.toCount = toCount;
			base.calcOptions.number = number;
			
			switch(speed)
			{
				case 'very slow':
						speed = 1000;
					break;
					
				case 'slow':
						speed = 500;
						
				case 'medium':
						speed = 100;
					break;
					
				case 'fast':
						speed = 10;
					break;
				
				case 'very fast':
						speed = 5;
					break;
			}

			
			base.timeout = window.setInterval(base.doMinusCount, speed);
		}
		
		
		base.doMinusCount = function(e){
			base.$el.text(--base.calcOptions.number);
			
			if(--base.calcOptions.toCount == 0)
			{
				window.clearInterval(base.timeout);
			}
		}
        
        // Run initializer
        base.init();
    };
    
    $.numberFall.defaultOptions = {
        speed: "medium",
        plus: 0,
        minus: 0,
        counto: false
    };
    
    $.fn.numberFall = function(options){
        return this.each(function(){
            (new $.numberFall(this, options));
        });
    };
    
})(jQuery);
