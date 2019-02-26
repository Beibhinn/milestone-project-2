describe('UnsplashAPI', function() {
    describe('searchForPhotos with valid string',  function() {
        it ("should give valid response. ", function (done) {
            
            searchForPhotos("London", function(response) {
                expect(response.results[0].urls.regular).toContain("http");
                expect(response.results.length).toBe(10);
                done();
            },
            function(error) { done.fail(error) });
        });
    });

    describe('searchForPhotos with term that has no results', function() {
        it('should return no results', function (done) {
            searchForPhotos("lmojbkkgsftfyebhvugvgujuggvg", function(response) {
                expect(response.results.length).toBe(0);
                done();
            },
            function(error) { done.fail(error) });
        });
    });
});

describe('WeatherAPI', function() {
    describe('searchForWeather with valid string', function(){
        it ("should give valid response. ", function (done) {
            
            searchForWeather("London, United Kingdom", function(response) {
                expect(response.location.name).toContain("London");
                expect(response.forecast.forecastday.length).toBe(5);
                expect(response.forecast.forecastday[0].date).toBeDefined();
                expect(response.forecast.forecastday[0].day.condition.icon).toContain('cdn.apixu.com/weather');
                expect(response.forecast.forecastday[0].day.condition.text).toBeDefined();
                expect(response.forecast.forecastday[0].day.maxtemp_c).toBeDefined();
                expect(response.forecast.forecastday[0].day.mintemp_c).toBeDefined();
                done();
            },
            function(error) { done.fail(error) });
        });
    });
    describe('searchForWeather with term that has no results', function() {
        it('should return no results', function (done) {
            searchForWeather("lsigrbhbsyghvrsewes", function(response) {
                done.fail("Expected no place to be found.");
            },
            function(error) {
                expect(error.status).toBe(400);
                expect(error.responseJSON.error.message).toContain('No matching location found.');
                done();
            });
        });
    });
    describe('searchForWeatherHistory with valid date', function(){
        it ("should give valid response. ", function (done) {
            
            searchForWeatherHistory("London", "2019-02-25", function(response) {
                expect(response.forecast.forecastday.length).toBe(1);
                var forecast = response.forecast.forecastday[0];
                expect(forecast.date).toContain("2019-02-25");
                expect(forecast.day.condition.icon).toContain("cdn.apixu.com");
                expect(forecast.day.condition.text).toBe("Partly cloudy");
                expect(response.forecast.forecastday[0].day.mintemp_c).toBeDefined();
                expect(response.forecast.forecastday[0].day.avgtemp_c).toBeDefined();
                expect(response.forecast.forecastday[0].day.maxtemp_c).toBeDefined();
                expect(response.forecast.forecastday[0].day.maxwind_kph).toBeDefined();
                expect(response.forecast.forecastday[0].day.avghumidity).toBeDefined();
                expect(response.forecast.forecastday[0].day.totalprecip_mm).toBeDefined();
                done();
            },
            function(error) { done.fail(error) });
        });
    });
    describe('searchForWeatherHistory with invalid date', function() {
        it('should return no results', function (done) {
            searchForWeatherHistory("London", "foo-bar-baz", function(response) {
                expect(response.forecast.forecastday.length).toBe(0);
                done();
            },
            function(error) { 
                expect(error.status).toBe(400);
                expect(error.statusText).toContain('Bad Request');
                done();
            });
        });
    });
    
});

/* MapsAPI testing would not work without a mock. While I was able to find a third party mock for Google Maps, I could not find one that also included the Google PlacesService.
describe('MapsAPI', function() {
    beforeEach(function() {
        map = spyOn(google.maps, 'Map').and.returnValue({
            getBounds: function() {
                return {lat: 51.512, lng: -0.091};
            }
        });
        console.log(map.getBounds);
        service = spyOn(google.maps.places, 'PlacesService');
    });
    describe('searchForPlaces with valid string', function() {
        it ("should give valid response. ", function () {
            $("#search-bar").val("Cork, Ireland");
            searchForPlaces();
        });
    });
    describe('searchForPlaces with term that has no results', function() {
        it('should return no results', function () {
            $("#search-bar").val("jkbkllnljnkhyjgw");
            searchForPlaces();
        });
    });
    describe('searchNearby with type from dropdown menu', function() {
        it("should provide a list of relevant results", function () {
            $("#search-bar").val("art_gallery");
            searchNearby();
        });
    });
});
*/
describe('CountriesAPI', function() {
    describe('searchForInfo with country from dropdown menu', function() {
        it ("should give valid response. ", function (done) {
            searchForInfo("Ireland", function(response) {
                expect(response[0].name).toBe('Ireland');
                expect(response[0].region).toBe('Europe');
                expect(response[0].subregion).toBe('Northern Europe');
                expect(response[0].timezones[0]).toBe('UTC');
                expect(response[0].capital).toBe('Dublin');
                expect(response[0].population).toBeDefined();
                expect(response[0].languages.length).toBe(2);
                expect(response[0].currencies[0].name).toBe('Euro');
                expect(response[0].flag).toContain('https://restcountries.eu/data');
                done();
            },
            function(error) { done.fail(error) });
        });
    });
});