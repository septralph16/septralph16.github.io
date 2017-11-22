(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.collectable = window.opspark.collectable || {};
    let collectable = window.opspark.collectable;
    
    let type = {
        db: {assetKey: 'db', points: 19},
        max: {assetKey: 'max', points: 17},
        steve: {assetKey: 'steve', points: 31},
        grace: {assetKey: 'grace', points: 24},
        kennedi: {assetKey: 'kennedi', points: 33}
    };
    
    /**
     * init: Initialize all collectables.
     * 
     * GOAL: Add as many collectables as necessary to make your level challenging.
     * 
     * Use the collectable.create() method to create collectables for the level.
     * See the type Object, above, for the types of collectables and their point values.
     * 
     * collectable.create() takes these arguments:
     *      
     *      collectable.create(type, x, y, gravity, bounce);
     * 
     *      type: The type of the collectable, use the type Object above.
     *      x: The x coordineate for the collectable.
     *      y: The y coordineate for the collectable.
     *      gravity: OPTIONAL The gravitational pull on the collectable.
     *      bounce: OPTIONAL A factor effecting how much the collectable will bounce off platforms, etc.
     */ 
    collectable.init = function (game) {
        ////////////////////////////////////////////////////////////////////////
        // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////
        
        // example: 
        collectable.create(type.steve, 100, 170, 6, 0.7);
        collectable.create(type.grace, 510, 100, 6, 0.7);
        collectable.create(type.db, 750, 156, 6, 0.7);
        collectable.create(type.kennedi, 360, 0, 6, 0.7);
        collectable.create(type.max, 250, 306, 6, 0.7);
        collectable.create(type.grace, 150, 500, 6, 0.7);
        collectable.create(type.steve, 50, 390, 6, 0.7);
        collectable.create(type.kennedi, 750, 40, 6, 0.7);
        collectable.create(type.max, 430, 530, 6, 0.7)
        // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
    };
})(window);