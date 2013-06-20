Emberfest.IndexIndexRoute = Ember.Route.extend({
    setupController: function(controller, model) {
        this._super(controller, model);
        _gaq.push(['_trackPageview', "/"]);

        document.title = 'Welcome to Ember Fest!';
    },


    renderTemplate: function() {
        this._super();
        Ember.run.schedule('afterRender', this, function(){
            document.getElementById('home').scrollIntoView();
        });
    }
});