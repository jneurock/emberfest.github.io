Emberfest.IndexScheduleRoute = Ember.Route.extend({
    setupController: function(controller, model) {
        this._super(controller, model);
        _gaq.push(['_trackPageview', "/schedule"]);

        document.title = 'Schedule - Ember Fest';
    },

    renderTemplate: function() {
        this._super();
        Ember.run.schedule('afterRender', this, function(){
            document.getElementById('schedule').scrollIntoView();
        });
    }
});