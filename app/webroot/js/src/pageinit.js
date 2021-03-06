(function() {
    'use strict';
    $(document).on("pageshow", "#geolocationDemo", function() {
        mooredatabase.geolocation_initialize_map();
        mooredatabase.geolocation_initialize();
    });
    $(document).on("pageshow", "#index", function() {
        $.ajax({
            type: 'GET',
            url: '/api/species_by_year',
            dataType: 'json',
            success: function(data) {
                mooredatabase.drawChartSpeciesByYear(data);
            }
        });
    });
    $(document).on("pageshow", "#birdingLocations", function() {
        $.ajax({
            type: 'GET',
            url: '/api/species_by_county',
            dataType: 'json',
            success: function(data) {
                mooredatabase.drawChartSpeciesByCounty(data);
            }
        });
    });
    $(document).on("pageshow", "#speciesByMonth", function() {
        $.ajax({
            type: 'GET',
            url: '/api/species_by_month',
            dataType: 'json',
            success: function(data) {
                mooredatabase.drawChartSpeciesByMonth(data);
            }
        });
    });
    $(document).on("pageshow", "#twoSpeciesByMonth", function() {
        $.ajax({
            type: 'GET',
            url: '/api/two_species_by_month',
            dataType: 'json',
            success: function(data) {
                mooredatabase.drawChartTwoSpeciesByMonth(data);
            }
        });
        $.ajax({
            type: 'GET',
            url: '/api/monthly_averages',
            dataType: 'json',
            success: function(data) {
                mooredatabase.drawChartTempsByMonth(data);
            }
        });
    });
    $(document).on("pageshow", "#speciesDialog", function() {
        var speciesId;
        speciesId = $('#speciesId').val();
        $.ajax({
            type: 'GET',
            url: '/api/sightings_by_month/' + speciesId,
            dataType: 'json',
            success: function(data) {
                mooredatabase.drawChartSpeciesSightingsByMonth(data);
            }
        });
    });
    $(document).on("pageshow", "#speciesByOrder", function() {
        $.ajax({
            type: 'GET',
            url: '/api/species_by_order',
            dataType: 'json',
            success: function(data) {
                mooredatabase.drawChartSpeciesByOrder(data);
            }
        });
    });
})();