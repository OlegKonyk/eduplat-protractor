describe('Creating New Event', function(){
  beforeEach(function(){
    browser.get('http://localhost:3030');
    browser.waitForAngular();
  });
    
  it('Should show all ratings', function(){
    var ratings = element.all(by.repeater('playlist in $ctrl.featuredPlaylists'));
    expect(ratings.count()).toBe(6);
  });
});
